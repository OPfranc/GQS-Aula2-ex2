import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100vh;
    padding: 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;

`

export const Message = styled.div`
  height: 65px;
  width: 350px;
  background-color: #D4D8D8;
  color: #1D2020;
  font-size: 16px;
  font-weight: 550;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;

  &.none{
    display: none;
  }
  &.Obesidade{
    border: 6px solid #F6511D;

  }
  &.Acima{
    border: 4px solid #FFB400;
  
  }
  &.Peso{
    border: 2px solid #7FB800;
  
  }
  &.Abaixo{
    border: 1px solid #00A6ED;
  
  }

  

`
export const Form = styled.div`


padding: 12px;
width: 350px;
background-color: #D4D8D8;
border-radius: 8px;
height: 350px;

  h2{
    margin-bottom: 12px;
    color: #1D2020;
  }
  input{
    width: 100%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 8px;
    border: transparent;

  }

  p{
    color: #C43408;
    position: absolute;
    font-size: 12px;
    margin-top: -3px;
  }

  box-shadow: 0 2px 1px rgba(0,0,0,0.09), 
              0 4px 2px rgba(0,0,0,0.09), 
              0 8px 4px rgba(0,0,0,0.09), 
              0 16px 8px rgba(0,0,0,0.09),
              0 32px 16px rgba(0,0,0,0.09);


`
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 23px;
  background-color: #7FB800;
  border: 0px solid transparent;
  border-radius: 8px;
  transition: background 0.2s ease-in;
  color: #1D2020;
  font-size: 17px;
  font-weight: bold;

  &:hover{
    background-color: #628F00;

  }

`