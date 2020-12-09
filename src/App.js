import styled from "styled-components";
//components
import Counter from "./components/UseStateCounter";
import StateForm from "./components/StateForm";
import ApiDisplay from "./components/ApiDisplay";

function App() {
  return (
    <StyledApp>
      <h1>React Hooks</h1>
      <Counter />
      <StateForm />
      <ApiDisplay />
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
