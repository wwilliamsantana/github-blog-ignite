import { ProfileContainer, ProfileContent } from "./styles";


export function Home(){
  return (
   <ProfileContainer>
      <img src="https://github.com/wwilliamsantana.png"/>
      <ProfileContent>
        <ProfileTitle>
          <h2>William Santana</h2>
          <a href="/">Github</a>
        </ProfileTitle>
        <ProfileSubtitle>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </ProfileSubtitle>
        <div>
          <div>
            Icon + wwilliamsantana
          </div>
          <div>
            Icon + Rocketseat 
          </div>
          <div>
            Icon + 32 Seguidores
          </div>
        </div>
      </ProfileContent>
   </ProfileContainer>
  )
}