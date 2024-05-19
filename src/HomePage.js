import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {version, binance,bybit,kucoin,mexc,huobi} from 'ccxt';
import fetch from 'node-fetch';
import { AtomSpinner,HollowDotsSpinner } from 'react-epic-spinners'
import { Chart } from "react-google-charts";
import logo from './Assets/logo.png'
import {Dropdown,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
function HomePage({token}) {


  const [TV_KUKOIN_ROUTE,setTV_KUKOIN_ROUTE]=useState(0)
  const [SPREAD_KUKOIN_ROUTE,setSPREAD_KUKOIN_ROUTE]=useState(0)
  const [DEPTH_KUKOIN_ROUTE,setDEPTH_KUKOIN_ROUTE]=useState({})
  const [TV_KUKOIN_DFYN,setTV_KUKOIN_DFYN]=useState('')
  const [SPREAD_KUKOIN_DFYN,setSPREAD_KUKOIN_DFYN]=useState(0)
  const [DEPTH_KUKOIN_DFYN,setDEPTH_KUKOIN_DFYN]=useState({})
  const [TV_BYBIT,setTV_BYBIT]=useState(20)
  const [SPREAD_BYBIT,setSPREAD_BYBIT]=useState(0)
  const [TV_MEXC_ROUTE,setTV_MEXC_ROUTE]=useState(0)
  const [SPREAD_MEXC_ROUTE,setSPREAD_MEXC_ROUTE]=useState(0)
  const [DEPTH_MEXC_ROUTE,setDEPTH_MEXC_ROUTE]=useState({})
  const [TV_MEXC_DFYN,setTV_MEXC_DFYN]=useState(0)
  const [SPREAD_MEXC_DFYN,setSPREAD_MEXC_DFYN]=useState(0)
  const [DEPTH_MEXC_DFYN,setDEPTH_MEXC_DFYN]=useState({})
  const [TV_GATE_ROUTE,setTV_GATE_ROUTE]=useState(0)
  const [SPREAD_GATE_ROUTE,setSPREAD_GATE_ROUTE]=useState(0)
  const [DEPTH_GATE_ROUTE,setDEPTH_GATE_ROUTE]=useState({})
  const [TV_GATE_DFYN,setTV_GATE_DFYN]=useState(0)
  const [SPREAD_GATE_DFYN,setSPREAD_GATE_DFYN]=useState(0)
  const [DEPTH_GATE_DFYN,setDEPTH_GATE_DFYN]=useState({})
  const [TV_ASD,setTV_ASD]=useState(0)
  const [SPREAD_ASD,setSPREAD_ASD]=useState(0)
  const [DEPTH_ASD,setDEPTH_ASD]=useState({})
  const [TV_HTX,setTV_HTX]=useState(0)
  const [SPREAD_HTX,setSPREAD_HTX]=useState(0)
  const [DEPTH_HTX,setDEPTH_HTX]=useState({})


    
  const [TV_DATA_ROUTE,setTV_DATA_ROUTE] = useState([
      ["CEX", "24h Trading Volume", { role: "style" }],
      ["Kucoin", 8.94, "#b87333"], // RGB value
      ["MEXC", 10.49, "silver"], // English color name
      ["HTX", 19.3, "gold"],
      ["GATE", 21.45, "color: #e5e4e2"], // CSS-style declaration
      ["ASCENDEX", 21.45, "green"],
    ]);

    const [SPREAD_DATA_ROUTE,setSPREAD_DATA_ROUTE] = useState([
      ["CEX", "24h Trading Volume", { role: "style" }],
      ["Kucoin", 8.94, "#b87333"], // RGB value
      ["MEXC", 10.49, "silver"], // English color name
      ["HTX", 19.3, "gold"],
      ["GATE", 21.45, "color: #e5e4e2"], // CSS-style declaration
      ["ASCENDEX", 21.45, "green"],
    ]);
    const [DEPTH_DATA_ROUTE,setDEPTH_DATA_ROUTE] = useState([
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

    const [TV_DATA_DFYN,setTV_DATA_DFYN] = useState([
      ["CEX", "24h Trading Volume", { role: "style" }],
      ["Kucoin", 8.94, "#b87333"], // RGB value
      ["MEXC", 10.49, "silver"], // English color name
    
      ["GATE", 21.45, "color: #e5e4e2"] // CSS-style declaration
     
    ]);

    const [SPREAD_DATA_DFYN,setSPREAD_DATA_DFYN] = useState([
      ["CEX", "24h Trading Volume", { role: "style" }],
      ["Kucoin", 8.94, "#b87333"], // RGB value
      ["MEXC", 10.49, "silver"], // English color name
      ["GATE", 21.45, "color: #e5e4e2"] // CSS-style declaration
  
    ]);
    const [DEPTH_DATA_DFYN,setDEPTH_DATA_DFYN] = useState([
      [
        "Depth",
        "Kucoin",
        "MEXC",
       
        "GATE"
       
      ],
      [0.3, 37.8, 80.8, 41.8],
      [0.5, 30.9, 69.5, 32.4],
      [1, 25.4, 57, 25.7,0],
      
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
      

     
      const res_kukoin1 = await axios('https://proxy-j1k6.onrender.com/kucoindata?token=route')
      const res_kukoin2= await axios('https://proxy-j1k6.onrender.com/kucoindepth?token=route')
      const res_kukoin3 = await axios('https://proxy-j1k6.onrender.com/kucoindata?token=dfyn')
      const res_kukoin4= await axios('https://proxy-j1k6.onrender.com/kucoindepth?token=dfyn')
      const res_mexc1=await axios('https://proxy-j1k6.onrender.com/mexcdata?token=route');
      const res_mexc2= await axios('https://proxy-j1k6.onrender.com/mexcdepth?token=route')
      const res_mexc3=await axios('https://proxy-j1k6.onrender.com/mexcdata?token=dfyn');
      const res_mexc4= await axios('https://proxy-j1k6.onrender.com/mexcdepth?token=dfyn')
      const res_htx1=await axios('https://proxy-j1k6.onrender.com/htxdata');
      const res_htx2= await axios('https://proxy-j1k6.onrender.com/htxdepth')
      const res_asd1=await axios('https://proxy-j1k6.onrender.com/asddata');
      const res_asd2= await axios('https://proxy-j1k6.onrender.com/asddepth')
      const res_gate1=await axios('https://proxy-j1k6.onrender.com/gatedata?token=route');
      const res_gate2= await axios('https://proxy-j1k6.onrender.com/gatedepth?token=route')
      const res_gate3=await axios('https://proxy-j1k6.onrender.com/gatedata?token=dfyn');
      const res_gate4= await axios('https://proxy-j1k6.onrender.com/gatedepth?token=dfyn')
      console.log(res_kukoin2.data)
    
     console.log(res_kukoin1.data)
     setTV_KUKOIN_ROUTE( res_kukoin1.data.data.volValue)
      setSPREAD_KUKOIN_ROUTE(res_kukoin1.data.data.sell-res_kukoin1.data.data.buy)
      setDEPTH_KUKOIN_ROUTE(res_kukoin2.data)
      setTV_MEXC_ROUTE(res_mexc1.data.volume);
      setSPREAD_MEXC_ROUTE(res_mexc1.data.askPrice-res_mexc1.data.bidPrice)
      setDEPTH_MEXC_ROUTE(res_mexc2.data)
      setTV_HTX(res_htx1.data.tick.vol);
      setSPREAD_HTX(res_kukoin1.data.data.volValue)
      setDEPTH_HTX(res_htx2.data)
      setTV_GATE_ROUTE(res_gate1.data[0].quote_volume);
      setSPREAD_GATE_ROUTE(res_gate1.data[0].lowest_ask-res_gate1.data[0].highest_bid)
      setDEPTH_GATE_ROUTE(res_gate2.data)
      setTV_ASD(res_asd1.data.data.volume);
      setSPREAD_ASD(res_asd1.data.data.ask[0]-res_asd1.data.data.bid[0])
      setDEPTH_ASD(res_asd2.data)

      setTV_DATA_ROUTE([
            ["CEX", "24h Trading Volume", { role: "style" }],
            ["Kucoin",parseFloat(res_kukoin1.data.data.volValue) , "#b87333"], // RGB value
            ["MEXC",parseFloat(res_mexc1.data.volume), "silver"], // English color name
            ["HTX", parseFloat(res_htx1.data.tick.vol), "gold"],
            ["GATE",parseFloat(res_gate1.data[0].quote_volume), "color: #e5e4e2"], // CSS-style declaration
            ["ASCENDEX", parseFloat(res_asd1.data.data.volume), "green"],
          ])
      setSPREAD_DATA_ROUTE([
            ["CEX", "Spread", { role: "style" }],
            ["Kucoin",parseFloat(res_kukoin1.data.data.sell-res_kukoin1.data.data.buy) , "#b87333"], // RGB value
            ["MEXC",parseFloat(res_mexc1.data.askPrice-res_mexc1.data.bidPrice), "silver"], // English color name
            ["GATE",parseFloat(res_gate1.data[0].lowest_ask-res_gate1.data[0].highest_bid), "color: #e5e4e2"], // CSS-style declaration
            ["ASCENDEX", parseFloat(res_asd1.data.data.ask[0]-res_asd1.data.data.bid[0]), "green"],
          ])
      setDEPTH_DATA_ROUTE([
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

          setTV_DATA_DFYN([
            ["CEX", "24h Trading Volume", { role: "style" }],
            ["Kucoin",parseFloat(res_kukoin3.data.data.volValue) , "#b87333"], // RGB value
            ["MEXC",parseFloat(res_mexc3.data.volume), "silver"], // English color name
            ["GATE",parseFloat(res_gate3.data[0].quote_volume), "color: #e5e4e2"] // CSS-style declaration
            
          ])
      setSPREAD_DATA_DFYN([
            ["CEX", "Spread", { role: "style" }],
            ["Kucoin",parseFloat(res_kukoin3.data.data.sell-res_kukoin3.data.data.buy) , "#b87333"], // RGB value
            ["MEXC",parseFloat(res_mexc3.data.askPrice-res_mexc3.data.bidPrice), "silver"], // English color name
            ["GATE",parseFloat(res_gate3.data[0].lowest_ask-res_gate3.data[0].highest_bid), "color: #e5e4e2"] // CSS-style declaration
            
          ])
      setDEPTH_DATA_DFYN([
            [
              "Depth",
              "Kucoin",
              "MEXC",
              "GATE"
              
            ],
            [0.3,res_kukoin4.data["0.3%"],res_mexc2.data["0.3%"],res_gate2.data["0.3%"]],
            [0.5,res_kukoin4.data["0.5%"],res_mexc4.data["0.5%"],res_gate4.data["0.5%"]],
            [1, res_kukoin4.data["1%"],res_mexc4.data["1%"],res_gate4.data["1%"]]
            
          ])

          setTV_KUKOIN_DFYN( res_kukoin3.data.data.volValue)
          setSPREAD_KUKOIN_DFYN(res_kukoin3.data.data.sell-res_kukoin3.data.data.buy)
          setDEPTH_KUKOIN_DFYN(res_kukoin4.data)
          setTV_MEXC_DFYN(res_mexc3.data.volume);
          setSPREAD_MEXC_DFYN(res_mexc3.data.askPrice-res_mexc3.data.bidPrice)
          setDEPTH_MEXC_DFYN(res_mexc4.data)
          setTV_GATE_DFYN(res_gate3.data[0].quote_volume);
          setSPREAD_GATE_DFYN(res_gate3.data[0].lowest_ask-res_gate3.data[0].highest_bid)
          setDEPTH_GATE_DFYN(res_gate4.data)
      // const res_bybit1=await axios('https://proxy-j1k6.onrender.com/exchange?exchangeName=bybit');
      // setTV_BYBIT( res_bybit.data.data.volValue)
      // setSPREAD_BYBIT(res_kukoin1.data.data.volValue)
     
        
    }
    fetchData();
  }, []);

  return (
    <div>
        {TV_KUKOIN_ROUTE!=0? <center>
    



    


    {token=="route"?<div>
      
                <h2>Trading Volume</h2>
        <br></br>

        <Chart chartType="ColumnChart" width="100%" height="400px" data={TV_DATA_ROUTE} options={options} />
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
              <td>{TV_KUKOIN_ROUTE}</td>
        </tr>
        <tr>
              <th style={{ borderRight: '1px solid black' }}>MEXC</th>
              <td>{TV_MEXC_ROUTE}</td>
              
              </tr>
              <tr>
              <th style={{ borderRight: '1px solid black' }}>GATE</th>
              <td>{TV_GATE_ROUTE}</td>
              
              </tr>
              <tr>
              <th style={{ borderRight: '1px solid black' }}>HTX</th>
              <td>{TV_HTX}</td>
              </tr>
            
              
        </table>
    
        <br></br>
     
        <br></br>

        <hr></hr>

      

        <h2>Spread</h2>

        <br></br>
        <Chart chartType="ColumnChart" width="100%" height="400px" data={SPREAD_DATA_ROUTE} options={options} />
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
              <td>{SPREAD_KUKOIN_ROUTE}</td>
        </tr>
        <tr>
              <th style={{ borderRight: '1px solid black' }}>MEXC</th>
              <td>{SPREAD_MEXC_ROUTE}</td>
              
              </tr>
              <tr>
              <th style={{ borderRight: '1px solid black' }}>GATE</th>
              <td>{SPREAD_GATE_ROUTE}</td>
              
              </tr>
            
            
              
        </table>
        <br></br>

        <hr></hr>

        <h2>Depth</h2>

        <Chart
              chartType="Line"
              width="100%"
              height="400px"
              data={DEPTH_DATA_ROUTE}
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
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_KUKOIN_ROUTE["0.3%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_MEXC_ROUTE["0.3%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_HTX["0.3%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_ASD["0.3%"]}</td>
        <td>{DEPTH_GATE_ROUTE["0.3%"]}</td>
        </tr>
        <tr>
        <td style={{ borderRight: '1px solid black' }}>0.5%</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_KUKOIN_ROUTE["0.5%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_MEXC_ROUTE["0.5%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_HTX["0.5%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_ASD["0.5%"]}</td>
        <td >{DEPTH_GATE_ROUTE["0.5%"]}</td>

        </tr>
        <tr>
        <td style={{ borderRight: '1px solid black' }}>1%</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_KUKOIN_ROUTE["1%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_MEXC_ROUTE["1%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_HTX["1%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_ASD["1"]}</td>
        <td>{DEPTH_GATE_ROUTE["0.5%"]}</td>

        </tr>
        </table>

        <br></br><br></br><br></br><br></br><br></br>

    </div>:<div>
      
    <h2>Trading Volume</h2>
        <br></br>

        <Chart chartType="ColumnChart" width="100%" height="400px" data={TV_DATA_DFYN} options={options} />
        <table  style={{ border: '1px solid black' }}>
              <tr>
        <th style={{ borderRight: '1px solid black',borderBottom: '1px solid black' }}>CEX</th>
        <th style={{borderBottom: '1px solid black'}}>24h Volume</th>
        </tr>
       
              
        <tr>
              <th style={{ borderRight: '1px solid black' }}> Kucoin</th>
              <td>{TV_KUKOIN_DFYN}</td>
        </tr>
        <tr>
              <th style={{ borderRight: '1px solid black' }}>MEXC</th>
              <td>{TV_MEXC_DFYN}</td>
              
              </tr>
              <tr>
              <th style={{ borderRight: '1px solid black' }}>GATE</th>
              <td>{TV_GATE_DFYN}</td>
              
              </tr>
             
            
              
        </table>
        <br></br>
        <hr></hr>


        <h2>Spread</h2>

        <br></br>
        <Chart chartType="ColumnChart" width="100%" height="400px" data={SPREAD_DATA_DFYN} options={options} />
        <table style={{ border: '1px solid black' }}>
              <tr>
              <th style={{ borderRight: '1px solid black',borderBottom: '1px solid black' }}>CEX</th>
        <th style={{borderBottom: '1px solid black'}}>Spread</th>
        </tr>
       
              
        <tr>
              <th style={{ borderRight: '1px solid black' }}>Kucoin</th>
              <td>{SPREAD_KUKOIN_DFYN}</td>
        </tr>
        <tr>
              <th style={{ borderRight: '1px solid black' }}>MEXC</th>
              <td>{SPREAD_MEXC_DFYN}</td>
              
              </tr>
              <tr>
              <th style={{ borderRight: '1px solid black' }}>GATE</th>
              <td>{SPREAD_GATE_DFYN}</td>
              
              </tr>
            
            
              
        </table>
        <br></br>

        <hr></hr>

        <h2>Depth</h2>

        <Chart
              chartType="Line"
              width="100%"
              height="400px"
              data={DEPTH_DATA_DFYN}
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
              <th style={{borderBottom: '1px solid black'}}>GATE</th>
              
              </tr>
            
        <tr>
        <td style={{ borderRight: '1px solid black' }}> 0.3%</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_KUKOIN_DFYN["0.3%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_MEXC_DFYN["0.3%"]}</td>
        <td>{DEPTH_GATE_DFYN["0.3%"]}</td>
        </tr>
        <tr>
        <td style={{ borderRight: '1px solid black' }}>0.5%</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_KUKOIN_DFYN["0.5%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_MEXC_DFYN["0.5%"]}</td>
        <td >{DEPTH_GATE_DFYN["0.5%"]}</td>

        </tr>
        <tr>
        <td style={{ borderRight: '1px solid black' }}>1%</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_KUKOIN_DFYN["1%"]}</td>
        <td style={{ borderRight: '1px solid black' }}>{DEPTH_MEXC_DFYN["1%"]}</td>
        <td>{DEPTH_GATE_DFYN["0.5%"]}</td>

        </tr>
        </table>

        <br></br><br></br><br></br><br></br><br></br>
      </div>}






</center>:<center><HollowDotsSpinner size="120" color="red"></HollowDotsSpinner></center>
}

    
  
  
  
      
    </div>
  )
}

export default HomePage

// 