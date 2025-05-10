import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const countAtom = atomWithStorage('count', 0)

export default function TestJotai() {
    const [count, setCount] = useAtom(countAtom);

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Test</h1>

            <h2>{count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}