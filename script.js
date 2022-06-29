// Object Literals
// Bisa mendeklarasikan 1 object 1 data

// let mahasiswa = {
//   nama: "Sulthan",
//   health: " 90",
//   makan: function (porsi) {
//     this.health += porsi;
//     console.log(`Sekaran health ${this.nama} bertambah ${this.health}`);
//   },
//   main: function (jam) {
//     this.health -= jam;
//     console.log(`Sekarang health ${this.nama} tersisa ${this.health}`);
//   },
// };
// let mahasiswa2 = {
//   nama: "Dzawwadi",
//   health: " 100",
//   makan: function (porsi) {
//     this.health += porsi;
//     console.log(`Sekaran health ${nama} bertambah ${health}`);
//   },
//   main: function (jam) {
//     this.health -= jam;
//     console.log(`Sekarang health ${nama} tersisa ${health}`);
//   },
// };

// Function Declaration
// Harus Menggunakan return

// function Mahasiswa(nama, health) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.health = health;
//   mahasiswa.makan = function (porsi) {
//     this.health += porsi;
//     console.log(`Sekarang health ${this.nama} menjadi ${this.health}`);
//   };
//   mahasiswa.main = function (jam) {
//     this.health -= jam;
//     console.log(`Sekarang health ${this.nama} tersisa ${this.health}`);
//   };

//   return mahasiswa;
// }

// let sulthan = Mahasiswa("sulthan", 18);

// Constructor object
// Menggunakan new untuk menginstansi objek baru
function Mahasiswa(nama, health) {
  this.nama = nama;
  this.health = health;

  this.makan = function (porsi) {
    this.health += porsi;
    console.log(`Sekarang health ${this.nama} bertambah ${this.health}`);
  };
  this.main = function (jam) {
    this.health -= jam;
    console.log(`Sekarang health ${this.nama} tersisa ${this.health}`);
  };
}

let sulthan = new Mahasiswa("Sulthan", 10);
