import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Faz a requisição para obter o token de autenticação
      const response = await fetch('http://127.0.0.1:8000/api-token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Verifica se a requisição foi bem sucedida
      if (response.ok) {
        const data = await response.json();
        const authToken = data.token;

        // Armazena o token de autenticação em algum local de armazenamento
        // como localStorage, contexto ou estado global do Redux
        // Exemplo utilizando localStorage:
        localStorage.setItem('authToken', authToken);

        // Redireciona o usuário para a página principal após o login
        window.location.href = '/'; // Altere para a rota desejada
      } else {
        console.error('Erro de autenticação:', response.status);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;