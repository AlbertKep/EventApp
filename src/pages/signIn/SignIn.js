import authPerson from "../../assets/svg/icon-auth.svg";

import {
  ImageContainer,
  Form,
  InputContainer,
  FormButton,
} from "../../components/form/Form.styled";

// import {useState} from

function SignIn() {
  return (
    <section>
      <ImageContainer>
        <img src={authPerson} alt="person" />
      </ImageContainer>
      <Form>
        <InputContainer>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </InputContainer>
        <InputContainer>
          <FormButton>Sign In</FormButton>
        </InputContainer>
      </Form>
    </section>
  );
}

export default SignIn;
