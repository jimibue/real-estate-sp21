import { useState, useEffect } from 'react'
import axios from 'axios'
import { List, Image, Table } from 'semantic-ui-react'

const Available = (props) => {
    const [properties, setProperties] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)

    useEffect(() => {
        getData(1)
    }, [])

    const normalizeAgentData = (data) =>{
        let allIDS = data.map(d => d.agent_id)
        const agentSet = new Set(allIDS)
        const agentIDS = [ ...agentSet]
        
        // const agentIDS = [...new Set(data.map(d => d.agent_id))]
        
        let normalizedData = agentIDS.map( id => {
            let properties = data.filter(d => d.agent_id === id)
            let name = `${properties[0].first_name} ${properties[0].last_name}`
            let email = properties[0].email
        
            let agentProperties = properties.map(p=>{
                return{beds:p.beds, baths:p.baths, sq_ft:p.sq_ft, city:p.city, price:p.price}
            })
            return {name, email, properties:agentProperties}
        })
         return normalizedData
        }

    const getData = async (page = 1) => {
      
        try {
            let res = await axios.get(`/api/properties?page=${page}`)
            setCurrentPage(page)
            setTotalPages(res.data.total_pages)
            let normalizedAgentData = normalizeAgentData(res.data.properties)
            setProperties(normalizedAgentData)
        } catch (err) {
            alert('err')
            console.log(err)
        }
    }
    const renderProperties = () => {
        return properties.map(agent => {
            return (
                <List.Item>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                    <List.Content>
                        <List.Header>{agent.name}</List.Header>
                        {agent.email}
                    </List.Content>

                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>beds</Table.HeaderCell>
                                <Table.HeaderCell>baths </Table.HeaderCell>
                                <Table.HeaderCell>sq_ft</Table.HeaderCell>
                                <Table.HeaderCell>price</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {agent.properties.map((property) => (
                                <Table.Row>
                                    <Table.Cell>{property.beds}</Table.Cell>
                                    <Table.Cell>{property.baths}</Table.Cell>
                                    <Table.Cell>{property.sq_ft}</Table.Cell>
                                    <Table.Cell>{property.price}</Table.Cell>

                                </Table.Row>
                            ))}

                        </Table.Body>
                    </Table>
                </List.Item>

            )
        })
    }
    const renderPagNav =()=>{
        let numsJSX = []
        for(let i = 1; i <= totalPages; i++){
           numsJSX.push(<span 
            onClick={()=>getData(i)}
            style={
               {cursor:'pointer', marginRight:'3px', color: currentPage == i ? 'red':'black' }
            }>{i}</span>)
        }
        return numsJSX
    }


    if (!properties) return <p>Loading</p>

    return (
        <div>
            <h1>Available</h1>
            {renderPagNav()}
            {renderProperties()}
        </div>
    )
}

export default Available
