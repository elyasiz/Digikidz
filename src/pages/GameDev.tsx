import React from 'react';
import { ChevronRight, Gamepad2, Brain, Star, Swords, Flag, Code } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function GameDev() {
  const projects = [
    'Maze Game Interaktif',
    'Quiz Game Edukatif',
    'Platformer (Gaya Mario)',
    'Roblox Obby (Rintangan 3D)',
    'Reaction Speed Game',
    'Future City Exploration'
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 bg-black text-white p-8 md:p-16 nb-border nb-shadow rotate-1">
         <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
               Berhenti Hanya Bermain, Mulai <span className="text-brand-pink underline decoration-4 underline-offset-4">Ciptakan Game-mu!</span>
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90">
               Salurkan kecintaan bermain game menjadi keterampilan masa depan yang berharga. Dari sekadar penikmat, menjadi kreator dunia virtual!
            </p>
            <Link to="/contact-us" className="w-max mt-2">
               <Button variant="pink" className="py-4 px-8 text-lg font-black uppercase">Daftar Kelas Game Dev <ChevronRight className="inline ml-1" /></Button>
            </Link>
         </div>
         <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" alt="Game Development" className="w-full aspect-video object-cover nb-border border-white nb-shadow-lg rotate-[-2deg]" />
         </div>
      </section>

      {/* Why & What */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight flex items-center gap-3">
               <Gamepad2 className="w-10 h-10 text-brand-pink" /> Kenapa Game Dev?
            </h2>
            <p className="text-xl font-medium opacity-90 leading-relaxed bg-brand-yellow p-6 nb-border">
               Membuat game adalah "trik jitu" paling efektif mengajarkan <strong>Matematika</strong> (Sumbu X/Y, fisika pantulan) dan <strong>Logika</strong> tanpa disadari oleh anak-anak. Mereka merasa sedang bermain, padahal mereka sedang belajar keras!
            </p>
         </div>
         <div className="bg-gray-100 nb-border p-8 flex flex-col gap-6 rotate-[-1deg]">
            <h2 className="text-3xl font-display font-black uppercase tracking-tight">Apa yang Dipelajari?</h2>
            <ul className="flex flex-col gap-4 font-bold text-lg">
               <li className="flex items-center gap-3"><Flag className="w-6 h-6 text-brand-blue" /> Level Design (Arsitektur Permainan)</li>
               <li className="flex items-center gap-3"><Star className="w-6 h-6 text-brand-yellow" /> Aturan Skor & Variabel</li>
               <li className="flex items-center gap-3"><Brain className="w-6 h-6 text-brand-pink" /> Storytelling & Karakter</li>
               <li className="flex items-center gap-3"><Swords className="w-6 h-6 text-brand-green" /> Logika Benturan (Collision Detection)</li>
            </ul>
         </div>
      </section>

      {/* Projects */}
      <section className="flex flex-col gap-8 bg-brand-blue text-white p-10 md:p-16 nb-border nb-shadow text-center">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Proyek Game Apa Saja?</h2>
         <div className="flex flex-wrap justify-center gap-4 mt-4">
            {projects.map((p, i) => (
               <div key={i} className="bg-white text-black font-bold uppercase tracking-tight px-6 py-3 nb-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-brand-yellow hover:-translate-y-1 transition-all">
                  {p}
               </div>
            ))}
         </div>
      </section>

      {/* Tools */}
      <section className="flex flex-col items-center gap-6 pt-6">
         <h2 className="text-3xl font-display font-black uppercase tracking-tight text-center">Tools Standar Global</h2>
         <div className="flex gap-4 items-center justify-center">
            <div className="w-20 h-20 bg-gray-100 nb-border flex items-center justify-center p-2 hover:scale-110 transition-transform"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Scratch_logo_and_wordmark.svg/512px-Scratch_logo_and_wordmark.svg.png?20220610123512" alt="Scratch" className="w-full object-contain" /></div>
            <div className="w-20 h-20 bg-gray-100 nb-border flex items-center justify-center p-2 hover:scale-110 transition-transform font-black text-xl uppercase">Roblox</div>
            <div className="w-20 h-20 bg-gray-100 nb-border flex items-center justify-center p-2 hover:scale-110 transition-transform"><Code className="w-10 h-10" /></div>
         </div>
      </section>
    </div>
  );
}
