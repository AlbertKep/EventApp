import authPerson from "../../assets/svg/icon-auth.svg";

// styled components
import {
  FormContainer,
  ImageContainer,
  Form,
  InputContainer,
  FormButton,
} from "../../components/form/Form.styled";
import Loading from "../../components/loading/Loading";

import { auth } from "../../firebase/config";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signUp } from "../../firebase/api.service";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// services
// import { signUp, user } from "../../firebase/api.service";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await signUp(name, email, password);
      dispatch({ type: "SIGN_IN", payload: auth.currentUser });
      setIsLoading(false);
      setEmail("");
      setPassword("");
      setName("");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      {!isLoading && (
        <FormContainer>
          <ImageContainer>
            <img src={authPerson} alt="person" />
          </ImageContainer>

          <Form noValidate onSubmit={handleSubmit}>
            <InputContainer>
              <input
                type="text"
                id="username"
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete="off"
                required
              />
              <label htmlFor="username">Username</label>
            </InputContainer>
            <InputContainer>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
                required
              />
              <label htmlFor="email">Email Address</label>
            </InputContainer>
            <InputContainer>
              <input
                type="text"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                autoComplete="off"
                required
              />
              <label htmlFor="password">Password</label>
            </InputContainer>
            <InputContainer>
              <FormButton>Sign Up</FormButton>
            </InputContainer>
          </Form>

          {error && <p>{error}</p>}
        </FormContainer>
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default SignUp;
