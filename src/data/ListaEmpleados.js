import { Empleados } from "./Empleados.js";
import { list } from "./Dependencias.js";

export class ListaEmpleados {
    addEmpleados(Celular, Direccion, Genero, Codigopostal, FechaNacimiento) {
        let empleados = new Empleados();
        empleados.setCelular(Celular);
        empleados.setDireccion(Direccion);
        empleados.setGenero(Genero);
        empleados.setCodigopostal(Codigopostal);
        empleados.setFechaNacimiento(FechaNacimiento);
        list.push(empleados);
        console.log('Empleado añadido a la lista:', empleados);
    }

    seeEmpleados(i) {
        let empleados = list.getElementAt(i);
        if (empleados != null) {
            return empleados;
        }
        return null;
    }

    countEmpleados() {
        return list.size();
    }
}

export const ListaEmpleadosInstance = new ListaEmpleados();
