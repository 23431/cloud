import { Global } from "@emotion/react"
import { globalStyle } from "./assets/globalStyle"
import { IconStyle } from "./assets/iconfont/iconfont"
import { Home } from "./application/home"
import { Provider } from "react-redux"
import { store } from "./store/store"
import 'zarm/dist/zarm.css';
function App() {


  return (
    <Provider store={store}>

      <Home>
        <Global styles={globalStyle} />
        <Global styles={IconStyle} />
      </Home>
    </Provider>
  )
}

export default App
