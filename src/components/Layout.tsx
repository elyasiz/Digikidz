import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
  ];

  const programLinks = [
    { name: 'Program Overview', path: '/programs' },
    { name: 'Little Creator', path: '/programs/little-creator' },
    { name: 'Junior Creator', path: '/programs/junior-creator' },
    { name: 'Teen Creator', path: '/programs/teen-creator' },
    { name: 'Tech Academy', path: '/programs/tech-academy' },
    { name: 'Robotics', path: '/programs/robotics' },
    { name: 'Game Dev', path: '/programs/game-development' },
    { name: 'Web Dev', path: '/programs/web-development' },
  ];

  const moreLinks = [
    { name: 'School Partnership', path: '/school-partnership' },
    { name: 'Holiday Camp', path: '/holiday-camp' },
    { name: 'Events', path: '/events' },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden underline-offset-4">
      {/* Navbar */}
      <nav 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-4 border-black",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
            : "bg-white py-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        )}
      >
        <div className="flex justify-between items-center h-20 px-4 md:px-12 max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="flex items-center gap-2 transform hover:-rotate-2 transition-transform cursor-pointer shrink-0"
          >
             <img 
               src="/logo.png" 
               alt="DigiKidz Logo" 
               className="h-10 md:h-16 w-auto object-contain"
             />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 font-display font-bold uppercase tracking-tight text-sm xl:text-base">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => cn(
                  "px-3 py-1 transition-all duration-150 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none text-black",
                  isActive && link.path === location.pathname ? "bg-brand-yellow border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1" : "border-2 border-transparent"
                )}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Programs Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button 
                className={cn(
                  "flex items-center gap-1 px-3 py-1 transition-all duration-150 border-2 border-transparent hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black",
                  location.pathname.includes('/programs') ? "bg-brand-blue text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1" : ""
                )}
              >
                Programs <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProgramsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col py-2 z-50">
                  {programLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) => cn(
                        "px-4 py-2 hover:bg-brand-yellow hover:translate-x-2 transition-all border-b-2 border-transparent hover:border-black font-bold uppercase",
                        isActive && link.path === location.pathname ? "bg-brand-yellow border-black" : ""
                      )}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {moreLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => cn(
                  "px-3 py-1 transition-all duration-150 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none text-black",
                  isActive && link.path === location.pathname ? "bg-brand-pink border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1" : "border-2 border-transparent"
                )}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link to="/contact-us" className="bg-brand-green text-black border-2 border-black font-display font-bold uppercase px-4 py-2 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 nb-border nb-shadow bg-white active:shadow-none translate-x-[2px] translate-y-[2px]"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b-4 border-black p-6 absolute top-20 left-0 w-full z-40 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              {[...navLinks, {name: 'PROGRAMS ⬇', path: '#'}].map((link) => (
                link.path === '#' ? (
                  <div key="programs" className="flex flex-col gap-2 border-b-2 border-black pb-2">
                     <span className="font-display font-bold uppercase text-xl text-brand-blue">Programs</span>
                     <div className="pl-4 flex flex-col gap-2">
                       {programLinks.map(pl => (
                          <NavLink key={pl.name} to={pl.path} className="font-display font-bold uppercase text-base hover:text-brand-pink">{pl.name}</NavLink>
                       ))}
                     </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="font-display font-bold uppercase text-left text-xl py-2 border-b-2 border-black last:border-b-0"
                  >
                    {link.name}
                  </NavLink>
                )
              ))}
              {moreLinks.map(link => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="font-display font-bold uppercase text-left text-xl py-2 border-b-2 border-black last:border-b-0"
                  >
                    {link.name}
                  </NavLink>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Link to="/contact-us" className="nb-button bg-brand-green text-black text-center">Hubungi Kami</Link>
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
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-10">
            <div className="md:col-span-2 flex flex-col gap-4">
              <Link to="/" className="transform hover:scale-105 transition-transform cursor-pointer w-max">
                <img src="/logo.png" alt="DigiKidz Logo" className="h-16 w-auto bg-white p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]" />
              </Link>
              <p className="text-white font-medium text-lg max-w-sm mt-4">
                Lembaga edukasi teknologi terdepan untuk anak dan remaja. Kami berdedikasi mencetak generasi inovator masa depan melalui metode belajar interaktif dan project-based.
              </p>
            </div>
            <div className="flex flex-col gap-4">
               <h3 className="text-xl font-display font-black uppercase text-brand-yellow underline decoration-4 underline-offset-4">Jelajahi</h3>
               <div className="flex flex-col gap-2 font-bold uppercase">
                  <Link to="/" className="text-white hover:text-brand-yellow hover:translate-x-2 transition-all w-max">Home</Link>
                  <Link to="/about-us" className="text-white hover:text-brand-yellow hover:translate-x-2 transition-all w-max">About Us</Link>
                  <Link to="/programs" className="text-white hover:text-brand-yellow hover:translate-x-2 transition-all w-max">Programs</Link>
                  <Link to="/student-projects" className="text-white hover:text-brand-yellow hover:translate-x-2 transition-all w-max">Student Projects</Link>
               </div>
            </div>
            <div className="flex flex-col gap-4">
               <h3 className="text-xl font-display font-black uppercase text-brand-yellow underline decoration-4 underline-offset-4">Kemitraan</h3>
               <div className="flex flex-col gap-2 font-bold uppercase">
                  <Link to="/school-partnership" className="text-white hover:text-brand-yellow hover:translate-x-2 transition-all w-max">School Partnership</Link>
                  <Link to="/holiday-camp" className="text-white hover:text-brand-yellow hover:translate-x-2 transition-all w-max">Holiday Camp</Link>
                  <Link to="/events" className="text-white hover:text-brand-yellow hover:translate-x-2 transition-all w-max">Events</Link>
                  <Link to="/contact-us" className="text-white hover:text-brand-yellow hover:translate-x-2 transition-all w-max">Contact Us</Link>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t-4 border-black text-white font-bold uppercase text-sm">
             <div className="flex gap-4">
               <a href="#" className="hover:text-brand-yellow">Privacy Policy</a>
               <a href="#" className="hover:text-brand-yellow">Terms of Service</a>
             </div>
             <div className="text-center md:text-right">
               © {new Date().getFullYear()} DIGIKIDZ. Mendidik Inovator Masa Depan.
             </div>
          </div>
        </div>
      </footer>
      
      {/* Floating CTA */}
      <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-brand-green border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 rounded-full hover:scale-110 hover:-rotate-12 transition-transform group">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}
