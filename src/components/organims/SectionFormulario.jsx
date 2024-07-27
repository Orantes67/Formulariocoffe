import { useState } from "react";
import { ListaEmpleadosInstance } from "../../data/ListaEmpleados.js";
import Title from "../atomos/Title";
import Button from "../atomos/Button";
import Formulario from "../molecules/Formulario.jsx";

function SectionFormulario() {
  const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  const [genero, setGenero] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const handleSave = () => {
    ListaEmpleadosInstance.addEmpleados(celular, direccion, genero, codigoPostal, fechaNacimiento);

    console.log('Empleado agregado:', {
      celular,
      direccion,
      genero,
      codigoPostal,
      fechaNacimiento
    });
    ListaEmpleadosInstance.list.imprimir();

  };

  return (
    <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8 text-4xl text-center">
        <Title text="Formulario para vacantes" />
      </div>
      <Formulario type="tel" placeholder="961456575" label="Número de celular" value={celular} onChange={e => setCelular(e.target.value)} />
      <Formulario type="text" placeholder="Calle Suchiapa" label="Dirección" value={direccion} onChange={e => setDireccion(e.target.value)} />
      <Formulario type="radio" label="Hombre" value="Hombre" checked={genero === 'Hombre'} onChange={e => setGenero(e.target.value)} />
      <Formulario type="radio" label="Mujer" value="Mujer" checked={genero === 'Mujer'} onChange={e => setGenero(e.target.value)} />
      <Formulario type="number" placeholder="29000" label="Código Postal" value={codigoPostal} onChange={e => setCodigoPostal(e.target.value)} />
      <Formulario type="date" label="Fecha de nacimiento" value={fechaNacimiento} onChange={e => setFechaNacimiento(e.target.value)} />
      <div className="text-center">
        <Button title="Guardar información" onClick={handleSave} />
      </div>
    </div>
  );
}

export default SectionFormulario;
