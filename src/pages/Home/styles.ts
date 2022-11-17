import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 10rem;
`
export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  gap: 0.75rem;
`

export const SearchContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: ${(props) => props.theme['base-subtile']};
    font-weight: bold;
    font-size: 18px;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 14px;
  }
`

export const Form = styled.form`
  input {
    width: 100%;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    :focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`
