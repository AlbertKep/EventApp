import authPerson from "../../assets/svg/icon-auth.svg";

import {
  ImageContainer,
  Form,
  InputContainer,
  FormButton,
} from "../../components/form/Form.styled";

function SignUp() {
  return (
    <section>
      <ImageContainer>
        <img src={authPerson} alt="person" />
      </ImageContainer>
      <Form>
        <InputContainer>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </InputContainer>
        <InputContainer>
          <FormButton>Sign Up</FormButton>
        </InputContainer>
      </Form>
    </section>
  );
}

export default SignUp;
