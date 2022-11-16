import styled from "styled-components";


export const ProfileContainer = styled.div`
  width: 100%;
  border-radius: 10px;

  padding: 2rem 2.5rem;
  background: ${props => props.theme["base-profile"]};
  display: flex;
  align-items: center;
  justify-content: center;

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
`

export const ProfileSubtitle = styled.div`
`