import './Contato.css'
import { useState } from 'react';

export const Contato = ({categoria}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        alert("Mensagem enviada com sucesso!");

        setNome("");
        setEmail("");
        setMensagem("");
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
    }
}
}