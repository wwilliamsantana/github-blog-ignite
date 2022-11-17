import styled from "styled-components";


export const MainPost = styled.header`
  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  margin-top: -6rem;
  
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
      text-decoration: none;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: ${props => props.theme.blue};
    }
  }

  strong{
      display: block;
      margin-top: 1.25rem;
      font-size: 24px;
      font-weight: bold;
      color: ${props => props.theme["base-title"]};
    }

`


export const InfosContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
`

export const InfosContent = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 16px;
  color: ${props => props.theme["base-span"]};
`

export const ContentPost = styled.div`
  padding: 2.5rem 2rem;

  p{
    color: ${props => props.theme["base-text"]};

    ::first-line{
      font-weight: 700;
    }
  }

`