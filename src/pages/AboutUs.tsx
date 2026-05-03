import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Rocket, Users, ChevronRight, Heart, Brain, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function AboutUs() {
  const missions = [
    { title: 'Memahami Teknologi', desc: 'Membantu anak memahami fondasi cara kerja teknologi secara intuitif, bukan sekadar menghafal.', icon: Brain, color: 'bg-brand-blue' },
    { title: 'Kreativitas Tanpa Batas', desc: 'Mengasah kreativitas visual dan imajinasi liar mereka melalui karya digital.', icon: Lightbulb, color: 'bg-brand-yellow' },
    { title: 'Logika & Problem Solving', desc: 'Melatih logika terstruktur komputasional dan kegigihan memecahkan masalah.', icon: Target, color: 'bg-brand-orange' },
    { title: 'Kemandirian Berkarya', desc: 'Mendorong kemandirian dalam membuat karya dari nol hingga publikasi.', icon: Rocket, color: 'bg-brand-pink' },
  ];

  const values = [
    { title: 'Technology as a Creative Tool', desc: 'Gadget adalah kanvas, bukan pengasuh.', color: 'bg-brand-pink/30', border: 'border-brand-pink' },
    { title: 'Learning by Creating', desc: 'Pemahaman terbaik lahir dari tangan yang merakit dan mengetik sendiri.', color: 'bg-brand-yellow/30', border: 'border-brand-yellow' },
    { title: 'Every Child Can Learn', desc: 'Teknologi untuk semua anak yang penuh rasa ingin tahu, bukan cuma yang "pintar matematika".', color: 'bg-brand-blue/30', border: 'border-brand-blue' },
    { title: 'Creativity & Logic', desc: 'Seni (Art) dan Sains (Tech) harus berjalan beriringan (STEAM).', color: 'bg-brand-green/30', border: 'border-brand-green' },
  ];

  const approaches = [
    { step: '01', title: 'Kurikulum Bertahap', desc: 'Materi disusun ibarat bermain game, naik level demi level.' },
    { step: '02', title: 'Aktivitas Sesuai Usia', desc: 'Tidak memaksakan text-coding pada anak usia dini.' },
    { step: '03', title: 'Project-Based', desc: '1 Sesi = 1 Karya. Anak selalu membawa pulang hasil.' },
    { step: '04', title: 'Showcase', desc: 'Membiasakan budaya presentasi untuk melatih public speaking.' },
  ];

  return (
    <div className="flex flex-col gap-20 md:gap-32 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      
      {/* 1. Hero About */}
      <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1 nb-border nb-shadow w-max font-bold uppercase rotate-[-2deg]">
            Tentang Kami
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] tracking-tight uppercase">
            Membangun <span className="text-brand-pink" style={{ textShadow: '3px 3px 0px #000' }}>Generasi Pencipta</span>, Bukan Sekadar Pengguna.
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-700">
            Kami hadir untuk memastikan anak Anda tidak hanya menikmati teknologi, tetapi juga memahami dan menciptakannya untuk masa depan yang lebih baik.
          </p>
          <Link to="/contact-us" className="w-max mt-4">
             <Button variant="primary" className="py-4 px-8 text-lg">Bergabung Bersama Kami</Button>
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full md:w-1/2 relative aspect-square bg-brand-yellow nb-border nb-shadow-lg p-2 rotate-2"
        >
           <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Anak belajar" className="w-full h-full object-cover grayscale-0" />
           <div className="absolute -bottom-6 -left-6 bg-white p-4 nb-border nb-shadow flex items-center gap-4 rotate-[-6deg]">
              <div className="bg-brand-blue p-2 rounded-full"><Users className="w-8 h-8 text-white" /></div>
              <div className="flex flex-col">
                 <span className="font-black text-2xl">1000+</span>
                 <span className="font-bold text-xs uppercase tracking-widest">Siswa Bergabung</span>
              </div>
           </div>
        </motion.div>
      </section>

      {/* 2. Our Mission */}
      <section className="flex flex-col gap-10">
         <div className="text-center flex flex-col items-center gap-4">
            <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight">Misi Kami</h2>
            <p className="text-lg md:text-2xl font-medium max-w-3xl opacity-80">Menerjemahkan bahasa teknologi yang rumit menjadi permainan kreatif yang menyenangkan.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6">
            {missions.map((m, i) => (
               <div key={i} className="nb-card p-6 md:p-8 flex flex-col gap-4 bg-white group hover:-translate-y-2 transition-transform">
                  <div className={cn("w-14 h-14 flex items-center justify-center nb-border nb-shadow-sm rotate-[-3deg] group-hover:rotate-12 transition-transform", m.color)}>
                     <m.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tighter mt-2">{m.title}</h3>
                  <p className="font-medium opacity-80 leading-relaxed">{m.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 3. Our Vision & 4. Values */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
         <div className="lg:col-span-5 bg-brand-blue text-white nb-card p-8 md:p-12 rotate-[-1deg]">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-6">Visi Menuju Masa Depan</h2>
            <p className="text-lg md:text-xl font-medium opacity-90 leading-relaxed">
               Kami bercita-cita menjadi ekosistem pendidikan teknologi terpercaya di Indonesia, di mana setiap anak, orang tua, dan sekolah dapat mengandalkan kami sebagai jembatan menuju masa depan digital yang cemerlang dan aman.
            </p>
         </div>
         <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-4 border-b-4 border-black pb-4 w-max">
               <Heart className="w-8 h-8 fill-brand-pink text-brand-pink" />
               <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Prinsip Kami</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
               {values.map((v, i) => (
                  <div key={i} className={cn("bg-white border-4 p-5 md:p-6 nb-shadow-sm flex flex-col gap-2 hover:bg-gray-50 transition-colors", v.border)}>
                     <h3 className="font-display font-black text-xl uppercase tracking-tight">{v.title}</h3>
                     <p className="font-medium text-sm md:text-base opacity-80">{v.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Our Approach */}
      <section className="flex flex-col gap-10 border-4 border-black p-8 md:p-16 bg-brand-yellow nb-shadow rotate-1">
         <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-4">
            <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight max-w-lg leading-none">Pendekatan Belajar Unik</h2>
            <p className="text-lg md:text-xl font-medium md:max-w-md">Bagaimana kami menerjemahkan prinsip menjadi aksi nyata di dalam kelas setiap minggunya.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((a, i) => (
               <div key={i} className="bg-white nb-border p-6 flex flex-col gap-4 relative overflow-hidden group">
                  <span className="absolute -right-4 -top-6 text-8xl font-display font-black text-gray-100 group-hover:text-brand-yellow transition-colors z-0">{a.step}</span>
                  <div className="relative z-10 flex flex-col gap-3">
                     <h3 className="font-display font-black text-2xl uppercase tracking-tighter leading-tight">{a.title}</h3>
                     <p className="font-medium opacity-90">{a.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 6. Who We Serve */}
      <section className="flex flex-col gap-10 pt-10">
         <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight text-center">Siapa yang Kami Layani?</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
               { target: 'Anak & Remaja', desc: 'Tempat belajar yang asyik', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop' },
               { target: 'Orang Tua', desc: 'Partner pengasuhan digital', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop' },
               { target: 'Sekolah & Guru', desc: 'Vendor silabus & mentor', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop' },
               { target: 'Komunitas / Event', desc: 'Sajian booth interaktif', img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop' }
            ].map((s, i) => (
               <div key={i} className="nb-card p-0 overflow-hidden flex flex-col group border-4 border-black">
                  <div className="h-32 sm:h-48 overflow-hidden border-b-4 border-black">
                     <img src={s.img} alt={s.target} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-4 bg-white flex flex-col gap-1">
                     <h3 className="font-display font-black uppercase text-lg sm:text-xl tracking-tighter">{s.target}</h3>
                     <p className="text-xs sm:text-sm font-medium opacity-80">{s.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 7. CTA About */}
      <section className="bg-brand-pink text-black p-8 md:p-16 nb-border nb-shadow flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
         <div className="flex flex-col gap-4 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Jadilah Bagian dari Cerita Kami</h2>
            <p className="text-lg md:text-xl font-medium opacity-90">
               Kami siap berdiskusi untuk pendidikan teknologi anak atau sekolah Anda. Hubungi kami hari ini!
            </p>
         </div>
         <div className="flex flex-col w-full md:w-auto gap-4 shrink-0">
            <Link to="/contact-us">
               <Button variant="white" className="w-full py-4 text-lg">Konsultasi Program <ChevronRight className="inline ml-2" /></Button>
            </Link>
            <Link to="/school-partnership">
               <Button variant="secondary" className="w-full py-4 text-lg bg-black text-white hover:bg-gray-800">Kerja Sama Sekolah</Button>
            </Link>
         </div>
      </section>

    </div>
  );
}
