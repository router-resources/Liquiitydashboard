import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Chart } from "react-google-charts";
import {Dropdown,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CH({token}) {

    const [parameter,setParameter]=useState('VOLUME')

  
  
    const options = {
          chartArea: {
                backgroundColor: 'white',
                textStyle: {
                  color: 'white', // set the color to white
                }
          },
    
  };

 
  

    const [data,setData]=useState([{
      "exchange": [
        {
          "spread": 0.000300000000000189,
          "volume": "199661.878488",
          "depth": {
            "0.5%": 573.24091316,
            "0.3%": 305.56399956,
            "1%": 1091.0106681
          },
          "name": "Kucoin"
        },
        {
          "volume": "15760.88",
          "spread": 0.0310000000000001,
          "depth": {
            "0.3%": 10.13816,
            "0.5%": 418.0636,
            "1%": 1240.79378
          },
          "name": "Mexc"
        },
        {
          "spread": 0.0468600000000001,
          "depth": {
            "0.3%": 11.3446,
            "0.5%": 345.41345,
            "1%": 345.41345
          },
          "volume": "47939",
          "name": "Ascendex"
        },
        {
          "name": "Gate",
          "spread": 0.00499999999999989,
          "volume": "63855.151258841",
          "depth": {
            "0.5%": 4114.44393,
            "1%": 11460.21868,
            "0.3%": 564.12582
          }
        }
      ],
      "time": "May 19 2024",
      "id": "0FJCJkGvysv89INTupQh"
    }])

    const [TV_DATA_TOTAL,setTV_DATA_TOTAL] = useState([
      ["CEX", "24h Trading Volume", { role: "style" }],
      ["19 May 2024", 8.94, "#b87333"], // RGB value
      ["19 May 2024", 10.49, "silver"], // English color name,
      ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
      ["19 May 2024", 21.45, "green"],
    ])


    const [TV_DATA_BYBIT,setTV_DATA_BYBIT] = useState([
      ["CEX", "24h Trading Volume", { role: "style" }],
      ["19 May 2024", 8.94, "#b87333"], // RGB value
      ["19 May 2024", 10.49, "silver"], // English color name,
      ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
      ["19 May 2024", 21.45, "green"],
    ])

      const [TV_DATA_KUCOIN,setTV_DATA_KUCOIN] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["19 May 2024", 8.94, "#b87333"], // RGB value
        ["19 May 2024", 10.49, "silver"], // English color name,
        ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["19 May 2024", 21.45, "green"],
      ]);
      const [TV_DATA_MEXC,setTV_DATA_MEXC] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["19 May 2024", 8.94, "#b87333"], // RGB value
        ["19 May 2024", 10.49, "silver"], // English color name,
        ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["19 May 2024", 21.45, "green"],
      ]);
      const [TV_DATA_ASD,setTV_DATA_ASD] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["19 May 2024", 8.94, "#b87333"], // RGB value
        ["19 May 2024", 10.49, "silver"], // English color name,
        ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["19 May 2024", 21.45, "green"],
      ]);
      const [TV_DATA_GATE,setTV_DATA_GATE] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["19 May 2024", 8.94, "#b87333"], // RGB value
        ["19 May 2024", 10.49, "silver"], // English color name,
        ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["19 May 2024", 21.45, "green"],
      ]);

      const [SPREAD_DATA_BYBIT,setSPREAD_DATA_BYBIT] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["19 May 2024", 8.94, "#b87333"], // RGB value
        ["19 May 2024", 10.49, "silver"], // English color name,
        ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["19 May 2024", 21.45, "green"],
      ])

      const [SPREAD_DATA_KUCOIN,setSPREAD_DATA_KUCOIN] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["19 May 2024", 8.94, "#b87333"], // RGB value
        ["19 May 2024", 10.49, "silver"], // English color name,
        ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["19 May 2024", 21.45, "green"],
      ]);
      const [SPREAD_DATA_MEXC,setSPREAD_DATA_MEXC] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["19 May 2024", 8.94, "#b87333"], // RGB value
        ["19 May 2024", 10.49, "silver"], // English color name,
        ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["19 May 2024", 21.45, "green"],
      ]);
      const [SPREAD_DATA_ASD,setSPREAD_DATA_ASD] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["19 May 2024", 8.94, "#b87333"], // RGB value
        ["19 May 2024", 10.49, "silver"], // English color name,
        ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["19 May 2024", 21.45, "green"],
      ]);
      const [SPREAD_DATA_GATE,setSPREAD_DATA_GATE] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["19 May 2024", 8.94, "#b87333"], // RGB value
        ["19 May 2024", 10.49, "silver"], // English color name,
        ["19 May 2024", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["19 May 2024", 21.45, "green"],
      ]);

      const [DEPTH_DATA_BYBIT,setDEPTH_DATA_BYBIT] =useState([[
        "Day",
        "19 May 2024",
        "20 May 2024",
        "21 May 2024",
      ],
      [0.3, 305.56399956,  337.82230711, 365.82230711],
      [0.5, 573.24091316,4054.76031, 3054.76031],
      [1, 25.4, 57, 25.7]])


      const [DEPTH_DATA_KUCOIN,setDEPTH_DATA_KUCOIN] =useState([[
        "Day",
        "19 May 2024",
        "20 May 2024",
        "21 May 2024",
      ],
      [0.3, 305.56399956,  337.82230711, 365.82230711],
      [0.5, 573.24091316,4054.76031, 3054.76031],
      [1, 25.4, 57, 25.7]])

      const [DEPTH_DATA_MEXC,setDEPTH_DATA_MEXC] =useState([[
        "Day",
        "19 May 2024",
        "20 May 2024",
        "21 May 2024",
      ],
      [0.3, 305.56399956,  337.82230711, 365.82230711],
      [0.5, 573.24091316,4054.76031, 3054.76031],
      [1, 25.4, 57, 25.7]])

      const [DEPTH_DATA_ASD,setDEPTH_DATA_ASD] =useState([[
        "Day",
        "19 May 2024",
        "20 May 2024",
        "21 May 2024",
      ],
      [0.3, 305.56399956,  337.82230711, 365.82230711],
      [0.5, 573.24091316,4054.76031, 3054.76031],
      [1, 25.4, 57, 25.7]])

      const [DEPTH_DATA_GATE,setDEPTH_DATA_GATE] =useState([[
        "Day",
        "19 May 2024",
        "20 May 2024",
        "21 May 2024",
      ],
      [0.3, 305.56399956,  337.82230711, 365.82230711],
      [0.5, 573.24091316,4054.76031, 3054.76031],
      [1, 25.4, 57, 25.7]])

 



    useEffect(() => {
      const fetchData = async () => {
        const dataFromFireBase = await axios('http://34.93.0.57:8000/read');

        const sortedData = await (async () => dataFromFireBase.data.sort((a, b) => new Date(a.time) - new Date(b.time)))();
        const dataFromFireBase1 = sortedData.map(item => ({
          time: item.time,
          volume: item.exchange.map(ex => parseFloat(ex.volume)),
          spread: item.exchange.map(ex => ex.spread),
          depth: item.exchange.map(ex => ex.depth)
        }));
        setData(dataFromFireBase1);
    
        const getRandomColor = () => {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };
        
        const createTotalVolumeDataArray = () => {
          const header = ["CEX", "24h Trading Volume", { role: "style" }];
          const dataArray = dataFromFireBase.data.reduce((acc, curr) => {
            let sum=0;
            curr.exchange.forEach(exch => {
             
              sum=sum+parseFloat(exch.volume)
            });
            acc.push([curr.time, sum, getRandomColor()]);
            return acc;
          }, []);
          dataArray.unshift(header); // Add header at the beginning of the array
          return dataArray;
        };

        const createVolumeDataArray = (exchangeName) => {
          const header = ["CEX", "24h Trading Volume", { role: "style" }];
          const dataArray = dataFromFireBase.data.reduce((acc, curr) => {
            curr.exchange.forEach(exch => {
              if (exch.name === exchangeName) {
                acc.push([curr.time, parseFloat(exch.volume), getRandomColor()]);
              }
            });
            return acc;
          }, []);
          dataArray.unshift(header); // Add header at the beginning of the array
          return dataArray;
        };
        const createSpreadDataArray = (exchangeName) => {
          const header = ["CEX", "Spread", { role: "style" }];
          const dataArray = dataFromFireBase.data.reduce((acc, curr) => {
            curr.exchange.forEach(exch => {
              if (exch.name === exchangeName) {
                acc.push([curr.time, exch.spread, getRandomColor()]);
              }
            });
            return acc;
          }, []);
          dataArray.unshift(header); // Add header at the beginning of the array
          return dataArray;
        };

        const createDepthDataArray = (exchangeName) => {
          const depthPercentages = ["0.3%", "0.5%", "1%"];
          const header = [""];
          const depthData = {
            "0.3%": [0.3],
            "0.5%": [0.5],
            "1%": [1]
          };
        
          for (let i = 0; i < dataFromFireBase.data.length; i++) {
            const curr = dataFromFireBase.data[i];
            header.push(curr.time);
            for (let j = 0; j < curr.exchange.length; j++) {
              const exch = curr.exchange[j];
              if (exch.name === exchangeName) {
                for (let k = 0; k < depthPercentages.length; k++) {
                  const percentage = depthPercentages[k];
                  depthData[percentage].push(exch.depth[percentage] || 0);
                }
              }
            }
          }

         

        
          const result = [header];
          for (let i = 0; i < depthPercentages.length; i++) {
            const percentage = depthPercentages[i];
            result.push(depthData[percentage]);
          }
        
          return result;
        };


        const Bybit_data_volume=createVolumeDataArray("Bybit")
        const Kucoin_data_volume = createVolumeDataArray("Kucoin");
        const Mexc_data_volume = createVolumeDataArray("Mexc");
        const Ascendex_data_volume = createVolumeDataArray("Ascendex");
        const Gate_data_volume = createVolumeDataArray("Gate");
        const Total_data_volume=createTotalVolumeDataArray()

        const Bybit_data_spread=createSpreadDataArray("Bybit")
        const Kucoin_data_spread = createSpreadDataArray("Kucoin");
        const Mexc_data_spread = createSpreadDataArray("Mexc");
        const Ascendex_data_spread = createSpreadDataArray("Ascendex");
        const Gate_data_spread = createSpreadDataArray("Gate");

        const Bybit_data_depth=createDepthDataArray("Bybit")
        const Kucoin_data_depth = createDepthDataArray("Kucoin");
        const Mexc_data_depth = createDepthDataArray("Mexc");
        const Ascendex_data_depth = createDepthDataArray("Ascendex");
        const Gate_data_depth = createDepthDataArray("Gate");


        setTV_DATA_TOTAL(Total_data_volume)
        setTV_DATA_BYBIT(Bybit_data_volume)
        setTV_DATA_KUCOIN(Kucoin_data_volume)
        setTV_DATA_MEXC(Mexc_data_volume)
        setTV_DATA_ASD(Ascendex_data_volume)
        setTV_DATA_GATE(Gate_data_volume)

        setSPREAD_DATA_BYBIT(Bybit_data_spread)
        setSPREAD_DATA_KUCOIN(Kucoin_data_spread)
        setSPREAD_DATA_MEXC(Mexc_data_spread)
        setSPREAD_DATA_ASD(Ascendex_data_spread)
        setSPREAD_DATA_GATE(Gate_data_spread)

        setDEPTH_DATA_BYBIT(Bybit_data_depth)
        setDEPTH_DATA_KUCOIN(Kucoin_data_depth)
        setDEPTH_DATA_MEXC(Mexc_data_depth)
        setDEPTH_DATA_ASD(Ascendex_data_depth)
        setDEPTH_DATA_GATE(Gate_data_depth)

       
        console.log('Bybit_data_depth:', Bybit_data_depth);
        console.log('Kucoin_data_depth:', Kucoin_data_depth);
        console.log('Mexc_data_depth:', Mexc_data_depth);
        console.log('Ascendex_data_depth:', Ascendex_data_depth);
        console.log('Gate_data_depth:', Gate_data_depth);


      };
      
    
      fetchData();
    }, []);
    

    useEffect(()=>{

        

        const fetchData=async ()=>{
            const dataFromFireBase = await axios('http://34.93.0.57:8000/read')
            const dataFromFireBase1=dataFromFireBase.data.map(item => ({
                time: item.time,
                volume: item.exchange.map(ex => parseFloat(ex.volume)),
                spread: item.exchange.map(ex => ex.spread),
                depth: item.exchange.map(ex => ex.depth)
                }))
            setData(dataFromFireBase1)


        
        }
        
        if(data.length==0)
            {
                fetchData()
            }

        
       
    },[data])
  return (
    <div>
        <center>
        <Dropdown>
      <Dropdown.Toggle style={{backgroundColor: 'white', color:'black'}} id="dropdown-basic">
            {parameter}
      </Dropdown.Toggle>

      <Dropdown.Menu>

        <Dropdown.Item  onClick={()=>{
            
            setParameter('VOLUME')
           
          }}>VOLUME</Dropdown.Item>


        <Dropdown.Item  onClick={()=>{
          
            setParameter('SPREAD')
           
          }}>SPREAD</Dropdown.Item>

<Dropdown.Item  onClick={()=>{
            
            setParameter('DEPTH')
           
          }}>DEPTH</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
           


<br></br><br></br><br></br>

{parameter=="VOLUME" && <div>

<Chart chartType="ColumnChart" width="100%" height="400px" data={TV_DATA_TOTAL} options={options} />
<b>Total 24 Hr Volume</b>
                <hr></hr>
<Chart chartType="ColumnChart" width="100%" height="400px" data={TV_DATA_BYBIT} options={options} />
<b>BYBIT</b>
                <hr></hr>

<Chart chartType="ColumnChart" width="100%" height="400px" data={TV_DATA_KUCOIN} options={options} />
<b>KUCOIN</b>
                <hr></hr>

               

<Chart chartType="ColumnChart" width="100%" height="400px" data={TV_DATA_MEXC} options={options} />
<b>MEXC</b>
                
                <hr></hr>
               

<Chart chartType="ColumnChart" width="100%" height="400px" data={TV_DATA_ASD} options={options} />
<b>ASCENDEX</b>
                <hr></hr>
              

<Chart chartType="ColumnChart" width="100%" height="400px" data={TV_DATA_GATE} options={options} />
<b>GATE</b>
                <br></br>

</div>}

{parameter=="SPREAD" && <div>

<Chart chartType="ColumnChart" width="100%" height="400px" data={SPREAD_DATA_BYBIT} options={options} />
<b>BYBIT</b>
                <hr></hr>


<Chart chartType="ColumnChart" width="100%" height="400px" data={SPREAD_DATA_KUCOIN} options={options} />

                <b>KUCOIN</b>
                <hr></hr>

               

<Chart chartType="ColumnChart" width="100%" height="400px" data={SPREAD_DATA_MEXC} options={options} />
                <b>MEXC</b>
                <hr></hr>
                

<Chart chartType="ColumnChart" width="100%" height="400px" data={SPREAD_DATA_ASD} options={options} />
                <b>ASCENDEX</b>
                <hr></hr>
              

<Chart chartType="ColumnChart" width="100%" height="400px" data={SPREAD_DATA_GATE} options={options} />
                <b>GATE</b>
                <br></br></div>}



{parameter=="DEPTH" && <div>  <br></br>
               

<Chart chartType="Line" width="100%" height="400px" data={DEPTH_DATA_BYBIT} options={options} />
<br></br><br></br><br></br>
                <b>BYBIT</b>
                <hr></hr>

<Chart chartType="Line" width="100%" height="400px" data={DEPTH_DATA_KUCOIN} options={options} />
<br></br><br></br><br></br>
                <b>KUCOIN</b>
                <hr></hr>




<Chart chartType="Line" width="100%" height="400px" data={DEPTH_DATA_MEXC} options={options} />
<br></br><br></br><br></br>
                <b>MEXC</b>
                <hr></hr>


<Chart chartType="Line" width="100%" height="400px" data={DEPTH_DATA_ASD} options={options} />
<br></br><br></br><br></br>
                <b>ASCENDEX</b>
                <hr></hr>




<Chart chartType="Line" width="100%" height="400px" data={DEPTH_DATA_GATE} options={options} />
<br></br><br></br><br></br>
                <b>GATE</b>
                <hr></hr>

<br></br></div>}
                <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
               


    </center>

    </div>
  )
}

export default CH
