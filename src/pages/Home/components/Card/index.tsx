import { CardContainer, CardText, CardTitle } from "./styles";

export function Card(){
  return (
    <CardContainer>

      <CardTitle>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia</span>
      </CardTitle>

      <CardText>
      Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
      Dynamic typing
      JavaScript is a loosely typed and dynamic language. Variables in JavaScript are notdirectly associated with any particular value type, and any variable can be assigned (andre-assigned) values of all types:

      let foo = 42; // foo is now a number
      foo = 'bar'; // foo is now a string
      foo = true; // foo is now a boolean 
      </CardText>
    </CardContainer>
  )
}