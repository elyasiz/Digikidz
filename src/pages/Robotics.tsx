import React from 'react';
import { ChevronRight, Wrench, Zap, Cpu, Route, ShieldAlert, Crosshair } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function Robotics() {
  const projects = [
    { name: 'Mobil Berjalan', desc: 'Merakit sasis dasar dan roda penggerak.' },
    { name: 'Robot Hewan', desc: 'Mensimulasikan gerakan sendi organik.' },
    { name: 'Lengan Crane', desc: 'Otomatisasi pengangkat beban berat.' },
    { name: 'Smart Gate', desc: 'Sistem palang pintu dengan sensor jarak.' },
    { name: 'Line Follower', desc: 'Robot pendeteksi jalur garis hitam otomatis.' },
    { name: 'Obstacle Avoider', desc: 'Navigasi pintar menghindari tabrakan.' },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 bg-brand-orange text-white p-8 md:p-16 nb-border nb-shadow rotate-[-1deg]">
         <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
               Sentuh, Rakit, dan Program <span className="bg-black text-white px-3 inline-block rotate-2 mt-2 nb-border">Mesin Masa Depan!</span>
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90 text-black bg-white/80 p-4 nb-border inline-block">
               Menggabungkan logika coding dengan kemampuan mekanik untuk membangun robot pintar dari nol.
            </p>
            <Link to="/contact-us" className="w-max mt-2">
               <Button variant="white" className="py-4 px-8 text-lg font-black uppercase text-black">Tantang Dirimu di Sini <ChevronRight className="inline ml-1" /></Button>
            </Link>
         </div>
         <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop" alt="Robotics" className="w-full aspect-video object-cover nb-border nb-shadow-lg bg-black rotate-1" />
         </div>
      </section>

      {/* Why & What */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight flex items-center gap-3">
               <Wrench className="w-10 h-10 text-brand-orange" /> Mengapa Robotika?
            </h2>
            <ul className="flex flex-col gap-4 text-lg font-medium">
               <li className="flex items-start gap-4"><Zap className="w-6 h-6 text-brand-yellow shrink-0 mt-1" /> Melatih motorik kasar dan kecekatan tangan.</li>
               <li className="flex items-start gap-4"><Zap className="w-6 h-6 text-brand-yellow shrink-0 mt-1" /> Memahami batas antara sensor fisik (hardware) dan kode digital (software).</li>
               <li className="flex items-start gap-4"><Zap className="w-6 h-6 text-brand-yellow shrink-0 mt-1" /> Implementasi nyata teori Fisika & Matematika dasar yang sering membosankan di sekolah.</li>
            </ul>
         </div>
         <div className="bg-gray-100 nb-border p-8 flex flex-col gap-6 rotate-1">
            <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">Apa yang Dipelajari?</h2>
            <div className="flex flex-col gap-3 font-bold text-lg">
               <div className="bg-white p-4 nb-border nb-shadow-sm flex items-center gap-3"><Cpu className="w-6 h-6" /> Konstruksi Mekanis (Engineering)</div>
               <div className="bg-white p-4 nb-border nb-shadow-sm flex items-center gap-3"><Route className="w-6 h-6" /> Logika Sensor Cerdas</div>
               <div className="bg-white p-4 nb-border nb-shadow-sm flex items-center gap-3"><ShieldAlert className="w-6 h-6" /> Penyelesaian Masalah Sistem (Troubleshooting)</div>
            </div>
         </div>
      </section>

      {/* Projects */}
      <section className="flex flex-col gap-8">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-center">Proyek Robot Apa Saja?</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {projects.map((p, i) => (
               <div key={i} className="nb-card p-6 flex flex-col gap-2 bg-white hover:-translate-y-2 transition-transform">
                  <span className="text-4xl font-black text-brand-orange/30 absolute right-4 top-4">0{i+1}</span>
                  <h3 className="text-xl font-display font-black uppercase tracking-tight relative z-10">{p.name}</h3>
                  <p className="font-medium text-gray-600 relative z-10">{p.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Mission Challenge */}
      <section className="bg-brand-blue text-white nb-border nb-shadow p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
         <div className="w-full md:w-1/3 flex justify-center">
            <Crosshair className="w-32 h-32 text-brand-yellow animate-pulse" />
         </div>
         <div className="w-full md:w-2/3 flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Mission-Based Learning!</h2>
            <p className="text-xl font-medium opacity-90 leading-relaxed">
               Di kelas ini, kami tidak sekadar membagikan buku panduan merakit. Siswa akan diberi "Misi Khusus" di setiap akhir modul—misalnya <em>"Misi Evakuasi Objek dalam 3 Menit"</em>. Mereka harus menggunakan logika dan kerja sama tim untuk memprogram robot agar berhasil menyelesaikan rintangan!
            </p>
         </div>
      </section>
    </div>
  );
}
