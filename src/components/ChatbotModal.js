import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 100px;
  width: 300px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial, Helvetica, sans-serif',
    headerBgColor: '#007bff',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#007bff',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const ChatbotModal = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    const handleOpenChatbot = () => setShowChatbot(true);
    const handleCloseChatbot = () => setShowChatbot(false);

    const steps = [
        {
            id: '1',
            message: 'Hi there! What do you want to know?',
            trigger: 'mainOptions'
        },
        {
            id: 'mainOptions',
            options: [
                { value: 'business', label: 'Business Info', trigger: 'businessOptions' },
                { value: 'product', label: 'Product Info', trigger: 'productOptions' },
                { value: 'support', label: 'Technical Support', trigger: 'supportInfo' },
                { value: 'other', label: 'Other', trigger: 'otherInfo' },
            ],
        },
        {
            id: 'businessOptions',
            message: 'What business info would you like?',
            trigger: 'businessSubOptions'
        },
        {
            id: 'businessSubOptions',
            options: [
                { value: 'hours', label: 'Business Hours', trigger: 'businessHours' },
                { value: 'location', label: 'Location', trigger: 'businessLocation' },
                { value: 'contact', label: 'Contact Info', trigger: 'businessContact' },
            ],
        },
        {
            id: 'businessHours',
            message: "We're open 9am to 6pm, Monday to Friday.",
            trigger: 'anotherQuestion'
        },
        {
            id: 'businessLocation',
            message: "We're located at 123 Main Street, Cityville.",
            trigger: 'anotherQuestion'
        },
        {
            id: 'businessContact',
            message: "You can reach us at support@example.com or call (123) 456-7890.",
            trigger: 'anotherQuestion'
        },
        {
            id: 'productOptions',
            message: 'What product info would you like?',
            trigger: 'productSubOptions'
        },
        {
            id: 'productSubOptions',
            options: [
                { value: 'availability', label: 'Product Availability', trigger: 'productAvailability' },
                { value: 'shipping', label: 'Shipping Details', trigger: 'productShipping' },
                { value: 'return', label: 'Return Policy', trigger: 'productReturn' },
            ],
        },
        {
            id: 'productAvailability',
            message: "Please check our website for the latest stock information.",
            trigger: 'anotherQuestion'
        },
        {
            id: 'productShipping',
            message: "Shipping takes 3-5 business days for standard delivery.",
            trigger: 'anotherQuestion'
        },
        {
            id: 'productReturn',
            message: "We offer a 30-day return policy for all products.",
            trigger: 'anotherQuestion'
        },
        {
            id: 'supportInfo',
            message: "For technical support, email us at techsupport@example.com.",
            trigger: 'anotherQuestion'
        },
        {
            id: 'otherInfo',
            message: "I'm here to help with any questions you may have! Please type your question.",
            trigger: 'userQuestion'
        },
        {
            id: 'userQuestion',
            user: true,
            trigger: 'answer'
        },
        {
            id: 'answer',
            message: ({ previousValue }) => {
                const responses = {
                    hello: "Hey! How can I help you?",
                    hi: "Hello! What can I do for you?",
                    "how are you": "I'm doing great, thank you! How about you?",
                    "what's your name": "I'm your friendly assistant!",
                };
                const normalizedInput = previousValue.toLowerCase();
                return responses[normalizedInput] || "I'm sorry, I didn't understand that. Could you try rephrasing?";
            },
            trigger: 'anotherQuestion'
        },
        {
            id: 'anotherQuestion',
            message: "Is there anything else you want to know?",
            trigger: 'mainOptions'
        }
    ];

    return (
        <>
            <button onClick={handleOpenChatbot} style={{ position: 'fixed', bottom: '200px', right: '200px' }}>
                Open Chatbot
            </button>

            <ModalContainer show={showChatbot}>
                <ThemeProvider theme={theme}>
                    <ChatBot key={showChatbot ? "show" : "hide"} steps={steps} />
                </ThemeProvider>

                <button onClick={handleCloseChatbot} style={{ position: 'absolute', top: 10, right: 10 }}>
                    Close
                </button>
            </ModalContainer>
        </>
    );
};

export default ChatbotModal;
