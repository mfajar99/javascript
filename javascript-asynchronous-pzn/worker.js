// Menambahkan event listener untuk menangani pesan yang diterima dari thread utama
addEventListener("message", function (message) {
   // Mengambil data dari pesan yang diterima
   const total = message.data;

   // Melakukan loop dari 0 hingga total-1
   for (let i = 0; i < total; i++) {
      // Mengirimkan angka i ke thread utama
      postMessage(i);
   }
});
