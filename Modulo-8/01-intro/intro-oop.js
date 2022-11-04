const personaUno = {
    nombre: "Javi",
    edad: 35,
    email: "javi@gmail.com",
    materias: ["Javascript", "React"],
    decirEdad: function () {
        if (this.edad < 18) {
            return "Lo siento, no puedo decir mi edad";
        }
        return this.edad;
    },
};

const personaDos = {
    nombre: "Caro",
    edad: 32,
    email: "caro@gmail.com",
    materias: ["CSS", "Python"],
    decirEdad: function () {
        if (this.edad < 18) {
            return "Lo siento, no puedo decir mi edad";
        }
        return this.edad;
    },
};

const personaTres = {
    nombre: "Jane",
    edad: 25,
    email: "jane@gmail.com",
    materias: ["Javascript", "React"],
    decirEdad: function () {
        if (this.edad < 18) {
            return "Lo siento, no puedo decir mi edad";
        }
        return this.edad;
    },
};

/*
    POO
    - Crear moldes es el objetivo #1
    - Un molde es algo que nos permite crear un objeto
    - El molde nos permite que todos los objetos tengan las mismas particularidades
    - Permite crear objetos que puedan ejecutar funcionalidades
    - Tres pilares fundamentales de la POO:
        - Abstracción
        - Polimorfismo
            - Ave
            - Avión
            - Superman 
        - Herencia
    - Principios S.O.L.I.D.
*/
