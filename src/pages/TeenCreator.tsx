import React from 'react';
import { ChevronRight, Code2, Rocket, LayoutTemplate, Bot, Fingerprint, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function TeenCreator() {
  const tracks = [
    { name: 'Coding Fundamental', icon: Code2 },
    { name: 'Web Development', icon: LayoutTemplate },
    { name: 'AI Project', icon: Bot },
    { name: 'Game Development', icon: Rocket },
    { name: 'Digital Portfolio', icon: Fingerprint },
    { name: 'Startup Pitching', icon: Award },
  ];

  const projects = [
    'Personal Portfolio Website',
    'AI Smart Quiz App',
    'Business Website Prototype',
    'Roblox Obby Game',
    'AI Poster Campaign',
    'Startup Pitch Deck',
    'Simple Web App',
    'Robot Challenge Mission'
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 bg-brand-blue text-white p-8 md:p-16 nb-border nb-shadow rotate-1">
         <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="bg-brand-yellow text-black px-4 py-1 w-max font-bold uppercase tracking-widest text-sm rotate-[-2deg] nb-border">
               Usia 10-16 Tahun
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
               Transisi Menuju <span className="text-brand-pink underline decoration-4 underline-offset-4">Profesional!</span>
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90">
               Bukan sekadar main-main. Remaja siap menaklukkan web development, eksplorasi AI, dan rilis karya mereka sendiri.
            </p>
            <Link to="/contact-us" className="w-max mt-2">
               <Button variant="yellow" className="py-4 px-8 text-lg">Mulai Portfolio Remaja <ChevronRight className="inline ml-1" /></Button>
            </Link>
         </div>
         <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Teen Creator" className="w-full aspect-video object-cover nb-border border-white nb-shadow-lg rotate-2" />
         </div>
      </section>

      {/* Why & Tracks */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Kenapa Harus Teen Creator?</h2>
            <ul className="flex flex-col gap-4 text-lg font-medium">
               <li className="flex gap-4"><div className="w-2 h-2 bg-black mt-2 shrink-0"></div> Transisi dari visual coding ke teks-kode asli (Python/JS).</li>
               <li className="flex gap-4"><div className="w-2 h-2 bg-black mt-2 shrink-0"></div> Mempersiapkan skill yang benar-benar dipakai di dunia kerja.</li>
               <li className="flex gap-4"><div className="w-2 h-2 bg-black mt-2 shrink-0"></div> Membangun portofolio digital untuk beasiswa/sekolah.</li>
            </ul>
         </div>
         <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {tracks.map((t, i) => (
               <div key={i} className="bg-white nb-border p-4 flex flex-col items-center text-center gap-3 hover:-translate-y-2 transition-transform hover:bg-brand-yellow">
                  <t.icon className="w-8 h-8" />
                  <span className="font-bold text-sm uppercase">{t.name}</span>
               </div>
            ))}
         </div>
      </section>

      {/* Projects */}
      <section className="flex flex-col gap-8 bg-gray-100 nb-border nb-shadow p-8 md:p-16 rotate-[-1deg]">
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight max-w-lg">Apa yang Akan Mereka Bangun?</h2>
            <div className="bg-brand-pink px-4 py-2 nb-border font-bold uppercase text-sm rotate-2 h-max">100% Project Based</div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((p, i) => (
               <div key={i} className="bg-white nb-border p-4 flex items-center justify-center text-center font-bold text-sm md:text-base min-h-[100px] hover:bg-brand-blue hover:text-white transition-colors">
                  {p}
               </div>
            ))}
         </div>
      </section>

      {/* Skills & Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="nb-card bg-brand-green p-8 md:p-12">
            <h3 className="text-3xl font-display font-black uppercase mb-6">Skills Developed</h3>
            <div className="flex flex-wrap gap-2">
               {['Pemecahan Algoritma', 'Literasi Data', 'Desain UI/UX', 'Debugging Lanjut', 'Public Speaking'].map((s, i) => (
                  <span key={i} className="bg-white nb-border px-3 py-1 font-bold text-sm">{s}</span>
               ))}
            </div>
         </div>
         <div className="nb-card bg-white p-8 md:p-12">
            <h3 className="text-3xl font-display font-black uppercase mb-4">Showcase System</h3>
            <p className="font-medium text-lg opacity-80">
               Setiap siswa akan memiliki link publik ke hasil karyanya dan dilatih mempresentasikan ide proyek layaknya founder startup sungguhan di akhir semester.
            </p>
         </div>
      </section>

      {/* CTA */}
      <section className="text-center">
         <Link to="/contact-us">
            <Button variant="primary" className="py-5 px-12 text-2xl font-black uppercase tracking-tight">Daftar Teen Creator Sekarang!</Button>
         </Link>
      </section>
    </div>
  );
}
