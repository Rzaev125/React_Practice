import { useEffect } from "react"
import { useState } from "react"

function UseEffect() {
    const [second, setSecond] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond((prev => prev + 1));
        }, 1000)
    
        return () => {
            clearInterval(interval);
        }
    })

    return (
        <h1>{second} seconds left!</h1>
    )
}

export default UseEffect