import React, { useState } from 'react'
import {InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useDebounce from '../hooks/useDebounce';

/**
 * Componente responsavel por buscar o livro
 *
 * @param {string} value         Valor a ser buscado
 * @param {*}      onInputChange Função a ser chamada
 */
function BuscarLivro({value, onInputChange})
{
    const [displayValue, setDisplayValue] = useState(value);

    /**
     * Efetua a busca 1 segundo após o usuario parar de digitar
     */
    const debouncedChange = useDebounce(onInputChange, 1000)

    function handleChange(event)
    {
        setDisplayValue(event.target.value)
        debouncedChange(event.target.value)
    }

    return (
        <TextField
            fullWidth
            id          = "busca"
            placeholder = "Buscar livros"
            onChange    = {handleChange}
            value       = {displayValue}
            variant     = "filled"
            InputProps  = {{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>),
            }}
        />
    )
}

export default BuscarLivro;