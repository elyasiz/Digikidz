import React from 'react';
import { ChevronRight, Trophy, Medal, Users, Ticket, MapPin, Search, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function Events() {
  const events = [
    { title: 'Road to Future Creator Fest 2026', desc: 'Kompetisi Coding, Robotics & Digital Drawing skala nasional.', type: 'Mega Event', level: 'Usia 4-16 Thn' },
    { title: 'Turnamen Hackathon Remaja', desc: 'Kompetisi pembuatan aplikasi untuk memecahkan masalah lingkungan.', type: 'Lomba', level: 'SMP/SMA' },
    { title: 'Tantangan Desain Roblox', desc: 'Ajang pamer kreativitas membangun dunia 3D interaktif.', type: 'Lomba', level: 'SD/SMP' },
    { title: 'Misi Rintangan Robotika', desc: 'Adu cepat dan tepat robot melewati halang rintang.', type: 'Lomba', level: 'Semua Umur' },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 bg-brand-green text-black p-8 md:p-16 nb-border nb-shadow rotate-1">
         <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
               Panggung Inovasi untuk <span className="text-white underline decoration-black decoration-4 underline-offset-4">Unjuk Prestasi!</span>
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90">
               Jadilah bagian dari kompetisi dan event perayaan teknologi terbesar untuk siswa dan komunitas sekolah di kota Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
               <a href="#events">
                  <Button variant="primary" className="py-4 px-8 text-lg font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">Lihat Event <ChevronRight className="inline ml-1" /></Button>
               </a>
            </div>
         </div>
         <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" alt="Events" className="w-full aspect-video object-cover nb-border nb-shadow-lg rotate-[-2deg]" />
         </div>
      </section>

      {/* Events List */}
      <section id="events" className="flex flex-col gap-8 scroll-mt-24">
         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Daftar Event & Kompetisi</h2>
            <div className="bg-white nb-border p-2 flex items-center gap-2 w-full md:w-max">
               <Search className="w-5 h-5 text-gray-500" />
               <input type="text" placeholder="Cari event..." className="outline-none font-medium w-full md:w-48" />
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {events.map((e, i) => (
               <div key={i} className="bg-white nb-border flex flex-col sm:flex-row hover:bg-brand-yellow/20 transition-colors group">
                  <div className="w-full sm:w-1/3 bg-gray-200 border-b-4 sm:border-b-0 sm:border-r-4 border-black flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                     {e.type === 'Lomba' ? <Trophy className="w-16 h-16 text-brand-orange group-hover:scale-110 transition-transform" /> : <Medal className="w-16 h-16 text-brand-blue group-hover:scale-110 transition-transform" />}
                  </div>
                  <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center gap-3">
                     <div className="flex gap-2">
                        <span className="font-bold text-xs uppercase bg-black text-white px-2 py-1">{e.type}</span>
                        <span className="font-bold text-xs uppercase bg-gray-200 text-black px-2 py-1">{e.level}</span>
                     </div>
                     <h3 className="font-display font-black text-2xl uppercase tracking-tighter leading-tight">{e.title}</h3>
                     <p className="font-medium text-sm opacity-80">{e.desc}</p>
                     <Link to={i === 0 ? "/events/detail" : "#"} className="w-max mt-2">
                        <Button variant="white" className="text-xs py-2 px-4 border-2">Detail Event</Button>
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Facilities & Suitability */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-brand-blue text-white nb-border nb-shadow p-8 md:p-12 rotate-[-1deg]">
         <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-display font-black uppercase tracking-tight flex items-center gap-3">
               <Medal className="w-8 h-8 text-brand-yellow" /> Fasilitas Pemenang
            </h2>
            <ul className="flex flex-col gap-4 font-medium text-lg">
               <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0" /> Medali & Piala Resmi</li>
               <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0" /> Sertifikat Penghargaan (Berguna untuk beasiswa)</li>
               <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0" /> Dokumentasi Profesional (Foto & Video)</li>
            </ul>
         </div>
         <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-display font-black uppercase tracking-tight flex items-center gap-3">
               <MapPin className="w-8 h-8 text-brand-yellow" /> Kami Siap Hadir Di:
            </h2>
            <div className="grid grid-cols-2 gap-4 text-black">
               <div className="bg-white p-4 nb-border font-bold text-center rotate-1">Mall Event</div>
               <div className="bg-white p-4 nb-border font-bold text-center rotate-[-1deg]">Festival Sekolah</div>
               <div className="bg-white p-4 nb-border font-bold text-center rotate-[-2deg]">Pameran Edukasi</div>
               <div className="bg-white p-4 nb-border font-bold text-center rotate-2">Tech Birthday Party</div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="text-center flex flex-col items-center gap-6 mt-4">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Ingin Mengadakan Event Bersama Kami?</h2>
         <p className="text-xl font-medium max-w-2xl opacity-90">Kami dapat menjadi vendor penyelenggara lomba teknologi atau menyediakan booth interaktif di acara Anda.</p>
         <Link to="/contact-us">
            <Button variant="yellow" className="py-5 px-10 text-xl font-black uppercase flex items-center gap-2"><Users className="w-6 h-6" /> Diskusikan Event Anda</Button>
         </Link>
      </section>
    </div>
  );
}
