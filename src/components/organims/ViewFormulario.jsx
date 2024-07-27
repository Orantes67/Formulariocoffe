import { useState } from "react";
import { ListaEmpleadosInstance } from "../../data/ListaEmpleados.js";
import Button from "../atomos/Button.jsx";
import FormularioData from "../molecules/FormularioData.jsx";

let i = -1;

function ViewFormulario() {
    let empleadoInicial = {
        celular: "",
        direccion: "",
        genero: "",
        codigoPostal: "",
        fechaNacimiento: ""
    };

    const [empleado, setEmpleado] = useState(empleadoInicial);

    const mostrarEmpleado = () => {
        i++;
        console.log('Intentando mostrar empleado en índice:', i);
        console.log('Número de empleados:', ListaEmpleadosInstance.countEmpleados());

        if (i < ListaEmpleadosInstance.countEmpleados()) {
            const empleadoData = ListaEmpleadosInstance.seeEmpleados(i);
            if (empleadoData) {
                setEmpleado({
                    celular: empleadoData.getCelular(),
                    direccion: empleadoData.getDireccion(),
                    genero: empleadoData.getGenero(),
                    codigoPostal: empleadoData.getCodigopostal(),
                    fechaNacimiento: empleadoData.getFechaNacimiento()
                });
                console.log('Empleado mostrado:', empleadoData);
            } else {
                console.log('No se encontró ningún empleado en el índice:', i);
            }
        } else {
            i = -1;  
            setEmpleado(empleadoInicial);
        }
    };

    return (
        <div id="formulario_section">
            <Button title="Mostrar información" onClick={mostrarEmpleado} />
            <FormularioData text={`Celular: ${empleado.celular}`} />
            <FormularioData text={`Dirección: ${empleado.direccion}`} />
            <FormularioData text={`Género: ${empleado.genero}`} />
            <FormularioData text={`Código Postal: ${empleado.codigoPostal}`} />
            <FormularioData text={`Fecha de Nacimiento: ${empleado.fechaNacimiento}`} />
        </div>
    );
}

export default ViewFormulario;
