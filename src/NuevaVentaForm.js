// NuevaVentaForm.jsx
import React, { useState } from 'react';

function NuevaVentaForm({ productos }) {
  // Estados para 'Nueva Venta'
  const [productoSeleccionado, setProductoSeleccionado] = useState(productos[0].nombre);
  const [cantidad, setCantidad] = useState(1);

  const producto = productos.find(p => p.nombre === productoSeleccionado);
  const subtotal = producto.precio * cantidad;
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  return (
    <form>
      {/* Nueva venta */}
      <label>
        Producto:<br />
        <select
          value={productoSeleccionado}
          onChange={e => setProductoSeleccionado(e.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        >
          {productos.map(p => (
            <option key={p.nombre} value={p.nombre}>{p.nombre}</option>
          ))}
        </select>
      </label>
      <label>
        Cantidad:<br />
        <input
          type="number"
          min="1"
          value={cantidad}
          onChange={e => setCantidad(Number(e.target.value))}
          style={{ width: '100%', marginBottom: '20px' }}
        />
      </label>

      {/* Ticket */}
      <div style={{
        backgroundColor: '#f8f8f8',
        padding: '15px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontFamily: 'monospace'
      }}>
        <h4 style={{ textAlign: 'center', marginTop: 0 }}>Nevería Hermanos Lobito</h4>
        <p>Producto: {producto.nombre}</p>
        <p>Precio unitario: ${producto.precio.toFixed(2)}</p>
        <p>Cantidad: {cantidad}</p>
        <hr />
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>IVA (16%): ${iva.toFixed(2)}</p>
        <p style={{ fontWeight: 'bold' }}>Total: ${total.toFixed(2)}</p>
      </div>
    </form>
  );
}

export default NuevaVentaForm;
