class ThileAIChatbot {
    constructor() {
        this.conversationState = {
            step: 0,
            userRole: null,
            primaryNeed: null,
            businessType: null,
            employeeCount: null,
            futureGoals: null,
            contactName: null,
            contactPhone: null,
            appointmentTime: null,
            customDetails: {}
        };
        
        this.isOpen = false;
        this.isTyping = false;
        this.initializeChatbot();
    }

    initializeChatbot() {
        this.createChatbotWidget();
        this.attachEventListeners();
        
        setTimeout(() => {
            this.addBotMessage('Xin chào! Bạn đang là gì trong tiệm của mình?', [
                { text: 'Chủ tiệm', value: 'owner' },
                { text: 'Quản lý', value: 'manager' },
                { text: 'Nhân viên/thành viên', value: 'employee' },
                { text: 'Khác', value: 'other' }
            ]);
        }, 500);
    }

    createChatbotWidget() {
        const chatbotHTML = `
            <div id="thile-chatbot-widget" class="thile-chatbot-widget">
                <button id="chatbot-toggle" class="chatbot-toggle" aria-label="Mở chatbot">
                    <svg class="chat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <svg class="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span class="notification-badge">1</span>
                </button>

                <div id="chatbot-container" class="chatbot-container">
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <div class="chatbot-avatar">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="chatbot-title">Thile AI Assistant</h3>
                                <p class="chatbot-status">
                                    <span class="status-dot"></span>
                                    Đang online
                                </p>
                            </div>
                        </div>
                        <button id="chatbot-close" class="chatbot-close-btn" aria-label="Đóng chatbot">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div id="chatbot-messages" class="chatbot-messages">
                        <div class="chat-welcome">
                            <div class="welcome-icon">👋</div>
                            <h4>Chào mừng đến với Thile AI!</h4>
                            <p>Chúng tôi sẽ giúp bạn tìm giải pháp AI tự động hóa phù hợp cho doanh nghiệp của bạn.</p>
                        </div>
                    </div>

                    <div id="chatbot-input-container" class="chatbot-input-container">
                        <textarea 
                            id="chatbot-input" 
                            class="chatbot-input" 
                            placeholder="Nhập tin nhắn của bạn..."
                            rows="1"
                        ></textarea>
                        <button id="chatbot-send" class="chatbot-send-btn" aria-label="Gửi tin nhắn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const send = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');

        toggle.addEventListener('click', () => this.toggleChatbot());
        close.addEventListener('click', () => this.toggleChatbot());
        send.addEventListener('click', () => this.handleUserInput());
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleUserInput();
            }
        });

        input.addEventListener('input', (e) => {
            e.target.style.height = 'auto';
            e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
        });
    }

    toggleChatbot() {
        this.isOpen = !this.isOpen;
        const container = document.getElementById('chatbot-container');
        const toggle = document.getElementById('chatbot-toggle');
        const badge = toggle.querySelector('.notification-badge');

        if (this.isOpen) {
            container.classList.add('active');
            toggle.classList.add('active');
            if (badge) badge.style.display = 'none';
            document.getElementById('chatbot-input').focus();
        } else {
            container.classList.remove('active');
            toggle.classList.remove('active');
        }
    }

    addBotMessage(message, buttons = null) {
        const messagesContainer = document.getElementById('chatbot-messages');
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message bot-message';
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(10px)';
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
        `;
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = message;
        
        content.appendChild(bubble);
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        messagesContainer.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 50);

        if (buttons) {
            const buttonsContainer = document.createElement('div');
            buttonsContainer.className = 'chat-buttons';
            
            buttons.forEach(button => {
                const btn = document.createElement('button');
                btn.className = 'chat-button';
                btn.textContent = button.text;
                btn.onclick = () => this.handleButtonClick(button.value, button.text);
                buttonsContainer.appendChild(btn);
            });
            
            content.appendChild(buttonsContainer);
        }

