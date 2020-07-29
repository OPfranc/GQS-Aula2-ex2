import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/Global'

import { Wrapper, Message, Form, Button } from './styles'


function App() {

  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [message, setMessage] = useState({})
  const [nameError, setNameError] = useState('');
  const [weightError, setWeightError] = useState('');
  const [heightError, setHeightError] = useState('');
  const [imc, setImc] = useState(0)

  useEffect(() => {

    console.log(name);

    let categoryMessage = 'none'
    let category = 0

    if (imc >= 30) {
      console.log(1);
      
      category = 4
      categoryMessage = 'Obesidade'
    }
    if (imc < 30 && imc >= 25) {
      console.log(12);

      category = 3
      categoryMessage = 'Acima do Peso'
    }
    if (imc < 25 && imc >= 18.5) {
      console.log(13);

      category = 2
      categoryMessage = 'Peso Normal'
    }
    if(imc > 0 && imc < 18.5){
      console.log(33);
      category = 1
      categoryMessage = 'Abaixo do peso'
    }

    setMessage({ category, categoryMessage, name })
  }, [imc])

  function ImcCalc() {

    const imcResult = weight / (height * height)
    setImc(imcResult)
  }


  function NameInputHandler({ target: { value } }) {
    setNameError('')
    setName(value)
  }

  function WeightInputHandler({ target: { value } }) {
    if (isNaN(value)) {
      if (weight === 0)
        setWeightError('Valor inválido')
      return
    }
    setWeight(value)
    setWeightError('')
  }

  function HeightInputHandler({ target: { value } }) {
    if (isNaN(value)) {
      if (height === 0)
        setHeightError('Valor inválido')
      return
    }
    setHeight(value)
    setHeightError('')
  }

  function SendHandler() {

    if (!ValuesTest())
      return
    if (ValuesTest()) {
      if (height !== 0 && height !== 0)
        ImcCalc()

      setTimeout(() => { setWeight(0) }, 100)
      setTimeout(() => { setHeight(0) }, 100)
      setTimeout(() => { setName('') }, 100)
    }
  }

  function ValuesTest() {

    let pass = true
    if (name === '') {
      setNameError('Digite um nome')
      pass = false
    }
    if (weight.toString() === '0') {
      setWeightError('Digite um peso')
      pass = false
    }
    if (height.toString() === '0') {
      setHeightError('Digite uma altura')
      pass = false

    }

    return pass
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Message className={message.categoryMessage}>
          {imc === 0 ? '' : `${message.name} está com Índice de Massa Corporal ${imc.toFixed(2)} ${message.categoryMessage} `}
        </Message>
        <Form>
          <h2>Calcule o IMC</h2>

          <p>{nameError}</p>
          <input
            value={name}
            placeholder={'Nome'}
            onChange={NameInputHandler}
          />

          <p>{weightError}</p>
          <input
            value={weight === 0 ? '' : weight}
            placeholder={'Peso (Kg)'}
            onChange={WeightInputHandler}
          />
          <p> {heightError} </p>
          <input
            value={height === 0 ? '' : height}
            placeholder={'Altura (m)'}
            onChange={HeightInputHandler}
          />

          <Button type="button" onClick={SendHandler} >Calcular</Button>
        </Form>
      </Wrapper>
    </>
  )
}

export default App;
