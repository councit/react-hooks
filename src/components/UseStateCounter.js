import { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  //state management
  const [count, setCount] = useState(0);

  return (
    <StyledCounter>
      <h2>UseState to Manage Counter </h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Counter
      </button>
      <button onClick={() => setCount(0)}>Reset Counter</button>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Counter;
