import { useState, useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "./useFetch";

const ApiDisplay = () => {
  const [count, setCount] = useState(0);

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  return (
    <StyledDisplay>
      <h2>Use Effect to Fetch API</h2>
      <p>{loading ? "...loading" : data}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </StyledDisplay>
  );
};

const StyledDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
  width: 500px;
`;

export default ApiDisplay;
