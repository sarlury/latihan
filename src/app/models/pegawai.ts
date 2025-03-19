export interface Pegawai {
    nama: string;
    nomorIndukPegawai: string;
    nik: number;
    jabatan: string;
    gaji?: number;
    tunjangan: [];
    tugas: {};
    divisi: any;
}

// class UpdatePegawai {
//     payload: Pegawai = {
//         nama: 'Jemy',
//         nomorIndukPegawai:'MAP123',
//         nik: 12312321312,
//         jabatan: 'Staff',
//         tunjangan: [],
//         tugas: {},
//         divisi: 'keuangan'
//     }
    
// }