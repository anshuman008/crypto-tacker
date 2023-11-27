import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card , Typography} from "@mui/material";


const val  = '24hVolume'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c54efde8eamsh5048cee7e468a4ap1e6043jsnab7fc7d5db96',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};
function Coin(){
    const param = useParams();
    const url = `https://coinranking1.p.rapidapi.com/coin/${param.id}?referenceCurrencyUuid=6mUvpzCc2lFo&timePeriod=24h`;

    const [coin, setCoins] = useState({});

    useEffect(()=>{
    fetch(url,options).then((res)=>{res.json().then((responce)=>{
        setCoins(responce.data.coin)
      })});
    },[])

    if(!coin){
        return <div>loading.....</div>
    }
    else{
        return  <div>
        <Details coin = {coin}/>
    </div> 
    }
   
}

function Details(props){
    
 return <Card style={{margin:  15, width: "100%", minHeight: 200,padding:10, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>


<Typography textAlign={"center"} variant="h6" color="initial">  Rank-{props.coin.rank}</Typography>
<img src={props.coin.iconUrl} style={{width:100, height:100}}></img>


{/* {console.log(props.coin,'llll')}
{console.log(props.coin.allTimeHigh,'llll')}
{console.log(props.coin.supply.circulating,'llll')} */}
<Typography textAlign={"center"} variant="h6" color="initial" style={{fontWeight:"bold"}}> {props.coin.name}</Typography>
<Typography textAlign={"center"} variant="body1" color="initial" > {props.coin.symbol}</Typography>
<Typography textAlign={"center"} variant="body1" color="primary" > description:  {props.coin.description}</Typography>
<Typography textAlign={"center"} variant="body1" color="initial"> price: {parseFloat(props.coin.price).toFixed(2)} ₹</Typography>
<Typography textAlign={"center"} variant="body1" color="initial">Market Cap: {props.coin.marketCap} ₹</Typography>
<Typography textAlign={"center"} variant="body1" color="initial">Total Supply: {props.coin.supply?.circulating} {props.coin.symbol}</Typography>
<Typography textAlign={"center"} variant="body1" color="initial">All Time High: {parseFloat(props.coin.allTimeHigh?.price*84)} ₹ ({props.coin.allTimeHigh?.timestamp})</Typography>

<Typography textAlign={"center"} variant="body1" color="initial" style={{color: parseFloat(props.coin.change).toFixed(2)>0?"green":"red" }}>Change (24h): {parseFloat(props.coin.change).toFixed(2)}%</Typography>

{/* <Button variant="contained" style={{ margin: "10px" }}><Link to={"http://localhost:5173/course/"+props.course._id} style={{ textDecoration: "none", color: "white", }}>EDIT</Link></Button> */}

</Card>
}
export default Coin;