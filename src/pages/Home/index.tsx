
import { Card } from "./components/Card";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { CardContainer } from "./styles";


export function Home(){
  return (
    <div>
      <Profile/>
      <SearchForm/>
      <CardContainer>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </CardContainer>
    </div>
  )
}