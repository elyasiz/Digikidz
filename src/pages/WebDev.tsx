import React from 'react';
import { ChevronRight, Globe, Layers, UserCircle, Calculator, TerminalSquare, Rocket, Laptop2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function WebDev() {
  const projects = [
    { title: 'Personal Portfolio', icon: UserCircle },
    { title: 'Business Website', icon: Globe },
    { title: 'Landing Page Startup', icon: Rocket },
    { title: 'Calculator App', icon: Calculator },
    { title: 'Smart Quiz App', icon: Layers },
    { title: 'Event Showcase', icon: Laptop2 },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 bg-brand-green text-black p-8 md:p-16 nb-border nb-shadow rotate-[-1deg]">
         <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
               Bangun <span className="bg-white text-black px-3 inline-block rotate-2 mt-2 nb-border">Kehadiran Digitalmu</span> Sendiri!
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90 bg-black text-white p-4 nb-border inline-block rotate-[-1deg]">
               Belajar membuat website dari selembar ide hingga tayang publik di internet. Portofolio abadi untuk masa depan remajamu.
            </p>
            <Link to="/contact-us" className="w-max mt-2">
               <Button variant="primary" className="py-4 px-8 text-lg font-black uppercase text-white">Mulai Belajar Web Dev <ChevronRight className="inline ml-1" /></Button>
            </Link>
         </div>
         <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" alt="Web Development" className="w-full aspect-video object-cover nb-border nb-shadow-lg bg-black rotate-1" />
         </div>
      </section>

      {/* Why & Learning Journey */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight flex items-center gap-3">
               <Globe className="w-10 h-10 text-brand-blue" /> Mengapa Web Dev?
            </h2>
            <p className="text-xl font-medium opacity-90 leading-relaxed bg-brand-yellow p-6 nb-border rotate-1">
               <strong>Website adalah identitas dasar di dunia kerja abad 21.</strong> <br/><br/> Memiliki portofolio berupa link website aktif (yang bisa diakses dari mana saja) adalah aset terbaik yang tidak akan pernah kedaluwarsa saat remaja Anda mendaftar beasiswa atau kampus impian.
            </p>
         </div>
         <div className="bg-gray-100 nb-border p-8 flex flex-col gap-6">
            <h2 className="text-3xl font-display font-black uppercase tracking-tight">Perjalanan Belajar (Journey)</h2>
            <ul className="flex flex-col gap-4 font-bold text-lg">
               <li className="flex items-start gap-4"><TerminalSquare className="w-6 h-6 text-brand-pink shrink-0 mt-1" /> HTML & CSS: Mendesain wajah dan struktur.</li>
               <li className="flex items-start gap-4"><TerminalSquare className="w-6 h-6 text-brand-blue shrink-0 mt-1" /> JavaScript: Menghidupkan interaksi.</li>
               <li className="flex items-start gap-4"><TerminalSquare className="w-6 h-6 text-brand-green shrink-0 mt-1" /> AI Tools: Mempercepat alur kerja (*Copilot/ChatGPT*).</li>
               <li className="flex items-start gap-4"><TerminalSquare className="w-6 h-6 text-brand-orange shrink-0 mt-1" /> Hosting: Mempublikasikan ke internet.</li>
            </ul>
         </div>
      </section>

      {/* What Students Build */}
      <section className="flex flex-col gap-8">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-center">Apa yang Akan Dibangun?</h2>
         <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {projects.map((p, i) => (
               <div key={i} className="nb-card p-6 flex flex-col items-center text-center gap-4 bg-white hover:-translate-y-2 transition-transform hover:bg-brand-blue hover:text-white group">
                  <p.icon className="w-10 h-10 text-brand-blue group-hover:text-brand-yellow" />
                  <h3 className="text-xl font-display font-black uppercase tracking-tight">{p.title}</h3>
               </div>
            ))}
         </div>
      </section>

      {/* Benefit & CTA */}
      <section className="bg-brand-blue text-white nb-border nb-shadow p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 rotate-1">
         <div className="w-full md:w-2/3 flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Karya Nyata yang Bisa Diakses Siapa Saja</h2>
            <p className="text-xl font-medium opacity-90 leading-relaxed">
               Di akhir program, siswa akan mendapatkan link domain gratis (seperti namasiswa.vercel.app) yang siap dipamerkan ke keluarga, teman, atau dicantumkan dalam CV/Resume pertama mereka.
            </p>
         </div>
         <div className="w-full md:w-1/3 flex justify-center">
            <Link to="/contact-us">
               <Button variant="yellow" className="py-5 px-8 text-xl font-black uppercase rotate-[-2deg] hover:rotate-0 transition-transform">Konsultasi Sekarang</Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
