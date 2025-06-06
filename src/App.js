import React, { useState } from 'react';

// Componente Modal que es un form reusable
function Modal({ title, children, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '400px',
        maxWidth: '90%',
        padding: '20px',
        position: 'relative'
      }}>
        {/* Botón de cerrar la ventana emergente */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer'
          }}
        >
          ×
        </button>

        {/* Título */}
        <h3 style={{ marginTop: 0, marginBottom: '20px' }}>{title}</h3>


        {children}
      </div>
    </div>
  );
}

// Dashboard con menú de opciones a la izquierda y imagen a la derecha
function Dashboard({ user, onLogout }) {
  const options = [
    { label: 'Nueva Venta',          color: '#FFC0CB' },
    { label: 'Inventario',           color: '#D2691E' },
    { label: 'Reportes',             color: '#FFF8DC' },
    { label: 'Agregar Producto',     color: '#FFC0CB' },
    { label: 'Dar de Baja Producto', color: '#D2691E' },
    { label: 'Reabastecer Insumos',  color: '#FFF8DC' },
  ];

  // Estado para controlar el modal
  const [activeOption, setActiveOption] = useState(null);

  // Switch case para seleccion de opciones
  const renderForm = label => {
    switch (label) {
      case 'Inventario':
        // Tabla de ejemplo
        return (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '8px' }}>Producto</th>
                <th style={{ borderBottom: '1px solid #ccc', textAlign: 'right', padding: '8px' }}>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px' }}>Paletas de limón</td>
                <td style={{ padding: '8px', textAlign: 'right' }}>15</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Cubetas de Nieve de vainilla (1 kg)</td>
                <td style={{ padding: '8px', textAlign: 'right' }}>3</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Cubetas de Nieve napolitana (1 kg)</td>
                <td style={{ padding: '8px', textAlign: 'right' }}>2</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Paletas de fresa</td>
                <td style={{ padding: '8px', textAlign: 'right' }}>6</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Paletas de galleta</td>
                <td style={{ padding: '8px', textAlign: 'right' }}>8</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Bolis de rompope</td>
                <td style={{ padding: '8px', textAlign: 'right' }}>7</td>
              </tr>
            </tbody>
          </table>
        );
      case 'Nueva Venta':
        return (
          <form>
            {/* Opcion nueva venta */}
            <label>
              Producto:<br />
              <input type="text" placeholder="Nombre del producto" style={{ width: '100%', marginBottom: '10px' }} />
            </label>
            <label>
              Cantidad:<br />
              <input type="number" placeholder="0" style={{ width: '100%', marginBottom: '10px' }} />
            </label>
            <button type="submit" style={{ padding: '8px 16px' }}>Registrar</button>
          </form>
        );
      case 'Reportes':
        return (
          <form>
            {/* Opcion generar reporte */}
            <label>
              Periodo:<br />
              <select style={{ width: '100%', marginBottom: '10px' }}>
                <option>Día</option>
                <option>Semana</option>
                <option>Mes</option>
                <option>Año</option>
              </select>
            </label>
            <button type="submit" style={{ padding: '8px 16px' }}>Generar</button>
          </form>
        );
      case 'Agregar Producto':
        return (
          <form>
            {/* Opcion dar de alta un producto */}
            <label>
              Nombre:<br />
              <input type="text" style={{ width: '100%', marginBottom: '10px' }} />
            </label>
            <label>
              Precio:<br />
              <input type="number" style={{ width: '100%', marginBottom: '10px' }} />
            </label>
            <button type="submit" style={{ padding: '8px 16px' }}>Guardar</button>
          </form>
        );
      case 'Dar de Baja Producto':
        return (
          <form>
            {/* Opcion dar de baja un producto */}
            <label>
              Selecciona producto:<br />
              <select style={{ width: '100%', marginBottom: '10px' }}>
                <option>Producto A</option>
                <option>Producto B</option>
              </select>
            </label>
            <button type="submit" style={{ padding: '8px 16px' }}>Dar de baja</button>
          </form>
        );
      case 'Reabastecer Insumos':
        return (
          <form>
            {/* Opcion reabastecer insumos */}
            <label>
              Producto:<br />
              <input type="text" placeholder="Nombre del producto" style={{ width: '100%', marginBottom: '10px' }} />
            </label>
            <label>
              Cantidad a agregar:<br />
              <input type="number" style={{ width: '100%', marginBottom: '10px' }} />
            </label>
            <button type="submit" style={{ padding: '8px 16px' }}>Reabastecer</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#b3e5fc',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Panel izquierdo con las opciones */}
      <div style={{
        width: '300px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        borderRight: '2px solid #90caf9'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', color: '#333' }}>Menu de opciones</h2>
          <button onClick={onLogout} style={{
            marginLeft: 'auto',
            backgroundColor: '#f06292',
            color: 'white',
            padding: '6px 12px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>Cerrar</button>
        </div>

        {/* colores napolitanos */}
        {options.map(opt => (
          <button
            key={opt.label}
            onClick={() => setActiveOption(opt.label)}
            style={{
              padding: '16px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: opt.color,
              color: '#333',
              textAlign: 'left',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Panel derecho con imagen de helado */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <img
          src="/Nieve1.png"
          alt="Helado Napolitano"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: '12px'
          }}
        />
      </div>

      {/* Modal que aparece según la opción activa */}
      {activeOption && (
        <Modal title={activeOption} onClose={() => setActiveOption(null)}>
          {renderForm(activeOption)}
        </Modal>
      )}
    </div>
  );
}

// Estados para login
function App() {
  const [user, setUser]       = useState('');
  const [pass, setPass]       = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Usuarios de ejemplo
  const users = [
    { username: 'abel',   password: '1111' },
    { username: 'admin', password: 'a' },
  ];

  // Función para validar login
  const handleLogin = () => {
    const valid = users.find(u => u.username === user && u.password === pass);
    if (valid) {
      setMessage(`¡Bienvenido, ${user}!`);
      setIsValid(true);
    } else {
      setMessage('Usuario o contraseña incorrectos');
      setIsValid(false);
    }
  };

  // Inicio rapido
  const handleQuickLogin = () => {
    setUser('admin');
    setPass('a');
    setMessage('');
  };

  // Cerrar sesión
  const handleLogout = () => {
    setUser('');
    setPass('');
    setMessage('');
    setIsValid(false);
  };

  // Si ya está autenticado, mostrar Dashboard
  if (isValid) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  // Si no, se queda en login
  return (
    <div style={{
      backgroundColor: '#b3e5fc',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px',
        borderBottom: '2px solid #90caf9',
        paddingBottom: '10px'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          Nevería Hermanos Lobito
        </h1>
        <button onClick={handleQuickLogin} style={{
          backgroundColor: '#f06292',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Inicio rápido
        </button>
      </header>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          width: '300px'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Iniciar Sesión</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={user}
            onChange={e => setUser(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '8px',
              border: '1px solid #ccc'
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={pass}
            onChange={e => setPass(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              borderRadius: '8px',
              border: '1px solid #ccc'
            }}
          />
          <button onClick={handleLogin} style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#f06292',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Entrar
          </button>
          {message && (
            <p style={{
              textAlign: 'center',
              marginTop: '15px',
              color: isValid ? 'green' : 'red'
            }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
