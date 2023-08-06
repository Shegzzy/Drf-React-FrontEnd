import React from 'react'
import { useParams } from "react-router-dom";

const AdvocatesPage = () => {
    const params = useParams();
    const username = params.username;
    return (
        <div>
            <h1>Advocates Page {username}</h1>
        </div>
    )
}

export default AdvocatesPage
