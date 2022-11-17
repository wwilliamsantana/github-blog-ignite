import { useContext } from "react";
import { GitContext } from "../../context/ContextGit";
import { Card } from "./components/Card";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { CardContainer } from "./styles";


export function Home(){
  const {issues} = useContext(GitContext)

  return (
    <div>
      <Profile/>
      <SearchForm/>
      <CardContainer>
        {issues.map(item => {
          return (
            <Card key={item.number} body={item.body} created_at={item.created_at} title={item.title}/>
          )
        })}
      </CardContainer>
    </div>
  )
}