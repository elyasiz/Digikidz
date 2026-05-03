import React, { useState } from 'react';
import { ChevronRight, Play, Star, Sparkles, Filter } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function StudentProjects() {
  const [filter, setFilter] = useState('Semua');
  const categories = ['Semua', 'Coding', 'Web App', 'Roblox & Game', 'Robotics', 'AI', 'Design'];

  const projects = [
    { title: 'Save The Ocean Game', student: 'Andi', age: 9, category: 'Coding', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Eco-Smart Trash Bin', student: 'Budi', age: 12, category: 'Robotics', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Obby Run 3D', student: 'Caca', age: 10, category: 'Roblox & Game', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Mental Health Tracker App', student: 'Dina', age: 15, category: 'Web App', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
    { title: 'AI Animal Detector', student: 'Eko', age: 14, category: 'AI', img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Future City 3D Model', student: 'Fani', age: 11, category: 'Design', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop' },
  ];

  const filteredProjects = filter === 'Semua' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="text-center flex flex-col items-center gap-6 max-w-4xl mx-auto">
         <Sparkles className="w-16 h-16 text-brand-yellow fill-brand-yellow animate-pulse" />
         <h1 className="text-4xl md:text-7xl font-display font-black leading-[1.1] tracking-tight uppercase">
            Selamat Datang di Galeri <span className="bg-brand-pink text-white px-4 inline-block -rotate-2 nb-border mt-2">Inovator Muda!</span>
         </h1>
         <p className="text-lg md:text-2xl font-medium text-gray-700 mt-2">
            Kami bangga memamerkan dedikasi, kreativitas, dan imajinasi liar para siswa yang telah diwujudkan melalui barisan kode dan rancangan teknologi.
         </p>
      </section>

      {/* Featured Projects */}
      <section className="flex flex-col gap-8 bg-brand-blue p-8 md:p-12 nb-border nb-shadow rotate-1">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white flex items-center gap-3">
            <Star className="w-8 h-8 text-brand-yellow fill-brand-yellow" /> Karya Unggulan Bulan Ini
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p, i) => (
               <div key={i} className="bg-white nb-border p-4 flex flex-col gap-4 group">
                  <div className="relative aspect-video bg-gray-200 border-4 border-black overflow-hidden cursor-pointer">
                     <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-16 h-16 text-white fill-white" />
                     </div>
                  </div>
                  <div>
                     <span className="bg-brand-yellow px-2 py-1 text-xs font-bold uppercase border-2 border-black mb-2 inline-block">{p.category}</span>
                     <h3 className="font-display font-black text-xl uppercase tracking-tighter leading-tight">{p.title}</h3>
                     <p className="font-medium text-sm text-gray-600 mt-1">Oleh: {p.student} (Usia {p.age})</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Gallery Filter */}
      <section className="flex flex-col gap-8 pt-8">
         <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b-4 border-black pb-6">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Eksplorasi Galeri</h2>
            <div className="flex flex-wrap gap-2 justify-center">
               <Filter className="w-6 h-6 mr-2 hidden md:block" />
               {categories.map((cat) => (
                  <button 
                     key={cat}
                     onClick={() => setFilter(cat)}
                     className={cn(
                        "px-4 py-2 font-bold uppercase text-sm border-2 transition-all",
                        filter === cat ? "bg-black text-white border-black" : "bg-white text-black border-black hover:bg-gray-200"
                     )}
                  >
                     {cat}
                  </button>
               ))}
            </div>
         </div>

         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((p, i) => (
               <div key={i} className="bg-white nb-border p-3 break-inside-avoid hover:-translate-y-2 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
                  <div className="relative bg-gray-200 border-2 border-black overflow-hidden mb-3">
                     <img src={p.img} alt={p.title} className="w-full object-cover" />
                  </div>
                  <div className="flex justify-between items-start mb-1">
                     <h3 className="font-display font-black text-lg uppercase tracking-tight leading-tight">{p.title}</h3>
                     <span className="bg-gray-100 px-2 py-1 text-[10px] font-bold border border-black shrink-0">{p.category}</span>
                  </div>
                  <p className="font-medium text-xs text-gray-500">Kreator: {p.student} ({p.age} Thn)</p>
               </div>
            ))}
         </div>
         {filteredProjects.length === 0 && (
            <div className="text-center font-bold text-xl py-10">Belum ada proyek di kategori ini.</div>
         )}
      </section>

      {/* Behind the scenes & Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="bg-brand-orange text-black nb-border nb-shadow p-8 flex flex-col gap-6 rotate-[-1deg]">
            <h3 className="text-3xl font-display font-black uppercase">Di Balik Layar</h3>
            <p className="font-medium text-lg bg-white p-4 nb-border">Proses pembuatan satu karya membutuhkan perjalanan panjang:</p>
            <ul className="flex flex-col gap-3 font-bold">
               <li className="flex gap-3 items-center"><div className="w-6 h-6 bg-white border-2 border-black rounded-full flex items-center justify-center text-sm">1</div> Brainstorming Ide</li>
               <li className="flex gap-3 items-center"><div className="w-6 h-6 bg-white border-2 border-black rounded-full flex items-center justify-center text-sm">2</div> Perancangan Logika</li>
               <li className="flex gap-3 items-center"><div className="w-6 h-6 bg-white border-2 border-black rounded-full flex items-center justify-center text-sm">3</div> Pemrograman (Coding)</li>
               <li className="flex gap-3 items-center"><div className="w-6 h-6 bg-white border-2 border-black rounded-full flex items-center justify-center text-sm">4</div> Pengujian (Debugging)</li>
            </ul>
         </div>
         <div className="bg-gray-100 nb-border nb-shadow p-8 flex flex-col justify-center gap-6 rotate-1">
            <h3 className="text-3xl font-display font-black uppercase">Berani Tampil!</h3>
            <p className="font-medium text-lg opacity-90 leading-relaxed">
               Setiap karya diuji secara mental saat siswa mempresentasikannya di akhir sesi (Pitching Session). Kami membekali mereka rasa percaya diri untuk mempertanggungjawabkan kode yang mereka buat di depan instruktur dan teman sebaya.
            </p>
         </div>
      </section>

      {/* CTA */}
      <section className="text-center flex flex-col items-center gap-6 mt-10">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Ingin Anak Anda Memiliki Karya Seperti Mereka?</h2>
         <Link to="/contact-us">
            <Button variant="primary" className="py-5 px-12 text-xl font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">Mulai Buat Proyek Pertamanya</Button>
         </Link>
      </section>
    </div>
  );
}
