import axios from 'axios';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class CityCost extends PureComponent {

    state = {chartData:[]}

    componentDidMount = async() => {
      try{
       let res = await axios.get('/api/properties/city_cost')
       console.log(res)
       const normalizedData = this.normalizeData(res.data)
       this.setState({chartData: normalizedData})
      }catch(err){
        alert('err')
      }
    }

    normalizeData =(resData)=>{
        console.log(resData)
       let chartData = resData.map( d=>{
            let prices = d.prices.split(', ')
            let total = prices.reduce((acc, num)=> {
                acc += parseInt(num)
                return acc
            },0)
            return {
                name: d.city,
                price: total / prices.length
            }
        })

        return chartData
    }

  render() {
    return (

        <BarChart
          width={500}
          height={300}
          data={this.state.chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>

    );
  }
}
