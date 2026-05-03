import React from 'react';
import { ChevronRight, Gamepad2, Blocks, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function JuniorCreator() {
  const activities = [
    'Menarik dan melepas block-code (Visual Coding)',
    'Membangun mekanika balok robot',
    'Membuat jalan cerita karakter interaktif',
    'Menguji logika sensor gerak dasar'
  ];

  const projects = [
    'Scratch Maze Game',
    'Catching Game',
    'Simple Quiz Game',
    'Robot Labirin',
    'Animasi Cerita Pendek'
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* 1. Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 bg-brand-yellow p-8 md:p-16 nb-border nb-shadow">
         <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="bg-black text-white px-4 py-1 w-max font-bold uppercase tracking-widest text-sm rotate-2">
               Usia 7-9 Tahun
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
               Dari Pemain Game Menjadi <span className="bg-white px-2 inline-block rotate-[-2deg] nb-border text-brand-blue">Pembuat Game!</span>
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90 text-black">
               Mengubah imajinasi liar anak usia SD menjadi barisan logika, game sederhana, dan rakitan robot fungsional.
            </p>
            <Link to="/contact-us" className="w-max mt-2">
               <Button variant="primary" className="py-4 px-8 text-lg">Eksplorasi Kelas Junior <ChevronRight className="inline ml-1" /></Button>
            </Link>
         </div>
         <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop" alt="Junior Creator" className="w-full aspect-video object-cover nb-border nb-shadow bg-white rotate-[-1deg]" />
         </div>
      </section>

      {/* 2. What they learn & 4. Activities */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white nb-border p-8 md:p-12 flex flex-col gap-6 rotate-1">
            <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">Apa yang Akan Dipelajari?</h2>
            <ul className="flex flex-col gap-4 font-medium text-lg">
               <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-brand-green" /> Konsep Sequencing & Looping</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-brand-green" /> Logika Kondisi Sederhana (If/Then)</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-brand-green" /> Pembuatan Aturan Game</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-brand-green" /> Perakitan & Sensor Robotika Dasar</li>
            </ul>
         </div>
         <div className="flex flex-col gap-6 justify-center">
            <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">Aktivitas di Kelas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {activities.map((act, i) => (
                  <div key={i} className="bg-gray-100 p-4 nb-border border-2 flex items-start gap-3 hover:bg-brand-pink transition-colors">
                     <Blocks className="w-5 h-5 shrink-0 mt-0.5" />
                     <span className="font-bold text-sm">{act}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Projects & 6. Skills */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-1 nb-card bg-brand-blue text-white p-8 flex flex-col gap-6">
            <Cpu className="w-12 h-12 text-brand-yellow" />
            <h3 className="text-3xl font-display font-black uppercase">Soft Skills</h3>
            <ul className="flex flex-col gap-2">
               <li className="bg-white/10 p-2 nb-border text-sm font-bold">Logika Prosedural</li>
               <li className="bg-white/10 p-2 nb-border text-sm font-bold">Kesabaran (Debugging)</li>
               <li className="bg-white/10 p-2 nb-border text-sm font-bold">Sebab-Akibat Komputasional</li>
               <li className="bg-white/10 p-2 nb-border text-sm font-bold">Keberanian Presentasi</li>
            </ul>
         </div>
         <div className="md:col-span-2 nb-card bg-white p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Gamepad2 className="w-40 h-40" /></div>
            <h3 className="text-3xl md:text-5xl font-display font-black uppercase relative z-10">Karya yang Akan Dihasilkan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 relative z-10">
               {projects.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-lg font-bold border-b-2 border-black pb-2">
                     <Sparkles className="w-5 h-5 text-brand-orange" /> {p}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. Outcome & CTA */}
      <section className="bg-brand-green nb-border nb-shadow p-10 md:p-16 text-center flex flex-col items-center gap-6 rotate-[-1deg]">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight max-w-3xl">Lulus dengan Setidaknya 5 Game Buatan Sendiri!</h2>
         <p className="text-xl font-medium max-w-2xl">Beri anak Anda kebanggaan memiliki portofolio digital pertamanya di usia dini.</p>
         <Link to="/contact-us" className="mt-4">
            <Button variant="white" className="py-5 px-10 text-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">Daftar Trial Junior Creator</Button>
         </Link>
      </section>
    </div>
  );
}
