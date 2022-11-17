import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { InfosContent, InfoProfile, ProfileContainer, ProfileContent, ProfileSubtitle, ProfileTitle } from "./styles";


export function Profile(){
  return (
    
   <ProfileContainer>
      <img src="https://github.com/wwilliamsantana.png"/>
      
      <ProfileContent>

        <ProfileTitle>
          <h2>William Santana</h2>
          <a href="/">
            Github
            <ArrowSquareOut size={14} weight={"fill"} />
          </a>
        </ProfileTitle>

        <ProfileSubtitle>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </ProfileSubtitle>

        <InfosContent>

          <InfoProfile>
            <GithubLogo size={18}/>
            <span>wwilliamsantana</span> 
          </InfoProfile>

          <InfoProfile>
            <Buildings size={18}/>
            <span>Rocketseat </span> 
          </InfoProfile>

          <InfoProfile>
            <Users size={18}/>
            <span>32 Seguidores</span> 
          </InfoProfile>

        </InfosContent>

      </ProfileContent>
   </ProfileContainer>
  
  )
}