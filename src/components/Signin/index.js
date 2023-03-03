import React from 'react';
import Navbar from '../Navbar/Index';
import { Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormButton, FormInput, Text } from './SigninElements';

const SignIn = () => {
  return (
    <>
        <Navbar/>
        <Container>
            <FormWrap>
                {/* <Icon to='/'>DARK_VISION</Icon> */}
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign In To Your Account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn;