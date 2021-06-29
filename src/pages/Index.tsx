import React from "react";
import { useHistory } from 'react-router-dom'

const Index = () => {
    const history = useHistory()
    history.push('/login')
    return (
        <div>

        </div>
    )
}

export default Index;