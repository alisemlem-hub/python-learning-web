// ============================================================
// DATA KONTEN BELAJAR PYTHON DAY 1-7
// Tropical Classroom Theme
// ============================================================

export interface DayContent {
  day: number;
  title: string;
  titleEn: string;
  icon: string;
  color: string;
  topics: string[];
  sections: Section[];
  quiz: QuizQuestion[];
  exercises: Exercise[];
}

export interface Section {
  id: string;
  title: string;
  content: string; // HTML string
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number; // index
  explanation: string;
}

export interface Exercise {
  id: number;
  title: string;
  description: string;
  hint: string;
  difficulty: 'mudah' | 'sedang' | 'sulit';
}

export const motivationalQuotes = [
  { quote: "Setiap ahli pernah menjadi pemula.", author: "Helen Hayes" },
  { quote: "Kode terbaik adalah kode yang kamu tulis hari ini, bukan besok.", author: "Anonim" },
  { quote: "Belajar coding itu seperti belajar bahasa baru — butuh latihan setiap hari.", author: "Anonim" },
  { quote: "Jangan takut membuat kesalahan. Itulah cara terbaik untuk belajar.", author: "Anonim" },
  { quote: "Program yang sempurna tidak pernah ada, tapi program yang berguna selalu bisa dibuat.", author: "Anonim" },
  { quote: "Satu baris kode hari ini lebih baik dari seribu rencana besok.", author: "Anonim" },
  { quote: "Python dibuat agar mudah dibaca. Jika kodenya sulit dibaca, mungkin ada cara yang lebih baik.", author: "Guido van Rossum" },
  { quote: "Perjalanan seribu mil dimulai dari satu langkah pertama.", author: "Lao Tzu" },
  { quote: "Kesalahan adalah bukti bahwa kamu sedang mencoba.", author: "Anonim" },
  { quote: "Coding bukan tentang mengetik cepat, tapi tentang berpikir jernih.", author: "Anonim" },
  { quote: "Setiap bug yang kamu perbaiki membuatmu lebih kuat.", author: "Anonim" },
  { quote: "Belajar Python itu seperti menanam pohon — waktu terbaik adalah sekarang.", author: "Anonim" },
  { quote: "Programmer hebat bukan yang tidak pernah error, tapi yang tahu cara debug.", author: "Anonim" },
  { quote: "Kamu tidak perlu menjadi hebat untuk memulai, tapi kamu perlu memulai untuk menjadi hebat.", author: "Zig Ziglar" },
];

export const topicCategories = [
  { id: 'introduction', name: 'Introduction & Setup', icon: '🚀', days: [1], description: 'Pengenalan Python dan setup environment' },
  { id: 'variables', name: 'Variables & Built-in Functions', icon: '📦', days: [2], description: 'Variable, tipe data, dan fungsi bawaan' },
  { id: 'datatypes', name: 'Data Types', icon: '🏷️', days: [1, 2], description: 'Jenis-jenis tipe data di Python' },
  { id: 'operators', name: 'Operators', icon: '🔢', days: [3], description: 'Operator aritmatika, perbandingan, dan logika' },
  { id: 'strings', name: 'Strings', icon: '📝', days: [4], description: 'Manipulasi teks dan string methods' },
  { id: 'lists', name: 'Lists', icon: '📋', days: [5], description: 'Koleksi data yang terurut dan bisa diubah' },
  { id: 'tuples', name: 'Tuples', icon: '🔒', days: [6], description: 'Koleksi data yang terurut tapi tidak bisa diubah' },
  { id: 'sets', name: 'Sets', icon: '🎯', days: [7], description: 'Koleksi data unik tanpa urutan' },
];

