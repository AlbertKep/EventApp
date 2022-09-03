import authPerson from "../../assets/svg/icon-auth.svg";

import {
  FormContainer,
  ImageContainer,
  Form,
  InputContainer,
  FormButton,
  TextContainer,
} from "../../components/form/Form.styled";
import Loading from "../../components/loading/Loading";

import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

// services

// import { signIn, user } from "../../firebase/api.service";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      dispatch({ type: "SIGN_IN", payload: response.user });
      setIsLoading(false);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <>
      {!isLoading && (
        <FormContainer onSubmit={handleSubmit}>
          <ImageContainer>
            <img src={authPerson} alt="person" />
          </ImageContainer>
          <Form>
            <InputContainer>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </InputContainer>
            <InputContainer>
              <FormButton>Sign In</FormButton>
            </InputContainer>
          </Form>
          {error && <p>{error}</p>}
          <TextContainer>
            <p>Have not account yet?</p>
            <span onClick={() => navigate("/signup")}>Sign up now!</span>
          </TextContainer>
        </FormContainer>
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default SignIn;
