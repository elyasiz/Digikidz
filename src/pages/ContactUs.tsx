import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function ContactUs() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-12">
      {/* Hero */}
      <section className="text-center flex flex-col items-center gap-6 max-w-3xl mx-auto">
         <div className="bg-brand-pink px-4 py-1 font-bold uppercase tracking-widest text-sm nb-border rotate-[-2deg]">
            Pusat Bantuan & Kemitraan
         </div>
         <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
            Mari Bangun <span className="text-brand-blue underline decoration-4 underline-offset-4">Masa Depan Mereka</span> Bersama
         </h1>
         <p className="text-lg md:text-xl font-medium text-gray-700">
            Tim Student Advisor kami siap melayani seluruh pertanyaan seputar masa depan teknologi buah hati atau sekolah Anda.
         </p>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
         
         {/* Form Section */}
         <div className="bg-white nb-border nb-shadow p-8 flex flex-col gap-6 rotate-1">
            <h2 className="text-3xl font-display font-black uppercase tracking-tight">Kirim Pesan</h2>
            <form className="flex flex-col gap-4">
               <div className="flex flex-col gap-2">
                  <label className="font-bold text-sm uppercase">Nama Lengkap</label>
                  <input type="text" className="w-full border-2 border-black p-3 outline-none focus:bg-brand-yellow/10 transition-colors" placeholder="Cth: Budi Santoso" />
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                     <label className="font-bold text-sm uppercase">Nomor WhatsApp</label>
                     <input type="tel" className="w-full border-2 border-black p-3 outline-none focus:bg-brand-yellow/10 transition-colors" placeholder="Cth: 0812..." />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="font-bold text-sm uppercase">Email</label>
                     <input type="email" className="w-full border-2 border-black p-3 outline-none focus:bg-brand-yellow/10 transition-colors" placeholder="budi@email.com" />
                  </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                     <label className="font-bold text-sm uppercase">Usia Anak</label>
                     <input type="text" className="w-full border-2 border-black p-3 outline-none focus:bg-brand-yellow/10 transition-colors" placeholder="Cth: 10 Tahun" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="font-bold text-sm uppercase">Program Diminati</label>
                     <select className="w-full border-2 border-black p-3 outline-none focus:bg-brand-yellow/10 transition-colors bg-white cursor-pointer">
                        <option>Pilih Program...</option>
                        <option>Little Creator (5-6 thn)</option>
                        <option>Junior Creator (7-9 thn)</option>
                        <option>Teen Creator (10-16 thn)</option>
                        <option>Tech Academy (16+)</option>
                        <option>Robotics / Game Dev</option>
                        <option>Kerja Sama Sekolah / Event</option>
                     </select>
                  </div>
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-bold text-sm uppercase">Pesan Tambahan</label>
                  <textarea className="w-full border-2 border-black p-3 outline-none focus:bg-brand-yellow/10 transition-colors resize-none h-32" placeholder="Ceritakan kebutuhan Anda..."></textarea>
               </div>
               <Button variant="primary" className="py-4 w-full text-lg mt-2 font-black uppercase flex justify-center items-center gap-2"><Send className="w-5 h-5" /> Kirim Pesan</Button>
            </form>
         </div>

         {/* Info Section */}
         <div className="flex flex-col gap-8">
            
            {/* WhatsApp CTA */}
            <div className="bg-brand-green nb-border p-8 flex flex-col gap-4 rotate-[-1deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
               <div className="flex items-center gap-3 border-b-4 border-black pb-4">
                  <MessageSquare className="w-10 h-10 text-black fill-white" />
                  <h2 className="text-3xl font-display font-black uppercase tracking-tight">Butuh Jawaban Cepat?</h2>
               </div>
               <p className="font-medium text-lg opacity-90">Tidak suka mengisi formulir panjang? Langsung ngobrol dengan tim CS kami via WhatsApp.</p>
               <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                  <Button variant="white" className="py-4 w-full text-lg font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Chat WhatsApp Sekarang</Button>
               </a>
            </div>

            {/* General Info */}
            <div className="flex flex-col gap-6">
               <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white nb-border rounded-full flex items-center justify-center shrink-0"><MapPin className="w-6 h-6" /></div>
                  <div className="flex flex-col gap-1">
                     <h3 className="font-bold uppercase text-lg">Lokasi Pusat</h3>
                     <p className="font-medium opacity-80">Jl. Teknologi Anak Bangsa No. 123<br/>Kawasan Digital Kreatif, Jakarta Selatan 12345</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white nb-border rounded-full flex items-center justify-center shrink-0"><Clock className="w-6 h-6" /></div>
                  <div className="flex flex-col gap-1">
                     <h3 className="font-bold uppercase text-lg">Jam Operasional</h3>
                     <p className="font-medium opacity-80">Senin - Jumat: 09:00 - 18:00<br/>Sabtu: 09:00 - 14:00 (Minggu Tutup)</p>
                  </div>
               </div>
            </div>

            {/* Special Inquiry */}
            <div className="bg-gray-100 nb-border p-6 mt-auto">
               <h3 className="font-bold uppercase text-lg mb-2">Jalur Khusus Kemitraan:</h3>
               <p className="font-medium text-sm flex items-center gap-2 mb-1"><Mail className="w-4 h-4" /> Kemitraan Sekolah: <a href="mailto:partnership@digikidz.id" className="font-bold hover:underline">partnership@digikidz.id</a></p>
               <p className="font-medium text-sm flex items-center gap-2"><Phone className="w-4 h-4" /> Info Event/Booth: <span className="font-bold">0811-2222-3333</span></p>
            </div>
         </div>
      </section>

      {/* Embedded Map Placeholder */}
      <section className="w-full h-96 bg-gray-200 nb-border nb-shadow flex items-center justify-center relative overflow-hidden">
         {/* Placeholder for iframe map */}
         <div className="absolute inset-0 bg-brand-blue/10 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-2">
            <MapPin className="w-16 h-16 text-brand-blue" />
            <span className="font-display font-black text-2xl uppercase tracking-widest text-brand-blue bg-white px-4 py-1 nb-border">Peta Lokasi Google Maps</span>
         </div>
         <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover blur-[2px]" />
      </section>
    </div>
  );
}
