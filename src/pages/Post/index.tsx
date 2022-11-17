import axios from "axios";
import { ArrowLeft, ArrowSquareOut, CalendarBlank, ChatCircle, GithubLogo } from "phosphor-react";
import {useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContentPost, InfosContainer, InfosContent, MainPost } from "./styles";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'

interface PropsPost{
  html_url: string
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
}

export function Post(){
  const {id} = useParams<{id: string}>()
  const [data, setData] = useState<PropsPost>()

  async function GetIssues(){
    const response = await axios.get(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`)
    setData(response.data)
  }

  useEffect(()=> {
    GetIssues()
  }, [])

  if(!data){
    return <div>Error</div>
  }

  return (
    <div>
      <MainPost>
        <div>
          <Link to={"/"}>
            <ArrowLeft size={16} weight={"fill"}/>
            Voltar
          </Link>
          <a href={data.html_url} target={"_blank"}>
            Ver no github
            <ArrowSquareOut size={16} weight={"fill"}/>
          </a>
        </div>

        <strong>{data.title}</strong>

        <InfosContainer>
            <InfosContent>
                <GithubLogo size={16} weight={"fill"}/>
                <span>{data.user.login}</span>
            </InfosContent>
            <InfosContent>
                <CalendarBlank  size={16} weight={"fill"}/>
                <span>
                {formatDistanceToNow(new Date(data.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })} 
                </span>
            </InfosContent>
            <InfosContent>
                <ChatCircle  size={16} weight={"fill"}/>
                <span>{data.comments}</span>
            </InfosContent>
        </InfosContainer>

      </MainPost>

      <ContentPost>
        <ReactMarkdown>
          {data.body}
        </ReactMarkdown>
      </ContentPost>

    </div>
  )
}