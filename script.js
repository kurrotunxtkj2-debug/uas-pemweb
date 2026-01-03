const materiDatabase = {
    p1: { 
        t: "Struktur Data Dasar", 
        i: "fas fa-sitemap",
        c: "Struktur data adalah cara mengatur dan menyimpan data di dalam komputer agar dapat digunakan secara efisien. Analisis algoritma diperlukan untuk mengukur kinerja program." 
    },
    p2: { 
        t: "Array (Larik)", 
        i: "fas fa-table-list",
        c: "Array adalah struktur data linear yang menyimpan elemen dengan tipe data yang sama dalam urutan tertentu. Penggunaan indeks memudahkan akses data secara langsung." 
    },
    p3: { 
        t: "Struct & ADT", 
        i: "fas fa-box-archive",
        c: "Struct memungkinkan kita membuat tipe data baru yang menggabungkan berbagai tipe variabel. ADT memisahkan logika data dari implementasi teknisnya." 
    },
    p4: { 
        t: "Single Linked List", 
        i: "fas fa-link",
        c: "Sebuah urutan node di mana setiap node berisi data dan pointer yang menunjuk ke node berikutnya. Sangat efisien untuk manajemen memori dinamis." 
    },
    p5: { 
        t: "Double Linked List", 
        i: "fas fa-arrows-left-right",
        c: "Sama seperti linked list, namun memiliki dua pointer (Next dan Previous). Hal ini memungkinkan navigasi data secara maju maupun mundur." 
    },
    p6: { 
        t: "Stack (Tumpukan)", 
        i: "fas fa-layer-group",
        c: "Menggunakan prinsip LIFO (Last In First Out). Data yang terakhir masuk adalah yang pertama kali akan dikeluarkan dari tumpukan." 
    },
    p7: { 
        t: "Queue (Antrian)", 
        i: "fas fa-people-arrows",
        c: "Menggunakan prinsip FIFO (First In First Out). Objek yang pertama masuk akan menjadi objek yang pertama kali diproses oleh sistem." 
    },
    p8: { 
        t: "Evaluasi UTS", 
        i: "fas fa-file-signature",
        c: "Ujian Tengah Semester untuk menguji pemahaman mahasiswa tentang struktur data linear dan implementasi dasarnya dalam bahasa pemrograman." 
    },
    p9: { 
        t: "Non-Linear: Tree", 
        i: "fas fa-tree",
        c: "Struktur data hierarkis yang terdiri dari node-node yang terhubung. Memiliki satu akar (root) dan node anak di bawahnya." 
    },
    p10: { 
        t: "Binary Search Tree (BST)", 
        i: "fas fa-diagram-project",
        c: "Pohon biner khusus di mana nilai pada cabang kiri selalu lebih kecil dan cabang kanan selalu lebih besar dari nilai induknya." 
    },
    p11: { 
        t: "Tree Traversal", 
        i: "fas fa-route",
        c: "Metode kunjungan node pada pohon untuk memproses data. Terdapat tiga teknik utama: Pre-order, In-order, dan Post-order." 
    },
    p12: { 
        t: "Graph (Graf)", 
        i: "fas fa-circle-nodes",
        c: "Representasi hubungan antar objek (vertex) melalui jalur (edge). Digunakan untuk pemodelan jaringan sosial dan sistem navigasi." 
    },
    p13: { 
        t: "Searching", 
        i: "fas fa-search",
        c: "Algoritma untuk menemukan lokasi data. Linear Search memindai satu per satu, sementara Binary Search mencari dengan membagi dua data terurut." 
    },
    p14: { 
        t: "Sorting", 
        i: "fas fa-sort-amount-up",
        c: "Proses pengurutan data acak menjadi teratur. Contoh metodenya adalah Bubble Sort, Selection Sort, dan Quick Sort." 
    }
};

function loadMateri(id) {
    const materi = materiDatabase[id];
    const contentArea = document.getElementById('content-area');
    const menuItems = document.querySelectorAll('.menu li');

    contentArea.innerHTML = `
        <div class="card">
            <h3>Pertemuan ${id.replace('p', '')}</h3>
            <h1>${materi.t}</h1>
            
            <div class="visual-box">
                <i class="${materi.i}" style="font-size: 80px; color: #2563eb; margin-bottom: 15px;"></i>
                <p style="color: #64748b;">Visualisasi Konsep Materi</p>
            </div>

            <div class="explanation-text">
                <p><b>Penjelasan Materi:</b></p>
                <p>${materi.c}</p>
                <br>
                <p>Mahasiswa: <b>Kurrotun</b></p>
            </div>
        </div>
    `;

    menuItems.forEach(li => {
        li.classList.remove('active');
        if(li.getAttribute('onclick').includes(id)) li.classList.add('active');
    });
    
    document.querySelector('.container').scrollTop = 0;
}

window.onload = () => loadMateri('p1');