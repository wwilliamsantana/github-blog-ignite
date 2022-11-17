import { CardContainer, CardText, CardTitle } from "./styles";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface CardPorps {
  title: string
  created_at: string
  body: string
  id: number
}

export function Card(props : CardPorps){

  return (
    
      <CardContainer to={`post/issues/${props.id}`}>
        <CardTitle>
          <strong>{props.title}</strong>
          <span>
          {formatDistanceToNow(new Date(props.created_at), {
              addSuffix: true,
              locale: ptBR,
            })} 
          </span>
          </CardTitle>
        <CardText>
        {props.body}
        </CardText>
      </CardContainer>
   
  )
}