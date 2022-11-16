import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 1440px;
  background: ${props => props.theme["base-profile"]};
  margin: 0 auto;
  padding: 30px 0;
  

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo{
    margin-top: -5rem;
    margin-left: -4rem;
  }


`