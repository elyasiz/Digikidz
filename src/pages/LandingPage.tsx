import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, Bot, Palette, Sparkles, ArrowRight, 
  Puzzle, Users, PartyPopper, Star, Rocket,
  Lightbulb, CheckCircle2, Code, Gamepad2, Trophy,
  MonitorPlay, GraduationCap, Building2, ShieldCheck, Map
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

const COURSES = [
  {
    id: 'coding-class',
    title: 'Coding Class',
    description: 'Belajar bahasa pemrograman dengan menyenangkan. Dari block-programming hingga Python & JavaScript.',
    age: '7-18 TAHUN',
    level: 'SEMUA LEVEL',
    category: 'Programming',
    color: 'bg-brand-pink/60',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 'robotics-class',
    title: 'Robotics Class',
    description: 'Mengasah logika mekanika secara nyata. Merakit dan memprogram robot cerdas buatan sendiri.',
    age: '7-15 TAHUN',
    level: 'BEGINNER - ADVANCED',
    category: 'Hardware',
    color: 'bg-brand-blue/20',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'ai-learning',
    title: 'AI Learning',
    description: 'Memperkenalkan konsep dasar Kecerdasan Buatan (AI) dan Machine Learning yang mudah dipahami anak.',
    age: '13-18 TAHUN',
    level: 'INTERMEDIATE',
    category: 'Future Tech',
    color: 'bg-brand-yellow',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
  },
  {
    id: 'digital-creativity',
    title: 'Digital Creativity',
    description: 'Wadah ekspresi visual! Mengasah kreativitas desain grafis, animasi, dan video editing.',
    age: '8-18 TAHUN',
    level: 'SEMUA LEVEL',
    category: 'Design & Art',
    color: 'bg-gray-100',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop',
  },
];

