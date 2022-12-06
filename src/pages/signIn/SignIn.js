import authPerson from "../../assets/svg/icon-auth.svg";

import {
  FormContainer,
  ImageContainer,
  Form,
  InputContainer,
  FormButton,
  TextContainer,
  BorderBottom,
  ErrorValidationInfo,
} from "../../components/form/Form.styled";
import Loading from "../../components/loading/Loading";

import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { motion } from "framer-motion";

// services
import { signIn } from "../../firebase/api.service";

const pathVariants = {
  initialSVG: {
    y: 5,
  },
  animateSVG: {
    y: 10,
    transition: {
      duration: 0.75,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const checkIfFormIsValid = (values) => {
  let isValid = true;

  const clone = JSON.parse(JSON.stringify(values)); // deep copy
  Object.entries(clone).forEach(([fieldName, fieldInfo]) => {
    // validators for field email
    if (fieldName === "email") {
      const pattern =
        /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
      const patternIsValid = pattern.test(fieldInfo.value);

      if (!patternIsValid) {
        isValid = false;
        clone[fieldName].error =
          "Email must be a valid address, e.g. kowalski@gmail.com";
      }
    }

    // validators for field password
    if (fieldName === "password") {
      if (fieldInfo.value.length < 5 || fieldInfo.value.length > 10) {
        isValid = false;
        clone[fieldName].error =
          "Password should has min. 5 and max 10 characters";
      }
    }
  });

  return {
    isValid,
    validatedUser: clone,
  };
};

function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: {
      value: "",
      error: null,
    },
    password: {
      value: "",
      error: null,
    },
  });
  const { dispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const { isValid, validatedUser } = checkIfFormIsValid(user);
    if (!isValid) {
      setIsLoading(false);
      setUser(validatedUser);
      return;
    }

    const formData = Object.entries(user).reduce(
      (collector, [fieldName, fieldInfo]) => ({
        ...collector,
        [fieldName]: fieldInfo.value,
      }),
      {}
    );

    const userData = {
      ...formData,
    };

    try {
      setIsLoading(false);
      const user = await signIn(userData.email, userData.password);
      dispatch({ type: "SIGN_IN", payload: user });
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: {
        error: null,
        value,
      },
    }));
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
                id="email"
                name="email"
                value={user.email.value}
                autoComplete="off"
                onChange={changeHandler}
                required
              />
              <label htmlFor="email">Email Address</label>
              {user.email.error && (
                <ErrorValidationInfo>{user.email.error}</ErrorValidationInfo>
              )}
            </InputContainer>
            <InputContainer>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password.value}
                autoComplete="off"
                onChange={changeHandler}
                required
              />
              <label htmlFor="password">Password</label>
              {user.password.error && (
                <ErrorValidationInfo>{user.password.error}</ErrorValidationInfo>
              )}
            </InputContainer>
            <InputContainer>
              <FormButton>Sign In</FormButton>
            </InputContainer>
          </Form>
          {error && <p>"Something went wrong"</p>}
          <TextContainer>
            <p>Have not account yet?</p>
            <span onClick={() => navigate("/signup")}>
              Sign up now!
              <BorderBottom
                as={motion.span}
                variants={pathVariants}
                initial={"initialSVG"}
                animate={"animateSVG"}
              />
            </span>
          </TextContainer>
        </FormContainer>
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default SignIn;
