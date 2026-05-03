import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Search, BookOpen, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function Blog() {
  const categories = ['Semua', 'Parenting & Tech', 'Coding for Kids', 'Robotics', 'School Program'];
  const [activeCategory, setActiveCategory] = useState('Semua');

  const articles = [
    { title: 'Mengapa Anak Perlu Belajar Coding Sejak Dini? (Panduan 2024)', category: 'Coding for Kids', date: '12 Mei 2024', readTime: '5 Min Read', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop', featured: true },
    { title: 'Manfaat Robotics untuk Melatih Kemampuan Problem Solving Anak', category: 'Robotics', date: '08 Mei 2024', readTime: '4 Min Read', img: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop', featured: false },
    { title: 'Apa Itu Artificial Intelligence dan Bagaimana Mengenalkannya pada Balita?', category: 'Parenting & Tech', date: '02 Mei 2024', readTime: '6 Min Read', img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop', featured: false },
    { title: 'Cara Memilih Tempat Kursus Coding yang Tepat untuk Anak SD', category: 'Parenting & Tech', date: '28 Apr 2024', readTime: '5 Min Read', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop', featured: false },
    { title: '5 Ide Program Ekstrakurikuler Teknologi Terbaik untuk Sekolah Menengah', category: 'School Program', date: '20 Apr 2024', readTime: '7 Min Read', img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop', featured: false },
    { title: 'Pentingnya Memiliki Portofolio Digital Sejak Remaja', category: 'Coding for Kids', date: '15 Apr 2024', readTime: '4 Min Read', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop', featured: false },
  ];

  const filteredArticles = activeCategory === 'Semua' ? articles : articles.filter(a => a.category === activeCategory);
  const featuredArticle = articles.find(a => a.featured);

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
         <div className="bg-brand-yellow px-4 py-1 font-bold uppercase tracking-widest text-sm nb-border rotate-1">
            Blog & Edukasi
         </div>
         <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
            Jendela Wawasan <span className="text-brand-pink underline decoration-4 underline-offset-4">Pendidikan Digital</span>
         </h1>
         <p className="text-lg md:text-xl font-medium text-gray-700">
            Kumpulan artikel, tips parenting digital, dan wawasan terbaru seputar dunia teknologi anak dan remaja.
         </p>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
         <section className="bg-white nb-border nb-shadow p-4 md:p-8 flex flex-col lg:flex-row gap-8 items-center group cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="w-full lg:w-1/2 overflow-hidden border-4 border-black">
               <img src={featuredArticle.img} alt={featuredArticle.title} className="w-full aspect-video md:aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start">
               <div className="flex gap-2">
                  <span className="bg-brand-pink text-black px-2 py-1 text-xs font-bold uppercase border-2 border-black">Highlight</span>
                  <span className="bg-gray-200 text-black px-2 py-1 text-xs font-bold uppercase border-2 border-black">{featuredArticle.category}</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-none group-hover:text-brand-blue transition-colors">{featuredArticle.title}</h2>
               <div className="flex items-center gap-4 text-sm font-bold text-gray-500 mt-2">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredArticle.readTime}</span>
                  <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {featuredArticle.date}</span>
               </div>
               <p className="font-medium text-lg opacity-80 mt-2 line-clamp-3">
                  Pendidikan teknologi bukan lagi sekadar tren, melainkan kebutuhan dasar untuk anak-anak kita dalam menghadapi tantangan masa depan. Pelajari bagaimana memulai langkah pertama mereka dengan tepat tanpa rasa bosan.
               </p>
               <Button variant="white" className="mt-4 flex items-center gap-2">Baca Artikel <ArrowRight className="w-4 h-4" /></Button>
            </div>
         </section>
      )}

      {/* Article List */}
      <section className="flex flex-col gap-8 pt-4">
         <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b-4 border-black pb-6">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
               {categories.map((cat) => (
                  <button 
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`px-4 py-2 font-bold uppercase text-sm border-2 transition-all ${activeCategory === cat ? "bg-black text-white border-black" : "bg-white text-black border-transparent hover:border-black"}`}
                  >
                     {cat}
                  </button>
               ))}
            </div>
            <div className="bg-white nb-border p-2 flex items-center gap-2 w-full md:w-max">
               <Search className="w-5 h-5 text-gray-500" />
               <input type="text" placeholder="Cari topik..." className="outline-none font-medium w-full md:w-48" />
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {filteredArticles.map((a, i) => (
               <div key={i} className="flex flex-col gap-4 group cursor-pointer">
                  <div className="relative aspect-[4/3] bg-gray-200 border-4 border-black overflow-hidden nb-shadow-sm group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 transition-all">
                     <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <span className="absolute top-4 left-4 bg-brand-yellow text-black px-2 py-1 text-xs font-bold uppercase border-2 border-black">{a.category}</span>
                  </div>
                  <div className="flex flex-col gap-2 px-1">
                     <div className="flex items-center gap-3 text-xs font-bold text-gray-500">
                        <span>{a.date}</span>
                        <span>•</span>
                        <span>{a.readTime}</span>
                     </div>
                     <h3 className="font-display font-black text-xl uppercase tracking-tighter leading-tight group-hover:text-brand-pink transition-colors">{a.title}</h3>
                  </div>
               </div>
            ))}
         </div>
         {filteredArticles.length === 0 && (
            <div className="text-center font-bold text-xl py-10">Belum ada artikel di kategori ini.</div>
         )}
      </section>

      {/* CTA Subscribe */}
      <section className="bg-brand-blue text-white nb-border nb-shadow p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 rotate-1">
         <div className="flex flex-col gap-4 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Jangan Ketinggalan Info Terbaru!</h2>
            <p className="text-lg font-medium opacity-90">Berlangganan newsletter kami untuk mendapatkan tips parenting digital mingguan langsung di email Anda.</p>
         </div>
         <div className="w-full md:w-auto flex flex-col gap-4">
            <div className="flex bg-white nb-border p-1 w-full max-w-md">
               <input type="email" placeholder="Alamat email Anda..." className="px-4 py-3 outline-none text-black font-medium w-full" />
               <Button variant="yellow" className="px-6 py-3 font-black uppercase shrink-0">Subscribe</Button>
            </div>
            <p className="text-xs font-medium opacity-80 text-center md:text-left">*Kami membenci spam, email Anda aman bersama kami.</p>
         </div>
      </section>
    </div>
  );
}