        this.scrollToBottom();
    }

    addUserMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message user-message';
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(10px)';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = message;
        
        content.appendChild(bubble);
        messageDiv.appendChild(content);
        messagesContainer.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 50);

        this.scrollToBottom();
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot-message typing-indicator-message';
        typingDiv.id = 'typing-indicator';
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
        `;
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble typing-indicator';
        bubble.innerHTML = '<span></span><span></span><span></span>';
        
        content.appendChild(bubble);
        typingDiv.appendChild(avatar);
        typingDiv.appendChild(content);
        messagesContainer.appendChild(typingDiv);
        
        this.scrollToBottom();
    }

    removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    handleButtonClick(value, text) {
        const buttons = document.querySelectorAll('.chat-buttons');
        buttons.forEach(container => {
            container.querySelectorAll('.chat-button').forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.6';
                btn.style.cursor = 'not-allowed';
            });
        });

        this.addUserMessage(text);
        this.processUserSelection(value, text);
    }

    handleUserInput() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message || this.isTyping) return;
        
        this.addUserMessage(message);
        input.value = '';
        input.style.height = 'auto';
        
        this.processUserMessage(message);
    }

    processUserSelection(value, text) {
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.removeTypingIndicator();
            
            if (this.conversationState.step === 0) {
                this.conversationState.userRole = value;
                this.conversationState.step = 1;
                
                if (value === 'other') {
                    this.addBotMessage('Bạn có thể cho biết rõ hơn vai trò của mình không?');
                    this.hideButtons();
                } else {
                    this.askPrimaryNeed();
                }
            } else if (this.conversationState.step === 1) {
                this.conversationState.primaryNeed = value;
                this.conversationState.step = 2;
                this.provideSolutionOverview(value);
            }
        }, 800);
    }

    processUserMessage(message) {
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.removeTypingIndicator();
            
            if (this.conversationState.step === 1 && this.conversationState.userRole === 'other') {
                this.conversationState.customDetails.roleDescription = message;
                this.askPrimaryNeed();
            } else if (this.conversationState.step === 2) {
                this.handleDetailedQuestions(message);
            } else if (this.conversationState.step === 3) {
                this.handleBusinessInfo(message);
            } else if (this.conversationState.step === 4) {
                this.handleContactInfo(message);
            } else if (this.conversationState.step === 5) {
                this.handleAppointmentBooking(message);
            } else {
                this.addBotMessage('Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể nói rõ hơn được không?');
            }
        }, 800);
    }

    hideButtons() {
        const inputContainer = document.getElementById('chatbot-input-container');
        inputContainer.style.display = 'flex';
    }

    askPrimaryNeed() {
        this.addBotMessage('Trong thời gian tới, bạn mong muốn giải pháp gì cho tiệm?', [
            { text: 'Tăng doanh thu', value: 'revenue' },
            { text: 'Thu hút thêm khách', value: 'customers' },
            { text: 'Chăm sóc khách/đặt lịch tự động', value: 'automation' },
            { text: 'Quản lý tài chính/kho', value: 'management' },
            { text: 'Khác', value: 'other' }
        ]);
    }

    provideSolutionOverview(need) {
        let solution = '';
        
        switch(need) {
            case 'revenue':
                solution = '💰 **Tăng doanh thu với AI Marketing**\n\nChúng tôi có thể giúp bạn:\n• Tạo nội dung marketing tự động (email, mạng xã hội)\n• Quản lý mối quan hệ khách hàng (CRM AI)\n• Tự động hoá quảng cáo và báo cáo doanh thu\n• Giải phóng thời gian cho bạn tập trung vào chiến lược\n\nGiải pháp này giúp tiệm tăng doanh thu 3x trong 6 tháng!';
                break;
            case 'customers':
                solution = '🎯 **Thu hút khách hàng với AI**\n\nChúng tôi sẽ giúp bạn:\n• Tối ưu SEO và quảng cáo thông minh\n• Chương trình giới thiệu khách hàng tự động\n• Chatbot thu thập dữ liệu khách tiềm năng 24/7\n• Phân tích hành vi khách hàng\n\nTiết kiệm 70% thời gian marketing!';
                break;
            case 'automation':
                solution = '🤖 **Chăm sóc khách hàng & Đặt lịch tự động**\n\nGiải pháp bao gồm:\n• AI trả lời tin nhắn WhatsApp & Instagram 24/7\n• Xử lý yêu cầu đặt lịch tự động\n• Trả lời câu hỏi thường gặp\n• Nhắc lịch hẹn tự động\n\nKhách hàng luôn được phục vụ, ngay cả khi bạn nghỉ!';
                break;
            case 'management':
                solution = '📊 **Quản lý tài chính & kho hàng thông minh**\n\nChúng tôi cung cấp:\n• AI ghi nhận thu chi tự động\n• Phân loại hoá đơn thông minh\n• Dự báo chi phí và tồn kho\n• Báo cáo tài chính tức thì\n\nGiảm 80% thời gian làm sổ sách!';
                break;
            case 'other':
                solution = 'Cảm ơn bạn đã quan tâm! Bạn có thể mô tả chi tiết nhu cầu của mình không? Chúng tôi sẽ tìm giải pháp phù hợp nhất cho tiệm của bạn.';
                this.conversationState.step = 2;
                this.hideButtons();
                return;
        }
        
        this.addBotMessage(solution);
        
        setTimeout(() => {
            this.conversationState.step = 2;
            this.askDetailedQuestions(need);
        }, 1500);
    }

    askDetailedQuestions(need) {
        let question = '';
        
        switch(need) {
            case 'revenue':
                question = 'Bạn đang sử dụng kênh marketing nào? Và bạn đặt mục tiêu tăng doanh thu bao nhiêu % trong 3-6 tháng tới?';
                break;
            case 'customers':
                question = 'Bạn đang làm gì để thu hút khách? Mục tiêu tăng số khách mới mỗi tuần là bao nhiêu?';
                break;
            case 'automation':
                question = 'Bạn nhận bao nhiêu yêu cầu đặt lịch mỗi tuần và gặp khó khăn gì trong việc quản lý lịch hẹn?';
                break;
            case 'management':
                question = 'Hiện bạn dùng công cụ gì để theo dõi thu chi, tồn kho? Những vướng mắc cụ thể là gì?';
                break;
        }
        
        this.addBotMessage(question);
        this.hideButtons();
    }

    handleDetailedQuestions(message) {
        this.conversationState.customDetails.detailedAnswer = message;
        this.conversationState.step = 3;
        
        this.addBotMessage('Cảm ơn bạn đã chia sẻ! Để tư vấn chính xác hơn, cho mình hỏi thêm:');
        
        setTimeout(() => {
            this.addBotMessage('Tiệm của bạn thuộc lĩnh vực nào? (ví dụ: nails, tóc, spa, nhà hàng, bán lẻ, dịch vụ...)');
        }, 800);
    }

    handleBusinessInfo(message) {
        if (!this.conversationState.businessType) {
            this.conversationState.businessType = message;
            this.addBotMessage('Số lượng nhân viên hiện tại là bao nhiêu?');
        } else if (!this.conversationState.employeeCount) {
            this.conversationState.employeeCount = message;
            this.addBotMessage('Bạn mong muốn tiệm sẽ như thế nào trong 6-12 tháng tới?');
        } else if (!this.conversationState.futureGoals) {
            this.conversationState.futureGoals = message;
            this.conversationState.step = 4;
            
            setTimeout(() => {
                this.addBotMessage('Tuyệt vời! Chúng tôi hiểu rõ nhu cầu của bạn rồi. 🎯');
                setTimeout(() => {
                    this.addBotMessage('Bạn vui lòng cho mình xin tên và số điện thoại để chúng tôi liên hệ tư vấn thêm nhé? (Ví dụ: Nguyễn Văn A, 0123456789)');
                    this.addBotMessage('🔒 Thông tin của bạn được bảo mật và chỉ dùng cho mục đích tư vấn.');
                }, 1000);
            }, 500);
        }
    }

    handleContactInfo(message) {
        if (!this.conversationState.contactName) {
            const nameParts = message.split(',');
            if (nameParts.length >= 2) {
                this.conversationState.contactName = nameParts[0].trim();
                this.conversationState.contactPhone = nameParts[1].trim();
                this.conversationState.step = 5;
                
                this.addBotMessage(`Cảm ơn bạn, ${this.conversationState.contactName}! 🙏`);
                
                setTimeout(() => {
                    this.askAppointmentTime();
                }, 1000);
            } else {
                this.addBotMessage('Vui lòng nhập theo định dạng: Tên, Số điện thoại (ví dụ: Nguyễn Văn A, 0123456789)');
            }
        }
    }

    askAppointmentTime() {
        const today = new Date();
        const options = [];
        
        for (let i = 1; i <= 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const dayName = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'][date.getDay()];
            const dateStr = `${date.getMonth() + 1}/${date.getDate()}`;
            
            if (date.getDay() >= 1 && date.getDay() <= 5) {
                options.push({ text: `${dayName} ${dateStr} - 9-11AM`, value: `${dayName} ${dateStr} 9-11AM` });
                options.push({ text: `${dayName} ${dateStr} - 1-4PM`, value: `${dayName} ${dateStr} 1-4PM` });
            } else if (date.getDay() === 6) {
                options.push({ text: `${dayName} ${dateStr} - 10-12AM`, value: `${dayName} ${dateStr} 10-12AM` });
            }
        }
        
        this.addBotMessage('Bạn muốn đặt cuộc gọi vào thời gian nào? Chọn khung giờ phù hợp nhé:', options.slice(0, 6));
    }

    handleAppointmentBooking(value) {
        this.conversationState.appointmentTime = value;
        
        this.submitLeadData();
        
        this.addBotMessage(`✅ Hoàn tất! Chúng tôi đã đặt lịch tư vấn cho bạn vào **${value}** (múi giờ Eastern).`);
        
        setTimeout(() => {
            this.addBotMessage('📧 Bạn sẽ nhận được email xác nhận trong vài phút. Chúng tôi rất mong được trao đổi với bạn!');
            setTimeout(() => {
                this.addBotMessage('Nếu bạn cần thay đổi lịch hẹn, vui lòng gọi (270) 330-2844 hoặc email info@thile.ai. Hẹn gặp lại! 👋');
            }, 1500);
        }, 1000);
    }

    async submitLeadData() {
        const leadData = {
            role: this.conversationState.userRole,
            primaryNeed: this.conversationState.primaryNeed,
            businessType: this.conversationState.businessType,
            employeeCount: this.conversationState.employeeCount,
            futureGoals: this.conversationState.futureGoals,
            contactName: this.conversationState.contactName,
            contactPhone: this.conversationState.contactPhone,
            appointmentTime: this.conversationState.appointmentTime,
            customDetails: this.conversationState.customDetails,
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch('/api/chatbot-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(leadData)
            });

            if (response.ok) {
                console.log('Lead data submitted successfully');
            } else {
                console.error('Failed to submit lead data');
            }
        } catch (error) {
            console.error('Error submitting lead data:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.thileChatbot = new ThileAIChatbot();
});