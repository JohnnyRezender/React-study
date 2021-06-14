import React, {useState, useContext} from 'react';
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/validacoesCadastro"
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar})
{
    const [nome, setNome]           = useState("Jonas")
    const [sobrenome, setSobrenome] = useState("rezemdowisk")
    const [cpf, setCpf]             = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({
                    nome,
                    sobrenome,
                    cpf,
                    novidades,
                    promocoes
                });
            }
        }}>
            <TextField
                value={nome}
                onChange={(event) => {setNome(event.target.value)}}
                variant="outlined"
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                name="nome"
                label="Nome"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {setSobrenome(event.target.value)}}
                variant="outlined"
                fullWidth
                margin="normal"
                id="sobrenome"
                label="Sobrenome"
            />

            <TextField
                variant    ="outlined"
                onChange   ={(event) => {setCpf(event.target.value)}}
                id         ="cpf"
                onBlur     = {validarCampos}
                name="cpf"
                error      ={!erros.cpf.valido}
                helperText ={erros.cpf.texto}
                label      ="CPF"
                margin     ="normal"
                fullWidth
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        name="Promoções"
                        onChange={(event) => {setPromocoes(event.target.checked)}}
                        checked={promocoes}
                        color="primary"
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        name     = "Novidades"
                        onChange = {(event) => {setNovidades(event.target.checked)}}
                        checked  = {novidades}
                        color    = "primary"
                    />
                }
            />

            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosPessoais;