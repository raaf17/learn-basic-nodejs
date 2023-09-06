const yargs = require('yargs');
const contacts = require('./contacts')

// yargs.command('add', 'Menambahkan contact baru', () => {}, (argv) => {
//   console.log(argv.nama);
// });

yargs.command({
  command: 'add',
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string',
    },
    noHP: {
      describe: 'Nomor handphone',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // const contact = {
    //   nama: argv.nama,
    //   email : argv.email,  // ini adalah cara menampilkan data yang diinput oleh user ke terminal dengan menggunakan
    //   noHP: argv.noHP,
    // };
    // console.log(contact);
    contacts.simpanContact(argv.nama, argv.email, argv.noHP);
  },
}).demandCommand();

// menampilkan daftar semua nama contact
yargs.command({
  command: 'list',
  describe: "menampilkan semua nama dan noHP pada contact",
  handler() {
    contacts.listContact()
  },
});

// menampilkan detail sebuah contact
yargs.command({
  command: 'detail',
  describe: "menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe:"nama yang ingin dicari",
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: 'delete',
  describe: "menghapus contact berdasarkan nama",
  builder: {
    nama: {
      describe:"nama yang ingin dicari",
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});

yargs.parse();

// const contacts = require('./contacts');

// const main = async() => {
//   const nama = await contacts.tulisPertanyaan('Masukkan Nama Anda : ');
//   const email = await contacts.tulisPertanyaan('Masukkan Email Anda : ');
//   const noHP = await contacts.tulisPertanyaan('Masukkan No HP Anda : ');

//   contacts.simpanContact(nama, email, noHP);
// };

// main();