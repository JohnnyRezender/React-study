import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from "@material-ui/core";
import "fontsource-roboto"

import ValidacoesCadastro from './contexts/validacoesCadastro';
import {validarCPF, validarSenha} from "./models/cadastro"

class App extends Component {
  render()
  {
    return(
      <Container component="article" maxWidth="sm">
        <Typography align="center" component="h1" variant="h3">Formulário de cadastro</Typography>

        <ValidacoesCadastro.Provider value={{cpf: validarCPF, senha: validarSenha, nome: validarSenha}}>
          <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </ValidacoesCadastro.Provider>

      </Container>
    )
  };
}

function aoEnviarForm(dados)
{
  console.log(dados)
}

export default App;
