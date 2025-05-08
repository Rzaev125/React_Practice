import Props from "./component/Props"
import UseEffect from "./component/Hooks/UseEffect"
import UseEffect_Second from "./component/Hooks/UseEffect_Second"
import UseRef from "./component/Hooks/UseRef"
import UseMemo from "./component/Hooks/UseMemo"
import UseContext from "./component/Hooks/UseContext"
import UseReducer from "./component/Hooks/UseReducer"
import { Counter } from "./component/Redux/counter"

function App() {
  return (
    <>
      {/* <Props name="Hello World" /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect_Second /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
      <Counter />
    </>
  )
}

export default App