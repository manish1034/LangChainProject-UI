export interface Message {
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
}

export interface ChatResponse {
    response: string;
    sessionId: string;
} 