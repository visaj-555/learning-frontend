import Primarybtn from "./Primarybtn";

const MainInput = ({ setName }) => {
  return (
    <div>
      <br />
      <MainInput setName = {setName} />
      <Primarybtn fullName="go" />
      <Primarybtn fullName="submit" />
      <input
        style={{ padding: 10 }}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default MainInput;
