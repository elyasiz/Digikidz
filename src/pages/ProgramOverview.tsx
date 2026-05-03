import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Puzzle, Gamepad2, Code, GraduationCap, MonitorPlay, BrainCircuit, Bot, Palette, Network } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function ProgramOverview() {
  const pathways = [
    {
      age: '5-6 Tahun',
      title: 'Little Creator',
      focus: 'Logika Dasar & Kreativitas Visual',
      output: 'Animasi Sederhana',
      icon: Puzzle,
      color: 'bg-brand-pink',
      path: '/programs/little-creator'
    },
    {
      age: '7-9 Tahun',
      title: 'Junior Creator',
      focus: 'Block Coding & Robotika Dasar',
      output: 'Mini Game',
      icon: Gamepad2,
      color: 'bg-brand-yellow',
      path: '/programs/junior-creator'
    },
    {
      age: '10-16 Tahun',
      title: 'Teen Creator',
      focus: 'Text Coding & AI Exploration',
      output: 'Website & App',
      icon: Code,
      color: 'bg-brand-blue',
      path: '/programs/teen-creator'
    },
    {
      age: '16+ Tahun',
      title: 'Tech Academy',
      focus: 'Professional Portfolio & Startup',
      output: 'Real-world App',
      icon: GraduationCap,
      color: 'bg-brand-green',
      path: '/programs/tech-academy'
    }
  ];

  const fields = [
    { name: 'Coding', icon: Code },
    { name: 'Robotics', icon: Bot },
    { name: 'AI', icon: BrainCircuit },
    { name: 'Game Dev', icon: Gamepad2 },
    { name: 'Web Dev', icon: MonitorPlay },
    { name: 'Digital Art', icon: Palette },
    { name: 'IoT', icon: Network },
  ];

  const comparisonData = [
    { name: 'Little Creator', age: '5-6', level: 'Beginner', focus: 'Logika Visual', tools: 'ScratchJr', output: 'Animasi' },
    { name: 'Junior Creator', age: '7-9', level: 'All Level', focus: 'Block Coding', tools: 'Scratch, MakeCode', output: 'Mini Game' },
    { name: 'Teen Creator', age: '10-16', level: 'Intermediate', focus: 'Text Coding, AI', tools: 'Python, JS, Roblox', output: 'Website / App' },
    { name: 'Tech Academy', age: '16+', level: 'Advanced', focus: 'Career Prep', tools: 'React, Next.js, API', output: 'Portofolio App' },
    { name: 'Robotics', age: '7-16', level: 'All Level', focus: 'Hardware Logic', tools: 'Arduino, Lego', output: 'Robot Fungsional' },
  ];

  return (
    <div className="flex flex-col gap-20 md:gap-32 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      
      {/* 1. Hero Program Overview */}
      <section className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-brand-yellow px-4 py-1 nb-border nb-shadow w-max font-bold uppercase rotate-[2deg]">
          Katalog Induk Program
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-[1.1] tracking-tight uppercase mt-4">
          Pilih <span className="bg-brand-blue text-white px-4 nb-border inline-block -rotate-2">Petualangan</span> Digital Mereka!
        </h1>
        <p className="text-lg md:text-2xl font-medium text-gray-700 mt-2">
          Dari robot pertama hingga baris kode pertama, temukan jalur pembelajaran yang paling tepat untuk potensi unik anak Anda.
        </p>
        <div className="flex gap-4 mt-6">
           <a href="#pathway">
             <Button variant="primary" className="py-4 px-8 text-lg">Panduan Memilih Program <ArrowRight className="inline ml-2" /></Button>
           </a>
        </div>
      </section>

      {/* 2. Program Pathway */}
      <section id="pathway" className="flex flex-col gap-10 scroll-mt-24">
         <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b-8 border-black pb-4">
            <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight max-w-xl leading-none">Peta Perjalanan Belajar</h2>
            <p className="text-base md:text-xl font-medium md:max-w-xs text-right">Struktur jenjang berkelanjutan dari usia dini hingga mahir.</p>
         </div>
         
         {/* Desktop Stepper */}
         <div className="hidden lg:grid grid-cols-4 gap-6 pt-10">
            {pathways.map((p, i) => (
               <div key={p.title} className="flex flex-col relative group">
                  {/* The connection line */}
                  {i < pathways.length - 1 && (
                     <div className="absolute top-10 left-1/2 w-full h-2 bg-black -z-10 group-hover:bg-brand-yellow transition-colors" />
                  )}
                  <div className={cn("w-20 h-20 nb-border nb-shadow-sm flex items-center justify-center mb-6 mx-auto group-hover:-translate-y-2 transition-transform", p.color)}>
                     <p.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="bg-white nb-border p-6 flex flex-col gap-3 text-center flex-grow nb-shadow-sm">
                     <span className="font-bold text-xs uppercase tracking-widest bg-gray-100 p-1 nb-border w-max mx-auto">{p.age}</span>
                     <h3 className="font-display font-black text-2xl uppercase tracking-tighter leading-none mt-2">{p.title}</h3>
                     <p className="font-medium text-sm opacity-80 mt-2">Fokus: {p.focus}</p>
                     <p className="font-bold text-sm bg-brand-yellow/30 p-2 border-2 border-brand-yellow">Output: {p.output}</p>
                     <Link to={p.path} className="mt-auto pt-4">
                        <Button variant="white" className="w-full text-xs py-2">Lihat Detail</Button>
                     </Link>
                  </div>
               </div>
            ))}
         </div>

         {/* Mobile Timeline */}
         <div className="flex flex-col gap-8 lg:hidden pt-4 relative">
            <div className="absolute left-10 top-0 bottom-0 w-2 bg-black -z-10" />
            {pathways.map((p, i) => (
               <div key={p.title} className="flex gap-6 relative">
                  <div className={cn("w-20 h-20 shrink-0 nb-border flex items-center justify-center z-10 relative", p.color)}>
                     <p.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="bg-white nb-border p-5 flex flex-col gap-2 w-full nb-shadow-sm">
                     <span className="font-bold text-[10px] uppercase tracking-widest">{p.age}</span>
                     <h3 className="font-display font-black text-xl uppercase tracking-tighter leading-none">{p.title}</h3>
                     <p className="font-medium text-xs opacity-80 mt-1">Fokus: {p.focus}</p>
                     <Link to={p.path} className="mt-2">
                        <Button variant="white" className="w-full text-xs py-2">Detail</Button>
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 3. Learning Fields */}
      <section className="flex flex-col gap-6 items-center text-center bg-gray-100 p-8 md:p-12 nb-border nb-shadow rotate-1">
         <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight">Bidang Studi Kami</h2>
         <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
            {fields.map(f => (
               <div key={f.name} className="bg-white nb-border px-4 py-2 flex items-center gap-2 hover:-translate-y-1 hover:bg-brand-pink transition-all cursor-default">
                  <f.icon className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-tight">{f.name}</span>
               </div>
            ))}
         </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="flex flex-col gap-8 mt-4 overflow-hidden">
         <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-center">Bandingkan Spesifikasi</h2>
         <div className="overflow-x-auto pb-6">
            <table className="w-full text-left border-collapse min-w-[800px]">
               <thead>
                  <tr className="bg-black text-white uppercase font-display font-black tracking-widest text-sm">
                     <th className="p-4 border-4 border-black border-r-white/20">Program</th>
                     <th className="p-4 border-4 border-black border-r-white/20">Usia</th>
                     <th className="p-4 border-4 border-black border-r-white/20">Level</th>
                     <th className="p-4 border-4 border-black border-r-white/20">Fokus Belajar</th>
                     <th className="p-4 border-4 border-black border-r-white/20">Tools</th>
                     <th className="p-4 border-4 border-black">Output Final</th>
                  </tr>
               </thead>
               <tbody className="bg-white font-medium">
                  {comparisonData.map((d, i) => (
                     <tr key={d.name} className={cn("hover:bg-brand-yellow/20 transition-colors border-b-4 border-black", i % 2 === 0 ? "bg-white" : "bg-gray-50")}>
                        <td className="p-4 border-r-4 border-black font-bold">{d.name}</td>
                        <td className="p-4 border-r-4 border-black">{d.age} Thn</td>
                        <td className="p-4 border-r-4 border-black">{d.level}</td>
                        <td className="p-4 border-r-4 border-black">{d.focus}</td>
                        <td className="p-4 border-r-4 border-black">{d.tools}</td>
                        <td className="p-4">{d.output}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>

      {/* 5. How to Choose & 6. CTA */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
         <div className="flex flex-col gap-6 md:gap-8 bg-brand-green nb-border nb-shadow p-8 md:p-12 rotate-[-1deg]">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Bingung Memilih?</h2>
            <div className="flex flex-col gap-4 font-bold text-lg md:text-xl">
               <div className="bg-white p-4 nb-border nb-shadow-sm rotate-1">👉 Suka menggambar? Pilih <span className="text-brand-pink uppercase font-black">Digital Art</span></div>
               <div className="bg-white p-4 nb-border nb-shadow-sm rotate-[-1deg]">👉 Suka main game? Pilih <span className="text-brand-blue uppercase font-black">Game Dev</span></div>
               <div className="bg-white p-4 nb-border nb-shadow-sm rotate-2">👉 Suka bongkar mainan? Pilih <span className="text-brand-orange uppercase font-black">Robotics</span></div>
            </div>
         </div>
         
         <div className="flex flex-col gap-6 md:gap-8 justify-center text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Butuh Bantuan Personal?</h2>
            <p className="text-lg md:text-xl font-medium opacity-90 max-w-md mx-auto lg:mx-0">
               Tim Student Advisor kami siap membantu menganalisis minat dan bakat anak secara personal via WhatsApp.
            </p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="w-max mx-auto lg:mx-0 mt-4">
               <Button variant="orange" className="py-5 px-8 text-xl">Konsultasi via WhatsApp</Button>
            </a>
         </div>
      </section>

    </div>
  );
}
