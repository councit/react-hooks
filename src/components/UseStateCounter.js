import { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  //state management
  const [{ count1, count2 }, setCount] = useState({ count1: 0, count2: 0 });

  return (
    <StyledCounter>
      <h2>UseState to Manage Counter </h2>
      <p>{count1}</p>
      <p>{count2}</p>
      <button
        onClick={() =>
          setCount((currentCountState) => ({
            ...currentCountState,
            count1: currentCountState.count1 + 1,
            count2: currentCountState.count2 + 5,
          }))
        }
      >
        Increase Counter
      </button>
      <button
        onClick={() =>
          setCount((currentCountState) => ({
            ...currentCountState,
            count1: currentCountState.count1 - 1,
            count2: currentCountState.count2 - 5,
          }))
        }
      >
        Decrease Counter
      </button>

      <button
        onClick={() =>
          setCount((state) => ({
            count1: 0,
            count2: 0,
          }))
        }
      >
        Reset Counter
      </button>
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
