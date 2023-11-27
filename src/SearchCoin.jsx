
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './App.css';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c54efde8eamsh5048cee7e468a4ap1e6043jsnab7fc7d5db96',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};




function Serach(){
   const value = useParams();
   const url = `https://coinranking1.p.rapidapi.com/search-suggestions?referenceCurrencyUuid=6mUvpzCc2lFo&query=${value.id}`;
   console.log(value.id);

   const [coins,setData] = useState([]);

   useEffect(()=>{
     fetch(url,options).then((res)=>{res.json().then((responce)=>{
        console.log(responce.data.coins);
         setData(responce.data.coins);
     })})
   },[])

    
   console.log(coins,'lllll');
  
    return <div className="cardContainer">
           {coins.map(coin => {
                    return (
                        <Link key={coin.uuid} to={`/coin/${coin.uuid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <CardCourses coin={coin} />
                        </Link>
                    );
            })}
    </div>
 
}



function CardCourses(props) {
    return (
      <Card className="coinCard">
        <Typography textAlign={"center"} variant="h6" color="initial">Rank-{props.coin.rank}</Typography>
        <img src={props.coin.iconUrl} alt={props.coin.name} style={{ width: 100, height: 100 }} />
        <Typography textAlign={"center"} variant="h6" color="initial" style={{ fontWeight: "bold" }}>{props.coin.name}</Typography>
        <Typography textAlign={"center"} variant="body1" color="initial">{props.coin.symbol}</Typography>
        <Typography textAlign={"center"} variant="body1" color="initial">{parseFloat(props.coin.price).toFixed(2)} ₹</Typography>
      </Card>
    );
  }
export default Serach;