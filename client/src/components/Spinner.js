import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const Spinner = ({ path = "login" }) => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((preValue) => --preValue)
        }, 1000);

        count === 0 && navigate(`/${path}`, {
            state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate])
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: "100vh" }}
            >
                <h2> Redirecting you to in {count} seconds...</h2>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner
