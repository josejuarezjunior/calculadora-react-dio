import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }

  const handleMultiplyNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    }else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setOperation('');
    }
  }

  const handleDivideNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/');
    }else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation('');
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default: 
          break;
      }  
    // Division by zero 
    }else if(firstNumber !== '0' && operation === '/' && currentNumber === '0') {
      setCurrentNumber('Cannot divide by zero');
      setOperation('');
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')} />
          <Button label='8' onClick={() => handleAddNumber('8')} />
          <Button label='9' onClick={() => handleAddNumber('9')} />
          <Button label='C' onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')} />
          <Button label='5' onClick={() => handleAddNumber('5')} />
          <Button label='6' onClick={() => handleAddNumber('6')} />
          <Button label='/' onClick={handleDivideNumbers}/>
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')} />
          <Button label='2' onClick={() => handleAddNumber('2')} />
          <Button label='3' onClick={() => handleAddNumber('3')} />
          <Button label='X' onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label='0' onClick={() => handleAddNumber('0')} />
          <Button label='+' onClick={handleSumNumbers} />
          <Button label='-' onClick={handleMinusNumbers} />
          <Button label='=' onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
