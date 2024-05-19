import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Chart } from "react-google-charts";
import {Dropdown,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CH({token}) {

    const [searchTerm, setSearchTerm] = useState('');

    const [TV_DATA_ROUTE,setTV_DATA_ROUTE] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["Kucoin", 8.94, "#b87333"], // RGB value
        ["MEXC", 10.49, "silver"], // English color name,
        ["GATE", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["ASCENDEX", 21.45, "green"],
      ]);
  
      const [SPREAD_DATA_ROUTE,setSPREAD_DATA_ROUTE] = useState([
        ["CEX", "24h Trading Volume", { role: "style" }],
        ["Kucoin", 8.94, "#b87333"], // RGB value
        ["MEXC", 10.49, "silver"], // English color name
        ["GATE", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["ASCENDEX", 21.45, "green"],
      ]);
      const [DEPTH_DATA_ROUTE,setDEPTH_DATA_ROUTE] = useState([
        [
          "Depth",
          "Kucoin",
          "MEXC",
          "GATE",
          "ASENDEX"
        ],
        [0.3, 37.8, 80.8, 0,0],
        [0.5, 30.9, 69.5,0,0],
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

  const handleSearch = () => {
   
    const filtered = data.filter(item => item.time.toLowerCase().includes(searchTerm.toLowerCase()));
    setData(filtered);
  };
  

    const [data,setData]=useState([{time:"May 19 2024",  volume : [136291.65367596,44565.84,48136,52061.042920694], spread:[ 0.00410000000000022,0.036,0.04664,0.00700000000000012], depth:[ {
        "1%": 0,
        "0.3%": 0,
        "0.5%": 0
      },{
        "1%": 11.27536,
        "0.5%": 0,
        "0.3%": 0
      },{
        "1%": 0,
        "0.3%": 0,
        "0.5%": 0
      },
{
        "1%": 11.27536,
        "0.5%": 0,
        "0.3%": 0
      },{
        "0.5%": 6439.71368,
        "1%": 9648.5765,
        "0.3%": 269.8122
      }]}, {time:"May 19 2024",  volume : [136291.65367596,44565.84,48136,52061.042920694], spread:[ 0.00410000000000022,0.036,0.04664,0.00700000000000012], depth:[ {
        "1%": 0,
        "0.3%": 0,
        "0.5%": 0
      },{
        "1%": 11.27536,
        "0.5%": 0,
        "0.3%": 0
      },{
        "1%": 0,
        "0.3%": 0,
        "0.5%": 0
      },
{
        "1%": 11.27536,
        "0.5%": 0,
        "0.3%": 0
      },{
        "0.5%": 6439.71368,
        "1%": 9648.5765,
        "0.3%": 269.8122
      }]}])

    useEffect(()=>{

        const fetchData=async ()=>{
            const dataFromFireBase = await axios('https://proxy-j1k6.onrender.com/read')
            const dataFromFireBase1=dataFromFireBase.data.map(item => ({
                time: item.time,
                volume: item.exchange.map(ex => parseFloat(ex.volume)),
                spread: item.exchange.map(ex => ex.spread),
                depth: item.exchange.map(ex => ex.depth)
                }))
            setData(dataFromFireBase1)


        
        }
        

        fetchData()
       
    },[])

    useEffect(()=>{

        

        const fetchData=async ()=>{
            const dataFromFireBase = await axios('https://proxy-j1k6.onrender.com/read')
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
        <input placeholder="Search by Date" style={{height:'2.5em',width:'20em'}} value={searchTerm} onChange={(e)=>{
            setSearchTerm(e.target.value)
        }} ></input>

           
<Button variant="outline-primary" onClick={
    handleSearch
}>Search</Button>

<br></br><br></br><br></br>

    {data.map((x)=>{

        let volChart=[
            ["CEX", "24h Trading Volume", { role: "style" }],
            ["Kucoin",x.volume[0], "#b87333"], // RGB value
            ["MEXC", x.volume[1], "silver"], // English color name,
            ["GATE", x.volume[2], "color: #e5e4e2"], // CSS-style declaration
            ["ASCENDEX", x.volume[3], "green"],
        ]

        let spreadChart=[
            ["CEX", "24h Trading Volume", { role: "style" }],
            ["Kucoin",x.spread[0], "#b87333"], // RGB value
            ["MEXC", x.spread[1], "silver"], // English color name,
            ["GATE", x.spread[2], "color: #e5e4e2"], // CSS-style declaration
            ["ASCENDEX", x.spread[3], "green"],
        ]

        let depthChart=[
        [
          "Depth",
          "Kucoin",
          "MEXC",
          "GATE",
          "ASENDEX"
        ],
        [0.3,x.depth[0]["0.3%"],x.depth[1]["0.3%"],x.depth[2]["0.3%"],x.depth[3]["0.3%"]],
        [0.5, x.depth[0]["0.5%"],x.depth[1]["0.5%"],x.depth[2]["0.5%"],x.depth[3]["0.5%"]],
        [1, x.depth[0]["1%"],x.depth[1]["1%"],x.depth[2]["1%"],x.depth[3]["1%"]],
        
      ]

        return(
            <div>
  

               <h2> {x.time}</h2>
               <br></br>
               <h5>Volume</h5>
                <Chart chartType="ColumnChart" width="100%" height="400px" data={volChart} options={options} />
                <br></br>
               <h5>Spread</h5>
                <Chart chartType="ColumnChart" width="100%" height="400px" data={spreadChart} options={options} />
                <br></br>
               <h5>Depth</h5>
                <Chart  chartType="Line"
                  width="100%"
                  height="400px"
                  data={depthChart}
                  options={options} />
                  <br></br>
                <hr></hr>
                <br></br>
            </div>
        )
    })}
    </center>

    </div>
  )
}

export default CH
