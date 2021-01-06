export class Tabla {
    nombre: String ;
	apellido: String ;
	dni: String ;
	mail: String ;
	obraSocial: String ;
    marcaParticular: String ;
    
    constructor(nombre, apellido, dni, mail, obraSocial, marcaParticular){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.mail = mail;
        this.obraSocial = obraSocial;
        this.marcaParticular = marcaParticular;
    }
    
}