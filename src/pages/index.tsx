import { useLogin } from "@/backend-layer/session";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const SOCKET_URL = "http://localhost:8080/ws";

const Home: NextPage = () => {
  const login = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        <button onClick={() => login(username, password)}>
          Login dugme mock
        </button>
      </div>
    </>
  );
};

export default Home;
