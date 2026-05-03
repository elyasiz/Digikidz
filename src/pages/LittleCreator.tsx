import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, PlayCircle, Puzzle, Heart, Star, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function LittleCreator() {
  const sections = [
    { title: 'Aktivitas Belajar', items: ['ScratchJr (Coding Visual)', 'Menggambar Digital', 'Puzzle Logika Interaktif'], icon: PlayCircle, color: 'bg-brand-pink' },
    { title: 'Keterampilan', items: ['Observasi Visual', 'Fokus & Ketelitian', 'Problem Solving Ringan', 'Keberanian Tampil'], icon: Star, color: 'bg-brand-yellow' },
    { title: 'Alat Digunakan', items: ['Tablet Edukasi', 'Aplikasi ScratchJr', 'Aplikasi Menggambar'], icon: Puzzle, color: 'bg-brand-blue' },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* 1. Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 bg-brand-pink p-8 md:p-16 nb-border nb-shadow rotate-1">
         <div className="w-full md:w-1/2 flex flex-col gap-6 rotate-[-1deg]">
            <div className="bg-white text-black px-4 py-1 nb-border nb-shadow-sm w-max font-bold uppercase tracking-widest text-sm">
               Usia 5-6 Tahun
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
               Mulai <span className="bg-white px-2 inline-block -rotate-2 nb-border">Petualangan Logika</span> Pertama Mereka!
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90">
               Program pra-coding dan kreativitas digital tanpa tekanan. Belajar sambil bermain visual tanpa perlu kemampuan membaca.
            </p>
            <Link to="/contact-us" className="w-max mt-2">
               <Button variant="white" className="py-4 px-8 text-lg">Daftar Trial Gratis <ChevronRight className="inline ml-1" /></Button>
            </Link>
         </div>
         <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop" alt="Little Creator" className="w-full aspect-video object-cover nb-border nb-shadow bg-white rotate-2" />
         </div>
      </section>

      {/* 2. Why This Program & 3. What Kids Learn */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight flex items-center gap-4">
               <Heart className="w-10 h-10 text-brand-pink fill-brand-pink" /> Mengapa Memilih Ini?
            </h2>
            <div className="flex flex-col gap-4">
               {['Bebas Frustrasi (Cocok untuk pemula total)', 'Stimulasi Visual & Motorik Halus (Klik & Geser)', 'Pengenalan Logika Urutan (Sequencing)'].map((item, i) => (
                  <div key={i} className="bg-white nb-border p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform nb-shadow-sm">
                     <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black">{i+1}</div>
                     <span className="font-bold">{item}</span>
                  </div>
               ))}
            </div>
         </div>
         <div className="bg-gray-100 nb-border nb-shadow p-8 flex flex-col gap-6 rotate-[-1deg]">
            <h2 className="text-3xl font-display font-black uppercase tracking-tight">Apa yang Dipelajari?</h2>
            <ul className="list-disc list-inside flex flex-col gap-2 font-medium text-lg">
               <li>Mengenal pola dan bentuk</li>
               <li>Memberikan instruksi sederhana</li>
               <li>Gerakan karakter 2D interaktif</li>
               <li>Storytelling visual menggunakan tablet</li>
            </ul>
         </div>
      </section>

      {/* 4, 6, 7. Info Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
         {sections.map((s, i) => (
            <div key={i} className={`nb-card p-6 flex flex-col gap-4 ${s.color}`}>
               <div className="bg-white w-12 h-12 flex items-center justify-center nb-border nb-shadow-sm rotate-3"><s.icon className="w-6 h-6" /></div>
               <h3 className="font-display font-black text-2xl uppercase tracking-tighter">{s.title}</h3>
               <ul className="flex flex-col gap-2">
                  {s.items.map((item, idx) => (
                     <li key={idx} className="font-medium bg-white/50 px-2 py-1 nb-border text-sm">{item}</li>
                  ))}
               </ul>
            </div>
         ))}
      </section>

      {/* 5. Example Projects & 8. Outcome */}
      <section className="flex flex-col gap-8 text-center bg-brand-blue text-white nb-border nb-shadow p-10 md:p-20">
         <Sparkles className="w-16 h-16 mx-auto mb-2 text-brand-yellow fill-brand-yellow animate-pulse" />
         <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight">Hasil Karya Tangan Mungil Mereka</h2>
         <p className="text-xl font-medium max-w-2xl mx-auto opacity-90">Di akhir program, anak akan membawa pulang hasil karyanya berupa Animasi Karakter Bergerak, Cerita Interaktif, dan Poster Angka.</p>
         <Link to="/contact-us" className="mt-8">
            <Button variant="yellow" className="py-5 px-10 text-xl font-black">Mulai Kelas Pertamanya</Button>
         </Link>
      </section>

    </div>
  );
}