export function LandingPage() {
  const [formStep, setFormStep] = useState<'form' | 'success'>('form');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    { title: 'Coding & AI', description: 'Kuasai bahasa masa depan.', icon: Terminal, color: 'bg-brand-blue/20', iconColor: 'text-brand-blue', span: 'col-span-1' },
    { title: 'Robotics', description: 'Rakit mesin pintarmu.', icon: Bot, color: 'bg-brand-yellow', iconColor: 'text-black', span: 'md:col-span-2', badge: 'FAVORIT' },
    { title: 'Creativity', description: 'Ekspresi visual tanpa batas.', icon: Palette, color: 'bg-brand-pink', iconColor: 'text-black', span: 'col-span-1' },
    { title: 'School Partnership', description: 'Bawa kurikulum inovatif ke sekolah Anda!', icon: Building2, color: 'bg-white', iconColor: 'text-brand-blue', span: 'md:col-span-2', isPromo: true },
  ];

  const values = [
    { title: 'Metode Interaktif', description: "Tidak ada teori membosankan. Belajar sambil praktik.", icon: Gamepad2, color: 'bg-brand-pink', span: 'col-span-1', rotate: '-rotate-2' },
    { title: 'Kurikulum Global', description: "Standar teknologi terkini yang adaptif dengan psikologi anak.", icon: Map, color: 'bg-brand-blue/30', span: 'md:col-span-2', rotate: 'rotate-1' },
    { title: 'Lingkungan Aman', description: "Ruang suportif, bebas bereksplorasi secara positif.", icon: ShieldCheck, color: 'bg-brand-green', span: 'md:col-span-2', rotate: '-rotate-1' },
    { title: 'Project-Based', description: "Evaluasi dari hasil karya nyata, bukan sekadar tes tertulis.", icon: Trophy, color: 'bg-brand-yellow', span: 'col-span-1', rotate: 'rotate-2' },
  ];

  const targetAudience = [
    { id: 'tk', title: 'TK & PAUD', age: '4-6 Tahun', desc: 'Pengenalan logika melalui screen-free coding & games merakit pola.', color: 'bg-brand-pink', icon: Puzzle },
    { id: 'sd', title: 'Sekolah Dasar', age: '7-12 Tahun', desc: 'Visual block coding, robotika dasar, dan pembuatan animasi 2D.', color: 'bg-brand-yellow', icon: Gamepad2 },
    { id: 'smp', title: 'SMP', age: '13-15 Tahun', desc: 'Bahasa pemrograman teks, pembuatan game mandiri, dan dasar AI.', color: 'bg-brand-blue/80', icon: Code },
    { id: 'sma', title: 'SMA', age: '16-18 Tahun', desc: 'Web development, data science, dan persiapan portofolio profesional.', color: 'bg-brand-green', icon: GraduationCap },
  ];

  const learningOutputs = [
    { title: 'Game Interaktif', desc: 'Aplikasi dan game buatan sendiri yang bisa dimainkan.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Robot Pintar', desc: 'Robot yang mampu bergerak dan merespons sensor.', image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop' },
    { title: 'Website Portofolio', desc: 'Halaman web fungsional untuk galeri karya digital pribadi.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Karya Desain', desc: 'Poster, animasi cerita pendek, dan video kreatif memukau.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop' },
  ];

  const benefits = [
    { title: 'Mentor Ahli', desc: 'Coach inspiratif dan sabar mendampingi.', icon: Users, color: 'bg-brand-blue' },
    { title: 'Karya Nyata', desc: 'Setiap siswa memiliki portofolio sendiri.', icon: Trophy, color: 'bg-brand-yellow' },
    { title: 'Skill Abad 21', desc: 'Mengasah kreativitas dan problem solving.', icon: Lightbulb, color: 'bg-brand-orange' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const parentName = formData.get('parentName') as string;
    const kidName = formData.get('kidName') as string;
    const email = formData.get('email') as string;

    const newErrors: Record<string, string> = {};
    if (!parentName) newErrors.parentName = 'Wajib diisi!';
    if (!kidName) newErrors.kidName = "Wajib diisi!";
    if (!email) newErrors.email = 'Wajib diisi!';
    if (!selectedCourse) newErrors.course = 'Pilih salah satu!';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setFormStep('success');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-20 md:gap-32 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* 1. Hero Section */}
      <section id="hero" className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center min-h-[auto] lg:min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] tracking-tight uppercase text-brand-yellow" style={{ textShadow: '4px 4px 0px #000' }}>
            <span className="text-brand-blue">Siapkan Masa Depan</span> Anak Anda di Era Digital!
          </h1>
          <p className="text-lg md:text-2xl font-medium text-gray-700 max-w-xl">
            Bekali buah hati Anda dengan keterampilan abad 21 melalui kelas Coding, Robotika, AI, dan Kreativitas Digital yang interaktif dan menyenangkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={() => scrollToSection('register')} variant="primary" className="w-full sm:w-auto text-lg py-5 px-10">
              Jadwalkan Trial Class
            </Button>
            <Button onClick={() => scrollToSection('courses')} variant="secondary" className="w-full sm:w-auto text-lg py-5 px-10">
              Konsultasi Program
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 2, scale: 1 }}
          className="relative aspect-video lg:aspect-square bg-brand-yellow nb-border nb-shadow-lg overflow-hidden group order-1 lg:order-2 mx-auto lg:ml-auto w-full max-w-lg lg:max-w-none"
        >
          <img 
            src="/hero.jpg" 
            alt="DigiKidz Classroom" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-24">
        <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-brand-yellow px-4 py-1 nb-border nb-shadow w-max font-bold text-xs md:text-sm tracking-widest rotate-[-1deg] uppercase">
            <Star className="w-4 h-4 fill-black" /> Misi Kami
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] tracking-tight uppercase">
            Lebih Dari Sekadar Belajar, Kami <br />
            <span className="bg-brand-blue text-white px-3 md:px-4 py-1 inline-block -rotate-2 mt-2 nb-border nb-shadow">Mencetak Inovator</span>
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-700 max-w-xl">
             Kami percaya anak-anak bukanlah sekadar pengguna teknologi. Melalui pendekatan berbasis proyek, kami mengubah waktu menatap layar (screen-time) menjadi waktu berkarya (productive-time) untuk masa depan mereka.
          </p>
        </div>
        <div className="relative aspect-square bg-brand-yellow nb-border nb-shadow-lg overflow-hidden group rotate-0 lg:rotate-2 order-1 lg:order-2 max-w-md mx-auto lg:ml-auto w-full">
          <img 
            src="/hero.jpg" 
            alt="Misi Digikidz" 
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
          />
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-brand-orange text-white nb-border nb-shadow px-6 md:px-8 py-3 md:py-4 rotate-12 font-display font-black text-2xl md:text-4xl shrink-0">BAM!</div>
        </div>
      </section>

      {/* 5. Target Peserta */}
      <section className="flex flex-col gap-10 scroll-mt-24">
        <div className="text-center flex flex-col items-center gap-4 border-b-8 border-black pb-8">
           <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight">Setiap Usia Punya Cerita</h2>
           <p className="text-lg md:text-2xl font-medium max-w-2xl opacity-80">Pendekatan belajar yang dirancang khusus untuk menyesuaikan tumbuh kembang setiap anak.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
           {targetAudience.map((audience) => (
             <motion.div
               key={audience.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className={cn("nb-card flex flex-col gap-4 p-6 md:p-8 hover:-translate-y-2 transition-transform", audience.color)}
             >
                <div className="bg-white nb-border p-3 w-max rotate-3 nb-shadow-sm"><audience.icon className="w-8 h-8" /></div>
                <div className="flex flex-col gap-1 mt-2">
                   <h3 className="text-2xl font-display font-black uppercase tracking-tighter">{audience.title}</h3>
                   <span className="font-bold text-xs uppercase tracking-widest bg-white nb-border px-2 py-1 w-max nb-shadow-sm">{audience.age}</span>
                </div>
                <p className="font-medium text-sm md:text-base opacity-90 leading-relaxed mt-2">{audience.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 3. Program / Layanan (Worlds) */}
      <section id="worlds" className="flex flex-col gap-10 bg-black text-white p-8 md:p-16 nb-border nb-shadow rotate-1 mt-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
          <div className="flex items-center gap-4">
            <div className="bg-white text-black p-2 nb-border rotate-[-3deg]">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Eksplorasi Dunia Kami</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-black">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn("nb-card group p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden", cat.color, cat.span, cat.isPromo && "justify-center items-center text-center col-span-1 sm:col-span-2 md:col-span-2")}
            >
              {!cat.isPromo ? (
                <>
                  <div className="bg-white nb-border nb-shadow w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                    <cat.icon className={cn("w-6 h-6 md:w-8 md:h-8", cat.iconColor)} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter">{cat.title}</h3>
                      {cat.badge && <span className="bg-white nb-border px-2 py-1 text-[10px] md:text-xs font-bold rotate-6 animate-pulse shrink-0">{cat.badge}</span>}
                    </div>
                    <p className="text-base md:text-lg font-medium leading-normal opacity-90">{cat.description}</p>
                  </div>
                  <Button onClick={() => scrollToSection('courses')} variant="white" className="mt-auto w-full border-2 py-2">
                    Lihat Program <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4 py-6 md:py-8">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
                  <h3 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black uppercase tracking-widest text-brand-blue relative z-10">{cat.title}</h3>
                  <Button variant="secondary" className="relative z-10 font-bold">Ajukan Proposal Kerjasama</Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses Catalog (Detail dari Program) */}
      <section id="courses" className="flex flex-col gap-10 md:gap-16 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b-8 border-black pb-8">
          <h2 className="text-4xl md:text-8xl font-display font-black uppercase tracking-tight">Katalog Kelas</h2>
          <div className="bg-brand-yellow border-4 border-black px-4 md:px-6 py-2 font-black text-xl md:text-2xl nb-shadow self-start md:self-auto uppercase">Pilih Petualanganmu</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {COURSES.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={cn("group nb-card p-0 flex flex-col overflow-hidden", course.color)}
            >
              <div className="h-48 sm:h-64 relative bg-white border-b-4 border-black overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover grayscale-0 group-hover:scale-105 group-hover:rotate-1 transition-all duration-500" />
                <div className="absolute top-4 right-4 bg-white nb-border nb-shadow px-3 py-1.5 md:px-4 md:py-2 font-black uppercase text-xs md:text-sm">{course.category}</div>
              </div>
              <div className="p-6 md:p-10 flex flex-col gap-6 md:gap-8 flex-grow">
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="bg-white nb-border px-2 md:px-3 py-1 text-[10px] md:text-xs font-black tracking-widest nb-shadow-sm uppercase">{course.age}</span>
                  <span className="bg-white nb-border px-2 md:px-3 py-1 text-[10px] md:text-xs font-black tracking-widest nb-shadow-sm uppercase">{course.level}</span>
                </div>
                <div className="flex flex-col gap-3 md:gap-4">
                  <h3 className="text-2xl md:text-4xl font-display font-black leading-none group-hover:translate-x-2 transition-transform">{course.title}</h3>
                  <p className="text-lg md:text-xl leading-snug font-medium opacity-90">{course.description}</p>
                </div>
                <Button onClick={() => scrollToSection('register')} variant="white" className="mt-auto w-full flex justify-between items-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                  Daftar Sekarang <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Output Pembelajaran */}
      <section className="flex flex-col gap-10 md:gap-16 pt-10">
        <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight text-center">Karya Nyata Tangan Kreatif Mereka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {learningOutputs.map((output, idx) => (
             <div key={idx} className="nb-card p-0 overflow-hidden flex flex-col group border-4 border-black">
                <div className="h-48 overflow-hidden border-b-4 border-black">
                   <img src={output.image} alt={output.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4 bg-white flex flex-col gap-2">
                   <h3 className="font-display font-black uppercase text-xl tracking-tighter">{output.title}</h3>
                   <p className="text-sm font-medium opacity-80">{output.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 4. Keunggulan (Values) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-10 pb-8">
        {values.map((v, idx) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn("nb-card group p-6 md:p-8 flex flex-col gap-4", v.color, v.rotate)}
          >
            <div className="bg-white nb-border nb-shadow w-12 h-12 flex items-center justify-center shrink-0 rounded-full group-hover:rotate-12 transition-transform">
              <v.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-tighter leading-tight">{v.title}</h3>
            <p className="text-sm md:text-base leading-relaxed font-medium">{v.description}</p>
          </motion.div>
        ))}
      </section>

      {/* 7. Call to Action Akhir / Form */}
      <section id="register" className="flex flex-col md:flex-row gap-10 md:gap-12 items-start scroll-mt-24 mt-10">
        <div className="w-full md:w-[60%] nb-card bg-brand-blue p-6 md:p-16 relative text-white">
          <div className="absolute -top-6 -right-2 md:-top-10 md:-right-4 bg-brand-yellow text-black border-4 border-black p-3 md:p-4 rotate-12 nb-shadow font-display font-black text-xl md:text-3xl z-20">DAFTAR!</div>
          <AnimatePresence mode="wait">
            {formStep === 'form' ? (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-8 md:gap-10">
                <div className="flex flex-col gap-3 md:gap-4">
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tight leading-none text-white">Buka Potensi Mereka!</h2>
                  <p className="text-lg md:text-xl font-medium opacity-90 text-white">Jadwalkan Trial Class atau hubungi kami untuk berkonsultasi.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-black uppercase text-[10px] md:text-xs tracking-widest opacity-80">Nama Orang Tua</label>
                      <input name="parentName" className="w-full nb-border p-3 md:p-4 font-bold bg-white text-black outline-none text-sm md:text-base" placeholder="Budi Santoso" />
                      {errors.parentName && <span className="text-brand-orange font-black text-[10px] md:text-xs uppercase bg-black px-2 py-1 w-max">{errors.parentName}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-black uppercase text-[10px] md:text-xs tracking-widest opacity-80">Nama Anak</label>
                        <input name="kidName" className="w-full nb-border p-3 md:p-4 font-bold bg-white text-black outline-none text-sm md:text-base" placeholder="Kevin" />
                        {errors.kidName && <span className="text-brand-orange font-black text-[10px] md:text-xs uppercase bg-black px-2 py-1 w-max">{errors.kidName}</span>}
                      </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-black uppercase text-[10px] md:text-xs tracking-widest opacity-80">Email / No WhatsApp</label>
                    <input name="email" className="w-full nb-border p-3 md:p-4 font-bold bg-white text-black outline-none text-sm md:text-base" placeholder="0812xxxxxx" />
                    {errors.email && <span className="text-brand-orange font-black text-[10px] md:text-xs uppercase bg-black px-2 py-1 w-max">{errors.email}</span>}
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <label className="font-black uppercase text-[10px] md:text-xs tracking-widest opacity-80">Minat Program</label>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {['Robotics', 'Coding & AI', 'Digital Art', 'School Partnership'].map(name => (
                        <button
                          key={name}
                          type="button"
                          onClick={() => setSelectedCourse(name)}
                          className={cn("nb-border p-3 md:p-5 text-xs md:text-sm font-black uppercase tracking-tight transition-all", selectedCourse === name ? "bg-brand-yellow text-black nb-shadow -translate-y-1" : "bg-white/10 text-white hover:bg-white/20")}
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                    {errors.course && <span className="text-brand-orange font-black text-[10px] md:text-xs uppercase bg-black px-2 py-1 w-max">{errors.course}</span>}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <Button variant="orange" type="submit" className="py-5 px-6 flex-grow group">
                      <span className="text-xl font-display font-black uppercase">Jadwalkan Trial</span>
                      <Rocket className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
                    </Button>
                    <Button type="button" className="py-5 px-6 bg-green-500 hover:bg-green-600 text-white nb-border flex-grow">
                      <span className="text-xl font-display font-black uppercase">Tanya WhatsApp</span>
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div key="success" className="flex flex-col items-center text-center gap-6 md:gap-8 py-12 md:py-20 text-white">
                <div className="bg-brand-green p-4 md:p-6 nb-border nb-shadow -rotate-6"><CheckCircle2 className="w-12 h-12 md:w-20 md:h-20 text-white" /></div>
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase">Pesan Diterima!</h2>
                <p className="text-lg md:text-xl font-medium opacity-90 max-w-sm">Tim kami akan segera menghubungi Anda untuk langkah selanjutnya.</p>
                <Button onClick={() => setFormStep('form')} variant="white" className="px-8 mt-4">Kirim Ulang</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <aside className="w-full md:w-[40%] flex flex-col gap-8">
           <div className="nb-card bg-gray-100 p-6 md:p-8 flex flex-col gap-6 md:gap-8">
              <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight border-b-4 border-black pb-4">Kenapa Kami?</h2>
              <div className="flex flex-col gap-6 md:gap-8">
                {benefits.map(b => (
                  <div key={b.title} className="flex gap-4">
                    <div className={cn("nb-border nb-shadow p-2 h-max shrink-0 mt-1", b.color)}><b.icon className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-black leading-tight uppercase underline decoration-4 decoration-brand-yellow/50 underline-offset-4">{b.title}</h3>
                      <p className="text-xs md:text-sm font-medium opacity-70 mt-1">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </aside>
      </section>

    </div>
  );
}
