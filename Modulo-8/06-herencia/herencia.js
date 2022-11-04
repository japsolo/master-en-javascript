class Persona {
    #nombre;
    #apellido;
    #edad;

    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    getNombre() {
        return this.#nombre;
    }

    getApellido() {
        return this.#apellido;
    }

    getNombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(edad) {
        this.#edad = edad;
    }
}

class Estudiante extends Persona {
    #curso;

    constructor(nombre, apellido) {
        super(nombre, apellido);
    }

    getCurso() {
        return this.#curso;
    }

    setCurso(curso) {
        if (curso instanceof Curso) {
            this.#curso = curso;
        }
    }
}

class Curso {
    #nombre;
    #materias = [];

    constructor(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

    getMaterias() {
        return this.#materias;
    }

    setMateria(unaMateria) {
        this.#materias.push(unaMateria);
    }
}

const javiHerrera = new Estudiante("Javi", "Herrera");
const cursoFrontend = new Curso("Frontend con JS");

cursoFrontend.setMateria({ lenguaje: "HTML", cargaHoraria: 24 });
cursoFrontend.setMateria({ lenguaje: "CSS", cargaHoraria: 32 });
cursoFrontend.setMateria({ lenguaje: "Javascript", cargaHoraria: 680 });

javiHerrera.setCurso(cursoFrontend);

console.log(`Hola, mi nombre es ${javiHerrera.getNombreCompleto()}`);
const cursoJavi = javiHerrera.getCurso();
console.log(`Estoy cursando ${cursoJavi.getNombre()}`);
const materiasCursoJavi = cursoJavi.getMaterias();
for (const unaMateria of materiasCursoJavi) {
    console.log(`La materia ${unaMateria.lenguaje} tiene una carga horaria de ${unaMateria.cargaHoraria} horas.`);
}
