# Gopax: demo hackathon

Tutorial Remotion berbahasa Indonesia, 1920×1080, 30 fps, durasi 2 menit 56,2 detik. Tidak memiliki audio, siap untuk dubbing manusia.

## Hasil dan preview

- MP4: `out/gopax-hackathon-demo.mp4`
- Preview: `http://localhost:3000/GopaxDemo`
- Panduan waktu dubbing: `PANDUAN-DUBBING.md`
- Pemeriksaan: `out/QUALITY-CHECK.md`

```sh
npm run dev
npm run lint
npx remotion render GopaxDemo out/gopax-hackathon-demo.mp4 --browser-executable=/usr/bin/google-chrome --codec=h264 --crf=18 --concurrency=2
```

`src/timeline.ts` berisi teks, sumber, waktu sumber, dan urutan klip. Setiap bagian tersedia dalam folder Adegan di Studio. `Footage.tsx` mempertahankan rasio portrait kedua rekaman dan menampilkannya dalam bingkai ponsel yang konsisten.

## Sumber

Video memakai dua rekaman portrait 720×1280 yang diberikan pengguna: `public/gopax-wallet-login.mp4` untuk alur masuk dan penamaan akun, serta `public/gopax-app-demo.mp4` untuk pembuka dan seluruh demo aplikasi. Audio asli kedua rekaman dimatikan agar tidak bertabrakan dengan dubbing. Klip diputar 1× dan penutup tetap berisi ringkasan editorial.

Arah visual mengikuti aplikasi: krem dan hijau, judul serif, teks penjelas sans-serif. Gerakan kecil mengarahkan perhatian, fade 0,4 detik memisahkan bagian, dan garis bawah menunjukkan kemajuan video.

Kedua rekaman memakai codec HEVC. Decoder native `OffthreadVideo` digunakan untuk ekspor agar sumber dapat dirender langsung tanpa membuat salinan video tambahan.
