export const day17Content = {
  dayNum: 17,
  title: 'Exception Handling & Advanced Arguments',
  description: 'Pelajari cara menangani error dengan graceful, unpacking/packing arguments, dan fungsi-fungsi utility seperti enumerate dan zip.',
  topics: [
    {
      id: 'exception-handling',
      title: 'Exception Handling (Penanganan Error)',
      content: `
## Penanganan Error dengan Try-Except

Python menggunakan **try** dan **except** untuk menangani error secara "graceful" (elegan). Ketika program mendeteksi error, ia dapat "keluar dengan teratur" daripada crash.

### Struktur Dasar Try-Except

\`\`\`python
try:
    # Kode yang mungkin menimbulkan error
    hasil = 10 / 0
except:
    # Kode ini dijalankan jika ada error
    print('Terjadi error!')
\`\`\`

### Menangkap Error Spesifik

Lebih baik menangkap jenis error yang spesifik daripada semua error:

\`\`\`python
try:
    nama = input('Masukkan nama: ')
    tahun_lahir = input('Tahun lahir: ')
    umur = 2024 - int(tahun_lahir)
    print(f'{nama} berusia {umur} tahun')
except ValueError:
    print('Error: Tahun lahir harus berupa angka!')
except ZeroDivisionError:
    print('Error: Tidak bisa membagi dengan nol!')
except TypeError:
    print('Error: Tipe data tidak sesuai!')
\`\`\`

### Try-Except-Else-Finally

- **try**: Blok kode yang mungkin error
- **except**: Menangani error jika terjadi
- **else**: Dijalankan jika TIDAK ada error
- **finally**: SELALU dijalankan, baik ada error atau tidak

\`\`\`python
try:
    file = open('data.txt', 'r')
    data = file.read()
except FileNotFoundError:
    print('File tidak ditemukan!')
else:
    print('File berhasil dibaca')
finally:
    print('Proses selesai')
    file.close()
\`\`\`

### Analogi Dunia Nyata

Bayangkan Anda pergi ke ATM:
- **try**: Masukkan kartu dan PIN
- **except**: Jika PIN salah, ATM menampilkan pesan error
- **else**: Jika PIN benar, ambil uang
- **finally**: Kartu selalu dikeluarkan, baik transaksi berhasil atau tidak
      `,
      codeExample: `
try:
    angka = int(input('Masukkan angka: '))
    hasil = 100 / angka
    print(f'100 / {angka} = {hasil}')
except ValueError:
    print('Anda harus memasukkan angka!')
except ZeroDivisionError:
    print('Tidak bisa membagi dengan nol!')
else:
    print('Perhitungan berhasil!')
finally:
    print('Program selesai')
      `
    },
    {
      id: 'unpacking-packing',
      title: 'Unpacking & Packing Arguments',
      content: `
## Unpacking (Membuka Struktur Data)

Unpacking adalah cara mengekstrak elemen dari list/tuple/dict menjadi variabel terpisah.

### Unpacking List

\`\`\`python
# Unpacking sederhana
negara = ['Indonesia', 'Malaysia', 'Singapura']
a, b, c = negara
print(a)  # Indonesia
print(b)  # Malaysia

# Unpacking dengan *rest
negara = ['Indonesia', 'Malaysia', 'Singapura', 'Thailand', 'Vietnam']
pertama, kedua, *sisanya = negara
print(pertama)   # Indonesia
print(sisanya)   # ['Singapura', 'Thailand', 'Vietnam']
\`\`\`

### Unpacking Dictionary

\`\`\`python
def info_siswa(nama, kelas, nilai):
    return f'{nama} di kelas {kelas} dengan nilai {nilai}'

data = {'nama': 'Budi', 'kelas': '10A', 'nilai': 85}
print(info_siswa(**data))
# Output: Budi di kelas 10A dengan nilai 85
\`\`\`

## Packing (Mengumpulkan Argumen)

Packing memungkinkan fungsi menerima jumlah argumen yang tidak terbatas.

### Packing dengan *args (untuk tuple)

\`\`\`python
def jumlahkan(*angka):
    total = 0
    for n in angka:
        total += n
    return total

print(jumlahkan(1, 2, 3))           # 6
print(jumlahkan(1, 2, 3, 4, 5))     # 15
print(jumlahkan(10, 20, 30, 40))    # 100
\`\`\`

### Packing dengan **kwargs (untuk dictionary)

\`\`\`python
def buat_profil(**info):
    for kunci, nilai in info.items():
        print(f'{kunci}: {nilai}')

buat_profil(nama='Ani', umur=20, kota='Jakarta')
# Output:
# nama: Ani
# umur: 20
# kota: Jakarta
\`\`\`

### Analogi Dunia Nyata

- **Unpacking**: Seperti membuka koper dan mengeluarkan barang-barangnya satu per satu
- **Packing**: Seperti memasukkan berbagai barang ke dalam tas tanpa tahu berapa banyaknya
      `,
      codeExample: `
# Unpacking
buah = ['apel', 'jeruk', 'mangga', 'pisang']
pertama, *tengah, terakhir = buah
print(f'Pertama: {pertama}')
print(f'Tengah: {tengah}')
print(f'Terakhir: {terakhir}')

# Packing
def hitung_rata_rata(*nilai):
    return sum(nilai) / len(nilai)

print(hitung_rata_rata(80, 85, 90))  # 85.0
print(hitung_rata_rata(70, 75, 80, 85, 90))  # 80.0
      `
    },
    {
      id: 'enumerate-zip',
      title: 'Enumerate & Zip',
      content: `
## Enumerate - Mendapatkan Index dan Nilai

Fungsi **enumerate** memberikan index dan nilai saat melakukan loop.

\`\`\`python
buah = ['apel', 'jeruk', 'mangga']
for index, buah_item in enumerate(buah):
    print(f'{index}: {buah_item}')

# Output:
# 0: apel
# 1: jeruk
# 2: mangga
\`\`\`

Anda juga bisa mengatur starting index:

\`\`\`python
buah = ['apel', 'jeruk', 'mangga']
for nomor, buah_item in enumerate(buah, start=1):
    print(f'{nomor}. {buah_item}')

# Output:
# 1. apel
# 2. jeruk
# 3. mangga
\`\`\`

## Zip - Menggabungkan Multiple List

Fungsi **zip** menggabungkan beberapa list dan melakukan loop bersamaan.

\`\`\`python
nama = ['Budi', 'Ani', 'Citra']
nilai = [85, 90, 88]

for n, v in zip(nama, nilai):
    print(f'{n} mendapat nilai {v}')

# Output:
# Budi mendapat nilai 85
# Ani mendapat nilai 90
# Citra mendapat nilai 88
\`\`\`

### Zip dengan Multiple List

\`\`\`python
nama = ['Budi', 'Ani', 'Citra']
kelas = ['10A', '10B', '10A']
nilai = [85, 90, 88]

for n, k, v in zip(nama, kelas, nilai):
    print(f'{n} ({k}): {v}')

# Output:
# Budi (10A): 85
# Ani (10B): 90
# Citra (10A): 88
\`\`\`

### Analogi Dunia Nyata

- **Enumerate**: Seperti membaca daftar dengan nomor urut
- **Zip**: Seperti menggabungkan dua file dengan baris yang sesuai
      `,
      codeExample: `
# Enumerate
siswa = ['Budi', 'Ani', 'Citra', 'Doni']
for no, nama in enumerate(siswa, start=1):
    print(f'{no}. {nama}')

# Zip
kota = ['Jakarta', 'Bandung', 'Surabaya']
populasi = [10000000, 2500000, 2700000]

for k, p in zip(kota, populasi):
    print(f'{k}: {p:,} penduduk')
      `
    }
  ],
  quizzes: [
    {
      id: 'q1-exception',
      question: 'Apa fungsi dari blok "except" dalam try-except?',
      options: [
        'Mengakhiri program',
        'Menangani error jika terjadi',
        'Mengecek apakah kode benar',
        'Menampilkan pesan sukses'
      ],
      correctAnswer: 1,
      explanation: 'Blok "except" dijalankan jika ada error di blok "try". Ini memungkinkan program menangani error dengan graceful.'
    },
    {
      id: 'q2-finally',
      question: 'Kapan blok "finally" dijalankan?',
      options: [
        'Hanya jika ada error',
        'Hanya jika tidak ada error',
        'Selalu dijalankan, baik ada error atau tidak',
        'Tidak pernah dijalankan'
      ],
      correctAnswer: 2,
      explanation: 'Blok "finally" SELALU dijalankan, baik ada error di "try" atau tidak. Berguna untuk cleanup (menutup file, koneksi, dll).'
    },
    {
      id: 'q3-unpacking',
      question: 'Apa hasil dari kode ini? a, *b, c = [1, 2, 3, 4, 5]',
      options: [
        'a=1, b=2, c=3',
        'a=1, b=[2,3,4], c=5',
        'a=[1], b=[2,3,4], c=[5]',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'Operator * mengumpulkan elemen tengah ke dalam list. Jadi a=1, b=[2,3,4], c=5.'
    },
    {
      id: 'q4-args',
      question: 'Apa perbedaan *args dan **kwargs?',
      options: [
        'Tidak ada perbedaan',
        '*args untuk list, **kwargs untuk dictionary',
        '*args untuk tuple, **kwargs untuk dictionary',
        '*args untuk string, **kwargs untuk set'
      ],
      correctAnswer: 2,
      explanation: '*args mengumpulkan argumen positional menjadi tuple, **kwargs mengumpulkan keyword arguments menjadi dictionary.'
    },
    {
      id: 'q5-enumerate',
      question: 'Apa output dari: for i, x in enumerate(["a", "b", "c"]): print(i, x)',
      options: [
        '0 a, 1 b, 2 c',
        'a 0, b 1, c 2',
        '1 a, 2 b, 3 c',
        'Error'
      ],
      correctAnswer: 0,
      explanation: 'Enumerate memberikan index (dimulai dari 0) dan nilai. Output: 0 a, 1 b, 2 c.'
    },
    {
      id: 'q6-zip',
      question: 'Apa output dari: list(zip([1, 2], ["a", "b", "c"]))',
      options: [
        '[(1, "a"), (2, "b"), ("c")]',
        '[(1, "a"), (2, "b")]',
        '[(1, "a"), (2, "b"), (None, "c")]',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'Zip berhenti saat list terpendek habis. Jadi output: [(1, "a"), (2, "b")].'
    }
  ],
  exercises: [
    {
      id: 'ex1-exception',
      title: 'Tangani Error Input',
      description: 'Buat program yang menerima input dua angka dan menampilkan hasil pembagian. Tangani error jika user memasukkan bukan angka atau membagi dengan nol.',
      hints: [
        'Gunakan try-except untuk menangani ValueError dan ZeroDivisionError',
        'Gunakan int() atau float() untuk konversi input',
        'Tampilkan pesan error yang jelas untuk setiap jenis error'
      ]
    },
    {
      id: 'ex2-unpacking',
      title: 'Unpack Data Siswa',
      description: 'Diberikan list: ["Budi", "Jakarta", 85, "10A"]. Unpack ke variabel nama, kota, nilai, kelas. Tampilkan informasinya.',
      hints: [
        'Gunakan a, b, c, d = list_data',
        'Atau gunakan unpacking dengan *rest jika ada elemen lebih',
        'Tampilkan hasil dengan f-string'
      ]
    },
    {
      id: 'ex3-packing',
      title: 'Fungsi dengan *args',
      description: 'Buat fungsi yang menerima jumlah angka tidak terbatas dan menampilkan: jumlah, rata-rata, nilai terbesar, dan terkecil.',
      hints: [
        'Gunakan *args untuk parameter',
        'Gunakan sum(), len(), max(), min() untuk perhitungan',
        'Tampilkan hasil dengan format yang rapi'
      ]
    },
    {
      id: 'ex4-enumerate-zip',
      title: 'Gabungkan Enumerate dan Zip',
      description: 'Diberikan 2 list: nama = ["Budi", "Ani", "Citra"], nilai = [85, 90, 88]. Tampilkan dengan nomor urut menggunakan enumerate dan zip.',
      hints: [
        'Gunakan enumerate() untuk nomor urut',
        'Gunakan zip() untuk menggabungkan 2 list',
        'Format output: "1. Budi: 85"'
      ]
    },
    {
      id: 'ex5-advanced',
      title: 'Kombinasi Try-Except dan Unpacking',
      description: 'Buat program yang menerima input berupa string dengan format "nama,umur,kota". Split dan unpack ke variabel. Tangani error jika format salah atau umur bukan angka.',
      hints: [
        'Gunakan split(",") untuk memisahkan data',
        'Gunakan try-except untuk menangani error',
        'Unpack hasil split ke variabel',
        'Konversi umur ke int'
      ]
    }
  ]
};
