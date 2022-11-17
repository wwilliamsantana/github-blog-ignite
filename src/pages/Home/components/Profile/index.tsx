import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { useEffect, useState } from "react";
import { InfosContent, InfoProfile, ProfileContainer, ProfileContent, ProfileSubtitle, ProfileTitle } from "./styles";
import axios from "axios"

interface GetDataGitHub{
  login: string
  name: string
  avatar_url: string
  html_url: string
  followers: number
  bio: string
}

export function Profile(){
  const [dataGit, setDataGit] = useState<GetDataGitHub>()

  async function GetGitHub() {
    const response = await axios.get("https://api.github.com/users/wwilliamsantana")

    setDataGit(response.data)
  }

  useEffect(()=> {
    GetGitHub()
  }, [])

  if(!dataGit){
    return <div>Erro</div>
  }

  return (
    
   <ProfileContainer>
      <img src={dataGit.avatar_url}/>
      
      <ProfileContent>
        <ProfileTitle>
          <h2>{dataGit.name}</h2>
          <a href={dataGit.html_url} target={"_blank"}>
            Github
            <ArrowSquareOut size={14} weight={"fill"} />
          </a>
        </ProfileTitle>

        <ProfileSubtitle>
          {dataGit.bio}
        </ProfileSubtitle>

        <InfosContent>

          <InfoProfile>
            <GithubLogo size={18}/>
            <span>{dataGit.login}</span> 
          </InfoProfile>

          <InfoProfile>
            <Buildings size={18}/>
            <span>Rocketseat</span> 
          </InfoProfile>

          <InfoProfile>
            <Users size={18}/>
            <span>{dataGit.followers} Seguidores</span> 
          </InfoProfile>

        </InfosContent>

      </ProfileContent>
   </ProfileContainer>
  
  )
}