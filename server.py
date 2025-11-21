#!/usr/bin/env python3
import http.server
import socketserver
import os
import json
from datetime import datetime
from urllib.parse import urlparse, unquote

PORT = 5000
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PRIVATE_DATA_DIR = os.path.join(SCRIPT_DIR, '..', 'private_data')
LEADS_FILE = os.path.join(PRIVATE_DATA_DIR, 'chatbot_leads.json')

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def translate_path(self, path):
        path = super().translate_path(path)
        abs_private = os.path.abspath(PRIVATE_DATA_DIR)
        abs_path = os.path.abspath(path)
        
        if abs_path.startswith(abs_private):
            return '/dev/null/forbidden'
        
        return path

    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        
        parsed_path = unquote(urlparse(self.path).path)
        normalized_path = os.path.normpath(parsed_path)
        
        forbidden_patterns = [
            'private_data',
            'chatbot_leads.json',
            '..',
            '../'
        ]
        
        for pattern in forbidden_patterns:
            if pattern in normalized_path:
                self.send_error(403, "Forbidden")
                return
        
        translated = self.translate_path(self.path)
        if translated is None:
            self.send_error(403, "Forbidden")
            return
        
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        if self.path == '/api/chatbot-lead':
            try:
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                lead_data = json.loads(post_data.decode('utf-8'))
                
                os.makedirs(PRIVATE_DATA_DIR, mode=0o700, exist_ok=True)
                
                leads = []
                if os.path.exists(LEADS_FILE):
                    with open(LEADS_FILE, 'r', encoding='utf-8') as f:
                        leads = json.load(f)
                
                leads.append(lead_data)
                
                with open(LEADS_FILE, 'w', encoding='utf-8') as f:
                    json.dump(leads, f, ensure_ascii=False, indent=2)
                
                os.chmod(LEADS_FILE, 0o600)
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                response = {'status': 'success', 'message': 'Lead saved successfully'}
                self.wfile.write(json.dumps(response).encode('utf-8'))
                
                print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] New lead saved: {lead_data.get('contactName', 'Unknown')}")
                
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                response = {'status': 'error', 'message': str(e)}
                self.wfile.write(json.dumps(response).encode('utf-8'))
                print(f"Error saving lead: {e}")
        else:
            self.send_error(404, "Not Found")
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == "__main__":
    os.chdir(SCRIPT_DIR)
    
    os.makedirs(PRIVATE_DATA_DIR, mode=0o700, exist_ok=True)
    
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler) as httpd:
        print(f"Server running at http://0.0.0.0:{PORT}/")
        print(f"Secure data directory: {os.path.abspath(PRIVATE_DATA_DIR)}")
        print("Serving website...")
        httpd.serve_forever()
