import styled from 'styled-components'


export const BtnContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    color: #e2e2e3;
    background: transparent;
    border: 0.05rem solid #e2e2e3;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem;
    transition: all 0.1s ease-in-out;
  &:hover {
      color: #aaa9ad ;

  }
  &:focus {
      outline: none;
  }
`