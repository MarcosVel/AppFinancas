import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { Keyboard } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {
  TouchableWithoutFeedback,
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';

export default function SignIn() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const navigation = useNavigation();
  const { user } = useContext(AuthContext); // pegar dados de dentro do objeto usuário

  function handleLogin() {
    console.log(user.nome);
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <Background>
        <Container>
          <Logo source={ require('../../assets/Logo.png') } />

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

          <SubmitButton onPress={ handleLogin }>
            <SubmitText>Acessar</SubmitText>
          </SubmitButton>

          <Link onPress={ () => navigation.navigate('SignUp') }>
            <LinkText>Criar uma conta</LinkText>
          </Link>

        </Container>
      </Background>
    </TouchableWithoutFeedback>
  )
}
