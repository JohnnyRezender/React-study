import { useRef } from "react";

/**
 * Hook debounce
 *
 * @param {*} fn    Função a ser executada pelo debounce
 * @param {*} delay Delay para execução da função
 *
 * @returns debouncedFn
 */
export default function useDebounce(fn, delay)
{
    const timeOutRef = useRef(null);

    function debouncedFn(...args)
    {
        // Limpa o agendamento antigo para não fazer 1 requisição para cada novo agendamento criado dentro do delay
        window.clearTimeout(timeOutRef.current)
        timeOutRef.current = window.setTimeout(() => {
            fn(...args);
        }, delay)
    }

    return debouncedFn;
}