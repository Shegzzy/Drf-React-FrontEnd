import { React, useEffect, useState } from 'react'
import axios from 'axios';

const HomePage = () => {

    const [advocates, serAdvocates] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    let getData = async () => {
        let response = await axios.get('http://127.0.0.1:8000/advocates/')
        serAdvocates(response.data)
        console.log(response);
    }


    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default HomePage
