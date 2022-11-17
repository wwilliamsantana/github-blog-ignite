import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import {
  CardContainer,
  Form,
  SearchContent,
  SearchFormContainer,
} from './styles'

interface GetIssuesProps {
  number: number
  title: string
  body: string
  created_at: string
}

interface PropsSearch {
  search: string
}

export function Home() {
  const [issuesItems, setIssuesItems] = useState<GetIssuesProps[]>([])
  const { register, handleSubmit, reset } = useForm<PropsSearch>()

  function FormInput(data: PropsSearch) {
    GetIssuesGit(data.search)
    reset()
  }

  async function GetIssuesGit(data?: string) {
    const query = !data ? '' : data
    const response = await axios.get('https://api.github.com/search/issues', {
      params: {
        q: `repo:rocketseat-education/reactjs-github-blog-challenge is:issue ${query}`,
      },
    })
    setIssuesItems(response.data.items)
  }

  useEffect(() => {
    GetIssuesGit()
  }, [])

  if (!issuesItems) {
    return <div>Error</div>
  }

  return (
    <div>
      <Profile />

      <SearchFormContainer>
        <SearchContent>
          <strong>Publicações</strong>
          <span>{issuesItems.length} publicações</span>
        </SearchContent>

        <Form onSubmit={handleSubmit(FormInput)}>
          <input
            autoComplete="off"
            type="text"
            placeholder="Buscar conteúdo"
            {...register('search')}
          />
        </Form>
      </SearchFormContainer>

      <CardContainer>
        {issuesItems.map((issue) => {
          return (
            <Card
              key={issue.number}
              body={issue.body}
              title={issue.title}
              created_at={issue.created_at}
              id={issue.number}
            />
          )
        })}
      </CardContainer>
    </div>
  )
}
