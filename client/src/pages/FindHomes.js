import {useEffect, useState} from 'react'
import axios from 'axios'
import { Card, Dropdown } from 'semantic-ui-react'
import PropertyCard from '../components/PropertyCard'

const FindHomes = (props)=>{
    const [agents,setAgents] = useState(null)
    const [buyers,setBuyers] = useState(null)
    const [properties, setProperties] = useState(null)
    useEffect(()=>{
        getAgents()
    },[])
    const getAgents = async()=>{
        try {
            let res = await axios.get('api/agents')
            // normailizing data to match semantic option format for dropdown
            let agentOptions = res.data.map(a=>{
              return {key:a.id, value:a.id, text:`${a.first_name} ${a.last_name} ${a.frequency}`}
            })
            setAgents(agentOptions)
        } catch (error) {
            alert(error)
        }
    }
    const handleAgentChanged = async (e, {value})=>{
        try {
            let res = await axios.get(`/api/agents/${value}`)
            let buyersOptions = res.data.map(b=>{
                return {key:b.id, value:b.id, text:`${b.first_name} ${b.last_name}`}
              })
            setBuyers(buyersOptions)
        } catch (error) {
            alert(error)
        }
    }
    const handleBuyerChanged = async(e, {value})=>{
        try {
            let res = await axios.get(`/api/buyers/${value}`)
            setProperties(res.data)
        } catch (error) {
            alert(error)
        }
    }
    if(!agents) return <p>loading</p>
    return (
        <div>
            <Dropdown
                    onChange={handleAgentChanged}
                    placeholder='Select a agent'
                    fluid
                    selection
                    options={agents}
                />
                <hr />
              {buyers && <Dropdown
            
                    onChange={handleBuyerChanged}
                    placeholder='Select a buyer'
                    fluid
                    selection
                    options={buyers}
                />  }
            <Card.Group style={{marginTop:'20px'}}>
                {properties && properties.map(p => <PropertyCard property={p}/> )}
            </Card.Group>
        </div>
    )
}

export default FindHomes