import { useEffect, useState } from "react";
import "./App.css";
import Coindetail from "./Coindetail";

function App() {
  const url = "https://api.coinstats.app/public/v1/coins?skip=0";
  const [coinsdetails, setCoinsDetails] = useState([]);
  const [searchOption, setSearchOption] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const filteredResult = coinsdetails.filter((coin) => {
    return coin.name.toLowerCase().includes(searchOption.toLowerCase());
  });
  const fetchData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    // console.log(json.coins);
    setCoinsDetails(json.coins);
  };
  return (
    <div className="App">
      <div className="input_component">
        <input
          type="text"
          onChange={(e) => setSearchOption(e.target.value)}
          placeholder="Search your desired crypto"
        />
      </div>

      <div className="box_component">
        {filteredResult.map((coin, idx) => {
          return (
            <Coindetail
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              volume={coin.volume}
              websiteUrl={coin.websiteUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
