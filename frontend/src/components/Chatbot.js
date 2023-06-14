import { useState } from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

function ChatComponent() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(message);
  };

  async function processMessageToChatGPT(prompt) {
    await fetch('http://0.0.0.0:5001/chatbot/send_prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        const newMessages = [
          ...messages,
          {
            message: prompt,
            sender: 'user',
          },
          {
            message: data.response,
            sender: 'ChatGPT',
          },
        ];
        setMessages(newMessages);
        setIsTyping(false);
      });
  }
  

  return (
    <div className="App">
      <div style={{ position: 'relative' }}>
        <MainContainer style={{ fontSize: '.8em' }}>
          <ChatContainer style={{ position: 'relative', minHeight: '490px' }}>
          <MessageList
  scrollBehavior="smooth"
  typingIndicator={
    isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null
  }
>
  {messages.map((message, i) => {
    console.log(message);
    return (
      <Message
        key={i}
        model={message}
        position={message.sender === 'user' ? 'right' : 'left'}
      />
    );
  })}
</MessageList>
            <MessageInput
              placeholder="Type message here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default ChatComponent;