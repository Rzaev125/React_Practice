import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === "increment") {
        return state + 1;
    }
    if (action.type === "decrement") {
        return state - 1;
    }
    return state;
}

function UseReducer() {
    const [number, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <p>Numb: {number}</p>
            <button onClick={() => dispatch({ type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement"})}>Decrement</button>
        </div>
    )
}

export default UseReducer;