class Libro {
    constructor(titulo, autor, anio) {
      this.titulo = titulo;
      this.autor = autor;
      this.anio = anio;
    }
  
    resumen() {
      console.log(`'${this.titulo}' de ${this.autor}, publicado en ${this.anio}.`);
    }
  }
  
  // Ejemplo de uso
  const libro1 = new Libro('Cien años de soledad', 'Gabriel García Márquez', 1967);
  libro1.resumen();  // Output: 'Cien años de soledad' de Gabriel García Márquez, publicado en 1967.
  