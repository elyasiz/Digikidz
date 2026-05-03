import React from 'react';
import { Calendar, MapPin, Clock, Users, ChevronRight, Trophy, Share2, Sparkles, Gamepad2, Bot, Palette } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function EventDetail() {
  return (
    <div className="flex flex-col gap-10 md:gap-16 py-8 md:py-16 max-w-5xl mx-auto px-4 md:px-12">
      
      {/* Back Button */}
      <Link to="/events" className="w-max bg-white nb-border nb-shadow-sm px-4 py-2 font-bold uppercase text-sm hover:-translate-y-1 hover:bg-brand-yellow transition-all">
        &larr; Kembali ke Daftar Event
      </Link>

      {/* Hero Event Detail */}
      <section className="flex flex-col gap-6 bg-brand-pink nb-border nb-shadow p-8 md:p-12 rotate-[-1deg]">
         <div className="flex flex-wrap gap-2">
            <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest nb-border">Lomba Skala Nasional</span>
            <span className="bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-widest nb-border">Usia 4 - 16 Tahun</span>
         </div>
         <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight uppercase mt-2">
            Road to Future <span className="bg-white text-black px-2 inline-block rotate-1 mt-2 nb-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Creator Fest 2026</span>
         </h1>
         <p className="text-lg md:text-xl font-medium opacity-90 mt-2 bg-white/50 p-4 nb-border inline-block max-w-3xl">
            Bergabunglah dalam festival teknologi dan kompetisi Coding, Robotics, & Digital Drawing terbesar! Jadilah pencipta kota masa depan bersama Maker Education Group.
         </p>
         <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2 bg-white nb-border px-4 py-2 font-bold"><Calendar className="w-5 h-5 text-brand-blue" /> Segera Hadir 2026</div>
            <div className="flex items-center gap-2 bg-white nb-border px-4 py-2 font-bold"><MapPin className="w-5 h-5 text-brand-green" /> Jakarta</div>
            <div className="flex items-center gap-2 bg-white nb-border px-4 py-2 font-bold"><Trophy className="w-5 h-5 text-brand-orange" /> Pendaftaran Dibuka Segera</div>
         </div>
      </section>

      {/* Image Banner */}
      <section className="w-full aspect-video md:aspect-[21/9] bg-gray-200 nb-border border-4 border-black overflow-hidden relative group rotate-1">
         <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
         <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" alt="Future Creator Fest" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
         <div className="absolute top-4 right-4 bg-brand-yellow p-3 nb-border nb-shadow z-20 font-black uppercase text-sm rotate-6 text-center">Mega<br/>Event!</div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         
         {/* Main Content Info */}
         <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex flex-col gap-4 bg-white nb-border p-6 md:p-8">
               <h2 className="text-3xl font-display font-black uppercase tracking-tight flex items-center gap-2">
                  <Sparkles className="w-8 h-8 text-brand-orange" /> Tentang Kompetisi Ini
               </h2>
               <p className="font-medium text-lg opacity-80 leading-relaxed">
                  <strong>Future Creator Fest 2026</strong> adalah perayaan inovasi generasi muda yang diselenggarakan oleh Maker Education Group (DigiKidz, Robotkidz, Kinara Art, dkk). Mengusung tema besar <strong>"Kota Masa Depan (Future City), AI, dan Teknologi"</strong>, kami menantang anak-anak usia 4 hingga 16 tahun untuk menciptakan solusi digital secara langsung.
                  <br/><br/>
                  Peraturan ketat: Semua peserta coding wajib membuat proyek dari nol (Blank Project) di lokasi selama 60 menit dan mempresentasikannya di depan juri!
               </p>
            </div>

            <div className="flex flex-col gap-6 bg-brand-blue text-white nb-border p-6 md:p-8 rotate-[-1deg]">
               <h2 className="text-3xl font-display font-black uppercase tracking-tight flex items-center gap-2">
                  <Gamepad2 className="w-8 h-8 text-brand-yellow" /> Kategori Coding
               </h2>
               <div className="flex flex-col gap-4 text-black">
                  <div className="bg-white nb-border p-4">
                     <h3 className="font-black text-xl uppercase mb-1">Usia 7-9 Tahun (Scratch 3)</h3>
                     <p className="font-bold text-brand-pink mb-2">Tema: Future City: My Smart City</p>
                     <p className="font-medium text-sm">Membuat animasi interaktif kota masa depan dengan objek bergerak.</p>
                  </div>
                  <div className="bg-white nb-border p-4">
                     <h3 className="font-black text-xl uppercase mb-1">Usia 10-12 Tahun (Roblox Studio)</h3>
                     <p className="font-bold text-brand-blue mb-2">Tema: Cyber Tower: Escape the AI Core</p>
                     <p className="font-medium text-sm">Membangun game rintangan (Obby) menggunakan scripting Lava dan Checkpoint.</p>
                  </div>
                  <div className="bg-white nb-border p-4">
                     <h3 className="font-black text-xl uppercase mb-1">Usia 13-16 Tahun (Construct 3)</h3>
                     <p className="font-bold text-brand-green mb-2">Tema: AI Pong: Human vs Machine</p>
                     <p className="font-medium text-sm">Membuat game Pong interaktif melawan sistem AI dengan desain UI/UX kreatif.</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-6 bg-brand-orange text-white nb-border p-6 md:p-8 rotate-1">
               <h2 className="text-3xl font-display font-black uppercase tracking-tight flex items-center gap-2">
                  <Bot className="w-8 h-8 text-black" /> Kategori Robotic
               </h2>
               <div className="flex flex-col gap-4 text-black">
                  <div className="bg-white nb-border p-3 flex gap-4 items-center">
                     <span className="font-black text-xl shrink-0">4-6 Thn</span>
                     <div><strong className="uppercase">Little Engineer (Duplo):</strong> Smart City Adventure</div>
                  </div>
                  <div className="bg-white nb-border p-3 flex gap-4 items-center">
                     <span className="font-black text-xl shrink-0">7-9 Thn</span>
                     <div><strong className="uppercase">Junior (WeDo):</strong> Smart Garbage Collector</div>
                  </div>
                  <div className="bg-white nb-border p-3 flex gap-4 items-center">
                     <span className="font-black text-xl shrink-0">10-12 Thn</span>
                     <div><strong className="uppercase">Teenager 1 (EV3):</strong> Autonomous Vehicle</div>
                  </div>
                  <div className="bg-white nb-border p-3 flex gap-4 items-center">
                     <span className="font-black text-xl shrink-0">13-16 Thn</span>
                     <div><strong className="uppercase">Teenager 2 (Arduino):</strong> AI Integrated Robot</div>
                  </div>
               </div>
            </div>

         </div>

         {/* Sticky Sidebar Registration */}
         <div className="flex flex-col gap-6">
            <div className="bg-brand-green p-6 nb-border nb-shadow flex flex-col gap-4 sticky top-28 rotate-[-1deg]">
               <h3 className="text-2xl font-display font-black uppercase">Informasi Pendaftaran</h3>
               <p className="font-medium text-sm bg-white p-3 nb-border">
                  Kami juga membuka kompetisi tambahan: <strong>Digital Drawing</strong> (Kategori 7-9, 10-12, dan 13-16 Tahun).
               </p>
               <div className="flex flex-col gap-2 mt-2 bg-white/20 p-3 nb-border">
                  <h4 className="font-bold uppercase text-xs">Kriteria Penilaian:</h4>
                  <ul className="text-sm font-medium flex flex-col gap-1">
                     <li>- Logic & Coding (40%)</li>
                     <li>- Creativity & Interactivity (25%)</li>
                     <li>- Kesesuaian Tema (15%)</li>
                     <li>- Presentasi (20%)</li>
                  </ul>
               </div>
               <Link to="/contact-us">
                  <Button variant="primary" className="w-full py-4 text-lg font-black uppercase mt-4 bg-black text-white hover:bg-gray-800">Pre-Register Sekarang</Button>
               </Link>
               <Button variant="white" className="w-full flex items-center justify-center gap-2 font-bold uppercase text-sm mt-1">
                  <Share2 className="w-4 h-4" /> Bagikan Lomba Ini
               </Button>
            </div>
         </div>

      </div>
    </div>
  );
}
