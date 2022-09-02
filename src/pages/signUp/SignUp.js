import authPerson from "../../assets/svg/icon-auth.svg";

// styled components
import {
  FormContainer,
  ImageContainer,
  Form,
  InputContainer,
  FormButton,
} from "../../components/form/Form.styled";

import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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
    // signUp(name, email, password);
    setError(null);
    setIsLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(response.user, {
        displayName: name,
      });

      dispatch({ type: "SIGN_IN", payload: response.user });
      setIsLoading(false);
      setEmail("");
      setPassword("");
      setName("");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {!isLoading && (
        <FormContainer>
          <ImageContainer>
            <img src={authPerson} alt="person" />
          </ImageContainer>

          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
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
              <FormButton>Sign Up</FormButton>
            </InputContainer>
          </Form>

          {error && <p>{error}</p>}
        </FormContainer>
      )}
      {isLoading && <p>Loading</p>}
    </>
  );
}

export default SignUp;
