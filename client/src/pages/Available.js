import {useState, useEffect} from 'react'
import axios from 'axios'

const Available =(props)=>{
    const  [properties, setProperties] = useState(null)

    useEffect( ()=>{
        getData()
    },[])

    const getData = async()=>{
        try{
        let res = await axios.get('/api/properties')

        setProperties(res.data)
        }catch(err){
            alert('err')
            console.log(err)
        }
    }

    if(!properties) return <p>Loading</p>

    return (
        <div>
            <h1>Available</h1>
            <pre>{JSON.stringify(properties,null,2)}</pre>
        </div>
    )
}

export default Available