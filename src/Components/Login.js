// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Para redirigir a otro componente después del login

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory(); // Redirigir a la página de artículos después del login exitoso

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevenir la recarga de la página al enviar el formulario

    try {
      // Hacer la solicitud de login a Joomla! con las credenciales
      const response = await axios.post('https://tusitio.com/index.php?option=com_api&task=login&format=json', {
        username,
        password
      });

      // Obtener el token de la respuesta y guardarlo en el estado global o en el almacenamiento local
      const token = response.data.token;
      setToken(token); // Guardar el token en el estado global o en un contexto

      // Redirigir a otra página (por ejemplo, a la página de artículos)
      history.push('/articles');
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Login;
