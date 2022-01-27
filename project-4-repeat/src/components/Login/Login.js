import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Button from "../UI/Button/Button";
import classes from "../Login/Login.module.css";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }

  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 3,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 3,
    };
  }

  return { value: "", isValid: false };
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const emailChangeHandler = (e) => {
    dispatchEmail({
      type: "USER_INPUT",
      val: e.target.value,
    });
  };

  const emailValidateHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({
      type: "USER_INPUT",
      val: e.target.value,
    });
  };

  const passwordValidateHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const { value: email } = emailState;
  const { isValid: emailIsValid } = emailState;

  const { value: password } = passwordState;
  const { isValid: passwordIsValid } = passwordState;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    console.log("useEffect Running!");

    setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
  }, [emailIsValid, passwordIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      authCtx.onLogin(email, password);
    }

    return;
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <Input
            ref={emailInputRef}
            id="email"
            text="E-mail"
            type="email"
            isValid={emailIsValid}
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailValidateHandler}
          />
        </div>

        <div>
          <Input
            ref={passwordInputRef}
            id="passowrd"
            text="Password"
            type="password"
            isValid={passwordIsValid}
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordValidateHandler}
          />
        </div>

        <div>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login;
