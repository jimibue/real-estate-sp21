import axios from 'axios'
import {useEffect, useState} from 'react'
import {Card, Dropdown, Icon} from 'semantic-ui-react'
import PropertyCard from '../components/PropertyCard'

const Cities = (props)=>{
    const [cities, setCities] = useState(null)
    const [properties, setProperties] = useState(null)

    useEffect(() => {
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
            alert(err)
        }
    }

    const handleChange = async (e,{name,value})=>{
        try {
            let res = await axios.get(`/api/cities/${value}`)
            setProperties(res.data)
        } catch (err) {
             alert(err)
        }
    }
    const renderProperties = ()=> {
        return(
            <Card.Group style={{marginTop:'20px'}}>
                {properties.map(p => <PropertyCard property={p}/> )}
            </Card.Group>
        )
    }
    return(
        <div>
            <h1>Cities</h1>
             <Dropdown
                    onChange={handleChange}
                    placeholder='Select a city'
                    fluid
                    selection
                    options={cities}
                />
              {properties && renderProperties()}  
              {!properties && <p>No Properties</p>}  
        </div>
    )
}



  
export default Cities