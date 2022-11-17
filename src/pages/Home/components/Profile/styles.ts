import styled from "styled-components";


export const ProfileContainer = styled.div`
  width: 100%;
  border-radius: 10px;

  padding: 2rem 2rem 2rem 2.5rem;
  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-top: -6rem;

  img{
    width: 142px;
    height: 142px;
    border-radius: 8px;
  }

`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  h2{
    font-size: 24px;
    color: ${props => props.theme["base-title"]};
  }

  a{
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${props => props.theme.blue};
    text-transform: uppercase;
    gap: 0.5rem;
    text-decoration: none;
  }

`

export const ProfileSubtitle = styled.div`
  color: ${props => props.theme["base-text"]};
`

export const InfosContent = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`

export const InfoProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  
  svg{
    color: ${props => props.theme["base-label"]};
  }

  span{
    color: ${props => props.theme["base-subtile"]};
  }
`