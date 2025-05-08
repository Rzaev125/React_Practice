import { createContext, useContext, useState } from "react";

const nameContext = createContext();

function UseContext() {
    const [name, setName] = useState("Kanan");
    
    return (
        <nameContext.Provider value={name}>
            <Component />
        </nameContext.Provider>
    )
}

function Component() {
    const name = useContext(nameContext);
    return <p>Hello, {name}!</p>
}

export default UseContext;