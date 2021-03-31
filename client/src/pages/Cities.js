import axios from 'axios'
import {useEffect, useState} from 'react'
import {Card, Dropdown, Icon} from 'semantic-ui-react'
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

const dummyProperties =   [
    {
      "id": "2",
      "beds": 3,
      "baths": 1,
      "sq_ft": 4571,
      "price": 1254737,
      "city": "SLC",
      "street": "91325 Cherish Garden",
      "sold": false
    },
    {
      "id": "7",
      "beds": 7,
      "baths": 8,
      "sq_ft": 1976,
      "price": 1430691,
      "city": "SLC",
      "street": "103 Maricruz Route",
      "sold": false
    },
    {
      "id": "15",
      "beds": 2,
      "baths": 3,
      "sq_ft": 2063,
      "price": 413886,
      "city": "SLC",
      "street": "583 Johnie Freeway",
      "sold": false
    },
    {
      "id": "22",
      "beds": 2,
      "baths": 4,
      "sq_ft": 5050,
      "price": 1081244,
      "city": "SLC",
      "street": "7223 Quentin Overpass",
      "sold": false
    },
    {
      "id": "27",
      "beds": 1,
      "baths": 2,
      "sq_ft": 2882,
      "price": 222798,
      "city": "SLC",
      "street": "9486 Elvis Valleys",
      "sold": false
    },
    {
      "id": "39",
      "beds": 4,
      "baths": 1,
      "sq_ft": 3439,
      "price": 815799,
      "city": "SLC",
      "street": "95135 Torphy Forges",
      "sold": false
    }
  ]

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

    const handleChange = async (e,{name,value})=>{
        try {
            let res = await axios.get(`/api/cities/${value}`)
            setProperties(res.data)
        } catch (error) {
             // alert(err)
             setProperties(dummyProperties)
        }
    }
    const renderProperties = ()=> {
        return(
            <Card.Group style={{marginTop:'20px'}}>
                {properties.map(p => (
                        <Card
                        image='data:image/jpeg;base64,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'
                        header={p.street}
                        meta={p.price}
                        description={`Beds: ${p.beds} Baths:${p.baths} sq feet: ${p.sq_ft}`}
                        extra={(
                            <a>
                              <Icon name='bed' />
                              {p.beds}
                            </a>

                          )}
                        />
                ))}
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