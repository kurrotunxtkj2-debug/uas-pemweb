const materiData = {
    p1: { t: "Pertemuan 1: Pengenalan Struktur Data", c: "Struktur data adalah fondasi dalam pemrograman. Materi ini mencakup cara data disimpan di memori dan bagaimana mengukur efisiensi sebuah algoritma menggunakan Big O Notation." },
    p2: { t: "Pertemuan 2: Array (Larik)", c: "Array menyimpan elemen bertipe sama secara berurutan. Di sini kita belajar tentang alokasi memori statis dan cara mengakses data menggunakan indeks." },
    p3: { t: "Pertemuan 3: Struct & ADT", c: "Mempelajari pengelompokan variabel berbeda tipe (Struct) dan pembuatan tipe data abstrak (ADT) untuk menyederhanakan logika program." },
    p4: { t: "Pertemuan 4: Single Linked List", c: "Konsep dasar rantai node dinamis. Mempelajari pointer, head, tail, dan bagaimana menyisipkan node baru di tengah list." },
    p5: { t: "Pertemuan 5: Double Linked List", c: "Linked list dengan pointer ganda. Memungkinkan kita untuk berpindah antar data secara maju maupun mundur (Next & Previous)." },
    p6: { t: "Pertemuan 6: Stack (Tumpukan)", c: "Implementasi prinsip LIFO (Last In First Out). Sangat penting untuk fungsi rekursif dan algoritma pengecekan tanda kurung." },
    p7: { t: "Pertemuan 7: Queue (Antrian)", c: "Implementasi prinsip FIFO (First In First Out). Digunakan pada manajemen proses CPU dan antrian sistem printer." },
    p8: { t: "Pertemuan 8: UTS", c: "Evaluasi penguasaan materi struktur data linear (Array, Linked List, Stack, dan Queue) secara teori dan praktik." },
    p9: { t: "Pertemuan 9: Tree Dasar", c: "Struktur data non-linear hierarkis. Memahami konsep akar (root), anak (child), dan daun (leaf) pada sebuah pohon data." },
    p10: { t: "Pertemuan 10: Binary Search Tree", c: "Pohon biner khusus yang mempercepat proses pencarian. Aturannya: anak kiri harus lebih kecil dan anak kanan lebih besar dari induk." },
    p11: { t: "Pertemuan 11: Tree Traversal", c: "Cara mengunjungi semua node pada pohon data melalui teknik Pre-order, In-order, dan Post-order." },
    p12: { t: "Pertemuan 12: Graph (Graf)", c: "Representasi hubungan antar objek yang kompleks. Digunakan dalam sistem GPS untuk mencari rute terpendek antar kota." },
    p13: { t: "Pertemuan 13: Searching Algorithm", c: "Mempelajari algoritma pencarian Linear Search untuk data acak dan Binary Search untuk pencarian super cepat pada data terurut." },
    p14: { t: "Pertemuan 14: Sorting Algorithm", c: "Mempelajari berbagai cara mengurutkan data secara sistematis, mulai dari Bubble Sort hingga Quick Sort yang lebih efisien." }
};

function loadContent(id) {
    const data = materiData[id];
    const display = document.getElementById('display-area');
    const titleHeader = document.getElementById('current-title');
    const menuItems = document.querySelectorAll('#menu-list li');

    if(data) {
        titleHeader.innerText = data.t;
        display.innerHTML = `
            <div class="card">
                <small style="color:var(--accent-color); font-weight:600; text-transform:uppercase">Pertemuan ${id.replace('p','')}</small>
                <h1 style="margin-top:10px">${data.t}</h1>
                <div class="info-banner">
                    <b>Nama Mahasiswa:</b> Kurrotun <br>
                    <b>Mata Kuliah:</b> Struktur Data
                </div>
                <p>${data.c}</p>
                <h3 style="margin-top:25px; margin-bottom:15px">Pokok Bahasan:</h3>
                <ul style="margin-left: 20px; color:#475569; line-height: 2">
                    <li>Konsep Dasar dan Teori ${data.t}</li>
                    <li>Operasi Utama pada Data</li>
                    <li>Implementasi dan Contoh Kasus Nyata</li>
                </ul>
            </div>
        `;

        // Tandai menu yang aktif
        menuItems.forEach(li => {
            li.classList.remove('active');
            if(li.getAttribute('onclick').includes(id)) li.classList.add('active');
        });
        
        // Scroll ke atas saat ganti materi
        document.querySelector('.content-scroll').scrollTop = 0;
    }
}

// Jalankan materi pertama kali
window.onload = () => loadContent('p1');