import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Courses', id: 'courses' },
    { name: 'About Us', id: 'about' },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden underline-offset-4">
      {/* Navbar */}
      <nav 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-4 border-black",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
            : "bg-white py-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        )}
      >
        <div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-7xl mx-auto">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-2 transform hover:-rotate-2 transition-transform cursor-pointer"
          >
             <img 
               src="https://lh3.googleusercontent.com/aida/ADBb0ujk_u8Xtyb_Arcc9DdN-5dfmmUWYzNHz8v-0C2jJp3MfP9xKs4nU8-FHXSPhWKtQLkbgHkqq-2Yv4rzVBnqR3VfmCmxHxeRoZvHNb68o0BXC_Js2q1A_yN3l80U2HG85BnRB48RiIm3j4oonnuj98TSbblPkRJPdRB_BBwQKQhYyF9nuHk4K2s8LtZv2j397pRYtIhcU7pvWr96Hhgd_gXReW2epi3rtwN0Dzqdd7Mafhd9EWHcGfOCk4cMk0IpH3333StloDidfQ" 
               alt="DigiKidz Logo" 
               className="h-12 md:h-16 w-auto object-contain"
               referrerPolicy="no-referrer"
             />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 font-display font-bold uppercase tracking-tight">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-1 transition-all duration-150 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none text-black cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="font-display font-bold uppercase tracking-tight text-black hover:underline px-3 py-1">
              Login
            </button>
            <button 
              onClick={() => scrollToSection('register')} 
              className="bg-brand-blue text-white nb-button py-2 px-6"
            >
              Register
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 nb-border nb-shadow bg-white active:shadow-none translate-x-[2px] translate-y-[2px]"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b-4 border-black p-6 absolute top-20 left-0 w-full z-40">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="font-display font-bold uppercase text-left text-xl py-2 border-b-2 border-black last:border-b-0 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <button className="nb-button bg-white text-black text-center">Login</button>
                <button 
                  onClick={() => scrollToSection('register')} 
                  className="nb-button bg-brand-blue text-white text-center"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-[#FBF8FF] pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-blue border-t-4 border-black shadow-[0px_-8px_0px_0px_rgba(0,0,0,1)] text-black">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-16 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="transform hover:scale-105 transition-transform cursor-pointer"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0ujk_u8Xtyb_Arcc9DdN-5dfmmUWYzNHz8v-0C2jJp3MfP9xKs4nU8-FHXSPhWKtQLkbgHkqq-2Yv4rzVBnqR3VfmCmxHxeRoZvHNb68o0BXC_Js2q1A_yN3l80U2HG85BnRB48RiIm3j4oonnuj98TSbblPkRJPdRB_BBwQKQhYyF9nuHk4K2s8LtZv2j397pRYtIhcU7pvWr96Hhgd_gXReW2epi3rtwN0Dzqdd7Mafhd9EWHcGfOCk4cMk0IpH3333StloDidfQ" 
              alt="DigiKidz Logo" 
              className="h-14 md:h-20 w-auto"
              referrerPolicy="no-referrer"
            />
          </button>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-display font-bold uppercase text-sm md:text-base">
             {['Privacy', 'Terms', 'Safety', 'Support'].map(item => (
               <a key={item} href="#" className="hover:bg-white px-2 transition-colors">{item}</a>
             ))}
          </div>

          <div className="font-display font-bold tracking-tight text-center md:text-right text-sm md:text-base">
            © 2024 DigiKidz. Stay Bold.
          </div>
        </div>
      </footer>
    </div>
  );
}