export const dayContents: DayContent[] = [
  // ============================================================
  // DAY 1: INTRODUCTION
  // ============================================================
  {
    day: 1,
    title: "Pengenalan Python",
    titleEn: "Introduction",
    icon: "🚀",
    color: "#FFB347",
    topics: ["Introduction", "Setup Environment", "Basic Python", "Data Types"],
    sections: [
      {
        id: "welcome",
        title: "Selamat Datang!",
        content: `
<p>Selamat! Kamu telah memutuskan untuk memulai perjalanan belajar Python. Bayangkan Python seperti <strong>bahasa universal</strong> yang bisa kamu gunakan untuk "berbicara" dengan komputer. Sama seperti belajar bahasa Inggris atau bahasa asing lainnya, belajar Python membutuhkan latihan rutin — tapi hasilnya sangat worth it!</p>

<p>Python adalah bahasa pemrograman tingkat tinggi yang dibuat oleh <strong>Guido van Rossum</strong>, seorang programmer asal Belanda. Nama "Python" diambil dari acara komedi Inggris <em>Monty Python's Flying Circus</em> — jadi ya, Python itu fun dari awal! Versi pertamanya dirilis pada 20 Februari 1991.</p>

<h3>Kenapa Harus Python?</h3>
<p>Python itu seperti <strong>pisau Swiss Army</strong> di dunia programming — bisa dipakai untuk banyak hal:</p>
<ul>
  <li>Membuat website (Django, Flask)</li>
  <li>Data Science & Machine Learning</li>
  <li>Automasi tugas-tugas membosankan</li>
  <li>Membuat aplikasi desktop</li>
  <li>Dan masih banyak lagi!</li>
</ul>
<p>Perusahaan besar seperti <strong>Google, Netflix, Instagram, dan Spotify</strong> semuanya menggunakan Python. Jadi kamu sedang belajar bahasa yang sangat dibutuhkan di industri!</p>
`
      },
      {
        id: "setup",
        title: "Setup Environment",
        content: `
<h3>Menginstal Python</h3>
<p>Langkah pertama adalah menginstal Python di komputermu. Bayangkan ini seperti <strong>memasang mesin</strong> sebelum bisa menjalankan mobil.</p>
<p>Download Python dari <a href="https://python.org" target="_blank">python.org</a>, lalu instal sesuai sistem operasimu (Windows/Mac/Linux).</p>
<p>Setelah instal, buka terminal/command prompt dan ketik:</p>
<pre><code class="language-bash"># Cek apakah Python sudah terinstal
python3 --version
# Output contoh: Python 3.11.0</code></pre>

<h3>Python Shell</h3>
<p>Python Shell itu seperti <strong>kalkulator super canggih</strong> — kamu ketik perintah, langsung dapat hasilnya. Buka terminal dan ketik:</p>
<pre><code class="language-bash"># Buka Python Shell
python3</code></pre>
<p>Kamu akan melihat tanda <code>>>></code> yang artinya Python siap menerima perintahmu. Untuk keluar, ketik <code>exit()</code>.</p>

<h3>Menginstal Visual Studio Code</h3>
<p>Untuk menulis kode yang lebih panjang, kita butuh <strong>code editor</strong>. Visual Studio Code (VS Code) adalah pilihan terbaik untuk pemula — gratis, ringan, dan punya banyak fitur membantu.</p>
<p>Download dari <a href="https://code.visualstudio.com" target="_blank">code.visualstudio.com</a>, lalu buat folder bernama <code>BelajarPython</code> di desktop-mu.</p>
`
      },
      {
        id: "basic-python",
        title: "Dasar-Dasar Python",
        content: `
<h3>Syntax Python</h3>
<p>Script Python bisa ditulis di Python Shell atau di code editor. File Python punya ekstensi <code>.py</code>.</p>

<h3>Indentation (Indentasi)</h3>
<p>Indentasi adalah <strong>spasi di awal baris</strong>. Kalau di bahasa lain pakai kurung kurawal <code>{}</code> untuk mengelompokkan kode, Python pakai indentasi. Bayangkan seperti <strong>paragraf dalam esai</strong> — setiap paragraf baru dimulai dengan menjorok ke dalam.</p>

<h3>Comments (Komentar)</h3>
<p>Komentar adalah catatan untuk dirimu sendiri di dalam kode. Python tidak akan menjalankan baris yang dimulai dengan <code>#</code>. Ini seperti <strong>sticky note</strong> yang kamu tempel di buku catatan.</p>
<pre><code class="language-python"># Ini adalah komentar - Python akan mengabaikan baris ini
# Komentar berguna untuk menjelaskan kode

# Komentar satu baris dimulai dengan tanda pagar (#)
print("Halo!")  # Komentar juga bisa di akhir baris

"""
Ini adalah komentar multi-baris.
Gunakan tiga tanda kutip untuk komentar
yang lebih dari satu baris.
"""</code></pre>
`
      },
      {
        id: "data-types",
        title: "Tipe Data Dasar",
        content: `
<p>Tipe data adalah <strong>jenis-jenis informasi</strong> yang bisa disimpan di Python. Bayangkan seperti jenis-jenis wadah di dapur — ada toples untuk kue, botol untuk air, dan kotak untuk nasi.</p>

<h3>Number (Angka)</h3>
<pre><code class="language-python"># Integer - bilangan bulat (tanpa koma)
umur = 25          # Contoh: -3, -2, -1, 0, 1, 2, 3

# Float - bilangan desimal (dengan koma)
tinggi = 170.5     # Contoh: -3.5, 0.0, 1.1, 3.14

# Complex - bilangan kompleks (jarang dipakai pemula)
z = 1 + 2j         # Contoh: 1+j, 2+4j</code></pre>

<h3>String (Teks)</h3>
<pre><code class="language-python"># String adalah kumpulan karakter dalam tanda kutip
nama = 'Budi'              # Kutip satu
kota = "Jakarta"           # Kutip dua
pesan = '''Ini adalah
teks yang lebih dari
satu baris'''              # Kutip tiga untuk multi-baris</code></pre>

<h3>Boolean (Benar/Salah)</h3>
<pre><code class="language-python"># Boolean hanya punya dua nilai: True atau False
# Huruf pertama HARUS kapital!
lampu_nyala = True    # Apakah lampunya nyala? Ya!
hujan = False         # Apakah sedang hujan? Tidak!</code></pre>

<h3>List (Daftar)</h3>
<pre><code class="language-python"># List adalah kumpulan item yang terurut, bisa diubah
buah = ['apel', 'mangga', 'jeruk']     # List string
angka = [1, 2, 3, 4, 5]               # List angka
campur = ['Budi', 25, True, 9.8]      # List campur tipe</code></pre>

<h3>Dictionary (Kamus)</h3>
<pre><code class="language-python"># Dictionary menyimpan data dalam format kunci:nilai
# Seperti kamus sungguhan - ada kata (kunci) dan artinya (nilai)
mahasiswa = {
    'nama': 'Budi',        # kunci 'nama', nilai 'Budi'
    'umur': 20,             # kunci 'umur', nilai 20
    'jurusan': 'Informatika'
}</code></pre>

<h3>Tuple</h3>
<pre><code class="language-python"># Tuple seperti List, tapi TIDAK BISA diubah setelah dibuat
# Bayangkan seperti data di KTP - sudah dicetak, tidak bisa diedit
warna = ('merah', 'hijau', 'biru')
koordinat = (10, 20)</code></pre>

<h3>Set</h3>
<pre><code class="language-python"># Set adalah kumpulan item UNIK (tidak ada duplikat)
# Bayangkan seperti daftar hadir - satu nama hanya muncul sekali
angka_unik = {1, 2, 3, 4, 5}
huruf = {'a', 'b', 'c'}</code></pre>

<h3>Mengecek Tipe Data</h3>
<pre><code class="language-python"># Gunakan fungsi type() untuk mengecek tipe data
print(type(10))           # &lt;class 'int'&gt;
print(type(3.14))         # &lt;class 'float'&gt;
print(type('Halo'))       # &lt;class 'str'&gt;
print(type(True))         # &lt;class 'bool'&gt;
print(type([1, 2]))       # &lt;class 'list'&gt;
print(type({'a': 1}))     # &lt;class 'dict'&gt;
print(type((1, 2)))       # &lt;class 'tuple'&gt;
print(type({1, 2}))       # &lt;class 'set'&gt;</code></pre>
`
      },
      {
        id: "python-file",
        title: "Membuat File Python",
        content: `
<p>Sekarang saatnya membuat file Python pertamamu! Buat file bernama <code>helloworld.py</code> di folder <code>BelajarPython</code>.</p>
<pre><code class="language-python"># helloworld.py - File Python pertamaku!

# Menampilkan teks ke layar
print('Halo, Dunia!')      # Output: Halo, Dunia!
print('Saya sedang belajar Python!')

# Operasi matematika dasar
print(2 + 3)               # Penjumlahan: 5
print(3 - 1)               # Pengurangan: 2
print(2 * 3)               # Perkalian: 6
print(3 / 2)               # Pembagian: 1.5
print(3 ** 2)              # Pangkat: 9 (3 x 3)
print(3 % 2)               # Modulus (sisa bagi): 1
print(3 // 2)              # Pembagian bulat: 1

# Mengecek tipe data
print(type(10))            # &lt;class 'int'&gt;
print(type(3.14))          # &lt;class 'float'&gt;
print(type('Python'))      # &lt;class 'str'&gt;</code></pre>
<p>Untuk menjalankan file ini, buka terminal di VS Code dan ketik: <code>python3 helloworld.py</code></p>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Siapa yang menciptakan bahasa pemrograman Python?",
        options: ["Elon Musk", "Guido van Rossum", "Mark Zuckerberg", "Bill Gates"],
        correct: 1,
        explanation: "Python diciptakan oleh Guido van Rossum, seorang programmer asal Belanda. Nama 'Python' diambil dari acara komedi Monty Python's Flying Circus."
      },
      {
        id: 2,
        question: "Apa ekstensi file Python?",
        options: [".java", ".js", ".py", ".pt"],
        correct: 2,
        explanation: "File Python menggunakan ekstensi .py. Contoh: helloworld.py, program.py"
      },
      {
        id: 3,
        question: "Bagaimana cara menulis komentar satu baris di Python?",
        options: ["// komentar", "/* komentar */", "# komentar", "-- komentar"],
        correct: 2,
        explanation: "Di Python, komentar satu baris dimulai dengan tanda pagar (#). Contoh: # Ini komentar"
      },
      {
        id: 4,
        question: "Tipe data apa yang dihasilkan oleh: type(3.14)?",
        options: ["int", "str", "float", "bool"],
        correct: 2,
        explanation: "3.14 adalah bilangan desimal, sehingga tipe datanya adalah float (floating point number)."
      },
      {
        id: 5,
        question: "Mana yang merupakan nilai Boolean yang valid di Python?",
        options: ["true", "TRUE", "True", "yes"],
        correct: 2,
        explanation: "Di Python, Boolean ditulis dengan huruf kapital di awal: True dan False. Penulisan 'true' atau 'TRUE' akan menghasilkan error."
      },
      {
        id: 6,
        question: "Apa fungsi dari perintah print() di Python?",
        options: ["Menyimpan data", "Menampilkan output ke layar", "Menghapus data", "Membuat variable"],
        correct: 1,
        explanation: "Fungsi print() digunakan untuk menampilkan output (teks, angka, dll) ke layar/terminal."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Cek Versi Python",
        description: "Buka terminal di komputermu dan cek versi Python yang terinstal menggunakan perintah python3 --version. Catat versinya!",
        hint: "Ketik 'python3 --version' atau 'python --version' di terminal/command prompt.",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Operasi Matematika di Shell",
        description: "Buka Python Shell dan lakukan operasi berikut dengan angka 3 dan 4: penjumlahan, pengurangan, perkalian, pembagian, modulus, pangkat, dan pembagian bulat.",
        hint: "Gunakan operator: + - * / % ** //. Contoh: 3 + 4 menghasilkan 7.",
        difficulty: "mudah"
      },
      {
        id: 3,
        title: "Buat File Python Pertama",
        description: "Buat file bernama 'latihan_hari1.py' yang menampilkan namamu, kotamu, dan umurmu menggunakan print(). Lalu jalankan file tersebut.",
        hint: "Gunakan print('Nama saya: Budi'), print('Kota: Jakarta'), print('Umur: 20'). Jalankan dengan: python3 latihan_hari1.py",
        difficulty: "mudah"
      },
      {
        id: 4,
        title: "Cek Tipe Data",
        description: "Gunakan fungsi type() untuk mengecek tipe data dari: 10, 9.8, 3.14, 'Python', True, [1,2,3], dan {'nama': 'Budi'}. Tampilkan hasilnya dengan print().",
        hint: "Contoh: print(type(10)) akan menampilkan <class 'int'>. Lakukan untuk semua data yang diminta.",
        difficulty: "sedang"
      },
      {
        id: 5,
        title: "Hitung Jarak Euclidean",
        description: "Hitung jarak Euclidean antara titik (2, 3) dan (10, 8). Rumus: sqrt((x2-x1)^2 + (y2-y1)^2). Gunakan operator ** untuk pangkat.",
        hint: "Jarak = ((10-2)**2 + (8-3)**2) ** 0.5. Hasilnya sekitar 9.43.",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 2: VARIABLES & BUILT-IN FUNCTIONS
  // ============================================================
  {
    day: 2,
    title: "Variable & Fungsi Bawaan",
    titleEn: "Variables & Built-in Functions",
    icon: "📦",
    color: "#2ECC71",
    topics: ["Built-in Functions", "Variables", "Data Types", "Casting"],
    sections: [
      {
        id: "builtin-functions",
        title: "Fungsi Bawaan (Built-in Functions)",
        content: `
<p>Python punya banyak <strong>fungsi bawaan</strong> yang siap pakai tanpa perlu menginstal apa-apa. Bayangkan seperti <strong>peralatan dapur yang sudah tersedia</strong> — kamu tinggal pakai tanpa perlu beli dulu.</p>

<p>Beberapa fungsi bawaan yang paling sering dipakai:</p>
<ul>
  <li><code>print()</code> — menampilkan output ke layar</li>
  <li><code>len()</code> — menghitung panjang/jumlah item</li>
  <li><code>type()</code> — mengecek tipe data</li>
  <li><code>int()</code>, <code>float()</code>, <code>str()</code> — mengubah tipe data</li>
  <li><code>input()</code> — menerima masukan dari pengguna</li>
  <li><code>min()</code>, <code>max()</code>, <code>sum()</code> — operasi matematika</li>
  <li><code>sorted()</code> — mengurutkan data</li>
</ul>

<pre><code class="language-python"># Contoh penggunaan fungsi bawaan
print('Halo!')                    # Menampilkan teks
print(len('Python'))              # 6 - panjang string 'Python'
print(type(100))                  # &lt;class 'int'&gt;
print(min(20, 30, 10, 40))       # 10 - nilai terkecil
print(max(20, 30, 10, 40))       # 40 - nilai terbesar
print(sum([1, 2, 3, 4, 5]))      # 15 - jumlah semua angka</code></pre>
`
      },
      {
        id: "variables",
        title: "Variable (Variabel)",
        content: `
<p>Variable adalah <strong>wadah untuk menyimpan data</strong> di memori komputer. Bayangkan seperti <strong>kotak berlabel</strong> — kamu bisa menaruh barang di dalamnya dan mengambilnya kapan saja dengan menyebut labelnya.</p>

<h3>Aturan Penamaan Variable</h3>
<ul>
  <li>Harus dimulai dengan huruf atau underscore (_)</li>
  <li>Tidak boleh dimulai dengan angka</li>
  <li>Hanya boleh berisi huruf, angka, dan underscore</li>
  <li>Case-sensitive: <code>nama</code> dan <code>Nama</code> adalah variable berbeda</li>
</ul>

<pre><code class="language-python"># ✅ Nama variable yang BENAR (snake_case)
nama_depan = 'Budi'
nama_belakang = 'Santoso'
umur = 20
kota = 'Jakarta'
sudah_menikah = False
keahlian = ['Python', 'HTML', 'CSS']

# ❌ Nama variable yang SALAH
# nama-depan = 'Budi'    # Error! Tidak boleh pakai tanda hubung
# 1angka = 10            # Error! Tidak boleh dimulai angka
# nama@ku = 'Budi'       # Error! Tidak boleh pakai @</code></pre>

<h3>Mendeklarasikan Variable</h3>
<pre><code class="language-python"># Menyimpan data ke variable menggunakan tanda =
# Tanda = di Python artinya "simpan", bukan "sama dengan"
nama_depan = 'Budi'
nama_belakang = 'Santoso'
negara = 'Indonesia'
kota = 'Jakarta'
umur = 20
sudah_menikah = False
keahlian = ['HTML', 'CSS', 'JavaScript', 'Python']

# Menampilkan isi variable
print('Nama depan:', nama_depan)          # Nama depan: Budi
print('Panjang nama:', len(nama_depan))   # Panjang nama: 4
print('Umur:', umur)                      # Umur: 20
print('Keahlian:', keahlian)              # Keahlian: ['HTML', ...]</code></pre>

<h3>Deklarasi Banyak Variable Sekaligus</h3>
<pre><code class="language-python"># Bisa deklarasi beberapa variable dalam satu baris!
nama, umur, kota = 'Budi', 20, 'Jakarta'
print(nama, umur, kota)  # Budi 20 Jakarta</code></pre>

<h3>Menerima Input dari Pengguna</h3>
<pre><code class="language-python"># Fungsi input() meminta pengguna mengetik sesuatu
nama = input('Siapa namamu? ')    # Menunggu pengguna mengetik
umur = input('Berapa umurmu? ')   # Input selalu bertipe string!

print('Halo', nama)
print('Umurmu', umur, 'tahun')</code></pre>
`
      },
      {
        id: "data-types-casting",
        title: "Mengecek & Mengubah Tipe Data",
        content: `
<p>Kadang kita perlu <strong>mengubah tipe data</strong> dari satu jenis ke jenis lain. Ini disebut <strong>casting</strong>. Bayangkan seperti <strong>menuangkan air dari gelas ke botol</strong> — isinya sama, tapi wadahnya berbeda.</p>

<pre><code class="language-python"># Mengecek tipe data dengan type()
print(type('Budi'))          # &lt;class 'str'&gt;
print(type(10))              # &lt;class 'int'&gt;
print(type(3.14))            # &lt;class 'float'&gt;
print(type(True))            # &lt;class 'bool'&gt;
print(type([1, 2, 3]))       # &lt;class 'list'&gt;</code></pre>

<h3>Casting (Mengubah Tipe Data)</h3>
<pre><code class="language-python"># int ke float
angka_bulat = 10
angka_desimal = float(angka_bulat)
print(angka_desimal)         # 10.0

# float ke int (bagian desimal dihilangkan)
gravitasi = 9.81
print(int(gravitasi))        # 9 (bukan dibulatkan, tapi dipotong)

# int ke string
angka = 10
teks_angka = str(angka)
print(teks_angka)            # '10' (sekarang bertipe string)

# string ke int atau float
teks = '10.6'
angka_float = float(teks)    # 10.6
angka_int = int(angka_float) # 10

# string ke list (setiap karakter jadi item)
nama = 'Python'
huruf = list(nama)
print(huruf)                 # ['P', 'y', 't', 'h', 'o', 'n']</code></pre>

<h3>Tipe Data Number</h3>
<pre><code class="language-python"># 1. Integer - bilangan bulat
# Contoh: -3, -2, -1, 0, 1, 2, 3
print(type(10))              # &lt;class 'int'&gt;

# 2. Float - bilangan desimal
# Contoh: -3.5, 0.0, 1.1, 3.14
print(type(3.14))            # &lt;class 'float'&gt;

# 3. Complex - bilangan kompleks
# Contoh: 1+j, 2+4j
print(type(1 + 2j))          # &lt;class 'complex'&gt;</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Mana nama variable yang VALID di Python?",
        options: ["1nama", "nama-depan", "nama_depan", "nama@depan"],
        correct: 2,
        explanation: "Variable Python harus dimulai dengan huruf atau underscore, dan hanya boleh berisi huruf, angka, dan underscore. 'nama_depan' mengikuti konvensi snake_case yang direkomendasikan."
      },
      {
        id: 2,
        question: "Apa output dari: print(type(3.14))?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"],
        correct: 1,
        explanation: "3.14 adalah bilangan desimal, sehingga tipe datanya adalah float. Python membedakan bilangan bulat (int) dan desimal (float)."
      },
      {
        id: 3,
        question: "Apa hasil dari: int(9.81)?",
        options: ["10", "9", "9.81", "Error"],
        correct: 1,
        explanation: "Fungsi int() memotong bagian desimal (bukan membulatkan). Jadi int(9.81) menghasilkan 9."
      },
      {
        id: 4,
        question: "Fungsi bawaan mana yang digunakan untuk menghitung panjang string?",
        options: ["size()", "count()", "len()", "length()"],
        correct: 2,
        explanation: "len() adalah fungsi bawaan Python untuk menghitung panjang string, list, tuple, dll. Contoh: len('Python') menghasilkan 6."
      },
      {
        id: 5,
        question: "Apa yang terjadi jika kita menulis: nama = input('Siapa namamu? ')?",
        options: ["Error karena syntax salah", "Python menampilkan 'Siapa namamu?' dan menunggu input", "Variable nama berisi 'Siapa namamu?'", "Python mengabaikan baris ini"],
        correct: 1,
        explanation: "Fungsi input() menampilkan pesan di dalam kurung, lalu menunggu pengguna mengetik sesuatu. Hasilnya disimpan ke variable 'nama' sebagai string."
      },
      {
        id: 6,
        question: "Apa hasil dari: list('ABC')?",
        options: ["['ABC']", "['A', 'B', 'C']", "'ABC'", "Error"],
        correct: 1,
        explanation: "Fungsi list() mengubah string menjadi list di mana setiap karakter menjadi satu item. Jadi list('ABC') menghasilkan ['A', 'B', 'C']."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Buat Variable Profil",
        description: "Buat variable untuk: nama_depan, nama_belakang, negara, kota, umur, tahun_lahir, sudah_menikah. Isi dengan datamu sendiri, lalu tampilkan semua dengan print().",
        hint: "Contoh: nama_depan = 'Budi'. Gunakan print('Nama:', nama_depan) untuk menampilkan.",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Cek Tipe Data",
        description: "Buat variable dengan berbagai tipe data (string, int, float, bool, list, dict), lalu gunakan type() untuk mengecek tipe masing-masing.",
        hint: "Gunakan print(type(variable_name)) untuk setiap variable yang kamu buat.",
        difficulty: "mudah"
      },
      {
        id: 3,
        title: "Kalkulator Lingkaran",
        description: "Radius lingkaran adalah 30 meter. Hitung luas lingkaran (pi * r^2) dan keliling lingkaran (2 * pi * r). Gunakan pi = 3.14.",
        hint: "luas = 3.14 * 30 ** 2 dan keliling = 2 * 3.14 * 30. Jangan lupa print hasilnya!",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Program Input Pengguna",
        description: "Buat program yang meminta nama depan, nama belakang, negara, dan umur dari pengguna menggunakan input(), lalu tampilkan semuanya.",
        hint: "nama = input('Masukkan nama: '). Ingat, input() selalu menghasilkan string!",
        difficulty: "sedang"
      },
      {
        id: 5,
        title: "Casting Challenge",
        description: "Ubah angka 10 menjadi float, lalu ke string. Ubah string '3.14' menjadi float, lalu ke int. Tampilkan setiap langkah dan tipe datanya.",
        hint: "Gunakan float(10), str(10), float('3.14'), int(float('3.14')). Cek dengan type().",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 3: OPERATORS
  // ============================================================
  {
    day: 3,
    title: "Operator",
    titleEn: "Operators",
    icon: "🔢",
    color: "#FF6B6B",
    topics: ["Boolean", "Assignment Operators", "Arithmetic Operators", "Comparison Operators", "Logical Operators"],
    sections: [
      {
        id: "boolean",
        title: "Boolean",
        content: `
<p>Tipe data <strong>Boolean</strong> hanya punya dua nilai: <code>True</code> (benar) dan <code>False</code> (salah). Bayangkan seperti <strong>saklar lampu</strong> — hanya bisa nyala (True) atau mati (False).</p>
<pre><code class="language-python"># Boolean - hanya True atau False
# Huruf pertama HARUS kapital!
print(True)     # True
print(False)    # False</code></pre>
<p>Boolean sangat penting karena digunakan dalam pengambilan keputusan (if/else) dan perbandingan.</p>
`
      },
      {
        id: "assignment-operators",
        title: "Operator Penugasan (Assignment)",
        content: `
<p>Operator penugasan digunakan untuk <strong>menyimpan nilai ke variable</strong>. Yang paling dasar adalah tanda <code>=</code>.</p>
<pre><code class="language-python"># Operator penugasan dasar
x = 10          # Simpan 10 ke variable x

# Operator penugasan gabungan (shortcut)
x += 5          # Sama dengan: x = x + 5  → x sekarang 15
x -= 3          # Sama dengan: x = x - 3  → x sekarang 12
x *= 2          # Sama dengan: x = x * 2  → x sekarang 24
x /= 4          # Sama dengan: x = x / 4  → x sekarang 6.0
x %= 4          # Sama dengan: x = x % 4  → x sekarang 2.0
x //= 1         # Sama dengan: x = x // 1 → x sekarang 2.0
x **= 3         # Sama dengan: x = x ** 3 → x sekarang 8.0</code></pre>
`
      },
      {
        id: "arithmetic-operators",
        title: "Operator Aritmatika",
        content: `
<p>Operator aritmatika digunakan untuk <strong>operasi matematika</strong>. Sama seperti yang kamu pelajari di sekolah, tapi dengan simbol yang sedikit berbeda.</p>

<pre><code class="language-python"># Operator Aritmatika di Python
print('Penjumlahan:', 1 + 2)        # 3
print('Pengurangan:', 2 - 1)        # 1
print('Perkalian:', 2 * 3)          # 6
print('Pembagian:', 4 / 2)          # 2.0 (selalu float!)
print('Pembagian bulat:', 7 // 2)   # 3 (buang desimal)
print('Modulus:', 3 % 2)            # 1 (sisa bagi)
print('Pangkat:', 2 ** 3)           # 8 (2 x 2 x 2)</code></pre>

<h3>Contoh Penggunaan Nyata</h3>
<pre><code class="language-python"># Menghitung luas lingkaran
radius = 10                                # radius lingkaran
luas_lingkaran = 3.14 * radius ** 2       # pi * r^2
print('Luas lingkaran:', luas_lingkaran)   # 314.0

# Menghitung luas persegi panjang
panjang = 10
lebar = 20
luas_persegi = panjang * lebar
print('Luas persegi panjang:', luas_persegi)  # 200

# Menghitung berat benda
massa = 75          # dalam kg
gravitasi = 9.81    # m/s^2
berat = massa * gravitasi
print(berat, 'N')   # 735.75 N</code></pre>
`
      },
      {
        id: "comparison-operators",
        title: "Operator Perbandingan",
        content: `
<p>Operator perbandingan digunakan untuk <strong>membandingkan dua nilai</strong>. Hasilnya selalu Boolean (True atau False). Bayangkan seperti <strong>pertanyaan ya/tidak</strong>.</p>

<pre><code class="language-python"># Operator Perbandingan
print(3 > 2)      # True  — 3 lebih besar dari 2? Ya!
print(3 >= 2)     # True  — 3 lebih besar atau sama dengan 2? Ya!
print(3 < 2)      # False — 3 lebih kecil dari 2? Tidak!
print(2 < 3)      # True  — 2 lebih kecil dari 3? Ya!
print(2 <= 3)     # True  — 2 lebih kecil atau sama dengan 3? Ya!
print(3 == 2)     # False — 3 sama dengan 2? Tidak!
print(3 != 2)     # True  — 3 tidak sama dengan 2? Ya!

# Membandingkan panjang string
print(len('mangga') == len('jeruk'))   # False (6 != 5)
print(len('susu') == len('daging'))    # False (4 != 6)</code></pre>

<h3>Operator Identitas & Keanggotaan</h3>
<pre><code class="language-python"># is — mengecek apakah dua variable merujuk ke objek yang sama
print(1 is 1)                    # True
print(1 is not 2)               # True

# in — mengecek apakah item ada di dalam koleksi
print('A' in 'Andi')            # True — 'A' ada di 'Andi'
print('z' in 'Andi')            # False — 'z' tidak ada di 'Andi'
print('coding' in 'coding for all')  # True</code></pre>
`
      },
      {
        id: "logical-operators",
        title: "Operator Logika",
        content: `
<p>Operator logika digunakan untuk <strong>menggabungkan kondisi</strong>. Python menggunakan kata <code>and</code>, <code>or</code>, dan <code>not</code>.</p>

<pre><code class="language-python"># and — kedua kondisi HARUS True
print(3 > 2 and 4 > 3)    # True  — keduanya benar
print(3 > 2 and 4 < 3)    # False — satu salah, hasilnya salah

# or — minimal SATU kondisi True
print(3 > 2 or 4 < 3)     # True  — satu benar sudah cukup
print(3 < 2 or 4 < 3)     # False — keduanya salah

# not — membalik nilai Boolean
print(not 3 > 2)           # False — 3>2 adalah True, dibalik jadi False
print(not True)            # False
print(not False)           # True</code></pre>

<p>Analogi sederhana:</p>
<ul>
  <li><code>and</code> = "DAN" → Kamu boleh masuk JIKA punya tiket DAN KTP</li>
  <li><code>or</code> = "ATAU" → Kamu boleh bayar pakai cash ATAU kartu</li>
  <li><code>not</code> = "BUKAN" → Jika pintu BUKAN terkunci, masuk saja</li>
</ul>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa hasil dari: 7 // 2?",
        options: ["3.5", "3", "4", "3.0"],
        correct: 1,
        explanation: "Operator // adalah pembagian bulat (floor division). 7 // 2 = 3 karena bagian desimalnya dibuang."
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
        explanation: "Operator 'and' membutuhkan KEDUA kondisi bernilai True. 3>2 adalah True, tapi 4<3 adalah False. True and False = False."
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
        explanation: "Operator 'in' mengecek apakah substring ada di dalam string. 'on' memang ada di dalam 'python', jadi hasilnya True."
      },
      {
        id: 6,
        question: "Apa hasil dari: 2 ** 4?",
        options: ["8", "6", "16", "24"],
        correct: 2,
        explanation: "Operator ** adalah pangkat. 2 ** 4 = 2 x 2 x 2 x 2 = 16."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Kalkulator Segitiga",
        description: "Buat program yang menghitung luas segitiga. Gunakan alas = 20 dan tinggi = 10. Rumus: luas = 0.5 * alas * tinggi.",
        hint: "alas = 20, tinggi = 10, luas = 0.5 * alas * tinggi. Hasilnya 100.0.",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Keliling Segitiga",
        description: "Hitung keliling segitiga dengan sisi a=5, b=4, c=3. Rumus: keliling = a + b + c.",
        hint: "Simpan setiap sisi di variable, lalu jumlahkan. keliling = a + b + c = 12.",
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
        title: "Cek Bilangan Genap",
        description: "Bilangan genap habis dibagi 2 (sisa = 0). Gunakan operator % untuk mengecek apakah angka 15 genap atau ganjil.",
        hint: "Jika 15 % 2 == 0 maka genap, jika tidak maka ganjil. 15 % 2 = 1, jadi ganjil.",
        difficulty: "sedang"
      },
      {
        id: 5,
        title: "Tabel Pangkat",
        description: "Buat program yang menampilkan tabel: untuk angka 1-5, tampilkan angka, pangkat 1, pangkat 2, pangkat 3. Contoh: 2 1 2 4 8.",
        hint: "Gunakan print(n, 1, n, n**2, n**3) untuk setiap angka n dari 1 sampai 5.",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 4: STRINGS
  // ============================================================
  {
    day: 4,
    title: "String (Teks)",
    titleEn: "Strings",
    icon: "📝",
    color: "#4ECDC4",
    topics: ["Creating Strings", "String Concatenation", "Escape Sequences", "String Formatting", "String Methods", "Indexing & Slicing"],
    sections: [
      {
        id: "creating-strings",
        title: "Membuat String",
        content: `
<p>String adalah <strong>tipe data untuk teks</strong>. Bayangkan string seperti <strong>kalung manik-manik</strong> — setiap manik adalah satu karakter, dan semuanya dirangkai menjadi satu.</p>

<pre><code class="language-python"># Membuat string dengan kutip satu atau dua
huruf = 'P'                    # String satu karakter
salam = 'Halo, Dunia!'        # String dengan kutip satu
salam2 = "Halo, Dunia!"       # String dengan kutip dua (sama saja)
print(len(salam))              # 12 - panjang string

# String multi-baris dengan kutip tiga
puisi = '''Aku belajar Python,
Setiap hari semakin paham.
Kode yang kutulis,
Membuat komputer menurut.'''
print(puisi)</code></pre>
`
      },
      {
        id: "concatenation",
        title: "Penggabungan String (Concatenation)",
        content: `
<p>Concatenation artinya <strong>menggabungkan string</strong>. Bayangkan seperti <strong>menyambung dua tali</strong> menjadi satu.</p>

<pre><code class="language-python"># Menggabungkan string dengan operator +
nama_depan = 'Budi'
nama_belakang = 'Santoso'
spasi = ' '
nama_lengkap = nama_depan + spasi + nama_belakang
print(nama_lengkap)            # Budi Santoso

# Mengecek panjang
print(len(nama_depan))         # 4
print(len(nama_belakang))      # 7
print(len(nama_lengkap))       # 12 (termasuk spasi)</code></pre>
`
      },
      {
        id: "escape-sequences",
        title: "Escape Sequences",
        content: `
<p>Escape sequence adalah <strong>karakter khusus</strong> yang dimulai dengan backslash (\\). Bayangkan seperti <strong>kode rahasia</strong> yang punya arti khusus.</p>

<pre><code class="language-python"># \\n = baris baru (new line)
print('Baris pertama\\nBaris kedua')
# Output:
# Baris pertama
# Baris kedua

# \\t = tab (8 spasi)
print('Nama\\tUmur\\tKota')
print('Budi\\t20\\tJakarta')
# Output:
# Nama    Umur    Kota
# Budi    20      Jakarta

# \\\\ = backslash
print('Ini backslash: \\\\')   # Ini backslash: \\

# \\' dan \\" = kutip di dalam string
print('Dia berkata \\'Halo\\'')       # Dia berkata 'Halo'
print("Ini \\"tanda kutip\\"")        # Ini "tanda kutip"</code></pre>
`
      },
      {
        id: "string-formatting",
        title: "Format String",
        content: `
<p>String formatting memungkinkan kita <strong>menyisipkan variable ke dalam teks</strong>. Ada tiga cara di Python:</p>

<h3>1. Old Style (% Operator)</h3>
<pre><code class="language-python"># %s untuk string, %d untuk integer, %f untuk float
nama = 'Budi'
umur = 20
print('Nama saya %s, umur %d tahun' % (nama, umur))
# Output: Nama saya Budi, umur 20 tahun

radius = 10
luas = 3.14 * radius ** 2
print('Luas lingkaran: %.2f' % luas)  # Luas lingkaran: 314.00</code></pre>

<h3>2. New Style (.format())</h3>
<pre><code class="language-python"># Gunakan {} sebagai placeholder
nama = 'Budi'
umur = 20
print('Nama saya {}, umur {} tahun'.format(nama, umur))

# Dengan format angka
a, b = 4, 3
print('{} + {} = {}'.format(a, b, a + b))    # 4 + 3 = 7
print('{} / {} = {:.2f}'.format(a, b, a/b))  # 4 / 3 = 1.33</code></pre>

<h3>3. f-String (Python 3.6+) — PALING DIREKOMENDASIKAN</h3>
<pre><code class="language-python"># Tambahkan f di depan string, lalu masukkan variable di {}
nama = 'Budi'
umur = 20
print(f'Nama saya {nama}, umur {umur} tahun')

a, b = 4, 3
print(f'{a} + {b} = {a + b}')       # 4 + 3 = 7
print(f'{a} / {b} = {a / b:.2f}')   # 4 / 3 = 1.33
print(f'{a} ** {b} = {a ** b}')     # 4 ** 3 = 64</code></pre>
`
      },
      {
        id: "indexing-slicing",
        title: "Indexing & Slicing",
        content: `
<p>Setiap karakter di string punya <strong>nomor urut (index)</strong>. Index dimulai dari 0, bukan 1! Bayangkan seperti <strong>nomor kursi di bioskop</strong> — kursi pertama adalah nomor 0.</p>

<pre><code class="language-python">bahasa = 'Python'
# Index:  0  1  2  3  4  5
# Huruf:  P  y  t  h  o  n

# Akses karakter dengan index positif
print(bahasa[0])     # P (karakter pertama)
print(bahasa[1])     # y (karakter kedua)
print(bahasa[5])     # n (karakter terakhir)

# Akses dengan index negatif (dari belakang)
print(bahasa[-1])    # n (terakhir)
print(bahasa[-2])    # o (kedua dari belakang)</code></pre>

<h3>Slicing (Memotong String)</h3>
<pre><code class="language-python">bahasa = 'Python'

# Slicing: string[mulai:akhir]
# Catatan: index akhir TIDAK termasuk!
print(bahasa[0:3])   # Pyt (index 0, 1, 2)
print(bahasa[3:6])   # hon (index 3, 4, 5)
print(bahasa[0:])    # Python (dari awal sampai akhir)
print(bahasa[:3])    # Pyt (dari awal sampai index 2)

# Membalik string
print(bahasa[::-1])  # nohtyP

# Lompat karakter
print(bahasa[0:6:2]) # Pto (setiap 2 karakter)</code></pre>
`
      },
      {
        id: "string-methods",
        title: "String Methods",
        content: `
<p>Python punya banyak <strong>method bawaan</strong> untuk memanipulasi string. Method dipanggil dengan titik (.) setelah string.</p>

<pre><code class="language-python">teks = 'belajar python itu menyenangkan'

# Mengubah huruf
print(teks.capitalize())    # Belajar python itu menyenangkan
print(teks.title())         # Belajar Python Itu Menyenangkan
print(teks.upper())         # BELAJAR PYTHON ITU MENYENANGKAN
print(teks.lower())         # belajar python itu menyenangkan
print(teks.swapcase())      # BELAJAR PYTHON ITU MENYENANGKAN

# Mencari dan menghitung
print(teks.count('a'))      # 4 (huruf 'a' muncul 4 kali)
print(teks.find('python'))  # 8 (ditemukan di index 8)
print(teks.find('java'))    # -1 (tidak ditemukan)
print(teks.index('python')) # 8 (sama seperti find)

# Mengecek isi string
print(teks.startswith('belajar'))  # True
print(teks.endswith('kan'))        # True
print('Python123'.isalnum())       # True (huruf & angka)
print('Python'.isalpha())          # True (hanya huruf)
print('123'.isdigit())             # True (hanya angka)

# Memodifikasi string
print(teks.replace('python', 'coding'))  # belajar coding itu menyenangkan
print(teks.split())          # ['belajar', 'python', 'itu', 'menyenangkan']
print(' - '.join(['A','B','C']))  # A - B - C
print('  halo  '.strip())   # 'halo' (hapus spasi di awal & akhir)</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa hasil dari: 'Python'[0]?",
        options: ["'P'", "'y'", "'Python'", "Error"],
        correct: 0,
        explanation: "Index di Python dimulai dari 0. Jadi 'Python'[0] mengakses karakter pertama yaitu 'P'."
      },
      {
        id: 2,
        question: "Apa hasil dari: 'Python'[::-1]?",
        options: ["'Python'", "'nohtyP'", "'Pytho'", "Error"],
        correct: 1,
        explanation: "[::-1] membalik string. 'Python' dibalik menjadi 'nohtyP'."
      },
      {
        id: 3,
        question: "Method mana yang mengubah 'halo dunia' menjadi 'Halo Dunia'?",
        options: ["upper()", "capitalize()", "title()", "swapcase()"],
        correct: 2,
        explanation: "title() mengubah huruf pertama setiap kata menjadi kapital. capitalize() hanya mengubah huruf pertama string saja."
      },
      {
        id: 4,
        question: "Apa output dari: f'{4} + {3} = {4+3}'?",
        options: ["'4 + 3 = 4+3'", "'4 + 3 = 7'", "Error", "'{4} + {3} = {7}'"],
        correct: 1,
        explanation: "f-string mengevaluasi ekspresi di dalam {}. Jadi {4+3} dihitung menjadi 7, dan hasilnya '4 + 3 = 7'."
      },
      {
        id: 5,
        question: "Apa hasil dari: 'Python'.find('java')?",
        options: ["0", "False", "-1", "Error"],
        correct: 2,
        explanation: "Method find() mengembalikan -1 jika substring tidak ditemukan. 'java' tidak ada di 'Python', jadi hasilnya -1."
      },
      {
        id: 6,
        question: "Apa hasil dari: len('Halo, Dunia!')?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "'Halo, Dunia!' memiliki 12 karakter (termasuk koma, spasi, dan tanda seru)."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Gabungkan String",
        description: "Gabungkan string 'Belajar', 'Python', 'Itu', 'Seru' menjadi satu kalimat 'Belajar Python Itu Seru' menggunakan concatenation.",
        hint: "Gunakan operator + dan tambahkan spasi ' ' di antara kata-kata.",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Eksplorasi String Methods",
        description: "Buat variable company = 'Coding For All'. Gunakan upper(), lower(), capitalize(), title(), swapcase(), dan len() pada variable tersebut.",
        hint: "Contoh: print(company.upper()) akan menghasilkan 'CODING FOR ALL'.",
        difficulty: "mudah"
      },
      {
        id: 3,
        title: "Slicing Challenge",
        description: "Dari string 'Coding For All', potong kata pertama ('Coding'), kata terakhir ('All'), dan ganti 'Coding' dengan 'Python' menggunakan replace().",
        hint: "Gunakan slicing: teks[0:6] untuk 'Coding', teks[-3:] untuk 'All'. Gunakan replace('Coding', 'Python').",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Format String",
        description: "Gunakan f-string untuk menampilkan: 'Luas lingkaran dengan radius 10 adalah 314.00 meter persegi'. Hitung luasnya dengan rumus pi * r^2.",
        hint: "radius = 10, luas = 3.14 * radius ** 2. Gunakan f'...{luas:.2f}...' untuk 2 desimal.",
        difficulty: "sedang"
      },
      {
        id: 5,
        title: "Tabel dengan Escape Sequence",
        description: "Buat tabel menggunakan \\t (tab) yang menampilkan: Nama, Umur, Kota untuk 3 orang. Gunakan \\n untuk baris baru.",
        hint: "Contoh: print('Nama\\tUmur\\tKota\\nBudi\\t20\\tJakarta')",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 5: LISTS
  // ============================================================
  {
    day: 5,
    title: "List (Daftar)",
    titleEn: "Lists",
    icon: "📋",
    color: "#9B59B6",
    topics: ["Creating Lists", "Indexing", "Slicing", "Modifying Lists", "List Methods"],
    sections: [
      {
        id: "intro-lists",
        title: "Pengenalan List",
        content: `
<p>List adalah <strong>koleksi data yang terurut dan bisa diubah</strong>. Bayangkan list seperti <strong>daftar belanja</strong> — kamu bisa menambah, menghapus, atau mengubah item kapan saja.</p>

<p>Python punya 4 tipe koleksi data:</p>
<ul>
  <li><strong>List</strong> — terurut, bisa diubah, boleh duplikat</li>
  <li><strong>Tuple</strong> — terurut, TIDAK bisa diubah, boleh duplikat</li>
  <li><strong>Set</strong> — TIDAK terurut, TIDAK bisa diubah item-nya, TIDAK boleh duplikat</li>
  <li><strong>Dictionary</strong> — TIDAK terurut, bisa diubah, TIDAK boleh duplikat key</li>
</ul>

<pre><code class="language-python"># Membuat list kosong
daftar_kosong = list()     # Cara 1
daftar_kosong = []         # Cara 2

# Membuat list dengan isi
buah = ['pisang', 'jeruk', 'mangga', 'lemon']
sayur = ['Tomat', 'Kentang', 'Kubis', 'Wortel']
angka = [1, 2, 3, 4, 5]

# List bisa berisi berbagai tipe data!
campur = ['Budi', 25, True, 9.81, ['a', 'b']]

# Mengecek jumlah item
print(len(buah))           # 4
print(len(angka))          # 5</code></pre>
`
      },
      {
        id: "list-indexing",
        title: "Mengakses Item List",
        content: `
<h3>Index Positif</h3>
<pre><code class="language-python">buah = ['pisang', 'jeruk', 'mangga', 'lemon']
# Index:    0        1        2         3

print(buah[0])     # pisang (item pertama)
print(buah[1])     # jeruk (item kedua)
print(buah[3])     # lemon (item terakhir)
print(buah[-1])    # lemon (dari belakang)
print(buah[-2])    # mangga (kedua dari belakang)</code></pre>

<h3>Unpacking List</h3>
<pre><code class="language-python"># Membongkar list ke variable terpisah
buah = ['pisang', 'jeruk', 'mangga', 'lemon', 'apel']
pertama, kedua, ketiga, *sisanya = buah
print(pertama)     # pisang
print(kedua)       # jeruk
print(ketiga)      # mangga
print(sisanya)     # ['lemon', 'apel']</code></pre>

<h3>Slicing List</h3>
<pre><code class="language-python">buah = ['pisang', 'jeruk', 'mangga', 'lemon']

# list[mulai:akhir] — akhir TIDAK termasuk
print(buah[0:4])   # ['pisang', 'jeruk', 'mangga', 'lemon']
print(buah[1:3])   # ['jeruk', 'mangga']
print(buah[1:])    # ['jeruk', 'mangga', 'lemon']
print(buah[:2])    # ['pisang', 'jeruk']

# Slicing negatif
print(buah[-3:-1]) # ['jeruk', 'mangga']
print(buah[::-1])  # ['lemon', 'mangga', 'jeruk', 'pisang'] (dibalik)</code></pre>
`
      },
      {
        id: "modifying-lists",
        title: "Mengubah List",
        content: `
<p>List bersifat <strong>mutable</strong> (bisa diubah). Kamu bisa mengganti, menambah, atau menghapus item.</p>

<pre><code class="language-python">buah = ['pisang', 'jeruk', 'mangga', 'lemon']

# Mengubah item berdasarkan index
buah[0] = 'alpukat'
print(buah)        # ['alpukat', 'jeruk', 'mangga', 'lemon']

# Mengecek apakah item ada di list
print('jeruk' in buah)     # True
print('apel' in buah)      # False</code></pre>

<h3>Menambah Item</h3>
<pre><code class="language-python">buah = ['pisang', 'jeruk', 'mangga']

# append() — tambah di akhir
buah.append('lemon')
print(buah)        # ['pisang', 'jeruk', 'mangga', 'lemon']

# insert() — tambah di posisi tertentu
buah.insert(1, 'apel')    # Sisipkan 'apel' di index 1
print(buah)        # ['pisang', 'apel', 'jeruk', 'mangga', 'lemon']</code></pre>

<h3>Menghapus Item</h3>
<pre><code class="language-python">buah = ['pisang', 'jeruk', 'mangga', 'lemon']

# remove() — hapus berdasarkan nilai
buah.remove('jeruk')
print(buah)        # ['pisang', 'mangga', 'lemon']

# pop() — hapus berdasarkan index (default: terakhir)
buah.pop()         # Hapus item terakhir
print(buah)        # ['pisang', 'mangga']
buah.pop(0)        # Hapus item pertama
print(buah)        # ['mangga']

# del — hapus dengan keyword
buah = ['pisang', 'jeruk', 'mangga', 'lemon']
del buah[0]        # Hapus item pertama
print(buah)        # ['jeruk', 'mangga', 'lemon']

# clear() — kosongkan list
buah.clear()
print(buah)        # []</code></pre>
`
      },
      {
        id: "list-methods",
        title: "Method List Lainnya",
        content: `
<pre><code class="language-python"># copy() — menyalin list
buah = ['pisang', 'jeruk', 'mangga']
buah_copy = buah.copy()

# Menggabungkan list
list1 = [1, 2, 3]
list2 = [4, 5, 6]
gabungan = list1 + list2
print(gabungan)    # [1, 2, 3, 4, 5, 6]

# extend() — menambahkan semua item dari list lain
list1.extend(list2)
print(list1)       # [1, 2, 3, 4, 5, 6]

# count() — menghitung kemunculan item
umur = [22, 19, 24, 25, 26, 24, 25, 24]
print(umur.count(24))      # 3 (angka 24 muncul 3 kali)

# index() — mencari posisi item
buah = ['pisang', 'jeruk', 'mangga']
print(buah.index('jeruk'))  # 1

# reverse() — membalik urutan
buah.reverse()
print(buah)        # ['mangga', 'jeruk', 'pisang']

# sort() — mengurutkan
buah = ['pisang', 'jeruk', 'mangga', 'apel']
buah.sort()                # Urut A-Z
print(buah)        # ['apel', 'jeruk', 'mangga', 'pisang']
buah.sort(reverse=True)    # Urut Z-A
print(buah)        # ['pisang', 'mangga', 'jeruk', 'apel']</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa hasil dari: ['a', 'b', 'c'][1]?",
        options: ["'a'", "'b'", "'c'", "1"],
        correct: 1,
        explanation: "Index dimulai dari 0. Index 1 merujuk ke item kedua, yaitu 'b'."
      },
      {
        id: 2,
        question: "Method mana yang menambahkan item di akhir list?",
        options: ["add()", "insert()", "append()", "push()"],
        correct: 2,
        explanation: "append() menambahkan item di akhir list. insert() menambahkan di posisi tertentu."
      },
      {
        id: 3,
        question: "Apa perbedaan antara remove() dan pop()?",
        options: ["Tidak ada perbedaan", "remove() hapus berdasarkan nilai, pop() berdasarkan index", "remove() hapus berdasarkan index, pop() berdasarkan nilai", "Keduanya hapus berdasarkan index"],
        correct: 1,
        explanation: "remove('item') menghapus berdasarkan nilai item. pop(index) menghapus berdasarkan posisi index."
      },
      {
        id: 4,
        question: "Apa hasil dari: [1,2,3] + [4,5]?",
        options: ["[1,2,3,4,5]", "[5,7,3]", "Error", "[[1,2,3],[4,5]]"],
        correct: 0,
        explanation: "Operator + menggabungkan dua list menjadi satu list baru: [1,2,3,4,5]."
      },
      {
        id: 5,
        question: "Apa yang dilakukan method sort(reverse=True)?",
        options: ["Mengurutkan A-Z", "Mengurutkan Z-A / besar ke kecil", "Membalik list", "Menghapus duplikat"],
        correct: 1,
        explanation: "sort(reverse=True) mengurutkan list secara descending (Z-A untuk string, besar ke kecil untuk angka)."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Buat List Perusahaan IT",
        description: "Buat list berisi: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon. Tampilkan perusahaan pertama, tengah, dan terakhir.",
        hint: "Gunakan index [0] untuk pertama, [len(list)//2] untuk tengah, [-1] untuk terakhir.",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Manipulasi List",
        description: "Dari list perusahaan IT di atas: tambahkan 'Twitter', sisipkan 'Tesla' di tengah, ubah satu nama menjadi UPPERCASE, lalu urutkan.",
        hint: "Gunakan append(), insert(), indexing untuk ubah, dan sort().",
        difficulty: "sedang"
      },
      {
        id: 3,
        title: "Gabungkan List",
        description: "Gabungkan front_end = ['HTML', 'CSS', 'JS', 'React'] dan back_end = ['Node', 'Express', 'MongoDB']. Sisipkan 'Python' dan 'SQL' setelah 'React'.",
        hint: "Gabungkan dengan +, lalu gunakan insert() untuk menyisipkan di posisi yang tepat.",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Statistik Umur",
        description: "Dari list umur = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]: urutkan, cari min, max, rata-rata, dan median.",
        hint: "Gunakan sort(), min(), max(), sum()/len() untuk rata-rata. Median = item tengah setelah diurutkan.",
        difficulty: "sulit"
      }
    ]
  },

  // ============================================================
  // DAY 6: TUPLES
  // ============================================================
  {
    day: 6,
    title: "Tuple",
    titleEn: "Tuples",
    icon: "🔒",
    color: "#E67E22",
    topics: ["Creating Tuples", "Accessing Items", "Slicing", "Immutability", "Tuple Methods"],
    sections: [
      {
        id: "intro-tuples",
        title: "Pengenalan Tuple",
        content: `
<p>Tuple adalah <strong>koleksi data yang terurut tapi TIDAK BISA diubah</strong> (immutable). Bayangkan tuple seperti <strong>data di KTP</strong> — sudah dicetak dan tidak bisa diedit langsung. Kalau mau ubah, harus buat KTP baru.</p>

<p>Tuple ditulis dengan tanda kurung biasa <code>()</code>, berbeda dengan list yang pakai <code>[]</code>.</p>

<pre><code class="language-python"># Membuat tuple kosong
tuple_kosong = ()
tuple_kosong = tuple()

# Membuat tuple dengan isi
buah = ('pisang', 'jeruk', 'mangga', 'lemon')
angka = (1, 2, 3, 4, 5)

# Mengecek panjang tuple
print(len(buah))   # 4</code></pre>

<p>Method yang tersedia untuk tuple sangat sedikit karena sifatnya yang immutable:</p>
<ul>
  <li><code>tuple()</code> — membuat tuple kosong</li>
  <li><code>count()</code> — menghitung kemunculan item</li>
  <li><code>index()</code> — mencari posisi item</li>
  <li><code>+</code> — menggabungkan dua tuple</li>
</ul>
`
      },
      {
        id: "accessing-tuples",
        title: "Mengakses Item Tuple",
        content: `
<pre><code class="language-python">buah = ('pisang', 'jeruk', 'mangga', 'lemon')

# Index positif (dari depan)
print(buah[0])     # pisang
print(buah[1])     # jeruk
print(buah[3])     # lemon

# Index negatif (dari belakang)
print(buah[-1])    # lemon
print(buah[-2])    # mangga
print(buah[-4])    # pisang</code></pre>

<h3>Slicing Tuple</h3>
<pre><code class="language-python">buah = ('pisang', 'jeruk', 'mangga', 'lemon')

# Slicing sama seperti list
print(buah[0:4])   # ('pisang', 'jeruk', 'mangga', 'lemon')
print(buah[1:3])   # ('jeruk', 'mangga')
print(buah[1:])    # ('jeruk', 'mangga', 'lemon')
print(buah[:2])    # ('pisang', 'jeruk')

# Slicing negatif
print(buah[-3:-1]) # ('jeruk', 'mangga')
print(buah[-3:])   # ('jeruk', 'mangga', 'lemon')</code></pre>
`
      },
      {
        id: "tuple-operations",
        title: "Operasi pada Tuple",
        content: `
<h3>Mengubah Tuple (via List)</h3>
<p>Karena tuple immutable, untuk mengubahnya kita harus <strong>konversi ke list dulu</strong>, ubah, lalu konversi balik ke tuple.</p>

<pre><code class="language-python"># Tuple tidak bisa diubah langsung!
buah = ('pisang', 'jeruk', 'mangga', 'lemon')
# buah[0] = 'apel'  # ❌ Error! TypeError

# Caranya: ubah ke list, modifikasi, ubah balik ke tuple
buah = ('pisang', 'jeruk', 'mangga', 'lemon')
buah_list = list(buah)     # Konversi ke list
buah_list[0] = 'apel'      # Ubah item
buah = tuple(buah_list)    # Konversi balik ke tuple
print(buah)                # ('apel', 'jeruk', 'mangga', 'lemon')</code></pre>

<h3>Mengecek Item di Tuple</h3>
<pre><code class="language-python">buah = ('pisang', 'jeruk', 'mangga', 'lemon')
print('jeruk' in buah)     # True
print('apel' in buah)      # False</code></pre>

<h3>Menggabungkan Tuple</h3>
<pre><code class="language-python">buah = ('pisang', 'jeruk', 'mangga')
sayur = ('tomat', 'kentang', 'wortel')
gabungan = buah + sayur
print(gabungan)
# ('pisang', 'jeruk', 'mangga', 'tomat', 'kentang', 'wortel')</code></pre>

<h3>Menghapus Tuple</h3>
<pre><code class="language-python"># Tidak bisa hapus satu item, tapi bisa hapus seluruh tuple
buah = ('pisang', 'jeruk', 'mangga')
del buah
# print(buah)  # ❌ Error! NameError: name 'buah' is not defined</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa perbedaan utama antara List dan Tuple?",
        options: ["List lebih cepat", "Tuple bisa diubah, List tidak", "List bisa diubah, Tuple tidak", "Tidak ada perbedaan"],
        correct: 2,
        explanation: "List bersifat mutable (bisa diubah), sedangkan Tuple bersifat immutable (tidak bisa diubah setelah dibuat)."
      },
      {
        id: 2,
        question: "Bagaimana cara mengubah item di tuple?",
        options: ["tuple[0] = 'baru'", "Konversi ke list, ubah, konversi balik", "Gunakan method update()", "Tidak bisa diubah sama sekali"],
        correct: 1,
        explanation: "Karena tuple immutable, kita harus konversi ke list dulu dengan list(), ubah itemnya, lalu konversi balik dengan tuple()."
      },
      {
        id: 3,
        question: "Apa simbol yang digunakan untuk membuat tuple?",
        options: ["[]", "{}", "()", "<>"],
        correct: 2,
        explanation: "Tuple dibuat dengan tanda kurung biasa (). List pakai [], Set/Dict pakai {}."
      },
      {
        id: 4,
        question: "Apa hasil dari: ('a', 'b') + ('c', 'd')?",
        options: ["('a', 'b', 'c', 'd')", "('ac', 'bd')", "Error", "[('a','b'), ('c','d')]"],
        correct: 0,
        explanation: "Operator + menggabungkan dua tuple menjadi satu tuple baru: ('a', 'b', 'c', 'd')."
      },
      {
        id: 5,
        question: "Method apa yang bisa digunakan pada tuple?",
        options: ["append() dan remove()", "count() dan index()", "sort() dan reverse()", "add() dan discard()"],
        correct: 1,
        explanation: "Karena tuple immutable, hanya method yang tidak mengubah data yang tersedia: count() dan index()."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Buat Tuple Keluarga",
        description: "Buat tuple berisi nama saudara-saudaramu. Gabungkan dengan tuple nama orang tua. Hitung total anggota keluarga.",
        hint: "saudara = ('Andi', 'Budi'). ortu = ('Ayah', 'Ibu'). keluarga = saudara + ortu. len(keluarga).",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Ubah Tuple",
        description: "Dari tuple buah = ('pisang', 'jeruk', 'mangga'), ubah 'pisang' menjadi 'apel' menggunakan teknik konversi list.",
        hint: "buah_list = list(buah), buah_list[0] = 'apel', buah = tuple(buah_list).",
        difficulty: "sedang"
      },
      {
        id: 3,
        title: "Slice & Dice",
        description: "Dari tuple makanan yang berisi 9 item (3 buah, 3 sayur, 3 protein), slice untuk mendapatkan hanya buah, hanya sayur, dan hanya protein.",
        hint: "Gunakan slicing: makanan[0:3] untuk buah, makanan[3:6] untuk sayur, makanan[6:9] untuk protein.",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Cek Negara Nordik",
        description: "Buat tuple nordic = ('Denmark', 'Finland', 'Iceland', 'Norway', 'Sweden'). Cek apakah 'Estonia' dan 'Iceland' ada di dalamnya.",
        hint: "Gunakan operator 'in': 'Estonia' in nordic → False, 'Iceland' in nordic → True.",
        difficulty: "mudah"
      }
    ]
  },

  // ============================================================
  // DAY 7: SETS
  // ============================================================
  {
    day: 7,
    title: "Set (Himpunan)",
    titleEn: "Sets",
    icon: "🎯",
    color: "#1ABC9C",
    topics: ["Creating Sets", "Set Methods", "Set Operations", "Union", "Intersection", "Difference", "Subset & Superset"],
    sections: [
      {
        id: "intro-sets",
        title: "Pengenalan Set",
        content: `
<p>Set adalah <strong>koleksi item yang unik dan tidak terurut</strong>. Bayangkan set seperti <strong>daftar hadir kelas</strong> — setiap nama hanya muncul sekali, dan urutannya tidak penting.</p>

<p>Konsep set di Python sama persis dengan konsep <strong>himpunan di matematika</strong>. Kamu bisa melakukan operasi seperti union (gabungan), intersection (irisan), dan difference (selisih).</p>

<pre><code class="language-python"># Membuat set kosong — HARUS pakai set(), bukan {}!
# {} akan membuat dictionary, bukan set
set_kosong = set()

# Membuat set dengan isi
buah = {'pisang', 'jeruk', 'mangga', 'lemon'}
angka = {1, 2, 3, 4, 5}

# Set otomatis menghapus duplikat!
angka_duplikat = {1, 2, 2, 3, 3, 3}
print(angka_duplikat)  # {1, 2, 3}

# Panjang set
print(len(buah))       # 4</code></pre>
`
      },
      {
        id: "set-methods",
        title: "Method Set",
        content: `
<h3>Mengecek Item</h3>
<pre><code class="language-python">buah = {'pisang', 'jeruk', 'mangga', 'lemon'}
print('mangga' in buah)    # True
print('apel' in buah)      # False</code></pre>

<h3>Menambah Item</h3>
<pre><code class="language-python">buah = {'pisang', 'jeruk', 'mangga'}

# add() — tambah satu item
buah.add('lemon')
print(buah)    # {'pisang', 'jeruk', 'mangga', 'lemon'}

# update() — tambah banyak item sekaligus (dari list/tuple)
buah.update(['apel', 'anggur', 'semangka'])
print(buah)    # {'pisang', 'jeruk', 'mangga', 'lemon', 'apel', ...}</code></pre>

<h3>Menghapus Item</h3>
<pre><code class="language-python">buah = {'pisang', 'jeruk', 'mangga', 'lemon'}

# remove() — hapus item (error jika tidak ada)
buah.remove('jeruk')

# discard() — hapus item (TIDAK error jika tidak ada)
buah.discard('apel')   # Tidak error meskipun 'apel' tidak ada

# pop() — hapus item acak
item_dihapus = buah.pop()
print(item_dihapus)    # Item acak yang dihapus

# clear() — kosongkan set
buah.clear()
print(buah)            # set()</code></pre>

<h3>Konversi List ke Set</h3>
<pre><code class="language-python"># Cara mudah menghapus duplikat dari list!
buah_list = ['pisang', 'jeruk', 'pisang', 'mangga', 'jeruk']
buah_set = set(buah_list)
print(buah_set)        # {'pisang', 'jeruk', 'mangga'} — duplikat hilang!</code></pre>
`
      },
      {
        id: "set-operations",
        title: "Operasi Himpunan",
        content: `
<p>Ini adalah bagian paling menarik dari set — <strong>operasi matematika himpunan</strong>!</p>

<h3>Union (Gabungan) — Semua item dari kedua set</h3>
<pre><code class="language-python">A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Cara 1: method union()
print(A.union(B))      # {1, 2, 3, 4, 5, 6}

# Cara 2: operator |
print(A | B)           # {1, 2, 3, 4, 5, 6}

# Contoh nyata
buah = {'pisang', 'jeruk', 'mangga'}
sayur = {'tomat', 'kentang', 'wortel'}
print(buah.union(sayur))
# {'pisang', 'jeruk', 'mangga', 'tomat', 'kentang', 'wortel'}</code></pre>

<h3>Intersection (Irisan) — Item yang ada di KEDUA set</h3>
<pre><code class="language-python">A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Cara 1: method intersection()
print(A.intersection(B))   # {3, 4}

# Cara 2: operator &
print(A & B)               # {3, 4}

# Contoh: huruf yang sama di 'python' dan 'dragon'
python = {'p', 'y', 't', 'h', 'o', 'n'}
dragon = {'d', 'r', 'a', 'g', 'o', 'n'}
print(python & dragon)     # {'o', 'n'}</code></pre>

<h3>Difference (Selisih) — Item yang ada di A tapi TIDAK di B</h3>
<pre><code class="language-python">A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

print(A.difference(B))     # {1, 2} — ada di A, tidak di B
print(A - B)               # {1, 2}
print(B - A)               # {5, 6} — ada di B, tidak di A</code></pre>

<h3>Symmetric Difference — Item yang HANYA ada di salah satu set</h3>
<pre><code class="language-python">A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

print(A.symmetric_difference(B))  # {1, 2, 5, 6}
print(A ^ B)                      # {1, 2, 5, 6}</code></pre>

<h3>Subset & Superset</h3>
<pre><code class="language-python">A = {1, 2, 3, 4, 5}
B = {1, 2, 3}

print(B.issubset(A))      # True — B adalah bagian dari A
print(A.issuperset(B))    # True — A mencakup semua item B

# Disjoint — tidak ada item yang sama
genap = {0, 2, 4, 6, 8}
ganjil = {1, 3, 5, 7, 9}
print(genap.isdisjoint(ganjil))  # True — tidak ada yang sama</code></pre>
`
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa yang terjadi jika kita membuat set: {1, 2, 2, 3, 3, 3}?",
        options: ["{1, 2, 2, 3, 3, 3}", "{1, 2, 3}", "Error", "{1, 2, 3, 3}"],
        correct: 1,
        explanation: "Set otomatis menghapus duplikat. Jadi {1, 2, 2, 3, 3, 3} menjadi {1, 2, 3}."
      },
      {
        id: 2,
        question: "Bagaimana cara membuat set kosong?",
        options: ["{}", "set()", "[]", "()"],
        correct: 1,
        explanation: "{} membuat dictionary kosong, bukan set. Untuk set kosong, gunakan set()."
      },
      {
        id: 3,
        question: "Apa hasil dari: {1,2,3} & {2,3,4}?",
        options: ["{1,2,3,4}", "{2,3}", "{1,4}", "Error"],
        correct: 1,
        explanation: "Operator & adalah intersection (irisan) — item yang ada di KEDUA set. {1,2,3} & {2,3,4} = {2,3}."
      },
      {
        id: 4,
        question: "Apa perbedaan remove() dan discard() pada set?",
        options: ["Tidak ada perbedaan", "remove() error jika item tidak ada, discard() tidak", "discard() error jika item tidak ada, remove() tidak", "remove() hapus semua, discard() hapus satu"],
        correct: 1,
        explanation: "remove() akan menghasilkan KeyError jika item tidak ditemukan. discard() tidak menghasilkan error — lebih aman digunakan."
      },
      {
        id: 5,
        question: "Apa hasil dari: {1,2,3} - {2,3,4}?",
        options: ["{1}", "{4}", "{1,4}", "{2,3}"],
        correct: 0,
        explanation: "Operator - adalah difference (selisih). {1,2,3} - {2,3,4} = {1} — item yang ada di set pertama tapi tidak di set kedua."
      },
      {
        id: 6,
        question: "Apa kegunaan utama set dibanding list?",
        options: ["Lebih cepat diakses", "Menyimpan item unik tanpa duplikat", "Bisa diurutkan", "Bisa menyimpan lebih banyak data"],
        correct: 1,
        explanation: "Kegunaan utama set adalah menyimpan item unik (tanpa duplikat) dan melakukan operasi himpunan seperti union, intersection, dll."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Hapus Duplikat",
        description: "Dari list umur = [22, 19, 24, 25, 26, 24, 25, 24], konversi ke set untuk menghapus duplikat. Bandingkan panjang list dan set.",
        hint: "umur_set = set(umur). Bandingkan len(umur) dengan len(umur_set).",
        difficulty: "mudah"
      },
      {
        id: 2,
        title: "Operasi Himpunan",
        description: "Buat A = {19, 22, 24, 20, 25, 26} dan B = {19, 22, 20, 25, 26, 24, 28, 27}. Cari union, intersection, difference A-B, dan symmetric difference.",
        hint: "Gunakan A | B, A & B, A - B, dan A ^ B.",
        difficulty: "sedang"
      },
      {
        id: 3,
        title: "Manipulasi Set Perusahaan",
        description: "Buat set it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}. Tambahkan 'Twitter', hapus satu perusahaan, dan cek apakah 'Google' ada di set.",
        hint: "Gunakan add(), remove() atau discard(), dan operator 'in'.",
        difficulty: "sedang"
      },
      {
        id: 4,
        title: "Kata Unik",
        description: "Dari kalimat 'Saya seorang guru dan saya suka mengajar dan menginspirasi orang', hitung berapa kata unik yang digunakan.",
        hint: "Gunakan split() untuk memecah kalimat, lalu konversi ke set. len(set(kalimat.lower().split())).",
        difficulty: "sulit"
      }
    ]
  }
];
