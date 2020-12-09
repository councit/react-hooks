import styled from "styled-components";

import { useForm } from "./useForm";

const StateForm = () => {
  const [values, handleChange] = useForm({ email: "", password: "", name: "" });
  return (
    <div>
      <h2>UseState with Custom Hook</h2>
      <StyledForm>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        ></input>
        <input
          type="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        ></input>
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
`;

export default StateForm;
