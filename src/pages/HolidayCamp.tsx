import React from 'react';
import { ChevronRight, Calendar, Sun, Clock, Trophy, Puzzle, Rocket, Paintbrush, MonitorPlay } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function HolidayCamp() {
  const themes = [
    { title: 'Roblox Creator Camp', age: '9-14 Thn', icon: MonitorPlay, color: 'bg-brand-blue' },
    { title: 'Robotics Adventure', age: '7-12 Thn', icon: Puzzle, color: 'bg-brand-orange' },
    { title: 'AI Future City', age: '10-15 Thn', icon: Rocket, color: 'bg-brand-green' },
    { title: 'Digital Art Safari', age: '6-9 Thn', icon: Paintbrush, color: 'bg-brand-pink' },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 bg-brand-yellow p-8 md:p-16 nb-border nb-shadow rotate-[-1deg]">
         <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="bg-white text-black px-4 py-1 nb-border w-max font-bold uppercase tracking-widest text-sm flex items-center gap-2">
               <Sun className="w-4 h-4 text-brand-orange fill-brand-orange" /> Liburan Produktif
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
               Ubah Waktu Layar Menjadi <span className="bg-black px-2 inline-block rotate-2 nb-border text-white">Karya Nyata!</span>
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90 text-black">
               Singkirkan rasa bosan saat libur sekolah. Tech Holiday Camp kami mengajak anak bermain, berkreasi, dan membangun project nyata hanya dalam hitungan hari.
            </p>
            <Link to="/contact-us" className="w-max mt-2">
               <Button variant="primary" className="py-4 px-8 text-lg bg-black text-white hover:bg-gray-800">Daftar Holiday Camp <ChevronRight className="inline ml-1" /></Button>
            </Link>
         </div>
         <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop" alt="Holiday Camp" className="w-full aspect-video object-cover nb-border nb-shadow-lg bg-white rotate-2" />
         </div>
      </section>

      {/* Why Join */}
      <section className="flex flex-col gap-8 text-center max-w-4xl mx-auto">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Kenapa Harus Ikut Camp?</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-white nb-border p-6 flex flex-col items-center gap-3 hover:-translate-y-2 transition-transform">
               <div className="w-12 h-12 bg-brand-pink nb-border rounded-full flex items-center justify-center"><Calendar className="w-6 h-6 text-black" /></div>
               <h3 className="font-bold uppercase text-lg">Anti Bosan</h3>
               <p className="font-medium text-sm opacity-80">Menghabiskan energi liburan untuk berkreasi, bukan cuma main game seharian.</p>
            </div>
            <div className="bg-white nb-border p-6 flex flex-col items-center gap-3 hover:-translate-y-2 transition-transform">
               <div className="w-12 h-12 bg-brand-blue nb-border rounded-full flex items-center justify-center"><Puzzle className="w-6 h-6 text-white" /></div>
               <h3 className="font-bold uppercase text-lg">Eksplorasi Minat</h3>
               <p className="font-medium text-sm opacity-80">Kesempatan bagus untuk tes minat anak pada bidang teknologi sebelum ikut kelas reguler.</p>
            </div>
            <div className="bg-white nb-border p-6 flex flex-col items-center gap-3 hover:-translate-y-2 transition-transform">
               <div className="w-12 h-12 bg-brand-green nb-border rounded-full flex items-center justify-center"><Trophy className="w-6 h-6 text-black" /></div>
               <h3 className="font-bold uppercase text-lg">Project Cepat</h3>
               <p className="font-medium text-sm opacity-80">Materi padat, seru, dan murni fun-based. Bawa pulang karya di hari terakhir!</p>
            </div>
         </div>
      </section>

      {/* Themes */}
      <section className="flex flex-col gap-8 bg-gray-100 p-8 md:p-16 nb-border rotate-1">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-center">Pilihan Tema Camp</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {themes.map((t, i) => (
               <div key={i} className={cn("nb-card p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform", t.color)}>
                  <span className="font-bold text-xs uppercase tracking-widest bg-white text-black px-2 py-1 nb-border">{t.age}</span>
                  <t.icon className="w-12 h-12 text-white" />
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tighter leading-tight">{t.title}</h3>
               </div>
            ))}
         </div>
      </section>

      {/* Schedule Sample */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight flex items-center gap-3">
               <Clock className="w-10 h-10 text-brand-blue" /> Contoh Jadwal
            </h2>
            <p className="text-xl font-medium opacity-90">Camp biasanya berdurasi 3 hingga 5 hari beruntun dengan durasi 2-3 jam per hari.</p>
         </div>
         <div className="flex flex-col gap-4">
            <div className="bg-white p-4 nb-border nb-shadow-sm flex gap-4 rotate-1">
               <div className="font-black text-2xl text-brand-pink shrink-0">Hari 1:</div>
               <div className="font-medium text-lg">Ideation & Basic Concept (Pengenalan Alat & Ide).</div>
            </div>
            <div className="bg-white p-4 nb-border nb-shadow-sm flex gap-4 rotate-[-1deg]">
               <div className="font-black text-2xl text-brand-yellow shrink-0">Hari 2:</div>
               <div className="font-medium text-lg">Hands-on Building (Fokus merakit/coding karya utama).</div>
            </div>
            <div className="bg-white p-4 nb-border nb-shadow-sm flex gap-4 rotate-1">
               <div className="font-black text-2xl text-brand-green shrink-0">Hari 3:</div>
               <div className="font-medium text-lg">Finalizing & Showcase (Finishing dan presentasi karya).</div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white nb-border nb-shadow p-10 md:p-16 text-center flex flex-col items-center gap-6">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Amankan Kursi Anak Anda!</h2>
         <p className="text-xl font-medium max-w-2xl opacity-90">Kuota Holiday Camp kami sangat terbatas karena kami menjaga rasio mentor dan siswa agar tetap ideal.</p>
         <Link to="/contact-us" className="mt-4">
            <Button variant="pink" className="py-5 px-10 text-xl font-black uppercase hover:-translate-y-2">Cek Jadwal Camp Terdekat</Button>
         </Link>
      </section>
    </div>
  );
}
