import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Usuarios de ejemplo
  const users = [
    { username: 'abel', password: '1111' },
    { username: 'admin', password: 'a' },
  ];

  useEffect(() => {
    // Cargar usuario guardado
    const lastUser = localStorage.getItem('lastUser');
    if (lastUser) setUser(lastUser);
  }, []);

  // Validación de login
  const handleLogin = () => {
    const valid = users.find(u => u.username === user && u.password === pass);
    if (valid) {
      localStorage.setItem('lastUser', user);
      setMessage(`Bienvenido`);
      setIsValid(true);
    } else {
      setMessage('Usuario o contraseña incorrectos');
      setIsValid(false);
    }
  };

  const handleQuickLogin = () => {
    setUser('admin');
    setPass('a');
    setMessage('');
  };

  const handleLogout = () => {
    setUser('');
    setPass('');
    setMessage('');
    setIsValid(false);
  };

  return isValid ? (
    <Dashboard user={user} onLogout={handleLogout} />
  ) : (
    <Login
      user={user}
      pass={pass}
      setUser={setUser}
      setPass={setPass}
      handleLogin={handleLogin}
      handleQuickLogin={handleQuickLogin}
      message={message}
    />
  );
}

export default App;
