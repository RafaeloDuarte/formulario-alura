import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router"
import { Link } from 'react-router-dom'
import Input from "../../components/Input"
import SwitchComponent from "../../components/Switch"
import { Container, Button } from '@material-ui/core'
import Header from '../../components/Fomulario/Header'
import { handleLogin } from "../../api/loginApi";

export default function Login() {

  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [erros, setErros] = useState(
    { senha: { valido: true, texto: '' } })
  const credencials = useSelector(state => state.authorized);
  const dispatch = useDispatch();
  const history = useHistory()

  function validasenha(senha) {
    if (senha.length < 5)
      setErros({
        senha: {
          valido: false,
          texto: 'Número de digitos incorreto.'
        }
      })
    else
      setErros({ senha: { valido: true, texto: '' } })
  }

  return (
    <Container maxWidth='sm'>
      <h1>{`oi ${credencials}`}</h1>
      <Header text='Login' color='blue' />
      <form onSubmit={e => {
        e.preventDefault()
        handleLogin({ email:nome, password: senha, history, dispatch })
      }}>
        <Input
          id='login'
          placeHolder='Nome'
          value={nome}
          onChange={e => setNome(e.target.value)} />
        <Input
          id='password'
          placeHolder='Senha'
          value={senha}
          onChange={e => setSenha(e.target.value)}
          helperText={erros.senha.texto}
          error={!erros.senha.valido}
          onBlur={e => validasenha(senha)}
          type='password'
        />

        <SwitchComponent
          value={promocoes}
          onChange={(e) => setPromocoes(e.target.checked)} />
        <Button type="submit" variant="contained" color="secondary">
          Entrar
        </Button>
        <Link to='/cadastro'>Não possui cadastro?</Link>

      </form>
    </Container>
  )
}