import Props from "./component/Props"
import UseEffect from "./component/Hooks/UseEffect"
import UseEffect_Second from "./component/Hooks/UseEffect_Second"
import UseRef from "./component/Hooks/UseRef"
import UseMemo from "./component/Hooks/UseMemo"
import UseContext from "./component/Hooks/UseContext"
import UseReducer from "./component/Hooks/UseReducer"
import { Counter } from "./component/Redux/counter"
import CounterJotai from "./component/Jotai/CounterJotai"
import ThemeJotai from "./component/Jotai/ThemeJotai"
import DotsAtom from "./component/Jotai/DotsAtom"
import TestJotai from "./component/Jotai/TestJotai"
import WeatherAPI from "./component/API/WeatherAPI"

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
      {/* <Counter /> */}
      {/* <CounterJotai /> */}
      {/* <ThemeJotai /> */}
      {/* <DotsAtom /> */}
      {/* <TestJotai /> */}
      <WeatherAPI />
    </>
  )
}

export default App