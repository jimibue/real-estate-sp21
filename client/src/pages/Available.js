import { useState, useEffect } from 'react'
import axios from 'axios'
import { List, Image, Table } from 'semantic-ui-react'

const Available = (props) => {
    const [properties, setProperties] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            let res = await axios.get('/api/properties')

            setProperties(res.data)
        } catch (err) {
            alert('err')
            console.log(err)
        }
    }
    const renderProperties = () => {
        return dummyData.map(agent => {
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

    if (!properties) return <p>Loading</p>

    return (
        <div>
            <h1>Available</h1>
            {renderProperties()}
        </div>
    )
}

export default Available

// [
//     {
//       "property_id": 1,
//       "beds": 7,
//       "baths": 7,
//       "sq_ft": 4630,
//       "price": 163183,
//       "sold": false,
//       "email": "tyler.hackett@schimmel.biz",
//       "agent_id": 1,
//       "first_name": "Jan",
//       "last_name": "Gusikowski",
//       "city": "Draper",
//       "id": null
//     },
//     {
//       "property_id": 1,
//       "beds": 7,
//       "baths": 7,
//       "sq_ft": 4630,
//       "price": 163183,
//       "sold": false,
//       "email": "tyler.hackett@schimmel.biz",
//       "agent_id": 1,
//       "first_name": "Jan",
//       "last_name": "Gusikowski",
//       "city": "Draper",
//       "id": null
//     },
// ]

const dummyData = [
    {
        name: "Jan Gusikowski",
        email: 'tyler.hackett@schimmel.biz',
        properties: [{
            "beds": 7,
            "baths": 7,
            "sq_ft": 4630,
            "price": 163183,
        },
        {
            "beds": 7,
            "baths": 7,
            "sq_ft": 4630,
            "price": 163183,
        }

        ]
    },
    {
        agentName: "Tim",
        email: 'asdf.hackett@schimmel.biz',
        properties: [{
            "beds": 7,
            "baths": 7,
            "sq_ft": 4630,
            "price": 163183,
        },
        {
            "beds": 7,
            "baths": 7,
            "sq_ft": 4630,
            "price": 163183,
        },
        {
            "beds": 7,
            "baths": 7,
            "sq_ft": 4630,
            "price": 163183,
        }

        ]
    }
]