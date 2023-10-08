// Contoh Program JavaScript dengan menggunakan if
let nilaipraktikum = 80;
if (nilaipraktikum >= 80) {
    console.log("Jika nilai " + nilaipraktikum + " maka praktikum dinyatakan lulus");
}

// Contoh Program JavaScript dengan menggunakan else
let nilaiFisikaKuantum = 79;
if (nilaiFisikaKuantum >= 80) {
    console.log("Jika nilai " + nilaiFisikaKuantum + " maka dinyatakan lulus");
} else {
    console.log("Jika nilai " + nilaiFisikaKuantum + " maka dinyatakan tidak lulus");
}

// Contoh Program JavaScript dengan menggunakan nested if
let Halaman = prompt("Mau masuk ke Halaman apa?");
if (Halaman == "Masuk Simari") {
    document.write("Anda ada di halaman Simari");   
} else if (Halaman == "Portal Akademik Mahasiswa") {
    document.write("Anda berada di halaman Portal Akademik Mahasiswa");
} else if (Halaman == "ELEARNING ULM") {
    document.write("Anda berada di halaman ELEARNING ULM");
} else {
    alert("Anda tidak memasukkan kata kunci")
}

// Contoh Program JavaScript dengan menggunakan switch case
let Pilihan = prompt("Silahkan masukkan kode mata pelajaran pilihan yang ingin anda pilih");
switch(Pilihan) {
    case '1' :
        alert("Anda memilih mata pelajaran Fisika dan Kimia");
        break;
    case '2' :
        alert("Anda memilih mata pelajaran Kimia dan Biologi");
        break;
    case '3' :
        alert("Anda memilih mata pelajaran Fisika dan Biologi ");
        break;
    default :
    alert("Kode yang anda masukkan salah");
}

// Contoh Program JavaScript dengan menggunakan for statement
let jumlahMataPelajaran = 13;
let MataPelajaran= 1;
let BelumLulus = 4;
for(MataPelajaran = 1; MataPelajaran <= BelumLulus; MataPelajaran++) {
    console.log("Mata pelajaran ke - " + MataPelajaran + " belum lulus")
}

// Contoh Program JavaScript dengan menggunakan while
let jumlahPraktikum = 13;
let praktikumke = 1;
while(praktikumke <= jumlahPraktikum) {
    console.log("Praktikum ke - " + praktikumke + " sudah selesai");
    praktikumke++;
}

// Contoh Program JavaScript dengan menggunakan do while
let bilanganBulat = 0;
do {
    console.log("Dari " + bilanganBulat);
    bilanganBulat++;
}
while(bilanganBulat <= 25);

// Contoh Program JavaScript dengan menggunakan function
function Gayapadahukum2newton(m, a) {
    let massabenda;
    let percepatanbenda;

    Gaya = m*a

    return Gaya;
}
console.log(Gayapadahukum2newton(200, 10));