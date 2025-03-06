import { NextPage } from "next";
import { useState } from "react";

const IndexPage: NextPage = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [userName, setUserName] = useState("");

  const handleClick = async () => {
    const res = await fetch("http://localhost:3002/test");
    const data = await res.json();
    setPokemonName(data.name);
  };

  const handleClick2 = async () => {
    const res = await fetch("http://localhost:3002/user");
    const data = await res.json();
    setUserName(data.name);
  };

  return (
    <>
      <button onClick={handleClick}>APIリクエストテスト</button>
      <p>{pokemonName}</p>
      <button onClick={handleClick2}>リクエスト</button>
      <p>{userName}</p>
    </>
  );
};
export default IndexPage;
