// Mengekspor kelas Person yang menyimpan nama dan menyediakan metode untuk menyapa
export class Person {
   // Konstruktor kelas Person
   constructor(name) {
      // Menyimpan nama dalam properti instance
      this.name = name;
   }

   // Metode untuk menyapa dengan nama yang diberikan
   sayHello(name) {
      console.log(`Hello ${name}, my name is ${this.name}`);
   }
}
