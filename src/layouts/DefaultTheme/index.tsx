import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { ContainerContent } from "./styles";


export function DefaultTheme(){
  return (
    <div>
      <Header/>
      <ContainerContent>
        <Outlet/>
      </ContainerContent>
    </div>
  )
}