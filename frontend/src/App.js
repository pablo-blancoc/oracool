// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavbar from './navigation/MainNavbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import RulesPage from './pages/RulesPage';
import SimulationPage from './pages/SimulationPage';
import LeaderboardPage from './pages/LeaderboardPage';
import GrandPrixPage from './pages/GrandPrixPage';
import DriversPage from './pages/DriversPage';
import TeamsPage from './pages/TeamsPage';
import HistoricalDataPage from './pages/HistoricalDataPage';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";


function App() {
  const [typing, setTyping] = React.useState(false);

  const [messages, setMessages] = React.useState([
    {
      message: "Hello",
      sender: "ChatGPT"
    }
  ])

  const handleSend = async(message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }
    //new array of messages
    const newMessages = [...messages, newMessage]; //all the old messages + new message

    //update messages state
    setMessages(newMessages);

    //set isTyping to true
    setTyping(true);

    //process message to chatgpt
    await processMessageToChatGPT(newMessages);
  }
  async function processMessageToChatGPT(chatMessages){
    //chatMessages{ sender: "user" or "chat", message: "message"}
    //apiMessages{ role: "user" or "assistant", content: "message"}
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if(messageObject.sender === "ChatGPT"){
        role = "assistant";
      } else{
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

    //role: "user" -> a message from the user, "assistant" -> a response from chatGPT
    //"system" -> a system message from chatGPT "
    const systemMessage = {
      role : "system",
      content: "Explain all concepts like I'm 5 years old" // Speak like a pirate

    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages" : [ 
        systemMessage,
        ...apiMessages,//[message 1, message 2, message 3]
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",{
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content)
      setMessages(
        [...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
        }]);
      setTyping(false);
    });
  }

  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/simulation" element={<SimulationPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/grandprix" element={<GrandPrixPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/historical-data" element={<HistoricalDataPage />} />
      </Routes>
      
      <div className="App">
        <div style={{position: "relative", height:"800px",width:"700px"}}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator = { typing ? <TypingIndicator content="ChatGPT is typing"/>: null }
              >
                
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />
                })}

              </MessageList> 
              <MessageInput placeholder="Type message here" onSend={handleSend}/>
             
            </ChatContainer>
          </MainContainer>  

        </div>
        
      </div>
    </Router>
    
  );
}
