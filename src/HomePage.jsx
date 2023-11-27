import { useEffect, useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './App.css';


const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=6mUvpzCc2lFo&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=500&offset=0';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c54efde8eamsh5048cee7e468a4ap1e6043jsnab7fc7d5db96',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

function HomPage() {
    const [coins, setCoins] = useState([]);
    let [a,setSize1] = useState(1);
    let [b,setSize2] = useState(10);
    useEffect(() => {
        fetch(url, options).then((res) => { res.json().then((response) => { setCoins(response.data.coins) }); });
    }, [])

    console.log(coins.length);

     if(b>coins.length ||  a<1){
        return  <div>Loading...</div>
     }

    else return (
        <div className="cardContainer">
            {coins.map(coin => {
               if (coin.rank>=a && coin.rank<=b) {
                    return (
                        <Link key={coin.uuid} to={`/coin/${coin.uuid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <CardCourses coin={coin} />
                        </Link>
                    );
                }

            })}

<div  style={{display:"flex",width:"100vw", justifyContent:"center",alignItems:"center"}}>
        <Button
          onClick={() => {
            if (a > 10) {
              setSize1(a -= 10);
              setSize2(b -= 10);
            }
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            if (b < coins.length) {
              setSize1(a += 10);
              setSize2(b += 10);
            }
          }}
        >
          Next
        </Button>
      </div>
     
        </div>
    );
}

const option = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

function CardCourses(props) {
  return (
    <Card className="coinCard">
      <Typography textAlign={"center"} variant="h6" color="initial">Rank-{props.coin.rank}</Typography>
      <img src={props.coin.iconUrl} alt={props.coin.name} style={{ width: 100, height: 100 }} />
      <Typography textAlign={"center"} variant="h6" color="initial" style={{ fontWeight: "bold" }}>{props.coin.name}</Typography>
      <Typography textAlign={"center"} variant="body1" color="initial">{props.coin.symbol}</Typography>
      <Typography textAlign={"center"} variant="body1" color="initial">{parseFloat(props.coin.price).toFixed(2)} ₹</Typography>
      <Typography textAlign={"center"} variant="body1" color="initial" style={{color: parseFloat(props.coin.change).toFixed(2)>0?"green":"red" }}>Change (24h): {parseFloat(props.coin.change).toFixed(2)}%</Typography>
    </Card>
  );
}



export default HomPage;
