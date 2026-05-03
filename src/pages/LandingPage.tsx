import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, Bot, Palette, Sparkles, ArrowRight, 
  Puzzle, Users, PartyPopper, Star, Rocket,
  Lightbulb, CheckCircle2, Code, Gamepad2, Trophy,
  ChevronLeft, ChevronRight, X, Send
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

const COURSES = [
  {
    id: 'python-beginners',
    title: 'Python for Beginners',
    description: 'Start your coding journey by building simple games and animations with Python.',
    age: '8-11 YRS',
    level: 'BEGINNER',
    category: 'Coding',
    color: 'bg-brand-pink/60',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 'robo-builders-2',
    title: 'Robo Builders II',
    description: 'Take your mechanical engineering skills to the next level with advanced sensors.',
    age: '12-15 YRS',
    level: 'INTERMEDIATE',
    category: 'Robotics',
    color: 'bg-brand-blue/20',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '2d-pixel-worlds',
    title: '2D Pixel Worlds',
    description: 'Design your own characters and build playable retro-style arcade games.',
    age: '8-11 YRS',
    level: 'ALL LEVELS',
    category: 'Game Design',
    color: 'bg-brand-yellow',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'creative-canvas',
    title: 'Creative Canvas',
    description: 'An introduction to digital painting and drawing on tablets for young creators.',
    age: '5-7 YRS',
    level: 'BEGINNER',
    category: 'Digital Art',
    color: 'bg-gray-100',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop',
  },
];

export function LandingPage() {
  const [formStep, setFormStep] = useState<'form' | 'success'>('form');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    { title: 'Coding', description: 'Master the languages of the future.', icon: Terminal, color: 'bg-brand-blue/20', iconColor: 'text-brand-blue', span: 'col-span-1' },
    { title: 'Robotics', description: 'Build and program mechanical companions.', icon: Bot, color: 'bg-brand-yellow', iconColor: 'text-black', span: 'md:col-span-2', badge: 'POPULAR' },
    { title: 'Digital Art', description: 'Unleash creativity with pixels and vectors.', icon: Palette, color: 'bg-brand-pink', iconColor: 'text-black', span: 'col-span-1' },
    { title: 'New Courses Added Weekly!', description: '', icon: Sparkles, color: 'bg-white', iconColor: 'text-brand-blue', span: 'md:col-span-2', isPromo: true },
  ];

  const values = [
    { title: 'Blast Off', description: "Epic quests instead of boring drills.", icon: Rocket, color: 'bg-brand-pink', span: 'col-span-1', rotate: '-rotate-2' },
    { title: 'Connected Learning', description: "We mix coding with art, math with storytelling.", icon: Puzzle, color: 'bg-brand-blue/30', span: 'md:col-span-2', rotate: 'rotate-1' },
    { title: 'Community First', description: "Collaborate and share in a safe environment.", icon: Users, color: 'bg-brand-green', span: 'md:col-span-2', rotate: '-rotate-1' },
    { title: 'Celebrate Failure', description: "Every bug is a feature waiting to be fixed.", icon: PartyPopper, color: 'bg-brand-yellow', span: 'col-span-1', rotate: 'rotate-2' },
  ];

  const team = [
    { name: 'Sarah J.', role: 'Chief Storyteller', desc: 'Turns logic into bedtime stories.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Marcus T.', role: 'Code Ninja', desc: 'Kid gibberish into Python.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', highlight: true },
    { name: 'Elena R.', role: 'Design Wizard', desc: 'Awesome and loud designs.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Bot-5000', role: 'Mascot', desc: 'Max fun levels. Beep boop.', icon: '🤖', color: 'bg-brand-orange' },
  ];

  const benefits = [
    { title: 'Hands-on Learning', desc: 'Actual building, coding, and creating.', icon: Puzzle, color: 'bg-brand-blue' },
    { title: 'Awesome Community', desc: 'Meet other tech-savvy kids.', icon: Users, color: 'bg-brand-yellow' },
    { title: 'Real Skills', desc: 'Tools the pros use, simplified.', icon: Trophy, color: 'bg-brand-orange' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const parentName = formData.get('parentName') as string;
    const kidName = formData.get('kidName') as string;
    const email = formData.get('email') as string;

    const newErrors: Record<string, string> = {};
    if (!parentName) newErrors.parentName = 'Required!';
    if (!kidName) newErrors.kidName = "Required!";
    if (!email || !email.includes('@')) newErrors.email = 'Valid email is required!';
    if (!selectedCourse) newErrors.course = 'Pick one!';

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
      {/* Hero Section */}
      <section id="hero" className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center min-h-[auto] lg:min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] tracking-tight uppercase text-brand-yellow" style={{ textShadow: '4px 4px 0px #000' }}>
            <span className="text-brand-blue">Learn, Create, & Play</span> the DigiKidz Way!
          </h1>
          <p className="text-lg md:text-2xl font-medium text-gray-700 max-w-xl">
            Interactive courses that make technology fun and accessible for the next generation of creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={() => scrollToSection('courses')} variant="primary" className="w-full sm:w-auto text-lg py-5 px-10">
              View Courses
            </Button>
            <Button onClick={() => scrollToSection('register')} variant="secondary" className="w-full sm:w-auto text-lg py-5 px-10">
              Register Now
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 2, scale: 1 }}
          className="relative aspect-video lg:aspect-square bg-brand-yellow nb-border nb-shadow-lg overflow-hidden group order-1 lg:order-2 mx-auto lg:ml-auto w-full max-w-lg lg:max-w-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2132&auto=format&fit=crop" 
            alt="DigiKidz Classroom" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </section>

      {/* Bento Search/Features Section */}
      <section id="worlds" className="flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <div className="bg-black text-white p-2 nb-border nb-shadow rotate-3">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Explore Our Worlds</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
                    Explore <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4 py-6 md:py-8">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
                  <h3 className="text-3xl sm:text-4xl lg:text-7xl font-display font-black uppercase tracking-widest text-brand-blue relative z-10">{cat.title}</h3>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="flex flex-col gap-10 md:gap-16 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b-8 border-black pb-8">
          <h2 className="text-4xl md:text-8xl font-display font-black uppercase tracking-tight">Level Up!</h2>
          <div className="bg-brand-yellow border-4 border-black px-4 md:px-6 py-2 font-black text-xl md:text-2xl nb-shadow self-start md:self-auto">COURSE CATALOG</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {COURSES.map((course, idx) => (
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
                  Learn More <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About/Mission Section */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-24">
        <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-brand-yellow px-4 py-1 nb-border nb-shadow w-max font-bold text-xs md:text-sm tracking-widest rotate-[-1deg]">
            <Star className="w-4 h-4 fill-black" /> OUR MISSION
          </div>
          <h2 className="text-3xl md:text-7xl font-display font-black leading-[1.1] tracking-tight uppercase">
            Making Education <br />
            <span className="bg-brand-blue text-white px-3 md:px-4 py-1 inline-block -rotate-2 nb-border nb-shadow">Seriously Fun</span>
          </h2>
          <p className="text-lg md:text-2xl font-medium text-gray-700 max-w-xl">
             We ignite curiosity through interactive, high-energy digital experiences that kids actually want to play.
          </p>
        </div>
        <div className="relative aspect-square bg-brand-yellow nb-border nb-shadow-lg overflow-hidden group rotate-0 lg:rotate-2 order-1 lg:order-2 max-w-md mx-auto lg:ml-auto w-full">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
            alt="Mission" 
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
          />
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-brand-orange text-white nb-border nb-shadow px-6 md:px-8 py-3 md:py-4 rotate-12 font-display font-black text-2xl md:text-4xl shrink-0">BAM!</div>
        </div>
      </section>

      {/* Values Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {values.map((v, idx) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn("nb-card group p-8 md:p-10 flex flex-col gap-6", v.color, v.span, v.rotate)}
          >
            <div className="bg-white nb-border nb-shadow w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0 rounded-full group-hover:rotate-12 transition-transform">
              <v.icon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter">{v.title}</h3>
            <p className="text-base md:text-lg leading-relaxed font-medium">{v.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Registration Form Section */}
      <section id="register" className="flex flex-col md:flex-row gap-10 md:gap-12 items-start scroll-mt-24">
        <div className="w-full md:w-[60%] nb-card bg-white p-6 md:p-16 relative">
          <div className="absolute -top-6 -right-2 md:-top-10 md:-right-4 bg-brand-yellow text-black border-4 border-black p-3 md:p-4 rotate-12 nb-shadow font-display font-black text-xl md:text-3xl z-20">JOIN US!</div>
          <AnimatePresence mode="wait">
            {formStep === 'form' ? (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-8 md:gap-10">
                <div className="flex flex-col gap-3 md:gap-4">
                  <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black uppercase tracking-tight leading-none">Enroll Now!</h2>
                  <p className="text-lg md:text-xl font-medium opacity-80">Ready to build the future? Join the crew today.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-black uppercase text-[10px] md:text-xs tracking-widest opacity-60">Parent Name</label>
                      <input name="parentName" className="w-full nb-border p-3 md:p-4 font-bold bg-[#FBF8FF] outline-none text-sm md:text-base" placeholder="Jane Doe" />
                      {errors.parentName && <span className="text-brand-orange font-black text-[10px] md:text-xs uppercase">{errors.parentName}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-black uppercase text-[10px] md:text-xs tracking-widest opacity-60">Kid's Name</label>
                        <input name="kidName" className="w-full nb-border p-3 md:p-4 font-bold bg-[#FBF8FF] outline-none text-sm md:text-base" placeholder="Alex" />
                        {errors.kidName && <span className="text-brand-orange font-black text-[10px] md:text-xs uppercase">{errors.kidName}</span>}
                      </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-black uppercase text-[10px] md:text-xs tracking-widest opacity-60">Email</label>
                    <input name="email" type="email" className="w-full nb-border p-3 md:p-4 font-bold bg-[#FBF8FF] outline-none text-sm md:text-base" placeholder="jane@example.com" />
                    {errors.email && <span className="text-brand-orange font-black text-[10px] md:text-xs uppercase">{errors.email}</span>}
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <label className="font-black uppercase text-[10px] md:text-xs tracking-widest opacity-60">Pick Adventure</label>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {['Robotics', 'Coding', 'Art', 'Game Design'].map(name => (
                        <button
                          key={name}
                          type="button"
                          onClick={() => setSelectedCourse(name)}
                          className={cn("nb-border p-3 md:p-5 text-xs md:text-sm font-black uppercase tracking-tight transition-all", selectedCourse === name ? "bg-brand-yellow nb-shadow -translate-y-1" : "bg-gray-50 opacity-70")}
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                    {errors.course && <span className="text-brand-orange font-black text-[10px] md:text-xs uppercase">{errors.course}</span>}
                  </div>
                  <Button variant="orange" type="submit" className="py-6 md:py-8 gap-3 md:gap-4 group">
                    <span className="text-xl sm:text-2xl md:text-3xl font-display font-black uppercase">Submit & Join!</span>
                    <Rocket className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-125 transition-transform" />
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div key="success" className="flex flex-col items-center text-center gap-6 md:gap-8 py-12 md:py-20">
                <div className="bg-brand-green p-4 md:p-6 nb-border nb-shadow -rotate-6"><CheckCircle2 className="w-12 h-12 md:w-20 md:h-20 text-white" /></div>
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase">You're In!</h2>
                <p className="text-lg md:text-xl font-medium opacity-80 max-w-sm">We've received your application. The crew will reach out soon!</p>
                <Button onClick={() => setFormStep('form')} variant="outline" className="px-8">Start Over</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <aside className="w-full md:w-[40%] flex flex-col gap-8">
           <div className="nb-card bg-gray-100 p-6 md:p-8 flex flex-col gap-6 md:gap-8">
              <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight border-b-4 border-black pb-4">Why Us?</h2>
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

      {/* Team Section */}
      <section className="flex flex-col gap-8 md:gap-12 pb-12">
        <h2 className="text-4xl md:text-8xl font-display font-black uppercase tracking-tight">The Crew</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((m) => (
            <div key={m.name} className={cn("nb-card p-0 overflow-hidden group flex flex-col", m.highlight && "md:translate-y-6 lg:translate-y-8")}>
              <div className={cn("h-56 md:h-64 border-b-4 border-black relative overflow-hidden", m.color || "bg-gray-200")}>
                {m.image ? <img src={m.image} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" /> : <div className="w-full h-full flex items-center justify-center text-6xl md:text-7xl font-sans">{m.icon}</div>}
              </div>
              <div className={cn("p-5 md:p-6 flex flex-col gap-1 flex-grow", m.highlight ? "bg-brand-yellow" : "bg-white")}>
                <h4 className="text-xl md:text-2xl font-display font-black">{m.name}</h4>
                <p className="text-brand-blue font-black uppercase text-[10px] md:text-xs tracking-widest">{m.role}</p>
                <p className="text-xs md:text-sm font-medium mt-2 leading-snug">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
