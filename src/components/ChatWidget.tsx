
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n-6421994137235212.kloudbeansite.com/webhook/e5900d67-79e6-4e4e-bb9a-1ac95774f84b/chat'
    });
  }, []);

  return null;
};

export default ChatWidget;
