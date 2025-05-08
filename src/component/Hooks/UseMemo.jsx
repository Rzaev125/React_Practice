import { useMemo, useState } from "react";

function UseMemo() {
    const [numb, setNumb] = useState(1);

    const square = useMemo(() => {
        console.log("Square calculate...")
        return numb * numb;
    }, [numb])

    return (
        <div>
            <p>Square {numb} = {square}</p>
            <button onClick={() => setNumb(numb + 1)}>Increse</button>
        </div>
    )
}

export default UseMemo;