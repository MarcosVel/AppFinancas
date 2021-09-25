import React, { useContext, useState } from 'react';
import { Keyboard } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {
  TouchableWithoutFeedback,
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles';

export default function SignUp() {
  const [ nome, setNome ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { signUp } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <Background>
        <Container>

          <AreaInput>
            <Input
              placeholder='Nome'
              autoCorrect={ false }
              value={ nome }
              onChangeText={ (text) => setNome(text) }
            />
          </AreaInput>

          <AreaInput>
            <Input
              placeholder='E-mail'
              autoCorrect={ false }
              autoCapitalize='none' // não começar com maiúscula
              value={ email }
              onChangeText={ (text) => setEmail(text) }
            />
          </AreaInput>

          <AreaInput>
            <Input
              placeholder='Senha'
              autoCorrect={ false }
              autoCapitalize='none'
              value={ password }
              onChangeText={ (text) => setPassword(text) }
            />
          </AreaInput>

          <SubmitButton onPress={ handleSignUp }>
            <SubmitText>Cadastrar</SubmitText>
          </SubmitButton>

        </Container>
      </Background>
    </TouchableWithoutFeedback>
  )
}
