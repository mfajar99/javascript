// Mengekspor beberapa konstanta dan fungsi dari modul ini

// Mendeklarasikan dan mengekspor konstanta untuk nama depan, nama tengah, dan nama belakang
export const firstName = "Fajar";    // Konstanta untuk nama depan
export const middleName = "Muhammad"; // Konstanta untuk nama tengah
export const lastName = "Amir";       // Konstanta untuk nama belakang

// Mendeklarasikan dan mengekspor fungsi hello
export function hello() {
   // Fungsi ini mencetak pesan ke konsol
   console.log("Hello from Fajar"); // Menampilkan pesan "Hello from Fajar" di konsol
}

// Mendeklarasikan dan mengekspor kelas Person
export class Person {
   // Konstruktor kelas Person
   constructor() {
      // Menyimpan nama dalam properti instance
      this.name = "Fajar"; // Menyimpan nama "Fajar" dalam properti 'name'
   }
}
