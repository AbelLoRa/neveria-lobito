import React from 'react';

function Login({ user, pass, setUser, setPass, handleLogin, handleQuickLogin, message }) {
  return (
    <div style={{
      backgroundColor: '#b3e5fc',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px',
        borderBottom: '2px solid #90caf9',
        paddingBottom: '10px'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Nevería Hermanos Lobito</h1>
        <button onClick={handleQuickLogin} style={{
          backgroundColor: '#f06292',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#FF85C1'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF69B4'}
        >
          Inicio rápido
        </button>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form
          autoComplete="on"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            width: '300px',
            boxSizing: 'border-box'
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Iniciar Sesión</h2>
          <input
            type="text"
            name="username"
            autoComplete="username"
            placeholder="Usuario"
            value={user}
            onChange={e => setUser(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              boxSizing: 'border-box'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#FFEDF6'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FFFFFF'}
          />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Contraseña"
            value={pass}
            onChange={e => setPass(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              boxSizing: 'border-box'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#FFEDF6'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FFFFFF'}
          />
          <button type="submit" style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#f06292',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#FF85C1'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF69B4'}
          >
            Entrar
          </button>
          {message && (
            <p style={{
              textAlign: 'center',
              marginTop: '15px',
              color: message.includes('incorrectos') ? 'red' : 'green'
            }}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
