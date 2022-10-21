import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import './App.css';
import styled from 'styled-components';

const ChangeValueButton = styled.button`
  display: inline-flex;

  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius : 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`

const ButtonWrapper = styled.div`
  margin: 1rem;
`

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <span>{count}</span>
        <ButtonWrapper>
          <ChangeValueButton
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          >
            +
          </ChangeValueButton>
          <ChangeValueButton
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          >
            -
          </ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
