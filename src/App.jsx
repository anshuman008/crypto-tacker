import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Header from "./Header"
import HomPage from "./HomePage"
import Coin from "./Coin"
import Serach from "./SearchCoin"

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/search/:id" Component={Serach}/>
      <Route path="/" Component={HomPage}></Route>
      <Route path="/coin/:id" Component={Coin}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
