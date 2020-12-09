import styled from "styled-components";
//components
import Counter from "./components/UseStateCounter";

function App() {
  return (
    <StyledApp>
      <h1>React Hooks</h1>
      <Counter />
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
