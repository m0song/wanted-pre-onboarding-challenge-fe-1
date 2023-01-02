import React, { useRef, useState } from "react";

export interface LoginProps {}

const MIN_PASSWORD_LENGTH = 8;

export const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isPassedEmail = useRef(false);
  const isPassedPassword = useRef(false);

  const handleSignup = () => {
    console.log("signup");
  };

  const handleLogin = () => {
    console.log(email, password);
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer LH-Gs80OH85n_nigfuulj`,
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      console.log(res);
    });
  };

  const checkEmail = (data: string) => {
    const regExp = /[\w-]+@([\w-]+\.)+[\w-]+/g;
    if (!regExp.test(data)) {
      console.error("@, . 이 없습니다.");
    } else if (!isPassedEmail.current) {
      isPassedEmail.current = true;
    }
    setEmail(data);
  };

  const checkPassword = (data: string) => {
    if (data.length < MIN_PASSWORD_LENGTH) {
      console.error("최소 8자 이상이어야 합니다");
    } else if (!isPassedPassword.current) {
      isPassedPassword.current = true;
    }
    setPassword(data);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        style={{ display: "block" }}
        value={email}
        onChange={(e) => checkEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        style={{ display: "block" }}
        value={password}
        onChange={(e) => checkPassword(e.target.value)}
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
      <button type="submit" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
};
