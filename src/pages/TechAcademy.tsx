import React from 'react';
import { ChevronRight, Target, Database, Blocks, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function TechAcademy() {
  const tracks = [
    { title: 'AI Tools for Productivity', icon: Target, color: 'bg-brand-pink' },
    { title: 'Web App Builder (React)', icon: Blocks, color: 'bg-brand-blue' },
    { title: 'Prompt Engineering Mastery', icon: Database, color: 'bg-brand-yellow' },
    { title: 'Data Literacy Basic', icon: Briefcase, color: 'bg-brand-green' },
  ];

  const tools = ['VS Code', 'Git & GitHub', 'Next.js', 'Google AI Studio', 'ChatGPT API'];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10">
         <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1 nb-border nb-shadow-sm w-max font-bold uppercase tracking-widest text-sm">
               <GraduationCap className="w-4 h-4" /> Bootcamp Lanjutan (16+ Tahun)
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight uppercase">
               Asah <span className="bg-brand-green px-3 inline-block rotate-[-2deg] nb-border nb-shadow-sm text-black mt-2">Skill Profesional</span> Sebelum Kuliah.
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90 text-gray-700">
               Akademi akselerasi teknologi untuk remaja 16+ dan pra-kuliah. Fokus penguasaan AI Tools, pengembangan Web App, dan literasi data industri.
            </p>
            <Link to="/contact-us" className="w-max mt-4">
               <Button variant="primary" className="py-4 px-8 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">Gabung Tech Academy <ChevronRight className="inline ml-1" /></Button>
            </Link>
         </div>
         <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-brand-yellow nb-border nb-shadow p-3 rotate-1">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Tech Academy" className="w-full h-full object-cover border-2 border-black grayscale-[20%]" />
               <div className="absolute -bottom-6 -left-6 bg-white p-4 nb-border nb-shadow rotate-[-4deg] font-display font-black text-xl uppercase">Pra-Kuliah Prep</div>
            </div>
         </div>
      </section>

      {/* Purpose */}
      <section className="bg-black text-white nb-border nb-shadow p-8 md:p-16 rotate-[-1deg] text-center flex flex-col items-center gap-6">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Menjembatani Hobi & Karir</h2>
         <p className="text-lg md:text-2xl font-medium max-w-4xl opacity-90 leading-relaxed">
            Program ini disiapkan untuk menjembatani celah antara hobi dan persiapan karir. Peserta tidak lagi diperlakukan sebagai "anak-anak", melainkan dilatih layaknya praktisi industri sungguhan dengan target proyek yang bisa dipasarkan (MVP).
         </p>
      </section>

      {/* Tracks */}
      <section className="flex flex-col gap-10">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-center">Spesialisasi Program</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((t, i) => (
               <div key={i} className={cn("nb-card p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform", t.color)}>
                  <div className="bg-white p-3 rounded-full nb-border nb-shadow-sm"><t.icon className="w-8 h-8 text-black" /></div>
                  <h3 className="font-display font-black text-xl uppercase tracking-tighter leading-tight">{t.title}</h3>
               </div>
            ))}
         </div>
      </section>

      {/* Skills & Tools */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Skill Industri Sebenarnya</h2>
            <ul className="flex flex-col gap-3 font-medium text-lg">
               <li className="flex gap-4"><div className="w-3 h-3 bg-brand-pink border-2 border-black mt-2 shrink-0"></div> Pembuatan aplikasi berbasis komponen yang skalabel.</li>
               <li className="flex gap-4"><div className="w-3 h-3 bg-brand-yellow border-2 border-black mt-2 shrink-0"></div> Analisa prompt AI untuk mempercepat alur kerja coding.</li>
               <li className="flex gap-4"><div className="w-3 h-3 bg-brand-blue border-2 border-black mt-2 shrink-0"></div> Desain sistem basis data awal.</li>
               <li className="flex gap-4"><div className="w-3 h-3 bg-brand-green border-2 border-black mt-2 shrink-0"></div> Kolaborasi code menggunakan GitHub dasar.</li>
            </ul>
         </div>
         <div className="bg-gray-100 nb-border p-8 md:p-12 rotate-1 flex flex-col gap-6">
            <h2 className="text-3xl font-display font-black uppercase tracking-tight">Tools Standar Industri</h2>
            <div className="flex flex-wrap gap-3">
               {tools.map((tool, i) => (
                  <span key={i} className="bg-white border-2 border-black px-4 py-2 font-bold uppercase text-sm">{tool}</span>
               ))}
            </div>
         </div>
      </section>

      {/* Portfolio Outcome */}
      <section className="bg-brand-pink text-black p-10 md:p-16 nb-border nb-shadow flex flex-col items-center text-center gap-6">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Bangun Portofolio, Bukan Sekadar Sertifikat</h2>
         <p className="text-xl font-medium max-w-3xl opacity-90">
            Output akhir program ini adalah Minimum Viable Product (MVP). Siswa akan memiliki portofolio publik (via GitHub/Vercel) yang sangat berguna untuk persiapan mencari beasiswa atau pendaftaran universitas terkemuka.
         </p>
         <Link to="/contact-us" className="mt-6">
            <Button variant="white" className="py-4 px-10 text-xl font-black uppercase tracking-widest">Daftar Sekarang</Button>
         </Link>
      </section>
    </div>
  );
}
