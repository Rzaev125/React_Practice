import { useState, useEffect } from "react"

function UseEffect_Second() {
    const [name, setName] = useState("Default")

    useEffect(() => {
        console.log(`Hello, ${name}`);
    }, [name])

    return (
        <div>
            <p>Твоё имя: {name}</p>
            <button onClick={() => setName('Kanan')}>Сменить имя</button>
        </div>
    )
}

export default UseEffect_Second