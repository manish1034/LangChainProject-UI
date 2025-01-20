import axios from 'axios';
import { ChatResponse } from '../types/chat';

const API_URL = 'http://localhost:8000/api';

export const chatService = {
    sendMessage: async (message: string, sessionId?: string): Promise<ChatResponse> => {
        try {
            const response = await axios.post(`${API_URL}/chat`, {
                message,
                sessionId
            });
            return response.data;
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    }
};