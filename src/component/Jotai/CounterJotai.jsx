import { atom, useAtom } from "jotai";

const counter = atom(0);

export default function CounterJotai() {
    const [count, setCount] = useAtom(counter);
    const onClick = () => setCount((prev) => prev + 1);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClick}>Click</button>
        </div>
    )
}