import React, { useState } from 'react';
//import Button from '../Button';
import Input from "../Input";
import SwitchComponent from "../Switch";
import { Container, Button } from '@material-ui/core';

export default function FormComponent({ onSubmit }) {

  const [nome, setNome] = useState('John')
  const [sobreNome, setSobreNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [erros, setErros] = useState(
    { cpf: { valido: true, texto: '' } })

  function validaCpf(cpf) {
    if (cpf.length !== 11)
      setErros({
        cpf: {
          valido: false,
          texto: 'Número de digitos incorreto.'
        }
      })
    else
      setErros({ cpf: { valido: true, texto: '' } })
  }

  return (
    <Container maxWidth='sm'>
      <form onSubmit={e => {
        e.preventDefault()
        onSubmit({ nome, sobreNome, cpf })
      }}>
        <Input
          placeHolder='Nome'
          value={nome}
          onChange={e => setNome(e.target.value)} />
        <Input
          placeHolder='Sobre Nome'
          value={sobreNome}
          onChange={e => setSobreNome(e.target.value)} />
        <Input
          placeHolder='CPF'
          value={cpf}
          onChange={e => setCpf(e.target.value)}
          helperText={erros.cpf.texto}
          error={!erros.cpf.valido}
          onBlur={e => validaCpf(cpf)}
        />

        <SwitchComponent
          value={promocoes}
          onChange={(e) => setPromocoes(e.target.checked)} />
        <SwitchComponent
          promocoes={novidades}
          onChange={(e) => setNovidades(e.target.checked)} />
        <Button type="submit" variant="contained" color="secondary">
          Cadastrar
        </Button>
      </form>
    </Container>
  );
}