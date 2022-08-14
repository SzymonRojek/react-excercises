import { useState } from "react";

import "./styles.css";
import utilities from "../../utilities";
import { useAuthContext } from "../../context/useAuth";
import StyledButton from "../../components/StyledButton";

const Login = () => {
  const [error, setError] = useState({ message: "" });
  const [inputValue, setInputValue] = useState({ phrase: "" });
  const { SECRET_KEY, setAuth } = useAuthContext();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const messageError = utilities.validationInputPhrase(
      inputValue.phrase,
      SECRET_KEY
    );

    if (messageError?.message) {
      return setError(messageError);
    }

    handleLogin();
  };

  const onChangeHandler = ({ target }) =>
    setInputValue((prev) => ({ ...prev, [target.name]: target.value }));

  const handleLogin = () =>
    setAuth({
      isAuthenticated: true,
    });

  return (
    <main className="container">
      <h1 className="heading">
        Please type a secret KEY:
        <span className="span-text"> {SECRET_KEY}</span>
      </h1>

      <form className="form" onSubmit={onFormSubmit}>
        <input
          className="input-phrase"
          onChange={onChangeHandler}
          placeholder="type a secret key"
          name="phrase"
        />

        <StyledButton label="log in" className="button-login" />
      </form>
      <p className="error-text">{error?.message}</p>
    </main>
  );
};

export default Login;
