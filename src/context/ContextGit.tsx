import { createContext, ReactNode, useEffect, useState } from "react"
import axios from "axios"

interface GitContextTypes{
  issues: IssuesGetGit[]
  GetIssuesGit: (query?: string) => void
}

interface IssuesGetGit{
  title: string
  body: string
  created_at: string
  url: string
  number: string
}

interface ContextProps{
  children: ReactNode
}

export const GitContext = createContext({} as GitContextTypes)

export function ContextGitProvider({children}: ContextProps){
  const [issues, setIssues] = useState<IssuesGetGit[]>([])

  async function GetIssuesGit() {
    const response = await axios.get(`https://api.github.com/search/issues?q=%20repo:rocketseat-education/reactjs-github-blog-challenge`)

    setIssues(response.data.items)
  }

  useEffect(() => {
    GetIssuesGit()
  }, [])

  return (
    <GitContext.Provider
      value={{
       issues,
       GetIssuesGit
      }}
    >
      {children}
    </GitContext.Provider>
  )
}