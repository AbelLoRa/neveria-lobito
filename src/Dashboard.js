import React, { useState } from 'react';
import Modal from './Modal';
import Nieve1 from './Nieve1.png';
import NuevaVentaForm from './NuevaVentaForm';


function Dashboard({ user, onLogout }) {
  //Opciones para el switch case
  const options = [
    { label: 'Nueva Venta', color: '#FFC0CB' },
    { label: 'Inventario', color: '#D2691E' },
    { label: 'Reportes', color: '#FFF8DC' },
    { label: 'Agregar Producto', color: '#FFC0CB' },
    { label: 'Dar de Baja Producto', color: '#D2691E' },
    { label: 'Reabastecer Insumos', color: '#FFF8DC' },
  ];
//Constante usada para gestionar el modal que es el form reusable
  const [activeOption, setActiveOption] = useState(null);

  //Prueba de productos
  const productos = [
    { nombre: 'Paleta de limón', precio: 10 },
    { nombre: 'Cubeta vainilla (1kg)', precio: 110 },
    { nombre: 'Cubeta napolitana (1kg)', precio: 120 },
    { nombre: 'Paleta de fresa', precio: 12 },
    { nombre: 'Paleta de galleta', precio: 15 },
    { nombre: 'Bolis de rompope', precio: 8 },
  ];

  // Estados movidos aquí para 'Nueva Venta'
  const [productoSeleccionado, setProductoSeleccionado] = useState(productos[0].nombre);
  const [cantidad, setCantidad] = useState(1);

  const renderForm = label => {
    switch (label) {
      case 'Inventario':           //Casos 
        return (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '8px' }}>Producto</th>
                <th style={{ borderBottom: '1px solid #ccc', textAlign: 'right', padding: '8px' }}>Cantidad</th>
              </tr>
            </thead>
            <tbody> {/*Tabla de productos de ejemplo */}
              <tr><td style={{ padding: '8px' }}>Paletas de limón</td><td style={{ padding: '8px', textAlign: 'right' }}>15</td></tr>
              <tr><td style={{ padding: '8px' }}>Cubetas de Nieve de vainilla (1 kg)</td><td style={{ padding: '8px', textAlign: 'right' }}>3</td></tr>
              <tr><td style={{ padding: '8px' }}>Cubetas de Nieve napolitana (1 kg)</td><td style={{ padding: '8px', textAlign: 'right' }}>2</td></tr>
              <tr><td style={{ padding: '8px' }}>Paletas de fresa</td><td style={{ padding: '8px', textAlign: 'right' }}>6</td></tr>
              <tr><td style={{ padding: '8px' }}>Paletas de galleta</td><td style={{ padding: '8px', textAlign: 'right' }}>8</td></tr>
              <tr><td style={{ padding: '8px' }}>Bolis de rompope</td><td style={{ padding: '8px', textAlign: 'right' }}>7</td></tr>
            </tbody>
          </table>
        );

      case 'Nueva Venta':
        return <NuevaVentaForm productos={productos} />;


      case 'Reportes':
        return (
          <form>
            <label>Periodo:<br />
              <select style={{ width: '100%' }}>
                <option>Día</option>
                <option>Semana</option>
                <option>Mes</option>
              </select>
            </label>
            <button type="submit">Generar</button>
          </form>
        );
      case 'Agregar Producto':
        return (
          <form>
            <label>Nombre:<br /><input type="text" style={{ width: '100%' }} /></label>
            <label>Precio:<br /><input type="number" style={{ width: '100%' }} /></label>
            <button type="submit">Guardar</button>
          </form>
        );
      case 'Dar de Baja Producto':
        return (
          <form>
            <label>Selecciona producto:<br />
              <select style={{ width: '100%' }}>
                <option>Producto A</option>
              </select>
            </label>
            <button type="submit">Dar de baja</button>
          </form>
        );
      case 'Reabastecer Insumos':
        return (
          <form>
            <label>Producto:<br /><input type="text" style={{ width: '100%' }} /></label>
            <label>Cantidad:<br /><input type="number" style={{ width: '100%' }} /></label>
            <button type="submit">Reabastecer</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#b3e5fc', fontFamily: 'Arial' }}>
      {/* Panel izquierdo */}
      <div style={{ width: '300px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', borderRight: '2px solid #90caf9' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>Menu de opciones</h2>
          <button
            onClick={onLogout}
            style={{
            backgroundColor: '#FF69B4',  // rosa fresa vibrante
            color: 'white',
            border: 'none',
            padding: '4px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#FF85C1'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF69B4'}
          >
          Cerrar
        </button>
      </div>
          {options.map(opt => {
          let hoverColor = opt.color;

            // Colores para cuando el mouse este sobre ellos
          switch (opt.color) {
          case '#FFC0CB': // fresa
          hoverColor = '#FF85C1';
          break;
          case '#D2691E': // café
          hoverColor = '#A0522D';
          break;
          case '#FFF8DC': // vainilla
            hoverColor = '#FFF0B3';
          break;
          default:
          hoverColor = opt.color;
          }

          return (
          <button
            key={opt.label}
            onClick={() => setActiveOption(opt.label)}
            style={{
            backgroundColor: opt.color,
            border: 'none',
            padding: '12px',
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = hoverColor}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = opt.color}
        >
        {opt.label}
        </button>
        );
      })}

      </div>

      {/* Panel derecho */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Nieve1} alt="Helado Napolitano" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '12px' }} />
      </div>

      {/* Modal */}
      {activeOption && (
        <Modal title={activeOption} onClose={() => setActiveOption(null)}>
          {renderForm(activeOption)}
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;
