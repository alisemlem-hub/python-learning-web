// Day 3 - Operator (Operators) - Integrated Version
// Combines Asabeneh's content with PyLearn30 style

export const day3UpdatedContent = {
  day: 3,
  title: "Operator",
  titleEn: "Operators",
  icon: "🔢",
  color: "#FF6B6B",
  topics: ["Boolean", "Assignment Operators", "Arithmetic Operators", "Comparison Operators", "Identity & Membership", "Logical Operators"],
  sections: [
    {
      id: "boolean",
      title: "Boolean - Fondasi Pengambilan Keputusan",
      content: `<p>Tipe data <strong>Boolean</strong> hanya memiliki dua nilai: <code>True</code> (benar) dan <code>False</code> (salah). Bayangkan seperti <strong>saklar lampu</strong> — hanya bisa nyala (True) atau mati (False). Ini adalah fondasi dari semua pengambilan keputusan dalam pemrograman.</p><p><strong>Poin Penting:</strong> Huruf pertama HARUS kapital (<code>True</code> dan <code>False</code>, bukan <code>true</code> dan <code>false</code>). Python sangat ketat tentang hal ini.</p><pre><code class="language-python"># Boolean - hanya True atau False\n# Huruf pertama HARUS kapital!\nprint(True)     # Output: True\nprint(False)    # Output: False\n\n# Mengecek tipe data\nprint(type(True))   # Output: <class 'bool'>\nprint(type(False))  # Output: <class 'bool'></code></pre><p>Boolean sangat penting karena digunakan dalam pengambilan keputusan (if/else), perulangan, dan perbandingan nilai. Setiap kali kamu membandingkan dua nilai, hasilnya adalah Boolean.</p>`
    },
    {
      id: "assignment-operators",
      title: "Operator Penugasan (Assignment Operators)",
      content: `<p>Operator penugasan digunakan untuk <strong>menyimpan nilai ke dalam variabel</strong>. Yang paling dasar adalah tanda <code>=</code>, tetapi Python juga menyediakan shortcut yang menggabungkan operasi dengan penugasan.</p><p><strong>Operator Penugasan Dasar:</strong></p><pre><code class="language-python"># Contoh Operator Penugasan\nx = 10\nprint("x awal:", x)  # Output: x awal: 10\n\n# Menggunakan shortcut\nx += 5      # x = x + 5 → x sekarang 15\nprint("Setelah += 5:", x)\n\nx -= 3      # x = x - 3 → x sekarang 12\nprint("Setelah -= 3:", x)\n\nx *= 2      # x = x * 2 → x sekarang 24\nprint("Setelah *= 2:", x)\n\nx /= 4      # x = x / 4 → x sekarang 6.0\nprint("Setelah /= 4:", x)\n\nx %= 4      # x = x % 4 → x sekarang 2.0\nprint("Setelah %= 4:", x)\n\nx **= 3     # x = x ** 3 → x sekarang 8.0\nprint("Setelah **= 3:", x)</code></pre><p><strong>Mengapa menggunakan shortcut?</strong> Karena lebih singkat dan lebih mudah dibaca. <code>x += 5</code> lebih jelas daripada <code>x = x + 5</code>.</p>`
    },
    {
      id: "arithmetic-operators",
      title: "Operator Aritmatika (Arithmetic Operators)",
      content: `<p>Operator aritmatika digunakan untuk <strong>operasi matematika</strong>. Sama seperti yang kamu pelajari di sekolah, tapi dengan simbol yang sedikit berbeda di Python.</p><pre><code class="language-python"># Operator Aritmatika di Python\nprint('Penjumlahan:', 1 + 2)        # Output: Penjumlahan: 3\nprint('Pengurangan:', 2 - 1)        # Output: Pengurangan: 1\nprint('Perkalian:', 2 * 3)          # Output: Perkalian: 6\nprint('Pembagian:', 4 / 2)          # Output: Pembagian: 2.0 (selalu float!)\nprint('Pembagian bulat:', 7 // 2)   # Output: Pembagian bulat: 3 (buang desimal)\nprint('Modulus:', 7 % 3)            # Output: Modulus: 1 (sisa bagi)\nprint('Pangkat:', 2 ** 3)           # Output: Pangkat: 8 (2 x 2 x 2)</code></pre><h3>Contoh Penggunaan Nyata</h3><pre><code class="language-python"># 1. Menghitung luas lingkaran\nradius = 10                              # radius lingkaran dalam cm\nluas_lingkaran = 3.14 * radius ** 2     # rumus: π * r²\nprint('Luas lingkaran:', luas_lingkaran)  # Output: Luas lingkaran: 314.0\n\n# 2. Menghitung luas persegi panjang\npanjang = 10     # dalam cm\nlebar = 20       # dalam cm\nluas_persegi = panjang * lebar\nprint('Luas persegi panjang:', luas_persegi)  # Output: Luas persegi panjang: 200\n\n# 3. Menghitung berat benda (Gaya = Massa × Gravitasi)\nmassa = 75          # dalam kg\ngravitasi = 9.81    # m/s²\nberat = massa * gravitasi\nprint('Berat benda:', berat, 'N')  # Output: Berat benda: 735.75 N\n\n# 4. Menghitung densitas cairan\nmassa_cairan = 75           # dalam kg\nvolume_cairan = 0.075       # dalam m³\ndensitas = massa_cairan / volume_cairan\nprint('Densitas:', densitas, 'kg/m³')  # Output: Densitas: 1000.0 kg/m³</code></pre><h3>Urutan Operasi (Precedence)</h3><p>Python mengikuti aturan matematika standar. Operasi dilakukan dalam urutan ini:</p><ol><li><code>**</code> (pangkat) — paling tinggi</li><li><code>*</code>, <code>/</code>, <code>//</code>, <code>%</code> (perkalian, pembagian, modulus)</li><li><code>+</code>, <code>-</code> (penjumlahan, pengurangan) — paling rendah</li></ol><pre><code class="language-python"># Contoh urutan operasi\nprint(2 + 3 * 4)      # Output: 14 (bukan 20!)\n# Karena * dikerjakan dulu: 3 * 4 = 12, lalu 2 + 12 = 14\n\nprint((2 + 3) * 4)    # Output: 20 (kurung dikerjakan dulu)\n\nprint(2 ** 3 * 4)     # Output: 32\n# Karena ** dikerjakan dulu: 2 ** 3 = 8, lalu 8 * 4 = 32</code></pre>`
    },
    {
      id: "comparison-operators",
      title: "Operator Perbandingan (Comparison Operators)",
      content: `<p>Operator perbandingan digunakan untuk <strong>membandingkan dua nilai</strong>. Hasilnya selalu Boolean (True atau False). Bayangkan seperti <strong>pertanyaan ya/tidak</strong>.</p><pre><code class="language-python"># Operator Perbandingan\nprint(3 > 2)      # Output: True  — 3 lebih besar dari 2? Ya!\nprint(3 >= 2)     # Output: True  — 3 lebih besar atau sama dengan 2? Ya!\nprint(3 < 2)      # Output: False — 3 lebih kecil dari 2? Tidak!\nprint(2 < 3)      # Output: True  — 2 lebih kecil dari 3? Ya!\nprint(2 <= 3)     # Output: True  — 2 lebih kecil atau sama dengan 3? Ya!\nprint(3 == 2)     # Output: False — 3 sama dengan 2? Tidak!\nprint(3 != 2)     # Output: True  — 3 tidak sama dengan 2? Ya!</code></pre><h3>Membandingkan String</h3><pre><code class="language-python"># Perbandingan string berdasarkan panjang\nprint(len('mangga') == len('jeruk'))   # Output: False (6 != 5)\nprint(len('susu') == len('daging'))    # Output: False (4 != 6)\nprint(len('python') > len('java'))     # Output: True (6 > 4)\n\n# Perbandingan string berdasarkan urutan abjad\nprint('apple' < 'banana')   # Output: True (a < b)\nprint('zebra' > 'apple')    # Output: True (z > a)</code></pre><h3>Membandingkan Tipe Data Berbeda</h3><pre><code class="language-python"># Hati-hati saat membandingkan tipe data berbeda\nprint(3 == '3')    # Output: False (integer 3 ≠ string '3')\nprint(3 == 3.0)    # Output: True (integer 3 == float 3.0)\nprint(True == 1)   # Output: True (True dianggap sebagai 1)\nprint(False == 0)  # Output: True (False dianggap sebagai 0)</code></pre>`
    },
    {
      id: "identity-membership",
      title: "Operator Identitas & Keanggotaan",
      content: `<h3>Operator Identitas (<code>is</code> dan <code>is not</code>)</h3><p>Mengecek apakah dua variabel merujuk ke <strong>objek yang sama</strong> di memori (bukan hanya nilai yang sama).</p><pre><code class="language-python"># Operator is\nx = [1, 2, 3]\ny = [1, 2, 3]\nz = x\n\nprint(x == y)     # Output: True (nilai sama)\nprint(x is y)     # Output: False (objek berbeda di memori)\nprint(x is z)     # Output: True (z merujuk ke objek x yang sama)\n\n# Contoh dengan angka\na = 1\nb = 1\nprint(a is b)     # Output: True (Python cache angka kecil)\n\nc = 256\nd = 256\nprint(c is d)     # Output: True (Python cache angka hingga 256)\n\ne = 257\nf = 257\nprint(e is f)     # Output: False (angka > 256 tidak di-cache)</code></pre><h3>Operator Keanggotaan (<code>in</code> dan <code>not in</code>)</h3><p>Mengecek apakah suatu item ada di dalam koleksi (string, list, tuple, set, dictionary).</p><pre><code class="language-python"># Operator in\nprint('A' in 'Andi')                    # Output: True — 'A' ada di 'Andi'\nprint('z' in 'Andi')                    # Output: False — 'z' tidak ada di 'Andi'\nprint('coding' in 'coding for all')     # Output: True — substring 'coding' ada\n\n# Dengan list\nbuah = ['apel', 'mangga', 'jeruk']\nprint('apel' in buah)                   # Output: True\nprint('pisang' in buah)                 # Output: False\nprint('pisang' not in buah)             # Output: True</code></pre>`
    },
    {
      id: "logical-operators",
      title: "Operator Logika (Logical Operators)",
      content: `<p>Operator logika digunakan untuk <strong>menggabungkan kondisi</strong>. Python menggunakan kata kunci <code>and</code>, <code>or</code>, dan <code>not</code>.</p><pre><code class="language-python"># Operator and — kedua kondisi HARUS True\nprint(3 > 2 and 4 > 3)    # Output: True  — keduanya benar\nprint(3 > 2 and 4 < 3)    # Output: False — satu salah, hasilnya salah\n\n# Operator or — minimal SATU kondisi True\nprint(3 > 2 or 4 < 3)     # Output: True  — satu benar sudah cukup\nprint(3 < 2 or 4 < 3)     # Output: False — keduanya salah\n\n# Operator not — membalik nilai Boolean\nprint(not 3 > 2)          # Output: False — 3>2 adalah True, dibalik jadi False\nprint(not True)           # Output: False\nprint(not False)          # Output: True</code></pre><h3>Analogi Sederhana</h3><ul><li><code>and</code> = "DAN" → Kamu boleh masuk JIKA punya tiket <strong>DAN</strong> KTP</li><li><code>or</code> = "ATAU" → Kamu boleh bayar pakai cash <strong>ATAU</strong> kartu</li><li><code>not</code> = "BUKAN" → Jika pintu <strong>BUKAN</strong> terkunci, masuk saja</li></ul><h3>Contoh Penggunaan Nyata</h3><pre><code class="language-python"># Cek apakah seseorang bisa masuk bioskop\numur = 17\npunya_tiket = True\npunya_id = True\n\n# Harus punya tiket DAN ID\nbisa_masuk = punya_tiket and punya_id\nprint("Bisa masuk?", bisa_masuk)  # Output: Bisa masuk? True\n\n# Cek apakah seseorang bisa mendapat diskon\numur_anak = 5\numur_lansia = 65\numur_saya = 25\n\n# Dapat diskon jika anak-anak ATAU lansia\ndapat_diskon = (umur_saya < 12) or (umur_saya > 60)\nprint("Dapat diskon?", dapat_diskon)  # Output: Dapat diskon? False\n\n# Cek apakah password valid\npassword = "rahasia123"\npanjang_cukup = len(password) >= 8\nada_angka = '1' in password or '2' in password or '3' in password\n\npassword_valid = panjang_cukup and ada_angka\nprint("Password valid?", password_valid)  # Output: Password valid? True</code></pre>`
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Apa hasil dari: 7 // 2?",
      options: ["3.5", "3", "4", "3.0"],
      correct: 1,
      explanation: "Operator // adalah pembagian bulat (floor division). Hasilnya selalu integer dengan membuang bagian desimal. 7 dibagi 2 = 3.5, tapi bagian desimal dibuang, jadi hasilnya 3."
    },
    {
      id: 2,
      question: "Apa hasil dari: 7 % 3?",
      options: ["2", "1", "2.33", "0"],
      correct: 1,
      explanation: "Operator % (modulus) menghitung sisa pembagian. 7 dibagi 3 = 2 sisa 1, jadi 7 % 3 = 1."
    },
    {
      id: 3,
      question: "Apa hasil dari: 3 > 2 and 4 < 3?",
      options: ["True", "False", "Error", "None"],
      correct: 1,
      explanation: "Operator 'and' membutuhkan KEDUA kondisi bernilai True. 3 > 2 adalah True, tetapi 4 < 3 adalah False. True and False = False."
    },
    {
      id: 4,
      question: "Apa hasil dari: not False?",
      options: ["False", "True", "None", "Error"],
      correct: 1,
      explanation: "Operator 'not' membalik nilai Boolean. not False = True."
    },
    {
      id: 5,
      question: "Apa hasil dari: 'on' in 'python'?",
      options: ["True", "False", "Error", "'on'"],
      correct: 0,
      explanation: "Operator 'in' mengecek apakah substring ada di dalam string. Substring 'on' memang ada di dalam 'python' (py**on**), jadi hasilnya True."
    },
    {
      id: 6,
      question: "Apa hasil dari: 2 ** 4?",
      options: ["8", "6", "16", "24"],
      correct: 2,
      explanation: "Operator ** adalah pangkat. 2 ** 4 = 2 × 2 × 2 × 2 = 16."
    }
  ],
  exercises: [
    {
      id: 1,
      title: "Kalkulator Segitiga",
      description: "Buat program yang menghitung luas segitiga. Gunakan alas = 20 dan tinggi = 10. Rumus: luas = 0.5 × alas × tinggi.",
      hint: "alas = 20, tinggi = 10, luas = 0.5 * alas * tinggi. Hasilnya 100.0.",
      difficulty: "mudah"
    },
    {
      id: 2,
      title: "Keliling Segitiga",
      description: "Hitung keliling segitiga dengan sisi a = 5, b = 4, c = 3. Rumus: keliling = a + b + c.",
      hint: "Simpan setiap sisi di variabel terpisah, lalu jumlahkan. Hasilnya 12.",
      difficulty: "mudah"
    },
    {
      id: 3,
      title: "Kalkulator Gaji",
      description: "Buat program yang menghitung gaji mingguan. Jam kerja = 40, tarif per jam = 50000. Hitung total gaji.",
      hint: "gaji = jam_kerja * tarif_per_jam. Hasilnya 2000000.",
      difficulty: "sedang"
    },
    {
      id: 4,
      title: "Cek Bilangan Genap atau Ganjil",
      description: "Bilangan genap habis dibagi 2 (sisa = 0). Gunakan operator % untuk mengecek apakah angka 15 genap atau ganjil.",
      hint: "Jika 15 % 2 == 0 maka genap, jika tidak maka ganjil. 15 % 2 = 1, jadi hasilnya ganjil.",
      difficulty: "sedang"
    },
    {
      id: 5,
      title: "Tabel Pangkat",
      description: "Buat program yang menampilkan tabel: untuk angka 1-5, tampilkan angka, pangkat 1, pangkat 2, pangkat 3. Contoh output: 1 1 1 1 (untuk angka 1), 2 2 4 8 (untuk angka 2), dst.",
      hint: "Gunakan print(n, n**1, n**2, n**3) untuk setiap angka n dari 1 sampai 5.",
      difficulty: "sulit"
    }
  ]
};
