import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {version, binance,bybit,kucoin,mexc,huobi} from 'ccxt';
import fetch from 'node-fetch';
import { AtomSpinner,HollowDotsSpinner } from 'react-epic-spinners'
import { Chart } from "react-google-charts";
import logo from './Assets/logo.png'


import './App.css'
function App() {

  const [TV_KUKOIN,setTV_KUKOIN]=useState('')
  const [SPREAD_KUKOIN,setSPREAD_KUKOIN]=useState(20)
  const [DEPTH_KUKOIN,setDEPTH_KUKOIN]=useState({})
  const [TV_BYBIT,setTV_BYBIT]=useState(20)
  const [SPREAD_BYBIT,setSPREAD_BYBIT]=useState(20)
  const [TV_MEXC,setTV_MEXC]=useState(20)
  const [SPREAD_MEXC,setSPREAD_MEXC]=useState(20)
  const [DEPTH_MEXC,setDEPTH_MEXC]=useState({})
  const [TV_GATE,setTV_GATE]=useState(20)
  const [SPREAD_GATE,setSPREAD_GATE]=useState(20)
  const [DEPTH_GATE,setDEPTH_GATE]=useState({})
  const [TV_ASD,setTV_ASD]=useState(20)
  const [SPREAD_ASD,setSPREAD_ASD]=useState(20)
  const [DEPTH_ASD,setDEPTH_ASD]=useState({})
  const [TV_HTX,setTV_HTX]=useState(20)
  const [SPREAD_HTX,setSPREAD_HTX]=useState(20)
  const [DEPTH_HTX,setDEPTH_HTX]=useState({})


    
  const [TV_DATA,setTV_DATA] = useState([
      ["CEX", "24h Trading Volume", { role: "style" }],
      ["Kucoin", 8.94, "#b87333"], // RGB value
      ["MEXC", 10.49, "silver"], // English color name
      ["HTX", 19.3, "gold"],
      ["GATE", 21.45, "color: #e5e4e2"], // CSS-style declaration
      ["ASCENDEX", 21.45, "green"],
    ]);

    const [SPREAD_DATA,setSPREAD_DATA] = useState([
      ["CEX", "24h Trading Volume", { role: "style" }],
      ["Kucoin", 8.94, "#b87333"], // RGB value
      ["MEXC", 10.49, "silver"], // English color name
      ["HTX", 19.3, "gold"],
      ["GATE", 21.45, "color: #e5e4e2"], // CSS-style declaration
      ["ASCENDEX", 21.45, "green"],
    ]);
    const [DEPTH_DATA,setDEPTH_DATA] = useState([
      [
        "Depth",
        "Kucoin",
        "MEXC",
        "HTX",
        "GATE",
        "ASENDEX"
      ],
      [0.3, 37.8, 80.8, 41.8,0,0],
      [0.5, 30.9, 69.5, 32.4,0,0],
      [1, 25.4, 57, 25.7,0,0],
      
    ]);
    
      const options = {
            chartArea: {
                  backgroundColor: 'white',
                  textStyle: {
                    color: 'white', // set the color to white
                  }
            },
      
    };
    

  useEffect(() => {
    const fetchData = async () => {

     const bybit1=new kucoin()
      

     
      const res_kukoin1 = await axios('https://proxy-j1k6.onrender.com/kucoindata')
      const res_kukoin2= await axios('https://cexdepth.onrender.com/kucoindata')
      const res_mexc1=await axios('https://proxy-j1k6.onrender.com/mexcdata');
      const res_mexc2= await axios('https://cexdepth.onrender.com/mexcdata')
      const res_htx1=await axios('https://proxy-j1k6.onrender.com/htxdata');
      const res_htx2= await axios('https://cexdepth.onrender.com/htxdata')
      const res_asd1=await axios('https://proxy-j1k6.onrender.com/asddata');
      const res_asd2= await axios('https://cexdepth.onrender.com/asddata')
      const res_gate1=await axios('https://proxy-j1k6.onrender.com/gatedata');
      const res_gate2= await axios('https://cexdepth.onrender.com/gatedata')
      console.log(res_kukoin1.data)
    
     console.log(res_kukoin1.data)
     setTV_KUKOIN( res_kukoin1.data.data.volValue)
      setSPREAD_KUKOIN(res_kukoin1.data.data.sell-res_kukoin1.data.data.buy)
      setDEPTH_KUKOIN(res_kukoin2.data)
      setTV_MEXC(res_mexc1.data.volume);
      setSPREAD_MEXC(res_mexc1.data.askPrice-res_mexc1.data.bidPrice)
      setDEPTH_MEXC(res_mexc2.data)
      setTV_HTX(res_htx1.data.tick.vol);
      setSPREAD_HTX(res_kukoin1.data.data.volValue)
      setDEPTH_HTX(res_htx2.data)
      setTV_GATE(res_gate1.data[0].quote_volume);
      setSPREAD_GATE(res_gate1.data[0].lowest_ask-res_gate1.data[0].highest_bid)
      setDEPTH_GATE(res_gate2.data)
      setTV_ASD(res_asd1.data.data.volume);
      setSPREAD_ASD(res_asd1.data.data.ask[0]-res_asd1.data.data.bid[0])
      setDEPTH_ASD(res_asd2.data)
      setTV_DATA([
            ["CEX", "24h Trading Volume", { role: "style" }],
            ["Kucoin",parseFloat(res_kukoin1.data.data.volValue) , "#b87333"], // RGB value
            ["MEXC",parseFloat(res_mexc1.data.volume), "silver"], // English color name
            ["HTX", parseFloat(res_htx1.data.tick.vol), "gold"],
            ["GATE",parseFloat(res_gate1.data[0].quote_volume), "color: #e5e4e2"], // CSS-style declaration
            ["ASCENDEX", parseFloat(res_asd1.data.data.volume), "green"],
          ])
      setSPREAD_DATA([
            ["CEX", "Spread", { role: "style" }],
            ["Kucoin",parseFloat(res_kukoin1.data.data.sell-res_kukoin1.data.data.buy) , "#b87333"], // RGB value
            ["MEXC",parseFloat(res_mexc1.data.askPrice-res_mexc1.data.bidPrice), "silver"], // English color name
            ["GATE",parseFloat(res_gate1.data[0].lowest_ask-res_gate1.data[0].highest_bid), "color: #e5e4e2"], // CSS-style declaration
            ["ASCENDEX", parseFloat(res_asd1.data.data.ask[0]-res_asd1.data.data.bid[0]), "green"],
          ])
      setDEPTH_DATA([
            [
              "Depth",
              "Kucoin",
              "MEXC",
              "HTX",
              "GATE",
              "ASENDEX"
            ],
            [0.3,res_kukoin2.data["0.3%"],res_mexc2.data["0.3%"], res_htx2.data["0.3%"],res_gate2.data["0.3%"],res_asd2.data["0.3%"]],
            [0.5,res_kukoin2.data["0.5%"],res_mexc2.data["0.5%"], res_htx2.data["0.5%"],res_gate2.data["0.5%"],res_asd2.data["0.5%"]],
            [1, res_kukoin2.data["1%"],res_mexc2.data["1%"], res_htx2.data["1%"],res_gate2.data["1%"],res_asd2.data["1%"]],
            
          ])
      // const res_bybit1=await axios('https://proxy-j1k6.onrender.com/exchange?exchangeName=bybit');
      // setTV_BYBIT( res_bybit.data.data.volValue)
      // setSPREAD_BYBIT(res_kukoin1.data.data.volValue)
     
        
    }
    fetchData();
  }, []);

  return (
    <div>

      {SPREAD_MEXC!=20? <center>


<br></br>
<div class="nav"><img src={logo} style={{width:"5em",height:'5em'}}></img>
&nbsp;

<h1>Liquidity Dashboard</h1></div>
<br></br>
<hr></hr>
<br></br>
<h2>Trading Volume</h2>
<br></br>

<Chart chartType="ColumnChart" width="100%" height="400px" data={TV_DATA} options={options} />
<table  style={{ border: '1px solid black' }}>
      <tr>
<th style={{ borderRight: '1px solid black',borderBottom: '1px solid black' }}>CEX</th>
<th style={{borderBottom: '1px solid black'}}>24h Volume</th>
</tr>
<tr>
      <th style={{ borderRight: '1px solid black' }}>ASCENDEX</th>
      <td>{TV_ASD}</td>
      
      </tr>
      
<tr>
      <th style={{ borderRight: '1px solid black' }}> Kucoin</th>
      <td>{TV_KUKOIN}</td>
</tr>
<tr>
      <th style={{ borderRight: '1px solid black' }}>MEXC</th>
      <td>{TV_MEXC}</td>
      
      </tr>
      <tr>
      <th style={{ borderRight: '1px solid black' }}>GATE</th>
      <td>{TV_GATE}</td>
      
      </tr>
      <tr>
      <th style={{ borderRight: '1px solid black' }}>HTX</th>
      <td>{TV_HTX}</td>
      </tr>
     
      
</table>
<br></br>
<hr></hr>


<h2>Spread</h2>

<br></br>
<Chart chartType="ColumnChart" width="100%" height="400px" data={SPREAD_DATA} options={options} />
<table style={{ border: '1px solid black' }}>
      <tr>
      <th style={{ borderRight: '1px solid black',borderBottom: '1px solid black' }}>CEX</th>
<th style={{borderBottom: '1px solid black'}}>Spread</th>
</tr>
<tr>
      <th style={{ borderRight: '1px solid black' }}>ASCENDEX</th>
      <td>{SPREAD_ASD}</td>
      
      </tr>
      
<tr>
      <th style={{ borderRight: '1px solid black' }}>Kucoin</th>
      <td>{SPREAD_KUKOIN}</td>
</tr>
<tr>
      <th style={{ borderRight: '1px solid black' }}>MEXC</th>
      <td>{SPREAD_MEXC}</td>
      
      </tr>
      <tr>
      <th style={{ borderRight: '1px solid black' }}>GATE</th>
      <td>{SPREAD_GATE}</td>
      
      </tr>
     
     
      
</table>
<br></br>

<hr></hr>

<h2>Depth</h2>

<Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={DEPTH_DATA}
      options={options}
    />
    <br></br>

    <table>

      <tr>
      <th>%</th>
      <th>Depth</th>

      </tr>

    </table>

<br></br>
<table style={{ border: '1px solid black' }}>
      <tr>  <th style={{ borderRight: '1px solid black' }}>%</th>
      
      <th style={{ borderRight: '1px solid black' , borderBottom: '1px solid black'}}>Kucoin</th>
      <th style={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>MEXC</th>
      <th style={{ borderRight: '1px solid black', borderBottom: '1px solid black'}}>HTX</th>
      <th style={{ borderRight: '1px solid black' , borderBottom: '1px solid black'}}>ASCENDEX</th>
      <th style={{borderBottom: '1px solid black'}}>GATE</th>
      
      </tr>
    
<tr>
<td style={{ borderRight: '1px solid black' }}> 0.3%</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_KUKOIN["0.3%"]}</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_MEXC["0.3%"]}</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_HTX["0.3%"]}</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_ASD["0.3%"]}</td>
<td>{DEPTH_GATE["0.3%"]}</td>
</tr>
<tr>
<td style={{ borderRight: '1px solid black' }}>0.5%</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_KUKOIN["0.5%"]}</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_MEXC["0.5%"]}</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_HTX["0.5%"]}</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_ASD["0.5%"]}</td>
<td >{DEPTH_GATE["0.5%"]}</td>

</tr>
<tr>
<td style={{ borderRight: '1px solid black' }}>1%</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_KUKOIN["1%"]}</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_MEXC["1%"]}</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_HTX["1%"]}</td>
<td style={{ borderRight: '1px solid black' }}>{DEPTH_ASD["1"]}</td>
<td>{DEPTH_GATE["0.5%"]}</td>

</tr>
</table>

<br></br><br></br><br></br><br></br><br></br>



</center>:<center>
      <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
      <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
      <br></br>   <br></br>
           
    <HollowDotsSpinner size="75" color="red"></HollowDotsSpinner>
    <br></br> <br></br> <br></br> <br></br>
    <b>Loading Liquidity Dashboard</b>
  </center>}
      
    </div>
  )
}

export default App

// 