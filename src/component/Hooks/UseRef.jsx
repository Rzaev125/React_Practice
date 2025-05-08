import { useRef } from "react";

function UseRef() {
    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} placeholder="Введите текст" />
            <button onClick={focusInput}>Focus!</button>
        </div>
    )
}

export default UseRef;