import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const handleClick = async () => {
    const res = await fetch("http://localhost:3002/hello");
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <button onClick={handleClick}>リクエスト</button>
    </>
  );
};
export default IndexPage;
