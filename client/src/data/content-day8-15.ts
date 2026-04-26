// ============================================================
// DATA KONTEN BELAJAR PYTHON DAY 8-15
// Tropical Classroom Theme — Lanjutan
// ============================================================

import type { DayContent } from './content';

export const dayContents8to15: DayContent[] = [
  // ============================================================
  // DAY 8: DICTIONARIES
  // ============================================================
  {
    day: 8,
    title: "Dictionary (Kamus)",
    titleEn: "Dictionaries",
    icon: "📖",
    color: "#E74C3C",
    topics: ["Creating Dictionary", "Accessing Items", "Adding & Modifying", "Dictionary Methods"],
    sections: [
      {
        id: "dict-intro",
        title: "Apa itu Dictionary?",
        content: `
<p>Dictionary adalah koleksi data yang <strong>tidak berurutan</strong>, bisa diubah (mutable), dan tersusun dalam pasangan <strong>key: value</strong>. Bayangkan dictionary seperti <strong>buku telepon</strong> — kamu mencari nama (key) untuk mendapatkan nomor telepon (value).</p>

<p>Berbeda dengan list yang menggunakan index angka, dictionary menggunakan <strong>key</strong> untuk mengakses datanya. Key bisa berupa string, angka, atau tuple — tapi harus unik!</p>

<h3>Membuat Dictionary</h3>
<p>Ada dua cara membuat dictionary: menggunakan kurung kurawal <code>{}</code> atau fungsi <code>dict()</code>.</p>

<pre><code class="language-python"># Membuat dictionary kosong
kamus_kosong = {}
kamus_kosong2 = dict()

# Dictionary dengan data
mahasiswa = {
    "nama": "Budi Santoso",
    "umur": 21,
    "jurusan": "Informatika",
    "ipk": 3.75,
    "aktif": True,
    "hobi": ["coding", "gaming", "membaca"],
    "alamat": {
        "kota": "Jakarta",
        "kodepos": "12345"
    }
}
print(mahasiswa)
# Value bisa berupa tipe data apa saja: string, int, float, bool, list, bahkan dictionary lain!</code></pre>
`
      },
      {
        id: "dict-access",
        title: "Mengakses & Mengecek Item",
        content: `
<p>Untuk mengakses item di dictionary, kita menggunakan <strong>key</strong> sebagai "alamat"-nya. Seperti mencari kata di kamus — kamu tahu kata yang dicari, dan kamu mendapatkan artinya.</p>

<pre><code class="language-python">mahasiswa = {
    "nama": "Budi Santoso",
    "umur": 21,
    "jurusan": "Informatika",
    "hobi": ["coding", "gaming", "membaca"],
    "alamat": {"kota": "Jakarta", "kodepos": "12345"}
}

# Akses menggunakan key
print(mahasiswa["nama"])        # Budi Santoso
print(mahasiswa["hobi"])        # ['coding', 'gaming', 'membaca']
print(mahasiswa["hobi"][0])     # coding (akses list di dalam dict)
print(mahasiswa["alamat"]["kota"])  # Jakarta (akses dict di dalam dict)

# HATI-HATI! Akses key yang tidak ada akan ERROR
# print(mahasiswa["email"])     # KeyError!

# Cara aman: gunakan get() — mengembalikan None jika key tidak ada
print(mahasiswa.get("email"))       # None (tidak error)
print(mahasiswa.get("email", "Belum diisi"))  # Belum diisi (default value)</code></pre>

<h3>Mengecek Key dalam Dictionary</h3>
<pre><code class="language-python"># Gunakan operator 'in' untuk mengecek apakah key ada
print("nama" in mahasiswa)     # True
print("email" in mahasiswa)    # False
print("umur" in mahasiswa)     # True</code></pre>
`
      },
      {
        id: "dict-modify",
        title: "Menambah & Mengubah Item",
        content: `
<p>Dictionary itu <strong>mutable</strong> — artinya kita bisa menambah, mengubah, dan menghapus item setelah dictionary dibuat. Bayangkan seperti buku catatan yang bisa kamu tulis dan hapus kapan saja.</p>

<h3>Menambah Item Baru</h3>
<pre><code class="language-python">mahasiswa = {
    "nama": "Budi Santoso",
    "umur": 21,
    "jurusan": "Informatika"
}

# Menambah item baru — cukup assign key baru
mahasiswa["email"] = "budi@email.com"
mahasiswa["hobi"] = ["coding", "gaming"]
print(mahasiswa)
# {'nama': 'Budi Santoso', 'umur': 21, 'jurusan': 'Informatika',
#  'email': 'budi@email.com', 'hobi': ['coding', 'gaming']}</code></pre>

<h3>Mengubah Item yang Sudah Ada</h3>
<pre><code class="language-python"># Mengubah value — assign ulang ke key yang sama
mahasiswa["umur"] = 22          # Ubah umur
mahasiswa["jurusan"] = "Data Science"  # Ubah jurusan
print(mahasiswa["umur"])        # 22
print(mahasiswa["jurusan"])     # Data Science

# Menambah item ke list di dalam dictionary
mahasiswa["hobi"].append("membaca")
print(mahasiswa["hobi"])        # ['coding', 'gaming', 'membaca']</code></pre>
`
      },
      {
        id: "dict-remove",
        title: "Menghapus Item & Method Lainnya",
        content: `
<p>Ada beberapa cara untuk menghapus item dari dictionary. Masing-masing punya kegunaan berbeda — seperti memilih alat yang tepat untuk pekerjaan yang tepat.</p>

<h3>Menghapus Item</h3>
<pre><code class="language-python">mahasiswa = {
    "nama": "Budi", "umur": 21, "jurusan": "Informatika",
    "email": "budi@email.com", "ipk": 3.75
}

# pop(key) — hapus item dan kembalikan value-nya
email = mahasiswa.pop("email")
print(email)        # budi@email.com
print(mahasiswa)    # key 'email' sudah hilang

# popitem() — hapus item terakhir yang ditambahkan
item_terakhir = mahasiswa.popitem()
print(item_terakhir)  # ('ipk', 3.75)

# del — hapus item berdasarkan key
del mahasiswa["jurusan"]

# clear() — kosongkan semua isi dictionary
# mahasiswa.clear()   # dictionary jadi kosong {}</code></pre>

<h3>Method Berguna Lainnya</h3>
<pre><code class="language-python">orang = {"nama": "Budi", "umur": 21, "kota": "Jakarta"}

# keys() — mendapatkan semua key
print(orang.keys())    # dict_keys(['nama', 'umur', 'kota'])

# values() — mendapatkan semua value
print(orang.values())  # dict_values(['Budi', 21, 'Jakarta'])

# items() — mendapatkan semua pasangan key-value sebagai tuple
print(orang.items())   # dict_items([('nama', 'Budi'), ('umur', 21), ('kota', 'Jakarta')])

# copy() — membuat salinan dictionary (bukan referensi!)
orang_copy = orang.copy()
orang_copy["nama"] = "Andi"
print(orang["nama"])       # Budi (tidak berubah!)
print(orang_copy["nama"])  # Andi

# len() — menghitung jumlah pasangan key-value
print(len(orang))  # 3</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Bagaimana cara membuat dictionary kosong di Python?",
        options: ["dict = []", "dict = {}", "dict = ()", "dict = set()"],
        correct: 1,
        explanation: "Dictionary kosong dibuat dengan kurung kurawal {} atau dict(). Tanda [] untuk list, () untuk tuple, dan set() untuk set kosong."
      },
      {
        id: 2,
        question: "Apa yang terjadi jika kita mengakses key yang tidak ada dengan mahasiswa['email']?",
        options: ["Mengembalikan None", "Mengembalikan 0", "Menghasilkan KeyError", "Mengembalikan False"],
        correct: 2,
        explanation: "Mengakses key yang tidak ada dengan bracket [] akan menghasilkan KeyError. Gunakan .get() untuk cara yang lebih aman."
      },
      {
        id: 3,
        question: "Apa perbedaan antara pop() dan del untuk menghapus item dictionary?",
        options: ["Tidak ada perbedaan", "pop() mengembalikan value, del tidak", "del mengembalikan value, pop() tidak", "pop() hanya untuk list"],
        correct: 1,
        explanation: "pop(key) menghapus item dan mengembalikan value-nya, sedangkan del hanya menghapus tanpa mengembalikan value."
      },
      {
        id: 4,
        question: "Method apa yang digunakan untuk mendapatkan semua key dari dictionary?",
        options: [".items()", ".values()", ".keys()", ".get()"],
        correct: 2,
        explanation: "Method .keys() mengembalikan semua key, .values() mengembalikan semua value, dan .items() mengembalikan pasangan key-value."
      },
      {
        id: 5,
        question: "Apa output dari: len({'a': 1, 'b': 2, 'c': 3})?",
        options: ["6", "3", "9", "Error"],
        correct: 1,
        explanation: "len() pada dictionary menghitung jumlah pasangan key-value. Dictionary ini punya 3 pasangan, jadi hasilnya 3."
      },
      {
        id: 6,
        question: "Bagaimana cara aman mengakses key yang mungkin tidak ada?",
        options: ["dict[key]", "dict.get(key)", "dict.find(key)", "dict.search(key)"],
        correct: 1,
        explanation: "Method .get(key) mengembalikan None jika key tidak ditemukan, tanpa menghasilkan error. Kita juga bisa memberi default value: .get(key, default)."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Buat Dictionary Profil",
        description: "Buat dictionary bernama 'profil' yang berisi: nama, umur, kota, hobi (list), dan status_mahasiswa (boolean). Tampilkan semua key dan value-nya.",
        hint: "profil = {'nama': 'Budi', 'umur': 21, ...}. Gunakan .items() untuk menampilkan semua pasangan.",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Akses Data Nested",
        description: "Dari dictionary siswa = {'nama': 'Andi', 'nilai': {'mtk': 90, 'ipa': 85, 'indo': 88}}, akses nilai matematika dan hitung rata-rata semua nilai.",
        hint: "Akses nested: siswa['nilai']['mtk']. Untuk rata-rata: sum(siswa['nilai'].values()) / len(siswa['nilai']).",
        difficulty: "sedang"
      },
      {
        id: 3,
        title: "Manipulasi Dictionary",
        description: "Buat dictionary negara = {'Indonesia': 'Jakarta', 'Jepang': 'Tokyo', 'Korea': 'Seoul'}. Tambahkan 2 negara baru, ubah satu ibukota, hapus satu negara, lalu tampilkan hasilnya.",
        hint: "Tambah: negara['Thailand'] = 'Bangkok'. Ubah: negara['Korea'] = 'Busan'. Hapus: negara.pop('Jepang').",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Hitung Frekuensi Huruf",
        description: "Buat program yang menghitung frekuensi setiap huruf dalam string 'python programming'. Simpan hasilnya dalam dictionary.",
        hint: "Buat dict kosong, loop setiap huruf. Jika huruf sudah ada, tambah 1. Jika belum, set ke 1. Atau gunakan .get(huruf, 0) + 1.",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 9: CONDITIONALS
  // ============================================================
  {
    day: 9,
    title: "Kondisional (If/Else)",
    titleEn: "Conditionals",
    icon: "🔀",
    color: "#3498DB",
    topics: ["If", "If Else", "If Elif Else", "Nested Conditions", "Logical Operators"],
    sections: [
      {
        id: "cond-intro",
        title: "Pengenalan Kondisional",
        content: `
<p>Dalam kehidupan sehari-hari, kita selalu membuat keputusan: <em>"Kalau hujan, bawa payung. Kalau tidak, pakai kacamata hitam."</em> Nah, di Python, kita menggunakan <strong>kondisional</strong> untuk membuat keputusan serupa!</p>

<p>Secara default, Python menjalankan kode dari atas ke bawah secara berurutan. Tapi dengan kondisional, kita bisa mengubah alur eksekusi berdasarkan <strong>kondisi tertentu</strong>.</p>

<h3>If — Kondisi Sederhana</h3>
<p>Kata kunci <code>if</code> digunakan untuk mengecek apakah suatu kondisi bernilai <code>True</code>. Jika ya, blok kode di dalamnya akan dijalankan.</p>

<pre><code class="language-python"># Syntax dasar if
# if kondisi:
#     kode yang dijalankan jika kondisi True

a = 3
if a > 0:
    print('A adalah bilangan positif')
# Output: A adalah bilangan positif

# Contoh lain
umur = 20
if umur >= 17:
    print('Kamu sudah boleh membuat KTP!')
# Output: Kamu sudah boleh membuat KTP!</code></pre>

<p><strong>Penting:</strong> Perhatikan <strong>indentasi</strong> (spasi di awal baris) setelah tanda titik dua (<code>:</code>). Python menggunakan indentasi untuk menentukan blok kode mana yang termasuk dalam <code>if</code>.</p>
`
      },
      {
        id: "cond-ifelse",
        title: "If Else & If Elif Else",
        content: `
<h3>If Else — Dua Pilihan</h3>
<p>Bagaimana kalau kondisinya <code>False</code>? Kita gunakan <code>else</code> sebagai "rencana cadangan".</p>

<pre><code class="language-python"># Seperti: "Kalau hujan bawa payung, KALAU TIDAK pakai kacamata"
a = 3
if a < 0:
    print('A adalah bilangan negatif')
else:
    print('A adalah bilangan positif')
# Output: A adalah bilangan positif

# Contoh: cek lulus atau tidak
nilai = 65
if nilai >= 70:
    print('Selamat, kamu LULUS!')
else:
    print('Maaf, kamu belum lulus. Tetap semangat!')
# Output: Maaf, kamu belum lulus. Tetap semangat!</code></pre>

<h3>If Elif Else — Banyak Pilihan</h3>
<p>Dalam kehidupan nyata, keputusan sering punya lebih dari 2 pilihan. Gunakan <code>elif</code> (singkatan dari "else if") untuk menambah kondisi.</p>

<pre><code class="language-python"># Seperti memilih menu: "Kalau lapar makan nasi, kalau haus minum air, kalau tidak keduanya tidur"
a = 0
if a > 0:
    print('A adalah bilangan positif')
elif a < 0:
    print('A adalah bilangan negatif')
else:
    print('A adalah nol')
# Output: A adalah nol

# Contoh: sistem grading
nilai = 85
if nilai >= 90:
    grade = 'A'
elif nilai >= 80:
    grade = 'B'
elif nilai >= 70:
    grade = 'C'
elif nilai >= 60:
    grade = 'D'
else:
    grade = 'E'
print(f'Nilai: {nilai}, Grade: {grade}')
# Output: Nilai: 85, Grade: B</code></pre>
`
      },
      {
        id: "cond-shorthand",
        title: "Short Hand & Nested Conditions",
        content: `
<h3>Short Hand (Ternary Operator)</h3>
<p>Untuk kondisi sederhana, Python punya cara singkat menulis if-else dalam satu baris. Bayangkan seperti <strong>SMS vs surat</strong> — isinya sama, tapi lebih ringkas.</p>

<pre><code class="language-python"># Syntax: value_if_true if kondisi else value_if_false
a = 3
status = 'positif' if a > 0 else 'negatif'
print(status)  # positif

# Contoh lain
umur = 20
kategori = 'dewasa' if umur >= 17 else 'anak-anak'
print(kategori)  # dewasa

# Bisa juga langsung di print
print('Genap') if 10 % 2 == 0 else print('Ganjil')  # Genap</code></pre>

<h3>Nested Conditions (Kondisi Bersarang)</h3>
<p>Kita bisa menaruh <code>if</code> di dalam <code>if</code> lain — seperti <strong>pohon keputusan</strong> yang bercabang.</p>

<pre><code class="language-python"># Contoh: cek bilangan positif/negatif DAN genap/ganjil
a = 6
if a > 0:
    if a % 2 == 0:
        print('A adalah bilangan positif dan genap')
    else:
        print('A adalah bilangan positif dan ganjil')
elif a == 0:
    print('A adalah nol')
else:
    print('A adalah bilangan negatif')
# Output: A adalah bilangan positif dan genap</code></pre>
`
      },
      {
        id: "cond-logical",
        title: "Kondisional dengan Operator Logika",
        content: `
<p>Kita bisa menggabungkan beberapa kondisi menggunakan operator logika <code>and</code> dan <code>or</code>. Ini seperti menggabungkan beberapa syarat sekaligus.</p>

<h3>Operator and — Semua Harus True</h3>
<pre><code class="language-python"># and: SEMUA kondisi harus True
umur = 25
punya_ktp = True

if umur >= 17 and punya_ktp:
    print('Kamu bisa mendaftar!')
else:
    print('Syarat belum terpenuhi')
# Output: Kamu bisa mendaftar!

# Contoh: cek bilangan positif DAN genap
a = 4
if a > 0 and a % 2 == 0:
    print('Bilangan positif dan genap')
elif a > 0 and a % 2 != 0:
    print('Bilangan positif dan ganjil')
elif a == 0:
    print('Nol')
else:
    print('Bilangan negatif')</code></pre>

<h3>Operator or — Salah Satu True Cukup</h3>
<pre><code class="language-python"># or: SALAH SATU kondisi True sudah cukup
user = 'Budi'
access_level = 3

if user == 'admin' or access_level >= 4:
    print('Akses diberikan!')
else:
    print('Akses ditolak!')
# Output: Akses ditolak! (keduanya False)

# Contoh: cek hari libur
hari = 'Minggu'
if hari == 'Sabtu' or hari == 'Minggu':
    print('Hari ini libur! 🎉')
else:
    print('Hari kerja, semangat! 💪')
# Output: Hari ini libur! 🎉</code></pre>

<h3>Kombinasi and & or</h3>
<pre><code class="language-python"># Kombinasi keduanya
umur = 20
punya_sim = True
punya_mobil = False

if umur >= 17 and (punya_sim or punya_mobil):
    print('Kamu bisa berkendara')
else:
    print('Belum bisa berkendara')
# Output: Kamu bisa berkendara (umur >= 17 AND punya_sim True)</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa output dari kode: if 5 > 3: print('Ya')?",
        options: ["Error", "Ya", "False", "Tidak ada output"],
        correct: 1,
        explanation: "Kondisi 5 > 3 bernilai True, sehingga print('Ya') akan dijalankan dan menampilkan 'Ya'."
      },
      {
        id: 2,
        question: "Apa singkatan dari 'elif' di Python?",
        options: ["else if", "else in", "element if", "elif bukan singkatan"],
        correct: 0,
        explanation: "elif adalah singkatan dari 'else if'. Digunakan untuk menambahkan kondisi tambahan setelah if."
      },
      {
        id: 3,
        question: "Apa output: print('Genap') if 7 % 2 == 0 else print('Ganjil')?",
        options: ["Genap", "Ganjil", "Error", "True"],
        correct: 1,
        explanation: "7 % 2 menghasilkan 1 (bukan 0), jadi kondisi False dan bagian else dijalankan: print('Ganjil')."
      },
      {
        id: 4,
        question: "Kapan blok 'else' dijalankan?",
        options: ["Selalu dijalankan", "Ketika kondisi if True", "Ketika semua kondisi if/elif False", "Tidak pernah dijalankan"],
        correct: 2,
        explanation: "Blok else dijalankan ketika SEMUA kondisi if dan elif sebelumnya bernilai False."
      },
      {
        id: 5,
        question: "Apa hasil dari: True and False?",
        options: ["True", "False", "None", "Error"],
        correct: 1,
        explanation: "Operator 'and' membutuhkan KEDUA kondisi True. Karena salah satu False, hasilnya False."
      },
      {
        id: 6,
        question: "Apa hasil dari: False or True?",
        options: ["False", "True", "None", "Error"],
        correct: 1,
        explanation: "Operator 'or' hanya butuh SALAH SATU kondisi True. Karena ada True, hasilnya True."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Cek Bilangan Positif/Negatif",
        description: "Minta user memasukkan angka dengan input(). Tampilkan apakah angka tersebut positif, negatif, atau nol.",
        hint: "angka = int(input('Masukkan angka: ')). Gunakan if/elif/else untuk mengecek > 0, < 0, atau == 0.",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Sistem Grading",
        description: "Buat program yang menerima nilai (0-100) dan menampilkan grade: A (>=90), B (>=80), C (>=70), D (>=60), E (<60).",
        hint: "Gunakan if/elif/else bertingkat. Mulai dari kondisi tertinggi (>= 90) ke terendah.",
        difficulty: "mudah"
      },
      {
        id: 3,
        title: "Cek Tahun Kabisat",
        description: "Buat program untuk mengecek apakah suatu tahun adalah tahun kabisat. Aturan: habis dibagi 4, KECUALI habis dibagi 100, KECUALI habis dibagi 400.",
        hint: "if (tahun % 400 == 0) or (tahun % 4 == 0 and tahun % 100 != 0): print('Kabisat').",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Kalkulator Sederhana",
        description: "Buat kalkulator yang menerima 2 angka dan operator (+, -, *, /). Gunakan if/elif untuk menjalankan operasi yang sesuai. Tangani pembagian dengan nol!",
        hint: "Gunakan input() untuk angka dan operator. Cek operator dengan if/elif. Untuk pembagian, cek dulu apakah angka kedua == 0.",
        difficulty: "sedang"
      },
      {
        id: 5,
        title: "Cek Segitiga Valid",
        description: "Minta 3 sisi segitiga dari user. Cek apakah bisa membentuk segitiga (jumlah 2 sisi harus > sisi ketiga). Jika valid, tentukan jenisnya: sama sisi, sama kaki, atau sembarang.",
        hint: "Cek validitas: a+b>c and a+c>b and b+c>a. Jenis: jika a==b==c: sama sisi, elif a==b or b==c or a==c: sama kaki, else: sembarang.",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 10: LOOPS
  // ============================================================
  {
    day: 10,
    title: "Perulangan (Loops)",
    titleEn: "Loops",
    icon: "🔄",
    color: "#9B59B6",
    topics: ["While Loop", "For Loop", "Break & Continue", "Range", "Nested Loop"],
    sections: [
      {
        id: "loop-intro",
        title: "While Loop",
        content: `
<p>Hidup penuh dengan rutinitas — bangun, mandi, makan, kerja, tidur, ulangi. Di programming, kita juga sering melakukan tugas berulang. Untuk itu, Python menyediakan <strong>loop</strong> (perulangan)!</p>

<p>Ada dua jenis loop di Python: <code>while</code> dan <code>for</code>. Mari mulai dengan <code>while</code>.</p>

<h3>While Loop — Ulangi Selama Kondisi True</h3>
<p><code>while</code> loop akan terus menjalankan blok kode <strong>selama kondisinya masih True</strong>. Bayangkan seperti <strong>alarm yang terus berbunyi sampai kamu matikan</strong>.</p>

<pre><code class="language-python"># Syntax: while kondisi:
#             kode yang diulang

# Contoh: hitung mundur
hitungan = 5
while hitungan > 0:
    print(hitungan)
    hitungan -= 1  # kurangi 1 setiap iterasi
print('Mulai! 🚀')
# Output: 5, 4, 3, 2, 1, Mulai! 🚀

# While dengan else
hitungan = 0
while hitungan < 3:
    print(f'Hitungan: {hitungan}')
    hitungan += 1
else:
    print(f'Loop selesai! Hitungan akhir: {hitungan}')
# Output: Hitungan: 0, Hitungan: 1, Hitungan: 2, Loop selesai! Hitungan akhir: 3</code></pre>

<p><strong>Peringatan:</strong> Pastikan kondisi while akan menjadi False pada suatu saat, atau kamu akan mendapat <strong>infinite loop</strong> (loop tak berujung) yang membuat program hang!</p>
`
      },
      {
        id: "loop-for",
        title: "For Loop",
        content: `
<h3>For Loop — Iterasi Setiap Item</h3>
<p><code>for</code> loop digunakan untuk <strong>mengiterasi</strong> (mengulang) setiap item dalam sebuah sequence (list, tuple, string, dictionary, set). Bayangkan seperti <strong>membaca buku halaman per halaman</strong>.</p>

<pre><code class="language-python"># For loop pada list
buah = ['apel', 'jeruk', 'mangga', 'pisang']
for b in buah:
    print(f'Saya suka {b}')
# Output: Saya suka apel, Saya suka jeruk, dst.

# For loop pada string — iterasi per karakter
for huruf in 'Python':
    print(huruf)
# Output: P, y, t, h, o, n

# For loop pada tuple
angka = (1, 2, 3, 4, 5)
for a in angka:
    print(a)

# For loop pada dictionary
mahasiswa = {'nama': 'Budi', 'umur': 21, 'kota': 'Jakarta'}
# Loop key saja
for key in mahasiswa:
    print(key)

# Loop key dan value
for key, value in mahasiswa.items():
    print(f'{key}: {value}')
# Output: nama: Budi, umur: 21, kota: Jakarta

# For loop pada set
bahasa = {'Python', 'JavaScript', 'Java'}
for b in bahasa:
    print(b)</code></pre>
`
      },
      {
        id: "loop-break-continue",
        title: "Break, Continue & Pass",
        content: `
<p>Kadang kita perlu mengontrol alur loop — menghentikannya lebih awal atau melewati iterasi tertentu. Python menyediakan <code>break</code>, <code>continue</code>, dan <code>pass</code> untuk ini.</p>

<h3>Break — Hentikan Loop</h3>
<pre><code class="language-python"># break: keluar dari loop sepenuhnya
# Seperti menekan tombol STOP
for angka in range(10):
    if angka == 5:
        print('Berhenti di angka 5!')
        break
    print(angka)
# Output: 0, 1, 2, 3, 4, Berhenti di angka 5!</code></pre>

<h3>Continue — Lewati Iterasi</h3>
<pre><code class="language-python"># continue: lewati iterasi saat ini, lanjut ke berikutnya
# Seperti melewati halaman yang tidak menarik
for angka in range(6):
    if angka == 3:
        continue  # lewati angka 3
    print(angka)
# Output: 0, 1, 2, 4, 5 (angka 3 dilewati)</code></pre>

<h3>Pass — Placeholder Kosong</h3>
<pre><code class="language-python"># pass: tidak melakukan apa-apa, hanya placeholder
# Berguna saat kamu belum menulis kode di dalam blok
for angka in range(5):
    pass  # nanti diisi kodenya

# Sering dipakai untuk fungsi atau class kosong
def fungsi_nanti():
    pass  # akan diimplementasi nanti</code></pre>

<h3>For Else</h3>
<pre><code class="language-python"># else di for loop: dijalankan jika loop selesai TANPA break
for angka in range(5):
    print(angka)
else:
    print('Loop selesai normal!')
# Output: 0, 1, 2, 3, 4, Loop selesai normal!

# Jika ada break, else TIDAK dijalankan
for angka in range(5):
    if angka == 3:
        break
    print(angka)
else:
    print('Ini tidak akan muncul')
# Output: 0, 1, 2</code></pre>
`
      },
      {
        id: "loop-range",
        title: "Range & Nested Loop",
        content: `
<h3>Fungsi range()</h3>
<p>Fungsi <code>range()</code> menghasilkan urutan angka. Sangat berguna untuk <code>for</code> loop ketika kamu butuh iterasi dengan angka tertentu.</p>

<pre><code class="language-python"># range(stop) — dari 0 sampai stop-1
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# range(start, stop) — dari start sampai stop-1
for i in range(2, 7):
    print(i)  # 2, 3, 4, 5, 6

# range(start, stop, step) — dengan langkah tertentu
for i in range(0, 20, 3):
    print(i)  # 0, 3, 6, 9, 12, 15, 18

# Hitung mundur
for i in range(5, 0, -1):
    print(i)  # 5, 4, 3, 2, 1</code></pre>

<h3>Nested Loop (Loop Bersarang)</h3>
<p>Kita bisa menaruh loop di dalam loop — seperti <strong>jam yang punya jarum jam dan jarum menit</strong>.</p>

<pre><code class="language-python"># Contoh: tabel perkalian
for i in range(1, 4):
    for j in range(1, 4):
        print(f'{i} x {j} = {i*j}')
    print('---')
# Output:
# 1 x 1 = 1, 1 x 2 = 2, 1 x 3 = 3, ---
# 2 x 1 = 2, 2 x 2 = 4, 2 x 3 = 6, ---
# 3 x 1 = 3, 3 x 2 = 6, 3 x 3 = 9, ---

# Contoh: pola bintang
for baris in range(1, 6):
    print('⭐' * baris)
# Output:
# ⭐
# ⭐⭐
# ⭐⭐⭐
# ⭐⭐⭐⭐
# ⭐⭐⭐⭐⭐</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa perbedaan utama antara while loop dan for loop?",
        options: [
          "Tidak ada perbedaan",
          "while berdasarkan kondisi, for berdasarkan iterasi sequence",
          "for lebih cepat dari while",
          "while hanya untuk angka"
        ],
        correct: 1,
        explanation: "while loop berjalan selama kondisi True, sedangkan for loop mengiterasi setiap item dalam sequence (list, string, dll)."
      },
      {
        id: 2,
        question: "Apa output dari: for i in range(3): print(i)?",
        options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
        correct: 1,
        explanation: "range(3) menghasilkan angka 0, 1, 2 (dimulai dari 0, berhenti sebelum 3)."
      },
      {
        id: 3,
        question: "Apa fungsi dari keyword 'break'?",
        options: ["Melewati iterasi saat ini", "Menghentikan loop sepenuhnya", "Menghentikan program", "Membuat loop baru"],
        correct: 1,
        explanation: "break menghentikan loop sepenuhnya dan melanjutkan ke kode setelah loop."
      },
      {
        id: 4,
        question: "Apa fungsi dari keyword 'continue'?",
        options: ["Menghentikan loop", "Melewati iterasi saat ini dan lanjut ke berikutnya", "Melanjutkan program", "Mengulang iterasi saat ini"],
        correct: 1,
        explanation: "continue melewati sisa kode di iterasi saat ini dan langsung ke iterasi berikutnya."
      },
      {
        id: 5,
        question: "Apa output dari: for i in range(1, 10, 3): print(i)?",
        options: ["1 4 7", "1 3 6 9", "1 4 7 10", "3 6 9"],
        correct: 0,
        explanation: "range(1, 10, 3) dimulai dari 1, bertambah 3 setiap langkah: 1, 4, 7. Angka 10 tidak termasuk."
      },
      {
        id: 6,
        question: "Kapan blok 'else' pada for loop TIDAK dijalankan?",
        options: ["Selalu dijalankan", "Ketika loop kosong", "Ketika loop dihentikan dengan break", "Ketika ada error"],
        correct: 2,
        explanation: "Blok else pada for loop hanya dijalankan jika loop selesai secara normal (tanpa break)."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Jumlah 1 sampai 100",
        description: "Gunakan while loop untuk menghitung jumlah semua angka dari 1 sampai 100. Tampilkan hasilnya.",
        hint: "total = 0, i = 1. while i <= 100: total += i, i += 1. Hasilnya 5050.",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Tabel Perkalian",
        description: "Buat tabel perkalian 1-5 menggunakan nested for loop. Format: '2 x 3 = 6'.",
        hint: "for i in range(1, 6): for j in range(1, 11): print(f'{i} x {j} = {i*j}').",
        difficulty: "sedang"
      },
      {
        id: 3,
        title: "Bilangan Prima",
        description: "Tampilkan semua bilangan prima dari 2 sampai 50 menggunakan for loop dan break.",
        hint: "Untuk setiap angka n, cek apakah bisa dibagi angka dari 2 sampai n-1. Jika tidak ada yang bisa membagi, itu prima.",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Pola Piramida",
        description: "Buat pola piramida bintang dengan 5 baris menggunakan nested loop. Baris 1: 1 bintang (di tengah), baris 5: 9 bintang.",
        hint: "for i in range(1, 6): print(' ' * (5-i) + '*' * (2*i-1)).",
        difficulty: "sulit"
      },
      {
        id: 5,
        title: "FizzBuzz",
        description: "Cetak angka 1-30. Jika habis dibagi 3, cetak 'Fizz'. Jika habis dibagi 5, cetak 'Buzz'. Jika habis dibagi keduanya, cetak 'FizzBuzz'.",
        hint: "Gunakan for loop dan if/elif/else. Cek habis dibagi 15 dulu (3 dan 5), lalu 3, lalu 5.",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 11: FUNCTIONS
  // ============================================================
  {
    day: 11,
    title: "Fungsi (Functions)",
    titleEn: "Functions",
    icon: "⚙️",
    color: "#E67E22",
    topics: ["Defining Functions", "Parameters", "Return Values", "Default & Arbitrary Args"],
    sections: [
      {
        id: "func-intro",
        title: "Apa itu Function?",
        content: `
<p>Sejauh ini kita sudah menggunakan banyak fungsi bawaan Python seperti <code>print()</code>, <code>len()</code>, <code>type()</code>. Sekarang saatnya membuat <strong>fungsi sendiri</strong>! Bayangkan fungsi seperti <strong>resep masakan</strong> — kamu tulis sekali, lalu bisa dipakai berulang kali kapan saja.</p>

<p>Fungsi adalah blok kode yang bisa digunakan ulang, dirancang untuk melakukan tugas tertentu. Untuk membuat fungsi, kita menggunakan kata kunci <code>def</code>.</p>

<h3>Membuat dan Memanggil Fungsi</h3>
<pre><code class="language-python"># Syntax dasar:
# def nama_fungsi():
#     kode di sini

# Membuat fungsi sederhana
def sapa():
    print('Halo! Selamat belajar Python!')

# Memanggil fungsi — fungsi tidak berjalan sampai dipanggil!
sapa()  # Output: Halo! Selamat belajar Python!
sapa()  # Bisa dipanggil berkali-kali!</code></pre>

<h3>Fungsi Tanpa Parameter</h3>
<pre><code class="language-python">def buat_nama_lengkap():
    nama_depan = 'Budi'
    nama_belakang = 'Santoso'
    nama_lengkap = nama_depan + ' ' + nama_belakang
    print(nama_lengkap)

buat_nama_lengkap()  # Output: Budi Santoso

def jumlahkan_dua():
    angka1 = 2
    angka2 = 3
    total = angka1 + angka2
    print(total)

jumlahkan_dua()  # Output: 5</code></pre>
`
      },
      {
        id: "func-return",
        title: "Return Value & Parameter",
        content: `
<h3>Fungsi dengan Return</h3>
<p>Fungsi bisa <strong>mengembalikan nilai</strong> menggunakan <code>return</code>. Bayangkan seperti <strong>mesin penjual otomatis</strong> — kamu masukkan uang (input), dan keluar minuman (return value).</p>

<pre><code class="language-python"># Tanpa return, fungsi mengembalikan None
def sapa():
    print('Halo')

hasil = sapa()
print(hasil)  # None

# Dengan return — mengembalikan nilai yang bisa disimpan
def buat_nama_lengkap():
    nama_depan = 'Budi'
    nama_belakang = 'Santoso'
    return nama_depan + ' ' + nama_belakang

nama = buat_nama_lengkap()
print(nama)  # Budi Santoso</code></pre>

<h3>Fungsi dengan Parameter</h3>
<p>Parameter membuat fungsi lebih fleksibel — seperti resep yang bisa disesuaikan bahannya.</p>

<pre><code class="language-python"># Satu parameter
def sapa(nama):
    return f'Halo, {nama}! Selamat belajar Python!'

print(sapa('Budi'))   # Halo, Budi! Selamat belajar Python!
print(sapa('Andi'))   # Halo, Andi! Selamat belajar Python!

# Dua parameter
def tambah(a, b):
    return a + b

print(tambah(3, 5))   # 8
print(tambah(10, 20))  # 30

# Fungsi dengan banyak parameter
def hitung_umur(tahun_sekarang, tahun_lahir):
    umur = tahun_sekarang - tahun_lahir
    return umur

print(f'Umur: {hitung_umur(2024, 2000)}')  # Umur: 24

# Passing argument dengan key-value (urutan tidak penting)
print(hitung_umur(tahun_lahir=2000, tahun_sekarang=2024))  # 24</code></pre>
`
      },
      {
        id: "func-default",
        title: "Default & Arbitrary Parameters",
        content: `
<h3>Parameter Default</h3>
<p>Kita bisa memberi <strong>nilai default</strong> pada parameter. Jika argument tidak diberikan saat pemanggilan, nilai default yang dipakai. Seperti <strong>pengaturan bawaan HP</strong> — sudah ada settingan awal, tapi bisa diubah.</p>

<pre><code class="language-python"># Parameter dengan default value
def sapa(nama='Teman'):
    return f'Halo, {nama}!'

print(sapa())         # Halo, Teman! (pakai default)
print(sapa('Budi'))   # Halo, Budi! (override default)

# Contoh lain
def hitung_berat(massa, gravitasi=9.81):
    berat = massa * gravitasi
    return f'{berat} N'

print(hitung_berat(100))        # 981.0 N (gravitasi Bumi)
print(hitung_berat(100, 1.62))  # 162.0 N (gravitasi Bulan)</code></pre>

<h3>Arbitrary Arguments (*args)</h3>
<p>Jika kamu tidak tahu berapa banyak argument yang akan diberikan, gunakan <code>*args</code>. Seperti <strong>tas belanja yang bisa menampung berapa pun barang</strong>.</p>

<pre><code class="language-python"># *args — menerima jumlah argument tak terbatas
def jumlahkan_semua(*angka):
    total = 0
    for a in angka:
        total += a
    return total

print(jumlahkan_semua(2, 3, 5))       # 10
print(jumlahkan_semua(1, 2, 3, 4, 5)) # 15

# Kombinasi parameter biasa dan *args
def buat_tim(nama_tim, *anggota):
    print(f'Tim: {nama_tim}')
    for anggota_i in anggota:
        print(f'  - {anggota_i}')

buat_tim('Alpha', 'Budi', 'Andi', 'Citra')
# Tim: Alpha
#   - Budi
#   - Andi
#   - Citra</code></pre>

<h3>Fungsi sebagai Parameter</h3>
<pre><code class="language-python"># Fungsi bisa dijadikan parameter fungsi lain!
def kuadrat(n):
    return n * n

def jalankan_fungsi(f, x):
    return f(x)

print(jalankan_fungsi(kuadrat, 3))  # 9
print(jalankan_fungsi(kuadrat, 5))  # 25</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Kata kunci apa yang digunakan untuk membuat fungsi di Python?",
        options: ["function", "func", "def", "create"],
        correct: 2,
        explanation: "Di Python, kita menggunakan kata kunci 'def' (singkatan dari define) untuk membuat fungsi."
      },
      {
        id: 2,
        question: "Apa yang dikembalikan fungsi jika tidak ada statement return?",
        options: ["0", "False", "None", "Error"],
        correct: 2,
        explanation: "Jika fungsi tidak memiliki statement return, secara otomatis mengembalikan None."
      },
      {
        id: 3,
        question: "Apa output: def f(a, b=5): return a + b \\n print(f(3))?",
        options: ["3", "5", "8", "Error"],
        correct: 2,
        explanation: "Parameter b memiliki default value 5. Saat f(3) dipanggil, a=3 dan b=5 (default), jadi hasilnya 3+5=8."
      },
      {
        id: 4,
        question: "Apa kegunaan *args dalam parameter fungsi?",
        options: ["Membuat fungsi lebih cepat", "Menerima jumlah argument tak terbatas", "Membuat variabel global", "Menghapus parameter"],
        correct: 1,
        explanation: "*args memungkinkan fungsi menerima jumlah argument yang tidak ditentukan. Semua argument dikumpulkan dalam tuple."
      },
      {
        id: 5,
        question: "Bisakah fungsi di Python mengembalikan lebih dari satu nilai?",
        options: ["Tidak bisa", "Bisa, menggunakan return dengan koma", "Bisa, tapi harus pakai list", "Hanya bisa 2 nilai"],
        correct: 1,
        explanation: "Python bisa mengembalikan beberapa nilai sekaligus dengan koma: return a, b, c. Hasilnya berupa tuple."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Fungsi Penjumlahan",
        description: "Buat fungsi tambah_dua_angka yang menerima 2 parameter dan mengembalikan jumlahnya. Tes dengan beberapa input.",
        hint: "def tambah_dua_angka(a, b): return a + b. Panggil: print(tambah_dua_angka(3, 5)).",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Luas Lingkaran",
        description: "Buat fungsi luas_lingkaran yang menerima jari-jari dan mengembalikan luas lingkaran (π × r²). Gunakan 3.14159 untuk π.",
        hint: "def luas_lingkaran(r): return 3.14159 * r ** 2.",
        difficulty: "mudah"
      },
      {
        id: 3,
        title: "Konversi Suhu",
        description: "Buat fungsi celsius_ke_fahrenheit dan fahrenheit_ke_celsius. Rumus: °F = (°C × 9/5) + 32.",
        hint: "def celsius_ke_fahrenheit(c): return (c * 9/5) + 32. Kebalikannya: (f - 32) * 5/9.",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Fungsi Cek Bilangan Prima",
        description: "Buat fungsi is_prima(n) yang mengembalikan True jika n adalah bilangan prima, False jika bukan.",
        hint: "Cek dari 2 sampai akar n. Jika ada yang bisa membagi n, return False. Jika tidak ada, return True.",
        difficulty: "sedang"
      },
      {
        id: 5,
        title: "Fungsi Jumlah Fleksibel",
        description: "Buat fungsi jumlahkan_semua yang menerima jumlah argument tak terbatas (*args). Cek apakah semua argument adalah angka. Jika ya, kembalikan jumlahnya. Jika tidak, kembalikan 'Input tidak valid'.",
        hint: "def jumlahkan_semua(*args): Gunakan isinstance(x, (int, float)) untuk mengecek tipe.",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 12: MODULES
  // ============================================================
  {
    day: 12,
    title: "Modul (Modules)",
    titleEn: "Modules",
    icon: "📦",
    color: "#1ABC9C",
    topics: ["Creating Modules", "Importing Modules", "Built-in Modules", "Math & Random"],
    sections: [
      {
        id: "mod-intro",
        title: "Apa itu Module?",
        content: `
<p>Module adalah file yang berisi kumpulan kode (variabel, fungsi, class) yang bisa di-<em>import</em> ke program lain. Bayangkan module seperti <strong>kotak peralatan</strong> — kamu punya kotak khusus untuk alat listrik, kotak untuk alat tukang, dll. Setiap kotak berisi alat yang spesifik.</p>

<p>Module membantu kita <strong>mengorganisir kode</strong> agar tidak berantakan dalam satu file besar, dan memungkinkan <strong>reusability</strong> — tulis sekali, pakai di mana saja!</p>

<h3>Membuat Module Sendiri</h3>
<pre><code class="language-python"># File: mymodule.py — ini adalah module kita
def sapa(nama):
    return f'Halo, {nama}!'

def tambah(a, b):
    return a + b

orang = {
    'nama': 'Budi',
    'umur': 21,
    'kota': 'Jakarta'
}

gravitasi = 9.81</code></pre>

<h3>Mengimport Module</h3>
<pre><code class="language-python"># File: main.py — import module yang kita buat
import mymodule

# Akses fungsi dan variabel dengan nama_module.nama_item
print(mymodule.sapa('Andi'))          # Halo, Andi!
print(mymodule.tambah(3, 5))          # 8
print(mymodule.orang['nama'])         # Budi
print(mymodule.gravitasi)             # 9.81</code></pre>

<h3>Import Spesifik & Rename</h3>
<pre><code class="language-python"># Import fungsi tertentu saja
from mymodule import sapa, tambah
print(sapa('Citra'))   # Halo, Citra!
print(tambah(10, 20))  # 30

# Import dengan nama baru (alias)
from mymodule import sapa as greeting
print(greeting('Dina'))  # Halo, Dina!

# Import semua (tidak disarankan untuk module besar)
from mymodule import *</code></pre>
`
      },
      {
        id: "mod-builtin",
        title: "Module Bawaan Python",
        content: `
<p>Python punya banyak <strong>module bawaan</strong> yang siap pakai tanpa perlu menginstal. Seperti <strong>aplikasi bawaan di HP baru</strong> — sudah ada dan tinggal dipakai!</p>

<h3>Module os — Operasi Sistem</h3>
<pre><code class="language-python">import os

# Mendapatkan direktori kerja saat ini
print(os.getcwd())

# Membuat folder baru
# os.mkdir('folder_baru')

# Menghapus folder
# os.rmdir('folder_baru')

# Mengubah direktori kerja
# os.chdir('/path/ke/folder')</code></pre>

<h3>Module sys — Informasi Sistem</h3>
<pre><code class="language-python">import sys

# Versi Python yang digunakan
print(sys.version)

# Ukuran integer terbesar
print(sys.maxsize)

# Path pencarian module
print(sys.path)</code></pre>

<h3>Module statistics — Statistik Dasar</h3>
<pre><code class="language-python">from statistics import mean, median, mode, stdev

nilai = [85, 90, 78, 92, 88, 95, 85, 90, 78, 85]

print(f'Rata-rata: {mean(nilai)}')    # Rata-rata: 86.6
print(f'Median: {median(nilai)}')     # Median: 86.5
print(f'Modus: {mode(nilai)}')        # Modus: 85
print(f'Std Dev: {stdev(nilai):.2f}') # Std Dev: 5.58</code></pre>
`
      },
      {
        id: "mod-math-random",
        title: "Module math & random",
        content: `
<h3>Module math — Operasi Matematika</h3>
<p>Module <code>math</code> berisi banyak fungsi dan konstanta matematika. Seperti punya <strong>kalkulator ilmiah</strong> di dalam Python!</p>

<pre><code class="language-python">import math

# Konstanta
print(math.pi)          # 3.141592653589793
print(math.e)           # 2.718281828459045

# Fungsi matematika
print(math.sqrt(16))    # 4.0 (akar kuadrat)
print(math.pow(2, 3))   # 8.0 (pangkat)
print(math.floor(9.7))  # 9 (bulatkan ke bawah)
print(math.ceil(9.2))   # 10 (bulatkan ke atas)
print(math.log10(100))  # 2.0 (logaritma basis 10)
print(math.factorial(5)) # 120 (5! = 5×4×3×2×1)

# Import spesifik
from math import pi, sqrt
print(pi)       # 3.141592653589793
print(sqrt(25)) # 5.0</code></pre>

<h3>Module random — Angka Acak</h3>
<pre><code class="language-python">from random import random, randint, choice, shuffle

# random() — angka acak antara 0.0 dan 1.0
print(random())          # Contoh: 0.7423...

# randint(a, b) — integer acak antara a dan b (inklusif)
print(randint(1, 10))    # Contoh: 7

# choice() — pilih acak dari sequence
buah = ['apel', 'jeruk', 'mangga', 'pisang']
print(choice(buah))      # Contoh: mangga

# shuffle() — acak urutan list (mengubah list asli!)
angka = [1, 2, 3, 4, 5]
shuffle(angka)
print(angka)             # Contoh: [3, 1, 5, 2, 4]</code></pre>

<h3>Module string</h3>
<pre><code class="language-python">import string

print(string.ascii_letters)  # abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
print(string.digits)         # 0123456789
print(string.punctuation)    # !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa itu module di Python?",
        options: ["Tipe data baru", "File berisi kode yang bisa di-import", "Fungsi bawaan Python", "Library eksternal saja"],
        correct: 1,
        explanation: "Module adalah file (.py) yang berisi kumpulan kode (variabel, fungsi, class) yang bisa di-import ke program lain."
      },
      {
        id: 2,
        question: "Bagaimana cara import fungsi spesifik dari module?",
        options: ["import module.fungsi", "from module import fungsi", "import fungsi from module", "require(module)"],
        correct: 1,
        explanation: "Syntax yang benar: from module import fungsi. Contoh: from math import sqrt."
      },
      {
        id: 3,
        question: "Apa output dari: import math; print(math.floor(9.9))?",
        options: ["9", "10", "9.9", "Error"],
        correct: 0,
        explanation: "math.floor() membulatkan ke bawah. 9.9 dibulatkan ke bawah menjadi 9."
      },
      {
        id: 4,
        question: "Module mana yang digunakan untuk menghasilkan angka acak?",
        options: ["math", "random", "statistics", "os"],
        correct: 1,
        explanation: "Module random digunakan untuk menghasilkan angka acak. Contoh: random.randint(1, 10)."
      },
      {
        id: 5,
        question: "Apa perbedaan 'import math' dan 'from math import pi'?",
        options: [
          "Tidak ada perbedaan",
          "Yang pertama import semua, yang kedua hanya pi",
          "Yang pertama lebih lambat",
          "Yang kedua menghasilkan error"
        ],
        correct: 1,
        explanation: "'import math' mengimport seluruh module (akses: math.pi). 'from math import pi' hanya mengimport pi (akses langsung: pi)."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Buat Module Sendiri",
        description: "Buat file mymodule.py yang berisi: fungsi sapa(nama), fungsi luas_persegi(sisi), dan variabel versi = '1.0'. Import dan gunakan di file main.py.",
        hint: "Di mymodule.py: def sapa(nama): return f'Halo, {nama}!'. Di main.py: import mymodule; print(mymodule.sapa('Budi')).",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Kalkulator dengan math",
        description: "Gunakan module math untuk: menghitung akar kuadrat 144, membulatkan 3.7 ke atas dan ke bawah, dan menghitung 2 pangkat 10.",
        hint: "from math import sqrt, ceil, floor, pow. print(sqrt(144)), print(ceil(3.7)), print(floor(3.7)), print(pow(2, 10)).",
        difficulty: "mudah"
      },
      {
        id: 3,
        title: "Generator Password",
        description: "Buat fungsi yang menghasilkan password acak dengan panjang tertentu. Gunakan module random dan string.",
        hint: "import string, random. chars = string.ascii_letters + string.digits. password = ''.join(random.choice(chars) for _ in range(panjang)).",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Statistik Nilai",
        description: "Dari list nilai = [85, 90, 78, 92, 88, 95, 85, 90, 78, 85], hitung mean, median, mode, dan standard deviation menggunakan module statistics.",
        hint: "from statistics import mean, median, mode, stdev. Panggil masing-masing fungsi dengan parameter nilai.",
        difficulty: "sedang"
      }
    ]
  },

  // ============================================================
  // DAY 13: LIST COMPREHENSION
  // ============================================================
  {
    day: 13,
    title: "List Comprehension & Lambda",
    titleEn: "List Comprehension",
    icon: "🎯",
    color: "#8E44AD",
    topics: ["List Comprehension", "Lambda Function", "Lambda Inside Function"],
    sections: [
      {
        id: "lc-intro",
        title: "List Comprehension",
        content: `
<p>List comprehension adalah cara <strong>singkat dan elegan</strong> untuk membuat list baru dari sequence yang sudah ada. Bayangkan seperti <strong>mesin penyaring otomatis</strong> — masukkan bahan mentah, keluar produk jadi dalam satu langkah!</p>

<p>Dibandingkan menggunakan for loop biasa, list comprehension jauh lebih ringkas dan biasanya lebih cepat.</p>

<pre><code class="language-python"># Syntax: [ekspresi for item in iterable if kondisi]

# CARA LAMA: menggunakan for loop
bahasa = 'Python'
huruf_list = []
for huruf in bahasa:
    huruf_list.append(huruf)
print(huruf_list)  # ['P', 'y', 't', 'h', 'o', 'n']

# CARA BARU: list comprehension — satu baris!
huruf_list = [huruf for huruf in bahasa]
print(huruf_list)  # ['P', 'y', 't', 'h', 'o', 'n']</code></pre>

<h3>Contoh-contoh List Comprehension</h3>
<pre><code class="language-python"># Membuat list angka
angka = [i for i in range(11)]
print(angka)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Operasi matematika saat iterasi
kuadrat = [i * i for i in range(11)]
print(kuadrat)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# List of tuples
pasangan = [(i, i * i) for i in range(6)]
print(pasangan)  # [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]</code></pre>

<h3>List Comprehension dengan Kondisi</h3>
<pre><code class="language-python"># Filter bilangan genap
genap = [i for i in range(21) if i % 2 == 0]
print(genap)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Filter bilangan ganjil
ganjil = [i for i in range(21) if i % 2 != 0]
print(ganjil)  # [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

# Filter bilangan positif dan genap dari list campuran
angka = [-8, -7, -3, -1, 0, 1, 3, 4, 5, 7, 6, 8, 10]
positif_genap = [i for i in angka if i % 2 == 0 and i > 0]
print(positif_genap)  # [4, 6, 8, 10]

# Flatten list 2D menjadi 1D
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [angka for baris in matrix for angka in baris]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]</code></pre>
`
      },
      {
        id: "lc-lambda",
        title: "Lambda Function",
        content: `
<p>Lambda function adalah fungsi <strong>kecil dan anonim</strong> (tanpa nama) yang ditulis dalam satu baris. Bayangkan seperti <strong>catatan tempel</strong> — singkat, langsung ke inti, dan untuk penggunaan cepat.</p>

<p>Lambda bisa menerima banyak parameter tapi hanya bisa punya <strong>satu ekspresi</strong>.</p>

<pre><code class="language-python"># Syntax: lambda parameter: ekspresi

# Perbandingan fungsi biasa vs lambda
# Fungsi biasa
def tambah(a, b):
    return a + b
print(tambah(2, 3))  # 5

# Lambda — versi singkat
tambah = lambda a, b: a + b
print(tambah(2, 3))  # 5

# Contoh lainnya
kuadrat = lambda x: x ** 2
print(kuadrat(3))    # 9

kubik = lambda x: x ** 3
print(kubik(3))      # 27

# Lambda dengan banyak variabel
hitung = lambda a, b, c: a ** 2 - 3 * b + 4 * c
print(hitung(5, 5, 3))  # 25 - 15 + 12 = 22</code></pre>

<h3>Lambda di Dalam Fungsi Lain</h3>
<pre><code class="language-python"># Lambda sering digunakan di dalam fungsi lain
def pangkat(x):
    return lambda n: x ** n

# Membuat fungsi pangkat 2
pangkat_dua = pangkat(2)
print(pangkat_dua(3))   # 8 (2^3)
print(pangkat_dua(5))   # 32 (2^5)

# Membuat fungsi pangkat 3
pangkat_tiga = pangkat(3)
print(pangkat_tiga(2))  # 9 (3^2)
print(pangkat_tiga(3))  # 27 (3^3)

# Self-invoking lambda
hasil = (lambda a, b: a + b)(2, 3)
print(hasil)  # 5</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa output dari: [i * 2 for i in range(5)]?",
        options: ["[0, 1, 2, 3, 4]", "[2, 4, 6, 8, 10]", "[0, 2, 4, 6, 8]", "[1, 2, 3, 4, 5]"],
        correct: 2,
        explanation: "range(5) menghasilkan 0,1,2,3,4. Dikalikan 2: 0,2,4,6,8."
      },
      {
        id: 2,
        question: "Apa output dari: [i for i in range(10) if i % 3 == 0]?",
        options: ["[3, 6, 9]", "[0, 3, 6, 9]", "[1, 3, 6, 9]", "[0, 3, 6]"],
        correct: 1,
        explanation: "range(10) = 0-9. Yang habis dibagi 3: 0, 3, 6, 9."
      },
      {
        id: 3,
        question: "Apa itu lambda function?",
        options: ["Fungsi yang sangat panjang", "Fungsi anonim satu baris", "Fungsi yang tidak bisa dipanggil", "Fungsi khusus untuk list"],
        correct: 1,
        explanation: "Lambda adalah fungsi kecil anonim (tanpa nama) yang ditulis dalam satu baris dengan syntax: lambda params: ekspresi."
      },
      {
        id: 4,
        question: "Apa output dari: (lambda x, y: x + y)(3, 4)?",
        options: ["Error", "7", "34", "lambda"],
        correct: 1,
        explanation: "Lambda menerima x=3 dan y=4, mengembalikan 3+4=7. Ini adalah self-invoking lambda."
      },
      {
        id: 5,
        question: "Manakah list comprehension yang benar untuk membuat list kuadrat dari 1-5?",
        options: [
          "[x^2 for x in range(1,6)]",
          "[x ** 2 for x in range(1,6)]",
          "[x * 2 for x in range(1,6)]",
          "list(x ** 2 for x in range(1,6))"
        ],
        correct: 1,
        explanation: "Syntax yang benar: [x ** 2 for x in range(1,6)]. Operator pangkat di Python adalah **, bukan ^."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Filter Negatif dan Nol",
        description: "Dari numbers = [-4, -3, -2, -1, 0, 2, 4, 6], gunakan list comprehension untuk menyaring hanya angka negatif dan nol.",
        hint: "[i for i in numbers if i <= 0]. Hasilnya: [-4, -3, -2, -1, 0].",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Flatten List 2D",
        description: "Ubah list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] menjadi satu list datar [1, 2, 3, 4, 5, 6, 7, 8, 9] menggunakan list comprehension.",
        hint: "[angka for baris in list_of_lists for angka in baris].",
        difficulty: "sedang"
      },
      {
        id: 3,
        title: "Lambda Kalkulator",
        description: "Buat 4 lambda function: tambah, kurang, kali, bagi. Masing-masing menerima 2 parameter. Tes semua dengan angka 10 dan 3.",
        hint: "tambah = lambda a, b: a + b. kurang = lambda a, b: a - b. Dst.",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "List Comprehension Lanjutan",
        description: "Buat list of tuples [(n, 1, n, n², n³, n⁴, n⁵) for n in range(11)] menggunakan list comprehension.",
        hint: "[(n, 1, n, n**2, n**3, n**4, n**5) for n in range(11)].",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 14: HIGHER ORDER FUNCTIONS
  // ============================================================
  {
    day: 14,
    title: "Higher Order Functions",
    titleEn: "Higher Order Functions",
    icon: "🔝",
    color: "#2980B9",
    topics: ["Higher Order Functions", "Closures", "Decorators", "map/filter/reduce"],
    sections: [
      {
        id: "hof-intro",
        title: "Higher Order Functions",
        content: `
<p>Di Python, fungsi adalah <strong>first class citizens</strong> — artinya fungsi bisa diperlakukan seperti data biasa. Kamu bisa menyimpan fungsi di variabel, mengirimnya sebagai parameter, atau mengembalikannya dari fungsi lain. Bayangkan seperti <strong>manajer yang bisa mendelegasikan tugas ke karyawan berbeda</strong>.</p>

<p>Higher Order Function (HOF) adalah fungsi yang:</p>
<ul>
  <li>Menerima fungsi lain sebagai <strong>parameter</strong>, atau</li>
  <li><strong>Mengembalikan</strong> fungsi sebagai hasilnya</li>
</ul>

<h3>Fungsi sebagai Parameter</h3>
<pre><code class="language-python"># Fungsi biasa
def jumlahkan(angka_list):
    return sum(angka_list)

# Higher order function — menerima fungsi sebagai parameter
def proses_data(fungsi, data):
    hasil = fungsi(data)
    return hasil

result = proses_data(jumlahkan, [1, 2, 3, 4, 5])
print(result)  # 15</code></pre>

<h3>Fungsi sebagai Return Value</h3>
<pre><code class="language-python">def kuadrat(x):
    return x ** 2

def kubik(x):
    return x ** 3

def pilih_operasi(tipe):
    if tipe == 'kuadrat':
        return kuadrat
    elif tipe == 'kubik':
        return kubik

# Fungsi mengembalikan fungsi lain!
operasi = pilih_operasi('kuadrat')
print(operasi(3))   # 9

operasi = pilih_operasi('kubik')
print(operasi(3))   # 27</code></pre>
`
      },
      {
        id: "hof-closure",
        title: "Closures & Decorators",
        content: `
<h3>Python Closures</h3>
<p>Closure terjadi ketika fungsi dalam (inner function) "mengingat" variabel dari fungsi luar (outer function), bahkan setelah fungsi luar selesai dijalankan. Bayangkan seperti <strong>surat dalam amplop</strong> — surat (inner function) membawa informasi dari amplop (outer function) ke mana pun ia pergi.</p>

<pre><code class="language-python">def tambah_sepuluh():
    sepuluh = 10
    def tambah(angka):
        return angka + sepuluh  # 'sepuluh' diingat dari outer function
    return tambah

# closure_func "mengingat" nilai sepuluh = 10
closure_func = tambah_sepuluh()
print(closure_func(5))   # 15
print(closure_func(10))  # 20</code></pre>

<h3>Python Decorators</h3>
<p>Decorator adalah cara untuk <strong>menambah fungsionalitas</strong> ke fungsi yang sudah ada tanpa mengubah kodenya. Bayangkan seperti <strong>menambah topping ke pizza</strong> — pizza dasarnya sama, tapi kamu bisa menambah keju, saus, dll.</p>

<pre><code class="language-python"># Membuat decorator
def huruf_besar_decorator(fungsi):
    def wrapper():
        hasil = fungsi()
        return hasil.upper()
    return wrapper

# Cara 1: tanpa @ syntax
def sapa():
    return 'Selamat datang di Python'

sapa_besar = huruf_besar_decorator(sapa)
print(sapa_besar())  # SELAMAT DATANG DI PYTHON

# Cara 2: dengan @ syntax (lebih rapi!)
@huruf_besar_decorator
def sapa2():
    return 'Halo dunia'

print(sapa2())  # HALO DUNIA</code></pre>

<h3>Decorator dengan Parameter</h3>
<pre><code class="language-python">def decorator_dengan_param(fungsi):
    def wrapper(nama, kota):
        fungsi(nama, kota)
        print(f'Saya tinggal di {kota}')
    return wrapper

@decorator_dengan_param
def perkenalan(nama, kota):
    print(f'Nama saya {nama}')

perkenalan('Budi', 'Jakarta')
# Output:
# Nama saya Budi
# Saya tinggal di Jakarta</code></pre>
`
      },
      {
        id: "hof-map-filter",
        title: "map(), filter(), reduce()",
        content: `
<p>Python punya 3 built-in higher order function yang sangat berguna: <code>map()</code>, <code>filter()</code>, dan <code>reduce()</code>. Ketiganya sering digunakan bersama lambda function.</p>

<h3>map() — Transformasi Setiap Item</h3>
<p>Seperti <strong>mesin cetak</strong> — setiap item masuk, diproses, dan keluar dalam bentuk baru.</p>

<pre><code class="language-python"># map(fungsi, iterable) — terapkan fungsi ke setiap item
angka = [1, 2, 3, 4, 5]

# Dengan fungsi biasa
def kuadrat(x):
    return x ** 2

hasil = map(kuadrat, angka)
print(list(hasil))  # [1, 4, 9, 16, 25]

# Dengan lambda — lebih ringkas!
hasil = map(lambda x: x ** 2, angka)
print(list(hasil))  # [1, 4, 9, 16, 25]

# Ubah string ke uppercase
nama = ['budi', 'andi', 'citra']
nama_besar = map(lambda n: n.upper(), nama)
print(list(nama_besar))  # ['BUDI', 'ANDI', 'CITRA']</code></pre>

<h3>filter() — Saring Item</h3>
<p>Seperti <strong>saringan kopi</strong> — hanya item yang memenuhi syarat yang lolos.</p>

<pre><code class="language-python"># filter(fungsi, iterable) — saring item yang True
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter bilangan genap
genap = filter(lambda x: x % 2 == 0, angka)
print(list(genap))  # [2, 4, 6, 8, 10]

# Filter bilangan ganjil
ganjil = filter(lambda x: x % 2 != 0, angka)
print(list(ganjil))  # [1, 3, 5, 7, 9]

# Filter nama panjang (> 4 huruf)
nama = ['Budi', 'Andi', 'Citra', 'Dina', 'Erlangga']
nama_panjang = filter(lambda n: len(n) > 4, nama)
print(list(nama_panjang))  # ['Citra', 'Erlangga']</code></pre>

<h3>reduce() — Reduksi ke Satu Nilai</h3>
<p>Seperti <strong>memasak</strong> — banyak bahan masuk, satu hidangan keluar.</p>

<pre><code class="language-python"># reduce harus di-import dari functools
from functools import reduce

# Jumlahkan semua angka
angka = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, angka)
print(total)  # 15 (1+2=3, 3+3=6, 6+4=10, 10+5=15)

# Cari nilai terbesar
terbesar = reduce(lambda a, b: a if a > b else b, angka)
print(terbesar)  # 5

# Gabungkan string
kata = ['Python', 'itu', 'seru', 'sekali']
kalimat = reduce(lambda a, b: a + ' ' + b, kata)
print(kalimat)  # Python itu seru sekali</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa itu Higher Order Function?",
        options: [
          "Fungsi yang berjalan lebih cepat",
          "Fungsi yang menerima atau mengembalikan fungsi lain",
          "Fungsi yang ditulis di awal program",
          "Fungsi yang tidak punya parameter"
        ],
        correct: 1,
        explanation: "Higher Order Function adalah fungsi yang menerima fungsi lain sebagai parameter ATAU mengembalikan fungsi sebagai hasilnya."
      },
      {
        id: 2,
        question: "Apa output dari: list(map(lambda x: x*3, [1,2,3]))?",
        options: ["[1, 2, 3]", "[3, 6, 9]", "[1, 6, 9]", "Error"],
        correct: 1,
        explanation: "map() menerapkan lambda x: x*3 ke setiap item: 1*3=3, 2*3=6, 3*3=9."
      },
      {
        id: 3,
        question: "Apa output dari: list(filter(lambda x: x>3, [1,2,3,4,5]))?",
        options: ["[1, 2, 3]", "[4, 5]", "[3, 4, 5]", "[True, True]"],
        correct: 1,
        explanation: "filter() menyaring item yang kondisinya True. x>3 berlaku untuk 4 dan 5."
      },
      {
        id: 4,
        question: "Dari module mana reduce() harus di-import?",
        options: ["math", "functools", "itertools", "collections"],
        correct: 1,
        explanation: "reduce() harus di-import dari module functools: from functools import reduce."
      },
      {
        id: 5,
        question: "Apa itu closure di Python?",
        options: [
          "Fungsi yang menutup program",
          "Inner function yang mengingat variabel dari outer function",
          "Fungsi yang tidak bisa dipanggil",
          "Cara menghapus fungsi"
        ],
        correct: 1,
        explanation: "Closure terjadi ketika inner function 'mengingat' dan mengakses variabel dari outer function, bahkan setelah outer function selesai dijalankan."
      },
      {
        id: 6,
        question: "Apa simbol yang digunakan untuk menerapkan decorator?",
        options: ["#", "@", "$", "&"],
        correct: 1,
        explanation: "Simbol @ digunakan sebelum definisi fungsi untuk menerapkan decorator. Contoh: @nama_decorator."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Map: Uppercase Negara",
        description: "Dari list negara = ['indonesia', 'jepang', 'korea', 'thailand'], gunakan map() untuk mengubah semua nama menjadi huruf besar.",
        hint: "list(map(lambda n: n.upper(), negara)) atau list(map(str.upper, negara)).",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Filter: Nama Panjang",
        description: "Dari list nama = ['Budi', 'Andi', 'Citra', 'Dina', 'Erlangga', 'Fani'], filter nama yang panjangnya lebih dari 4 karakter.",
        hint: "list(filter(lambda n: len(n) > 4, nama)).",
        difficulty: "mudah"
      },
      {
        id: 3,
        title: "Reduce: Gabung Kalimat",
        description: "Dari list negara = ['Indonesia', 'Malaysia', 'Singapura', 'Thailand'], gunakan reduce untuk menggabungkan menjadi: 'Indonesia, Malaysia, Singapura, dan Thailand adalah negara ASEAN'.",
        hint: "Gabungkan semua kecuali terakhir dengan ', '. Tambahkan 'dan' + terakhir + ' adalah negara ASEAN'.",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Buat Decorator Logger",
        description: "Buat decorator bernama logger yang mencetak nama fungsi dan argumennya sebelum fungsi dijalankan, lalu mencetak hasilnya setelah selesai.",
        hint: "def logger(func): def wrapper(*args): print(f'Memanggil {func.__name__} dengan {args}'); result = func(*args); print(f'Hasil: {result}'); return result; return wrapper.",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 15: PYTHON TYPE ERRORS
  // ============================================================
  {
    day: 15,
    title: "Jenis-jenis Error Python",
    titleEn: "Python Type Errors",
    icon: "🐛",
    color: "#C0392B",
    topics: ["SyntaxError", "NameError", "TypeError", "IndexError", "KeyError", "ValueError"],
    sections: [
      {
        id: "error-intro",
        title: "Mengenal Error di Python",
        content: `
<p>Saat menulis kode, membuat kesalahan itu <strong>sangat normal</strong> — bahkan programmer berpengalaman pun sering melakukannya! Yang penting adalah kamu bisa <strong>membaca dan memahami pesan error</strong> untuk memperbaikinya dengan cepat. Bayangkan error seperti <strong>lampu peringatan di dashboard mobil</strong> — mereka memberitahu apa yang salah agar kamu bisa memperbaikinya.</p>

<p>Python akan menampilkan pesan error yang berisi:</p>
<ul>
  <li><strong>Jenis error</strong> (SyntaxError, TypeError, dll.)</li>
  <li><strong>Lokasi error</strong> (file dan nomor baris)</li>
  <li><strong>Deskripsi</strong> apa yang salah</li>
  <li>Kadang juga <strong>saran perbaikan</strong>!</li>
</ul>

<h3>SyntaxError — Kesalahan Penulisan</h3>
<p>Terjadi ketika Python tidak bisa memahami kode karena penulisan yang salah. Seperti <strong>kalimat tanpa tanda titik atau huruf yang hilang</strong>.</p>

<pre><code class="language-python"># ❌ SALAH: lupa tanda kurung
print 'Halo dunia'
# SyntaxError: Missing parentheses in call to 'print'

# ✅ BENAR:
print('Halo dunia')

# ❌ SALAH: lupa titik dua setelah if
if True
    print('Ya')
# SyntaxError: expected ':'

# ✅ BENAR:
if True:
    print('Ya')</code></pre>
`
      },
      {
        id: "error-name-index",
        title: "NameError & IndexError",
        content: `
<h3>NameError — Variabel Tidak Ditemukan</h3>
<p>Terjadi ketika kamu menggunakan variabel yang belum didefinisikan. Seperti <strong>memanggil nama orang yang tidak ada di ruangan</strong>.</p>

<pre><code class="language-python"># ❌ SALAH: variabel 'umur' belum didefinisikan
print(umur)
# NameError: name 'umur' is not defined

# ✅ BENAR: definisikan dulu
umur = 25
print(umur)  # 25

# ❌ SALAH: typo pada nama variabel
nama = 'Budi'
print(namaa)  # NameError: name 'namaa' is not defined
# Perhatikan: 'namaa' bukan 'nama'!</code></pre>

<h3>IndexError — Index di Luar Jangkauan</h3>
<p>Terjadi ketika kamu mengakses index yang tidak ada di list/tuple. Seperti <strong>mencari halaman 200 di buku yang hanya punya 100 halaman</strong>.</p>

<pre><code class="language-python"># ❌ SALAH: list hanya punya index 0-4
angka = [1, 2, 3, 4, 5]
print(angka[5])
# IndexError: list index out of range

# ✅ BENAR: gunakan index yang valid
print(angka[4])   # 5 (index terakhir)
print(angka[-1])  # 5 (cara aman akses item terakhir)

# Tips: cek panjang list dulu
if len(angka) > 5:
    print(angka[5])
else:
    print('Index tidak valid!')</code></pre>
`
      },
      {
        id: "error-key-type",
        title: "KeyError, TypeError & ModuleNotFoundError",
        content: `
<h3>KeyError — Key Tidak Ditemukan di Dictionary</h3>
<p>Terjadi ketika kamu mengakses key yang tidak ada di dictionary. Seperti <strong>mencari kata yang tidak ada di kamus</strong>.</p>

<pre><code class="language-python"># ❌ SALAH: typo pada key
user = {'nama': 'Budi', 'umur': 25, 'kota': 'Jakarta'}
print(user['negara'])
# KeyError: 'negara'

# ✅ BENAR: gunakan key yang ada, atau .get()
print(user['kota'])           # Jakarta
print(user.get('negara'))     # None (tidak error)
print(user.get('negara', 'Indonesia'))  # Indonesia (default)</code></pre>

<h3>TypeError — Operasi pada Tipe Data yang Salah</h3>
<p>Terjadi ketika kamu melakukan operasi yang tidak cocok dengan tipe datanya. Seperti <strong>mencoba memotong air dengan gunting</strong>.</p>

<pre><code class="language-python"># ❌ SALAH: tidak bisa menambahkan int dan str
hasil = 4 + '3'
# TypeError: unsupported operand type(s) for +: 'int' and 'str'

# ✅ BENAR: konversi tipe data dulu
hasil = 4 + int('3')    # 7 (konversi str ke int)
hasil = str(4) + '3'    # '43' (konversi int ke str)

# ❌ SALAH: tidak bisa iterasi integer
for i in 10:
    print(i)
# TypeError: 'int' object is not iterable

# ✅ BENAR: gunakan range()
for i in range(10):
    print(i)</code></pre>

<h3>ModuleNotFoundError — Module Tidak Ditemukan</h3>
<pre><code class="language-python"># ❌ SALAH: typo pada nama module
import maths
# ModuleNotFoundError: No module named 'maths'

# ✅ BENAR:
import math
print(math.pi)  # 3.141592653589793</code></pre>
`
      },
      {
        id: "error-value-zero",
        title: "ValueError, ImportError & ZeroDivisionError",
        content: `
<h3>ValueError — Nilai Tidak Valid</h3>
<p>Terjadi ketika fungsi menerima argument dengan tipe yang benar tapi <strong>nilai yang salah</strong>. Seperti <strong>memasukkan huruf di kolom nomor telepon</strong>.</p>

<pre><code class="language-python"># ❌ SALAH: '12a' tidak bisa dikonversi ke int
angka = int('12a')
# ValueError: invalid literal for int() with base 10: '12a'

# ✅ BENAR:
angka = int('12')    # 12
angka = float('3.14') # 3.14

# Tips: gunakan try-except untuk menangani
try:
    angka = int(input('Masukkan angka: '))
    print(f'Angka: {angka}')
except ValueError:
    print('Input harus berupa angka!')</code></pre>

<h3>ImportError — Gagal Import</h3>
<pre><code class="language-python"># ❌ SALAH: 'power' tidak ada di module math
from math import power
# ImportError: cannot import name 'power' from 'math'

# ✅ BENAR: nama yang benar adalah 'pow'
from math import pow
print(pow(2, 3))  # 8.0</code></pre>

<h3>ZeroDivisionError — Pembagian dengan Nol</h3>
<p>Terjadi ketika kamu membagi angka dengan nol. Dalam matematika, pembagian dengan nol <strong>tidak terdefinisi</strong>.</p>

<pre><code class="language-python"># ❌ SALAH: tidak bisa dibagi nol
hasil = 10 / 0
# ZeroDivisionError: division by zero

# ✅ BENAR: cek dulu sebelum membagi
pembagi = 0
if pembagi != 0:
    hasil = 10 / pembagi
else:
    print('Tidak bisa membagi dengan nol!')

# Atau gunakan try-except
try:
    hasil = 10 / 0
except ZeroDivisionError:
    print('Error: pembagian dengan nol!')</code></pre>

<h3>AttributeError — Atribut Tidak Ditemukan</h3>
<pre><code class="language-python"># ❌ SALAH: math.PI (huruf besar) tidak ada
import math
print(math.PI)
# AttributeError: module 'math' has no attribute 'PI'

# ✅ BENAR: gunakan huruf kecil
print(math.pi)  # 3.141592653589793</code></pre>

<h3>Tips Debugging</h3>
<p>Ketika menemui error, ikuti langkah-langkah ini:</p>
<ol>
  <li><strong>Baca pesan error</strong> — Python memberitahu jenis dan lokasi error</li>
  <li><strong>Cek baris yang ditunjuk</strong> — biasanya error ada di baris itu atau baris sebelumnya</li>
  <li><strong>Gunakan print()</strong> — cetak variabel untuk mengecek nilainya</li>
  <li><strong>Gunakan try-except</strong> — tangani error yang mungkin terjadi</li>
  <li><strong>Cari di Google/Stack Overflow</strong> — kemungkinan besar orang lain pernah mengalami error yang sama!</li>
</ol>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Error apa yang muncul jika kamu menulis: print 'halo'?",
        options: ["TypeError", "NameError", "SyntaxError", "ValueError"],
        correct: 2,
        explanation: "SyntaxError karena di Python 3, print() membutuhkan tanda kurung: print('halo')."
      },
      {
        id: 2,
        question: "Error apa yang muncul jika mengakses variabel yang belum didefinisikan?",
        options: ["SyntaxError", "NameError", "TypeError", "ValueError"],
        correct: 1,
        explanation: "NameError muncul ketika Python tidak menemukan nama variabel yang direferensikan."
      },
      {
        id: 3,
        question: "Apa yang terjadi saat menjalankan: 10 / 0?",
        options: ["Menghasilkan 0", "Menghasilkan infinity", "ZeroDivisionError", "ValueError"],
        correct: 2,
        explanation: "ZeroDivisionError muncul karena pembagian dengan nol tidak terdefinisi dalam matematika."
      },
      {
        id: 4,
        question: "Error apa yang muncul dari: int('abc')?",
        options: ["TypeError", "ValueError", "SyntaxError", "NameError"],
        correct: 1,
        explanation: "ValueError karena 'abc' bukan literal angka yang valid untuk dikonversi ke integer."
      },
      {
        id: 5,
        question: "Bagaimana cara aman menangani error di Python?",
        options: ["Mengabaikan error", "Menggunakan try-except", "Menghapus kode yang error", "Menggunakan if-else saja"],
        correct: 1,
        explanation: "try-except adalah cara standar Python untuk menangani error. Kode yang mungkin error diletakkan di blok try, dan penanganannya di blok except."
      },
      {
        id: 6,
        question: "Error apa yang muncul dari: [1,2,3][5]?",
        options: ["KeyError", "IndexError", "ValueError", "TypeError"],
        correct: 1,
        explanation: "IndexError karena list hanya punya index 0, 1, 2 — index 5 di luar jangkauan."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Identifikasi Error",
        description: "Buka Python shell dan coba jalankan kode-kode berikut. Identifikasi jenis error-nya: print 'halo', 5 + '3', nama, [1,2][5], {'a':1}['b'], 1/0.",
        hint: "Jalankan satu per satu dan catat jenis error: SyntaxError, TypeError, NameError, IndexError, KeyError, ZeroDivisionError.",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Try-Except Dasar",
        description: "Buat program yang meminta user memasukkan angka dengan input(). Gunakan try-except untuk menangani ValueError jika user memasukkan bukan angka.",
        hint: "try: angka = int(input('Angka: ')); print(angka). except ValueError: print('Bukan angka!').",
        difficulty: "mudah"
      },
      {
        id: 3,
        title: "Kalkulator Aman",
        description: "Buat kalkulator yang menangani semua kemungkinan error: ValueError (input bukan angka), ZeroDivisionError (bagi nol), dan input operator yang tidak valid.",
        hint: "Gunakan try-except bertingkat. Cek operator dengan if/elif. Tangani setiap jenis error secara spesifik.",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Error Handler Universal",
        description: "Buat fungsi safe_divide(a, b) yang menangani TypeError (jika input bukan angka) dan ZeroDivisionError. Kembalikan pesan error yang informatif untuk setiap kasus.",
        hint: "def safe_divide(a, b): try: return a / b; except TypeError: return 'Error: input harus angka'; except ZeroDivisionError: return 'Error: tidak bisa bagi nol'.",
        difficulty: "sedang"
      },
      {
        id: 5,
        title: "Debug Challenge",
        description: "Perbaiki semua error dalam kode berikut: umur = input('Umur: '); if umur >= 17 print('Dewasa') else print('Anak-anak'). Ada minimal 3 error!",
        hint: "Error 1: umur dari input() adalah string, perlu int(). Error 2: kurang titik dua setelah if. Error 3: kurang titik dua setelah else. Error 4: indentasi.",
        difficulty: "sulit"
      }
    ]
  }
];
