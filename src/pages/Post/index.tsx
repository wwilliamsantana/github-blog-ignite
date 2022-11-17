import { ArrowLeft, ArrowSquareOut, CalendarBlank, ChatCircle, GithubLogo } from "phosphor-react";
import { ContentPost, InfosContainer, InfosContent, MainPost } from "./styles";

export function Post(){
  return (
    <div>

      <MainPost>
        <div>
          <a href="">
            <ArrowLeft size={16} weight={"fill"}/>
            Voltar
          </a>
          <a href="">
            Ver no github
            <ArrowSquareOut size={16} weight={"fill"}/>
          </a>
        </div>

        <strong>JavaScript data types and data structures</strong>

        <InfosContainer>
            <InfosContent>
                <GithubLogo size={16} weight={"fill"}/>
                <span>wwilliamSantana</span>
            </InfosContent>
            <InfosContent>
                <CalendarBlank  size={16} weight={"fill"}/>
                <span>Há 1 dias</span>
            </InfosContent>
            <InfosContent>
                <ChatCircle  size={16} weight={"fill"}/>
                <span>5 Comentários</span>
            </InfosContent>
        </InfosContainer>

      </MainPost>

      <ContentPost>
        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

          Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
      </ContentPost>

    </div>
  )
}