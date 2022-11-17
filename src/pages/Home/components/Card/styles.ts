import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background: ${props => props.theme["base-post"]};
  border-radius: 10px;
`

export const CardTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
 
  gap: 1rem;

  strong{
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme["base-title"]};
    line-height: 32px;
    padding: 0 0.5rem;
  }

  span{
    font-size: 14px;
    color: ${props => props.theme["base-span"]};
    white-space: nowrap;
    margin-top: 5px;
  }
`

export const CardText = styled.p`
  color: ${props => props.theme["base-text"]};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`