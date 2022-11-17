import { Form, SearchContent, SearchFormContainer } from "./styles";

export function SearchForm(){
  return (
    <SearchFormContainer>
      <SearchContent>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </SearchContent>

      <Form action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </Form>
    </SearchFormContainer>
  )
}