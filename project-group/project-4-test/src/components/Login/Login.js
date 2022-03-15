import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import AuthContext from "../../store/auth-context";
import { ButtonStyld } from "../Home/Home";
import Input from "../UI/Input/Input";

const Wrapper = styled.div`
  width: 50%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.5);
  padding: 2rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
  }

  form {
    width: 100%;
  }

  label {
    display: block;
    width: 30%;
    font-weight: bold;
  }

  input {
    display: block;
    width: 100%;
    padding: 0.6rem 1rem;
    border: ${(props) =>
      props.isValid.email === false || props.isValid.password === false
        ? "1px solid red"
        : ""};
    border-radius: 0.3rem;
    font-size: 1.4rem;

    &:focus {
      outline: none;
    }
  }

  button {
    display: flex;
    justify-content: center;
    margin: 1rem auto;
  }
`;

const Button = styled(ButtonStyld)`
  font-size: 1rem;
  border-radius: 1.2rem;
`;

const emailFn = (state, action) => {
  if (action.type === "INPUT_TYPE") {
    return { value: action.payload, isValid: action.payload.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};

const passwordFn = (state, action) => {
  if (action.type === "INPUT_TYPE") {
    return { value: action.payload, isValid: action.payload.trim().length > 3 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 3 };
  }

  return { value: "", isValid: false };
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailFn, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordFn, {
    value: "",
    isVaild: null,
  });

  const authContext = useContext(AuthContext);

  const inputEmail = useRef();
  const inputPassword = useRef();

  const emailChangeHanlder = (e) => {
    dispatchEmail({ type: "INPUT_TYPE", payload: e.target.value });
  };

  const emailValidHandler = (e) => {
    dispatchEmail({ type: "INPUT_BLUR", payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "INPUT_TYPE", payload: e.target.value });
  };

  const passwordValidHandler = (e) => {
    dispatchPassword({ type: "INPUT_BLUR", payload: e.target.value });
  };

  useEffect(() => {
    console.log("EFFECT IS RUNNING");

    setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
  }, [emailState.isValid, passwordState.isValid]);

  const submitForm = (e) => {
    e.preventDefault();

    if (emailState.isValid && passwordState.isValid) {
      authContext.onLogin(inputEmail, inputPassword);
    } else if (!emailState.isValid) {
      inputEmail.current.focus();
    } else {
      inputPassword.current.focus();
    }

    inputEmail.current.value = "";
    inputPassword.current.value = "";
  };

  return (
    <Wrapper
      isValid={{ email: emailState.isValid, password: passwordState.isValid }}
      isValid2={passwordState.isValid}
    >
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">E-Mail</label>
          <Input
            ref={inputEmail}
            type="email"
            id="email"
            onChange={emailChangeHanlder}
            onBlur={emailValidHandler}
            value={emailState.value}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input
            ref={inputPassword}
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordValidHandler}
            value={passwordState.value}
          />
        </div>

        <Button type="submit">Login</Button>
      </form>
    </Wrapper>
  );
};

export default Login;
