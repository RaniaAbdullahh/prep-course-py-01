import "./App.css";
import UserInfo from "./components/UserInfo";
import MemesList from "./components/MemesList";
import memesData from "./data/data.json"


function App() {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Hello React users</h1>
      <p>this is my first react component</p>
      <UserInfo name ="Rania" food="mansaf" favColor="blue" data={memesData} />
      <MemesList data={memesData}/>
    </div>
  );
}

export default App;
