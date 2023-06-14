import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";


const ChatComponent = ({ messages, typing, handleSend }) => {
  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <MainContainer >
          <ChatContainer style={{ position: "relative",minHeight: "490px" }}>
            <MessageList
              typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              
            </MessageList>
            <MessageInput style={{ fontSize: ".8em" }} placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default ChatComponent;