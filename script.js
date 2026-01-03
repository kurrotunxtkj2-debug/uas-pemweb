const materiDatabase = {
    p1: { t: "Pertemuan 1: Pengenalan Struktur Data", d: "Halo, saya Kurrotun. Di pertemuan awal ini kita mempelajari dasar organisasi data agar aplikasi lebih ringan dan cepat." },
    p2: { t: "Pertemuan 2: Array (Larik)", d: "Mempelajari cara menyimpan data dalam deretan memori yang berurutan. Sangat efektif untuk data dengan jumlah tetap." },
    p3: { t: "Pertemuan 3: Struct & ADT", d: "Membahas pembuatan tipe data kustom untuk menampung berbagai macam informasi dalam satu paket variabel." },
    p4: { t: "Pertemuan 4: Single Linked List", d: "Memasuki konsep data dinamis di mana setiap data menyimpan alamat data berikutnya menggunakan pointer." },
    p5: { t: "Pertemuan 5: Double Linked List", d: "Versi Linked List yang lebih canggih karena bisa melompat maju maupun mundur antar node." },
    p6: { t: "Pertemuan 6: Stack (Tumpukan)", d: "Prinsip LIFO (Last In First Out). Terakhir masuk, pertama keluar. Digunakan pada fitur 'Kembali' di browser." },
    p7: { t: "Pertemuan 7: Queue (Antrian)", d: "Prinsip FIFO (First In First Out). Pertama datang, pertama dilayani. Sangat berguna untuk sistem antrian bank." },
    p8: { t: "Pertemuan 8: UTS", d: "Evaluasi tengah semester untuk mengukur sejauh mana pemahaman Kurrotun mengenai materi linear." },
    p9: { t: "Pertemuan 9: Tree (Pohon)", d: "Struktur data hierarkis. Di sini kita belajar tentang akar, cabang, dan daun dalam sebuah data." },
    p10: { t: "Pertemuan 10: Binary Search Tree", d: "Strategi pohon biner terurut untuk mempercepat proses pencarian data hingga ribuan kali lipat." },
    p11: { t: "Pertemuan 11: Tree Traversal", d: "Cara menelusuri isi pohon data melalui jalur Pre-order, In-order, dan Post-order." },
    p12: { t: "Pertemuan 12: Graph (Graf)", d: "Model jaringan yang menghubungkan titik-titik lokasi, seperti jalur peta atau jaringan pertemanan." },
    p13: { t: "Pertemuan 13: Searching", d: "Teknik mencari data dengan cara Linear (urut) atau Binary (bagi dua)." },
    p14: { t: "Pertemuan 14: Sorting", d: "Teknik merapikan data agar terurut dari kecil ke besar menggunakan algoritma Bubble atau Quick Sort." }
};

function loadMateri(id) {
    const materi = materiDatabase[id];
    const display = document.getElementById('content-display');
    const title = document.getElementById('top-title');
    const menuItems = document.querySelectorAll('.nav-item');

    if(materi) {
        title.innerText = materi.t;
        display.innerHTML = `
            <div class="card-materi">
                <span style="color:var(--blue-primary); font-weight:700; font-size:0.8rem">MATERI KULIAH</span>
                <h1 style="margin-top:10px">${materi.t}</h1>
                <p>${materi.d}</p>
                <div style="background:#f1f5f9; padding:20px; border-radius:15px">
                    <h4 style="margin-bottom:10px">Apa yang dipelajari:</h4>
                    <ul class="materi-list">
                        <li>Implementasi logika dalam pemrograman</li>
                        <li>Analisis efisiensi algoritma</li>
                        <li>Studi kasus nyata di industri</li>
                    </ul>
                </div>
            </div>
        `;

        // Atur menu aktif
        menuItems.forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('onclick').includes(id)) item.classList.add('active');
        });

        // Scroll otomatis ke atas konten saat ganti materi
        if(window.innerWidth > 768) {
            document.querySelector('.scroll-area').scrollTop = 0;
        } else {
            window.scrollTo({ top: document.querySelector('.main-body').offsetTop - 20, behavior: 'smooth' });
        }
    }
}

// Inisialisasi P1 saat loading
window.onload = () => loadMateri('p1');