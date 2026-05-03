import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { AlertCircle, Terminal, Zap, Star } from 'lucide-react';

export function Playground() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col gap-20">
      <header className="flex flex-col gap-4 text-center">
         <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter" style={{ textShadow: '6px 6px 0px #2D5BFF' }}>
           Neubrutalist <br /> Playground
         </h1>
         <p className="text-xl font-bold uppercase tracking-widest opacity-50">Experimental Design & Components</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Buttons Panel */}
        <section className="nb-card col-span-1 lg:col-span-2 flex flex-col gap-8 bg-brand-pink/20">
          <h2 className="text-3xl font-display font-black uppercase border-b-4 border-black pb-2">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
             <Button variant="primary">Primary NB</Button>
             <Button variant="secondary">Secondary NB</Button>
             <Button variant="orange">Orange NB</Button>
             <Button variant="outline">Outline NB</Button>
             <Button variant="white">White NB</Button>
          </div>
        </section>

        {/* Status Panel */}
        <section className="nb-card bg-brand-yellow flex flex-col gap-6">
           <h2 className="text-3xl font-display font-black uppercase border-b-4 border-black pb-2">Dynamic States</h2>
           <div className="flex flex-col gap-4">
              <div className="nb-border nb-shadow bg-white p-4 flex items-center gap-4">
                 <div className="w-8 h-8 rounded-full bg-brand-green nb-border animate-pulse" />
                 <span className="font-bold">System Online</span>
              </div>
              <div className="nb-border nb-shadow bg-brand-orange text-white p-4 flex items-center gap-4">
                 <AlertCircle />
                 <span className="font-black uppercase tracking-tighter">Critical Bug Found!</span>
              </div>
           </div>
        </section>

        {/* Interaction Panel */}
        <section className="nb-card lg:col-span-3 bg-brand-blue/10 flex flex-col lg:flex-row gap-12 items-center">
           <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-5xl font-display font-black uppercase leading-none">Hover Interaction</h2>
              <p className="text-lg font-medium">Neubrutalist components should react physically. Shadows grow, elements translate, and colors shift.</p>
           </div>
           <div className="flex flex-wrap gap-12">
              <motion.div 
                whileHover={{ rotate: -5, scale: 1.1 }}
                className="w-32 h-32 bg-white nb-border nb-shadow flex items-center justify-center cursor-help"
              >
                <Terminal className="w-16 h-16" />
              </motion.div>
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-32 h-32 bg-brand-yellow nb-border nb-shadow flex items-center justify-center cursor-pointer"
              >
                <Zap className="w-16 h-16" />
              </motion.div>
              <motion.div 
                whileHover={{ rotate: -15, y: -20 }}
                className="w-32 h-32 bg-brand-pink nb-border shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"
              >
                <Star className="w-16 h-16 fill-black" />
              </motion.div>
           </div>
        </section>

        {/* Decorative Grid */}
        <section className="nb-card col-span-1 md:col-span-3 bg-white h-40 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)' }} />
            <h3 className="text-5xl font-display font-black bg-white px-4 nb-border z-10 rotate-1">PATTERNS & TEXTURES</h3>
        </section>
      </div>
    </div>
  );
}
