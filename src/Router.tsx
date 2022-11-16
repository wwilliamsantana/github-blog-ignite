import { Route, Routes } from "react-router-dom";
import { DefaultTheme } from "./layouts/DefaultTheme";
import { Home } from "./pages/Home";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultTheme/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  )
}