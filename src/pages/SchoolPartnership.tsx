import React from 'react';
import { ChevronRight, Building2, TrendingDown, CheckCircle2, Blocks, Users, FileDown } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function SchoolPartnership() {
  const problems = [
    'Kesulitan merekrut dan melatih guru spesialis TIK/Coding.',
    'Kurikulum teknologi cepat usang (outdated) dibandingkan industri.',
    'Kekurangan alat/media belajar interaktif (robot, software premium).',
    'Siswa bosan dengan materi TIK teoritis konvensional.'
  ];

  const services = [
    { title: 'Extracurricular', desc: 'Pendampingan rutin mingguan sebagai opsi ekskul.' },
    { title: 'Intra-Curricular', desc: 'Masuk ke dalam jam pelajaran wajib TIK/Komputer.' },
    { title: 'Workshop Guru', desc: 'Pelatihan singkat 1-3 hari untuk guru internal sekolah.' },
    { title: 'Curriculum Licensing', desc: 'Hak guna silabus kami bagi guru internal Anda.' }
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 bg-brand-pink p-8 md:p-16 nb-border nb-shadow rotate-1">
         <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="bg-black text-white px-4 py-1 nb-border w-max font-bold uppercase tracking-widest text-sm rotate-[-2deg]">
               Layanan B2B Sekolah
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
               Transformasi Digital <span className="bg-white px-2 inline-block rotate-2 nb-border text-brand-blue">Dimulai dari Sini!</span>
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90 text-black">
               Jadilah sekolah terdepan dengan mengintegrasikan kurikulum Coding, Robotics, & AI tanpa perlu pusing merekrut guru teknis baru.
            </p>
            <a href="mailto:partnership@digikidz.id" className="w-max mt-2">
               <Button variant="primary" className="py-4 px-8 text-lg bg-black text-white hover:bg-gray-800">Ajukan Konsultasi Sekolah <ChevronRight className="inline ml-1" /></Button>
            </a>
         </div>
         <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="School Partnership" className="w-full aspect-video object-cover nb-border nb-shadow-lg bg-white rotate-[-1deg]" />
         </div>
      </section>

      {/* Problems & Solutions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="flex flex-col gap-6 bg-gray-100 p-8 md:p-12 nb-border nb-shadow-sm rotate-[-1deg]">
            <h2 className="text-3xl font-display font-black uppercase tracking-tight flex items-center gap-3">
               <TrendingDown className="w-8 h-8 text-brand-orange" /> Tantangan Sekolah Saat Ini
            </h2>
            <ul className="flex flex-col gap-4 font-medium text-lg">
               {problems.map((p, i) => (
                  <li key={i} className="flex gap-4">
                     <div className="w-2 h-2 bg-brand-orange mt-2 shrink-0"></div> {p}
                  </li>
               ))}
            </ul>
         </div>
         <div className="flex flex-col gap-6 bg-brand-green p-8 md:p-12 nb-border nb-shadow-sm rotate-1">
            <h2 className="text-3xl font-display font-black uppercase tracking-tight flex items-center gap-3">
               <CheckCircle2 className="w-8 h-8 text-white fill-black" /> Solusi Plug & Play Kami
            </h2>
            <div className="flex flex-col gap-3 font-bold text-lg">
               <div className="bg-white p-4 nb-border nb-shadow-sm">Modul Siap Pakai & Update Berkala</div>
               <div className="bg-white p-4 nb-border nb-shadow-sm">Mentor Profesional Tersertifikasi</div>
               <div className="bg-white p-4 nb-border nb-shadow-sm">Peminjaman Perangkat (Robot/Kits)</div>
               <div className="bg-white p-4 nb-border nb-shadow-sm">Sistem Pelaporan Evaluasi Siswa Terpadu</div>
            </div>
         </div>
      </section>

      {/* Services */}
      <section className="flex flex-col gap-8">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-center">Pilih Layanan Sesuai Kebutuhan</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {services.map((s, i) => (
               <div key={i} className="bg-white nb-card p-6 flex flex-col gap-3 text-center items-center hover:-translate-y-2 transition-transform">
                  <div className="w-14 h-14 bg-brand-yellow nb-border rounded-full flex items-center justify-center mb-2"><Blocks className="w-7 h-7" /></div>
                  <h3 className="font-display font-black text-xl uppercase tracking-tighter">{s.title}</h3>
                  <p className="font-medium text-sm opacity-80">{s.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Implementation Flow */}
      <section className="flex flex-col gap-8 bg-brand-blue text-white nb-border nb-shadow p-8 md:p-16">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-center mb-6">Proses Kerja Sama Simpel</h2>
         <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-black -translate-y-1/2 z-0"></div>
            {[
               'Konsultasi', 'Proposal', 'Demo Class', 'Pelaksanaan', 'Showcase Akhir'
            ].map((step, i) => (
               <div key={i} className="bg-white text-black nb-border p-4 w-full md:w-auto text-center font-black uppercase text-sm md:text-base relative z-10 hover:bg-brand-yellow hover:scale-110 transition-transform cursor-default">
                  {i+1}. {step}
               </div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="text-center flex flex-col items-center gap-6">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Mari Berdiskusi Lebih Lanjut</h2>
         <p className="text-xl font-medium max-w-2xl opacity-90">Undang kami untuk presentasi di sekolah Anda atau unduh proposal pengenalan kami.</p>
         <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#">
               <Button variant="white" className="py-4 px-8 text-lg font-black uppercase flex items-center gap-2"><FileDown className="w-5 h-5" /> Download Proposal</Button>
            </a>
            <a href="mailto:partnership@digikidz.id">
               <Button variant="yellow" className="py-4 px-8 text-lg font-black uppercase flex items-center gap-2"><Users className="w-5 h-5" /> Jadwalkan Meeting</Button>
            </a>
         </div>
      </section>
    </div>
  );
}
