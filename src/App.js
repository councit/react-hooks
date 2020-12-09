import styled from "styled-components";
//components
import Counter from "./components/UseStateCounter";
import StateForm from "./components/StateForm";

function App() {
  return (
    <StyledApp>
      <h1>React Hooks</h1>
      <Counter />
      <StateForm />
    </StyledApp>
  );
}

//Styles
const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default App;
