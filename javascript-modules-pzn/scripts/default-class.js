// Mengekspor kelas anonim secara default
export default class {

   // Konstruktor kelas anonim
   constructor(name) {
      // Menyimpan nama dalam properti instance
      this.name = name;
   }

   // Metode untuk menyapa dengan nama
   sayHi() {
      console.log(`Hi, my name is ${this.name}`);
   }

}
