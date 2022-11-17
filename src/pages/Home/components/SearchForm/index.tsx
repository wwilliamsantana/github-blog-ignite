import {useContext } from "react";
import { GitContext } from "../../../../context/ContextGit";
import { Form, SearchContent, SearchFormContainer } from "./styles";


export function SearchForm(){
  const { issues, GetIssuesGit} = useContext(GitContext)
  

  return (
    <SearchFormContainer>
      <SearchContent>
        <strong>Publicações</strong>
        <span>{issues.length} publicações</span>
      </SearchContent>

      <Form>
        <input type="text" placeholder="Buscar conteúdo" />
      </Form>
    </SearchFormContainer>
  )
}

function useForm() {
  throw new Error("Function not implemented.");
}
