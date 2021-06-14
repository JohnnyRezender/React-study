import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from "../../contexts/validacoesCadastro"
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar})
{
    const [email, setEmail]                   = useState("");
    const [senha, setSenha]                   = useState("");
    const validacoes                          = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) =>{
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({email, senha});
            }
        }}>
            <TextField
                value = {email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                required
                fullWidth
                margin="normal"
            />
            <TextField
                value = {senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                label="Senha"
                type="password"
                name="senha"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosUsuario;