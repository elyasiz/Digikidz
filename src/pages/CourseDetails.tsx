import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Clock, Users, Gamepad, Zap, Brain, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

export function CourseDetails() {
  const { id } = useParams();

  // Mock data for individual course detail
  const course = {
    title: 'Creative Coding for Kids',
    age: 'AGES 8-12',
    description: "Unleash your child's imagination! They'll build real games, design cool animations, and learn the basics of logic in a super fun, colorful environment.",
    duration: '8 Weeks',
    size: 'Max 10 Kids',
    topics: [
      {
        title: 'Make Games',
        desc: 'Design and program your very own interactive games from scratch. No prior experience needed!',
        icon: Gamepad,
        color: 'bg-brand-pink/40',
      },
      {
        title: 'Cool Animations',
        desc: 'Bring characters to life! Learn how to make things move, jump, and dance on the screen.',
        icon: Zap,
        color: 'bg-brand-blue/30',
      },
      {
        title: 'Logic Skills',
        desc: 'Develop strong problem-solving skills that help in math, science, and everyday life.',
        icon: Brain,
        color: 'bg-gray-200',
      },
    ]
  };

  return (
    <div className="flex flex-col gap-24 py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
      {/* Hero Header */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <motion.div 
          initial={{ opacity: 0, x: -30, rotate: -2 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          className="nb-card bg-brand-yellow p-8 md:p-16 flex flex-col gap-8 relative z-10"
        >
          <div className="absolute -top-10 -right-4 bg-brand-blue text-white p-4 nb-border nb-shadow rotate-12">
            <Star className="w-8 h-8 fill-white" />
          </div>
          
          <div className="bg-white nb-border px-3 py-1 font-black text-xs tracking-widest w-max uppercase italic">
            {course.age}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black leading-none uppercase tracking-tighter">
            {course.title}
          </h1>
          
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
             <div className="bg-white nb-border nb-shadow-sm px-6 py-3 flex items-center gap-3 font-bold">
               <Clock className="w-5 h-5 text-brand-blue" /> {course.duration}
             </div>
             <div className="bg-white nb-border nb-shadow-sm px-6 py-3 flex items-center gap-3 font-bold">
               <Users className="w-5 h-5 text-brand-blue" /> {course.size}
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          className="relative aspect-square lg:aspect-auto h-full min-h-[400px] nb-border nb-shadow-lg overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1596495573458-185682881fe8?q=80&w=2066&auto=format&fit=crop" 
            alt="Coding class" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </section>

      {/* What You'll Learn */}
      <section className="flex flex-col gap-12">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-center tracking-tighter">
          <span className="bg-black text-white px-2 py-1 rotate-2 inline-block">What You'll</span> Learn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {course.topics.map((topic, idx) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn("nb-card flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-200", topic.color)}
            >
              <div className="bg-white nb-border nb-shadow-sm w-16 h-16 flex items-center justify-center">
                <topic.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-black tracking-tighter uppercase">{topic.title}</h3>
              <p className="text-lg font-medium leading-normal opacity-80">
                {topic.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA section (not in screenshot but logical for a details page) */}
      <section className="bg-brand-blue nb-card text-white flex flex-col md:flex-row items-center justify-between gap-12 p-12 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        <div className="flex flex-col gap-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">Ready to Enroll?</h2>
          <p className="text-xl font-medium max-w-lg opacity-90">Spots are limited for our next cohort starting Monday!</p>
        </div>
        <Link to="/contact" className="relative z-10 w-full md:w-auto">
          <Button variant="secondary" className="w-full md:w-auto text-xl py-6 px-12 group">
            Enroll Now <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
