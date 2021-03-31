import axios from 'axios'
import {useEffect, useState} from 'react'
import {Dropdown} from 'semantic-ui-react'
import { keyframes } from 'styled-components'
const dummyCities =[  {
    "city": "Draper"
  },
  {
    "city": "SLC"
  },
  {
    "city": "Sandy"
  }]

const Cities = (props)=>{
    const [cities, setCities] = useState(null)
    const [properties, setProperties] = useState(null)

    useEffect(()=>{
        getCities()
    },[])

    const normalizeCityData = (citiesArr) => {
        return citiesArr.map(city=>{
            return {key:city.city, text:city.city, value:city.city}
        })
    }

    const getCities = async()=>{
        try{
          let res = await axios.get('/api/cities/list')
          let normalizedCityData = normalizeCityData(res.data)
          setCities(normalizedCityData)
        }catch(err){
            let normalizedCityData = normalizeCityData(dummyCities)
            setCities(normalizedCityData)
            // alert(err)
        }
    }
    const handleChange = (e,{name,value})=>{
        console.log(name)
        console.log(value)
    }
    return(
        <div>
            <h1>Cities</h1>
             <Dropdown
                    onChange={handleChange}
                    placeholder='Select Friend'
                    fluid
                    selection
                    options={cities}
                />
        </div>
    )
}


  
export default Cities