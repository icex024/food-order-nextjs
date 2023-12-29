import { useLogin } from "@/backend-layer/session";
import { NextPage } from "next";
import { useEffect, useState } from "react";
// @ts-ignore
import Stomp from "stompjs";
import SockJs from "sockjs-client";

const SOCKET_URL = "http://localhost:8080/ws";

const Home: NextPage = () => {
  const login = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [stompClient, setStompClient] = useState<any>(null);

  useEffect(() => {
    const socket = new SockJs("http://localhost:8080/ws");
    const client = Stomp.over(socket);
    client.connect({}, () => {
      client.subscribe("/all/messages", (message: { body: string }) => {
        const receivedMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      });
    });
    setStompClient(client);
    return () => {
      client.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (stompClient) {
      stompClient.send(
        "/app/application",
        {},
        JSON.stringify("op prika surima bika")
      );
    }
  };

  return (
    <>
      <div className="mb-3">Login test</div>
      <div>
        <div className="w-1/2 mb-2">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="w-1/2">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="mb-10">{messages}</div>
        <button onClick={() => login(username, password)}>
          Login dugme mock
        </button>
        <button onClick={() => sendMessage()}>Message dugme mock</button>
      </div>
    </>
  );
};

export default Home;
