import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/api'

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { email, senha });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('tipo', response.data.tipo);
            navigate('/dashboard');
        } catch (error: any) {
            setErro(error.response?.data?.message || 'Erro ao fazer login');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input 
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
            />
            {erro && <p className="erro">{erro}</p>}
            <button type="submit">Entrar</button>
        </form>
    );
}
export default Login;
/*adafafafd*/