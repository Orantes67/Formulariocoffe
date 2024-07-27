export class Empleados {
    #Celular;
    #Direccion;
    #Genero;
    #Codigopostal;
    #FechaNacimiento;

    setCelular(Celular) {
        this.#Celular = Celular;
    }

    setDireccion(Direccion) {
        this.#Direccion = Direccion;
    }

    setGenero(Genero) {
        this.#Genero = Genero;
    }

    setCodigopostal(Codigopostal) {
        this.#Codigopostal = Codigopostal;
    }

    setFechaNacimiento(FechaNacimiento) {
        this.#FechaNacimiento = FechaNacimiento;
    }

    getCelular() {
        return this.#Celular;
    }

    getDireccion() {
        return this.#Direccion;
    }

    getGenero() {
        return this.#Genero;
    }

    getCodigopostal() {
        return this.#Codigopostal;
    }

    getFechaNacimiento() {
        return this.#FechaNacimiento;
    }
}

