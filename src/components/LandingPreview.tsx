/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from "react";
import { CopyBlueprint, Testimonial } from "../types";
import { LANDING_SECTIONS, TESTIMONIALS_DATA, FAQS } from "../data";
import BrilloLogo from "./BrilloLogo";
import { 
  Moon, 
  MapPin, 
  Sparkles, 
  Heart, 
  Frown, 
  FileText, 
  Users, 
  Check, 
  Clock, 
  Compass, 
  HeartHandshake, 
  Smile, 
  ChevronDown, 
  ChevronRight,
  Star,
  BookOpen,
  HelpCircle,
  Phone,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Award,
  Activity,
  XCircle,
  CheckCircle,
  Calendar,
  Info,
  Sprout,
  MessageSquare,
  Utensils,
  GraduationCap,
  Leaf
} from "lucide-react";

interface LandingPreviewProps {
  selectedSectionId: string;
  onSectionClick: (id: string) => void;
  bookingFormRef: React.RefObject<HTMLDivElement | null>;
  openBookingModal: () => void;
  previewModeOnly?: boolean;
}

export default function LandingPreview({
  selectedSectionId,
  onSectionClick,
  bookingFormRef,
  openBookingModal,
  previewModeOnly = false
}: LandingPreviewProps) {
  
  // --- STATE FOR INTERACTIVE VSL (Video Sales Letter) ---
  const [vslPlaying, setVslPlaying] = React.useState(false);
  const [vslProgress, setVslProgress] = React.useState(0);
  const [vslMuted, setVslMuted] = React.useState(false);
  const [vslSpeed, setVslSpeed] = React.useState(1);
  const [vslSlide, setVslSlide] = React.useState(0);

  // --- STATE FOR INTERACTIVE COMPATIBILITY ASSESSMENT / QUIZ ---
  const [quizStep, setQuizStep] = React.useState(0); // 0 = Not started, 1 = Q1, 2 = Q2, 3 = Q3, 4 = Result
  const [quizAnswers, setQuizAnswers] = React.useState({
    level: "",
    hours: "",
    concern: ""
  });

  const vslSlides = [
    {
      title: "El estrés escolar en Popayán",
      subtitle: "¿Tu hijo sufre por las exigencias del sistema?",
      caption: "Muchos niños en Popayán experimentan altos niveles de ansiedad debido a tareas infinitas y ritmos de fábrica.",
      bg: "bg-gradient-to-br from-[#101F1C] to-[#1E3833]",
      illustration: "sad",
      image: "https://lh3.googleusercontent.com/d/10fJdpVUvaniHzmcJRQUH5D5hX3bLOtPA"
    },
    {
      title: "Homeschooling Legal y Seguro",
      subtitle: "Total validez oficial en Colombia",
      caption: "La ley colombiana avala plenamente educar en casa. Brillo de Luna provee el respaldo institucional que necesitas.",
      bg: "bg-gradient-to-br from-[#1E3833] to-[#305E56]",
      illustration: "legal",
      image: "https://lh3.googleusercontent.com/d/1BdL2sD8Kt4uyEUi3FzbSc9Dx9FYShZZj"
    },
    {
      title: "Pedagogía con Amor y Sentido",
      subtitle: "Aprendizaje vivencial real",
      caption: "Nuestra metodología integra proyectos activos, cocina, huertas y artes para aprender haciendo, sin memorización vacía.",
      bg: "bg-gradient-to-br from-[#305E56] to-[#488A7E]",
      illustration: "love",
      image: "https://lh3.googleusercontent.com/d/1xijdt4Cz9iGIuNV8F-Y8-9Ds-TaJc9lb"
    },
    {
      title: "Socialización Sana Garantizada",
      subtitle: "Comunidad activa en Popayán",
      caption: "Fomentamos encuentros, salidas a la naturaleza y clubes colaborativos libres de acoso y presiones de grupo.",
      bg: "bg-gradient-to-br from-[#488A7E] to-[#589D91]",
      illustration: "group",
      image: "https://lh3.googleusercontent.com/d/1y-CmJlP7nXlIALB4h5m4mv0x6b7JZIc6"
    },
    {
      title: "Recupera la paz en tu hogar",
      subtitle: "Diseñemos tu Ruta de Luz gratis",
      caption: "Tu hijo merece brillar. Agenda tu asesoría de 30 minutos sin costo para dar una transición feliz.",
      bg: "bg-gradient-to-br from-[#589D91] to-[#1A2A27]",
      illustration: "cta",
      image: "https://lh3.googleusercontent.com/d/1P_UYz7WLKV5Zbzoh1K-nmylPX8wWb2jg"
    }
  ];

  // Auto play progress for the VSL presentation
  useEffect(() => {
    let interval: any = null;
    if (vslPlaying) {
      interval = setInterval(() => {
        setVslProgress((prev) => {
          const increment = 1.0 * vslSpeed;
          const next = prev + increment;
          if (next >= 100) {
            setVslProgress(0);
            setVslSlide((prevSlide) => (prevSlide + 1) % vslSlides.length);
            return 0;
          }
          return next;
        });
      }, 100);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [vslPlaying, vslSpeed]);

  // Synchronize active slide based on total progress bar
  useEffect(() => {
    if (vslPlaying) {
      const activeSlide = Math.min(
        Math.floor((vslProgress / 100) * vslSlides.length),
        vslSlides.length - 1
      );
      if (activeSlide !== vslSlide) {
        setVslSlide(activeSlide);
      }
    }
  }, [vslProgress]);

  // Create refs for each section to support interactive scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const painRef = useRef<HTMLDivElement>(null);
  const esenciaRef = useRef<HTMLDivElement>(null);
  const programasRef = useRef<HTMLDivElement>(null);
  const sistemaRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const filosofiaRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const howRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  const getRef = (id: string) => {
    switch(id) {
      case 'hero': return heroRef;
      case 'pain': return painRef;
      case 'esencia': return esenciaRef;
      case 'programas': return programasRef;
      case 'sistema': return sistemaRef;
      case 'solution': return solutionRef;
      case 'filosofia': return filosofiaRef;
      case 'pillars': return pillarsRef;
      case 'how-it-works': return howRef;
      case 'testimonials': return testimonialsRef;
      case 'closing': return closingRef;
      default: return null;
    }
  };

  // Scroll to section when selected from outside (Console)
  useEffect(() => {
    const handleScroll = () => {
      const activeRef = getRef(selectedSectionId);
      if (activeRef && activeRef.current) {
        activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    // Give a short timeout for loading/transitions
    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, [selectedSectionId]);

  // Render proper icon for pain points
  const renderPainIcon = (iconName?: string) => {
    switch (iconName) {
      case "Frown": return <Frown className="w-6 h-6 text-red-500" />;
      case "FileText": return <FileText className="w-6 h-6 text-amber-500" />;
      case "Users": return <Users className="w-6 h-6 text-orange-500" />;
      default: return <Frown className="w-6 h-6 text-red-500" />;
    }
  };

  // Render proper icon for pillars
  const renderPillarIcon = (iconName?: string) => {
    switch (iconName) {
      case "Clock": return <Clock className="w-6 h-6 text-brand-green" />;
      case "Compass": return <Compass className="w-6 h-6 text-brand-green" />;
      case "HeartHandshake": return <HeartHandshake className="w-6 h-6 text-brand-green" />;
      case "Smile": return <Smile className="w-6 h-6 text-brand-green" />;
      default: return <Smile className="w-6 h-6 text-brand-green" />;
    }
  };

  return (
    <div 
      className={`bg-brand-cream text-gray-800 flex flex-col w-full relative ${
        previewModeOnly ? "rounded-none border-none shadow-none" : "rounded-3xl border border-brand-green/15 shadow-2xl overflow-hidden"
      }`} 
      id="landing-preview-container"
    >
      
      {/* 1. TOP HEADER / BRAND NAVIGATION */}
      <header className="bg-brand-cream/95 backdrop-blur-md sticky top-0 z-40 px-6 py-3 border-b border-brand-green/10 flex items-center justify-between">
        <BrilloLogo layout="horizontal" size="sm" className="hover:scale-[1.02] transition-transform" />

        <nav className="hidden md:flex items-center gap-5 text-[11px] uppercase tracking-wider font-bold opacity-80">
          <button onClick={() => onSectionClick('esencia')} className="hover:text-brand-green transition-colors cursor-pointer">Esencia</button>
          <button onClick={() => onSectionClick('programas')} className="hover:text-brand-green transition-colors cursor-pointer">Programas</button>
          <button onClick={() => onSectionClick('sistema')} className="hover:text-brand-green transition-colors cursor-pointer">Sistema</button>
          <button onClick={() => onSectionClick('solution')} className="hover:text-brand-green transition-colors cursor-pointer">Propuesta</button>
          <button onClick={() => onSectionClick('filosofia')} className="hover:text-brand-green transition-colors cursor-pointer">Filosofía</button>
          <button onClick={() => onSectionClick('how-it-works')} className="hover:text-brand-green transition-colors cursor-pointer">Admisiones</button>
          <button onClick={() => onSectionClick('testimonials')} className="hover:text-brand-green transition-colors cursor-pointer">Testimonios</button>
        </nav>

        <div className="flex items-center gap-2">
          <button 
            onClick={openBookingModal}
            className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contacto</span>
          </button>
        </div>
      </header>

      {/* LANDING CONTENT */}
      <div className={previewModeOnly ? "flex-1" : "flex-1 overflow-y-auto max-h-[80vh]"}>

        {/* SECTION 1: HERO */}
        <section 
          ref={heroRef}
          onClick={!previewModeOnly ? () => onSectionClick('hero') : undefined}
          className={`relative px-6 py-14 md:py-20 bg-gradient-to-b from-brand-cream via-brand-green-light/20 to-brand-cream border-b-4 transition-all ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'hero' ? 'border-brand-green bg-brand-green-light/30' : 'border-transparent'
          }`}
          id="hero-preview"
        >
          {/* Analyze strategy badge floating */}
          {!previewModeOnly && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-brand-green-light text-brand-green hover:bg-brand-green/20 text-[10px] font-mono uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-brand-green/30 shadow-sm transition-all">
                <Sparkles className="w-3 h-3 animate-spin" />
                <span>Ver Estrategia de Copy</span>
              </span>
            </div>
          )}

          <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center" id="hero-layout-grid">
            <div className="md:col-span-7 space-y-5">
              <span className="inline-block bg-brand-green-light/80 text-brand-green text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase font-mono">
                ✨ {LANDING_SECTIONS[0].content.kicker}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark leading-tight">
                El aprendizaje de tus hijos no tiene por qué ser una <span className="italic text-brand-green">fuente de estrés</span> diario.
              </h1>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {LANDING_SECTIONS[0].content.subheadline}
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    openBookingModal();
                  }}
                  className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{LANDING_SECTIONS[0].content.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <p className="text-[11px] text-gray-500 font-medium flex items-center gap-1.5 font-mono">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-green" />
                {LANDING_SECTIONS[0].content.microcopy}
              </p>
            </div>

            <div className="md:col-span-5 flex justify-center">
              {/* INTERACTIVE VSL PLAYER CONTAINER */}
              <div 
                className="w-full bg-brand-dark/95 border-2 border-brand-green/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative aspect-[4/3] max-w-[400px] select-none"
                onClick={(e) => {
                  e.stopPropagation();
                  setVslPlaying(!vslPlaying);
                }}
              >
                {/* VSL HEADER TAB */}
                <div className="bg-brand-dark/80 px-4 py-2 border-b border-white/5 flex items-center justify-between text-[9px] text-gray-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                    <span className="text-white font-bold uppercase tracking-wider text-[8px]">PRESENTACIÓN INTERACTIVA</span>
                  </div>
                  <span>Duración: 4:12</span>
                </div>

                {/* ACTIVE SLIDE DISPLAY PANEL */}
                <div 
                  className="flex-1 flex flex-col items-center justify-center p-5 text-center text-white relative transition-all duration-500 overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `linear-gradient(rgba(16, 31, 28, 0.72), rgba(16, 31, 28, 0.72)), url(${vslSlides[vslSlide].image})` }}
                >
                  
                  {/* Floating particles or stars for brand theme */}
                  <div className="absolute top-3 right-3 text-brand-gold/30 text-lg animate-pulse">★</div>
                  <div className="absolute bottom-5 left-5 text-brand-green-light/20 text-xl">★</div>

                  {/* Play Overlay if paused */}
                  {!vslPlaying && (
                    <div className="absolute inset-0 bg-brand-dark/75 backdrop-blur-[2px] z-25 flex flex-col items-center justify-center gap-2 transition-all">
                      <div className="w-14 h-14 rounded-full bg-brand-green text-white flex items-center justify-center shadow-lg transform scale-105 hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white/20">
                        <Play className="w-6 h-6 fill-white text-white ml-1" />
                      </div>
                      <span className="text-[10px] font-mono uppercase text-brand-gold/90 tracking-widest font-bold px-3 py-1 rounded-full bg-brand-dark/60 border border-white/10 mt-1">
                        Ver video del método • 10m
                      </span>
                    </div>
                  )}

                  {/* ILLUSTRATIONS BASED ON ACTIVE SLIDE */}
                  <div className="flex-1 flex flex-col items-center justify-center space-y-3 pt-2">
                    {vslSlides[vslSlide].illustration === "sad" && (
                      <div className="relative">
                        <Frown className="w-14 h-14 text-red-300 stroke-[1.5]" />
                        <span className="absolute -top-1 -right-1 text-xs">🎒⚡</span>
                      </div>
                    )}
                    {vslSlides[vslSlide].illustration === "legal" && (
                      <div className="relative">
                        <Award className="w-14 h-14 text-yellow-300 stroke-[1.5]" />
                        <span className="absolute -bottom-1 -right-2 text-xs">🇨🇴📜</span>
                      </div>
                    )}
                    {vslSlides[vslSlide].illustration === "love" && (
                      <div className="relative">
                        <BrilloLogo layout="icon-only" size="sm" className="animate-pulse" />
                        <span className="absolute -bottom-1 -right-2 text-xs">🌱🎨</span>
                      </div>
                    )}
                    {vslSlides[vslSlide].illustration === "group" && (
                      <div className="relative">
                        <Users className="w-14 h-14 text-teal-300 stroke-[1.5]" />
                        <span className="absolute -top-1 -right-2 text-xs">🏞️🤝</span>
                      </div>
                    )}
                    {vslSlides[vslSlide].illustration === "cta" && (
                      <div className="relative flex flex-col items-center gap-1">
                        <Smile className="w-12 h-12 text-brand-green-light stroke-[1.5] animate-bounce" />
                        <span className="text-[10px] bg-brand-green text-white font-bold font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          CHARLA SIN COSTO
                        </span>
                      </div>
                    )}

                    {/* Slide Text */}
                    <div className="space-y-1 px-2 z-10">
                      <h4 className="text-[9px] font-mono font-bold text-brand-gold/90 uppercase tracking-widest">
                        {vslSlides[vslSlide].title}
                      </h4>
                      <p className="font-serif text-sm font-bold text-white leading-tight">
                        {vslSlides[vslSlide].subtitle}
                      </p>
                    </div>
                  </div>

                  {/* CAPTIONS / REALTIME SUBTITLES */}
                  <div className="w-full bg-black/45 backdrop-blur-sm border-t border-white/5 py-2 px-3 text-[10px] min-h-[44px] flex items-center justify-center text-brand-green-light/95 leading-normal italic select-text">
                    "{vslSlides[vslSlide].caption}"
                  </div>
                </div>

                {/* TIMELINE PROGRESS BAR (Seekable!) */}
                <div 
                  className="bg-gray-800 h-1.5 relative cursor-pointer group"
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const percentage = Math.min(Math.max((clickX / rect.width) * 100, 0), 100);
                    setVslProgress(percentage);
                    // Force update slide based on new click location
                    const activeSlide = Math.min(
                      Math.floor((percentage / 100) * vslSlides.length),
                      vslSlides.length - 1
                    );
                    setVslSlide(activeSlide);
                  }}
                >
                  <div 
                    className="bg-brand-green h-full absolute left-0 top-0 transition-all duration-100 ease-out"
                    style={{ width: `${vslProgress}%` }}
                  />
                  {/* Pulsing indicator button on progress */}
                  <div 
                    className="w-3 h-3 rounded-full bg-brand-gold absolute -top-1 border border-white opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ left: `calc(${vslProgress}% - 6px)` }}
                  />
                </div>

                {/* VSL CONTROLS BAR */}
                <div 
                  className="bg-brand-dark px-4 py-2 flex items-center justify-between text-xs text-white/95"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Play & Mute Button Controls */}
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setVslPlaying(!vslPlaying)}
                      className="hover:text-brand-green transition-colors text-white cursor-pointer"
                    >
                      {vslPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    
                    <button 
                      onClick={() => setVslMuted(!vslMuted)}
                      className="hover:text-brand-green transition-colors text-white cursor-pointer"
                    >
                      {vslMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    {/* Animated Equalizer Visualizer when playing and not muted */}
                    {vslPlaying && !vslMuted && (
                      <div className="flex items-end gap-0.5 h-3">
                        <span className="w-0.5 bg-brand-green animate-[bounce_0.8s_infinite_100ms]" style={{ height: '60%' }} />
                        <span className="w-0.5 bg-brand-green animate-[bounce_0.6s_infinite_300ms]" style={{ height: '100%' }} />
                        <span className="w-0.5 bg-brand-green animate-[bounce_0.7s_infinite_0ms]" style={{ height: '40%' }} />
                        <span className="w-0.5 bg-brand-green animate-[bounce_0.5s_infinite_400ms]" style={{ height: '80%' }} />
                      </div>
                    )}
                  </div>

                  {/* Timeline progress indexes */}
                  <div className="flex gap-1.5 items-center">
                    {vslSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setVslSlide(idx);
                          setVslProgress((idx / vslSlides.length) * 100 + 2);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${vslSlide === idx ? 'bg-brand-gold w-3' : 'bg-gray-600 hover:bg-gray-400'}`}
                        title={`Diapositiva ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Playback speed selector */}
                  <div className="flex items-center gap-2 font-mono text-[9px] text-gray-400">
                    <span className="hidden sm:inline">Velocidad:</span>
                    <button 
                      onClick={() => {
                        const speeds = [1, 1.25, 1.5, 2];
                        const nextIndex = (speeds.indexOf(vslSpeed) + 1) % speeds.length;
                        setVslSpeed(speeds[nextIndex]);
                      }}
                      className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded font-bold transition-all text-white cursor-pointer"
                    >
                      {vslSpeed}x
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PAIN SECTION (El problema) */}
        <section 
          ref={painRef}
          onClick={!previewModeOnly ? () => onSectionClick('pain') : undefined}
          className={`relative px-6 py-12 bg-brand-green-light/10 border-b-4 transition-all ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'pain' ? 'border-brand-green bg-brand-green-light/20' : 'border-transparent'
          }`}
          id="pain-preview"
        >
          {/* Analyze strategy badge floating */}
          {!previewModeOnly && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-brand-green-light text-brand-green hover:bg-brand-green/20 text-[10px] font-mono uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-brand-green/30 shadow-sm transition-all">
                <Sparkles className="w-3 h-3" />
                <span>Ver Estrategia de Copy</span>
              </span>
            </div>
          )}

          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold text-brand-ochre uppercase tracking-widest block">
                {LANDING_SECTIONS[1].content.kicker}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-dark max-w-2xl mx-auto leading-tight">
                ¿Sientes que el sistema tradicional <span className="italic text-brand-green">apaga la curiosidad</span> natural de tu hijo?
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                {LANDING_SECTIONS[1].content.subheadline}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {LANDING_SECTIONS[1].content.items?.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-brand-cream border border-brand-green/15 rounded-2xl p-5 shadow-sm space-y-3 relative overflow-hidden group hover:shadow transition-all"
                >
                  <div className="bg-brand-green-light text-brand-green p-2.5 rounded-xl w-11 h-11 flex items-center justify-center">
                    {renderPainIcon(item.iconName)}
                  </div>
                  <span className="absolute top-4 right-4 bg-brand-green-light text-brand-green font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                  <h3 className="font-serif font-bold text-sm text-brand-dark pt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Comfort Quote */}
            <div className="bg-brand-green-light/20 border border-brand-green/10 p-6 rounded-2xl text-center space-y-2">
              <p className="text-sm text-brand-dark italic font-serif leading-relaxed max-w-2xl mx-auto">
                "{LANDING_SECTIONS[1].content.extraNote}"
              </p>
              <div className="flex justify-center">
                <Heart className="w-4 h-4 text-brand-green fill-brand-green" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LA SOLUCIÓN */}
        <section 
          ref={solutionRef}
          onClick={!previewModeOnly ? () => onSectionClick('solution') : undefined}
          className={`relative px-6 py-12 md:py-16 bg-brand-cream border-b-4 transition-all ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'solution' ? 'border-brand-green bg-brand-green-light/20' : 'border-transparent'
          }`}
          id="solution-preview"
        >
          {/* Analyze strategy badge floating */}
          {!previewModeOnly && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-brand-green-light text-brand-green hover:bg-brand-green/20 text-[10px] font-mono uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-brand-green/30 shadow-sm transition-all">
                <Sparkles className="w-3 h-3" />
                <span>Ver Estrategia de Copy</span>
              </span>
            </div>
          )}

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            
            {/* Visual Column */}
            <div className="bg-brand-green-light/30 border border-brand-green/20 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between aspect-[4/3] shadow-md">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono uppercase font-bold bg-brand-green text-white px-2.5 py-1 rounded-full">
                  Espacio Brillo de Luna
                </span>
                <BrilloLogo layout="icon-only" size="sm" />
              </div>
              
              <div className="my-auto text-center space-y-2 p-4">
                <p className="font-serif italic text-xl text-brand-green font-bold">
                  "El mundo real es nuestro aula."
                </p>
                <p className="text-xs text-brand-green/80 font-mono">
                  Enfoque Experiencial • Popayán, CO
                </p>
              </div>

              <div className="bg-brand-cream/90 backdrop-blur-md rounded-xl p-3 flex items-center gap-2 border border-brand-green/10">
                <div className="w-2.5 h-2.5 bg-brand-green rounded-full animate-ping shrink-0" />
                <span className="text-[10px] text-brand-dark font-semibold">
                  Acompañamiento Inicial.
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-5">
              <span className="inline-block bg-brand-green-light text-brand-green text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">
                ♥ {LANDING_SECTIONS[2].content.kicker}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-green leading-tight">
                Donde el aprendizaje vuelve a ser una <span className="italic">aventura amorosa</span> y con sentido.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {LANDING_SECTIONS[2].content.subheadline}
              </p>

              <div className="space-y-3.5 pt-2">
                {LANDING_SECTIONS[2].content.items?.map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <div className="bg-brand-green text-white p-1 rounded-full shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xs text-brand-dark">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    openBookingModal();
                  }}
                  className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xs px-6 py-3 rounded-full transition-all shadow cursor-pointer"
                >
                  {LANDING_SECTIONS[2].content.ctaText}
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* NUEVA SECCIÓN: NUESTRA ESENCIA */}
        <section 
          ref={esenciaRef}
          onClick={!previewModeOnly ? () => onSectionClick('esencia') : undefined}
          className={`relative px-6 py-16 bg-brand-cream border-b-4 transition-all ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'esencia' ? 'border-brand-green bg-brand-green-light/20' : 'border-transparent'
          }`}
          id="nuestra-esencia"
        >
          <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-10 items-center">
            {/* Visual Column */}
            <div className="md:col-span-5 relative group">
              <div className="absolute inset-0 bg-brand-gold rounded-3xl rotate-2 opacity-10 group-hover:rotate-3 transition-transform" />
              <img 
                src="https://lh3.googleusercontent.com/d/1qv9NnU8mP0JgfCa19D4Ar7N-ZANU06Fz" 
                alt="Exploración Brillo de Luna" 
                className="rounded-3xl relative z-10 w-full object-cover aspect-[4/5] shadow-lg border-2 border-brand-green/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-4 z-20 bg-brand-green text-white p-3.5 rounded-2xl shadow-md border border-brand-green-light/20 text-xs font-serif font-semibold italic">
                Aventura libre 🌿
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 space-y-6">
              <span className="inline-block bg-brand-green-light text-brand-green text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">
                ✨ Nuestra Esencia
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-brand-dark leading-tight">
                Un rincón cálido para volver a <span className="text-brand-green italic">disfrutar de la infancia</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Brillo de Luna es mucho más que un espacio de acompañamiento. Es un hogar con propósito donde la infancia florece libre de las prisas y la rigidez de la escuela tradicional. Aquí, el aprendizaje ocurre de manera orgánica y los niños descubren el mundo de la forma más bella:
              </p>

              <div className="grid gap-4 pt-2">
                <div className="flex gap-3 items-start">
                  <div className="bg-brand-green-light text-brand-green p-1.5 rounded-lg shrink-0 mt-0.5">
                    <Heart className="w-4 h-4 fill-brand-green text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-brand-dark">Aprenden a su propio ritmo</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Sin competir con otros ni memorizar para un examen. Respetamos sus tiempos de comprensión de forma amorosa.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="bg-brand-green-light text-brand-green p-1.5 rounded-lg shrink-0 mt-0.5">
                    <Compass className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-brand-dark">Desarrollan autonomía real</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Fomentamos la toma de decisiones consciente y la resolución de retos cotidianos para la vida práctica.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="bg-brand-green-light text-brand-green p-1.5 rounded-lg shrink-0 mt-0.5">
                    <Smile className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-brand-dark">Exploran mediante el juego y la experiencia</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Convertimos los conceptos abstractos en vivencias tangibles, palpables, coloridas y divertidas.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="bg-brand-green-light text-brand-green p-1.5 rounded-lg shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-brand-dark">Conviven en un ambiente respetuoso y amoroso</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Nuestra prioridad es la paz de su corazón, guiándolos con límites sanos, afecto sincero y mucha escucha.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="bg-brand-green-light text-brand-green p-1.5 rounded-lg shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-brand-dark">Conectan directamente con la naturaleza</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Viven la magia de sembrar, cuidar las plantas y cultivar la tierra, reconociendo el valor de la vida y el alimento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: CONOCE BRILLO DE LUNA (PROGRAMAS) */}
        <section 
          ref={programasRef}
          onClick={!previewModeOnly ? () => onSectionClick('programas') : undefined}
          className={`relative px-6 py-16 bg-brand-green-light/10 border-b-4 transition-all ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'programas' ? 'border-brand-green bg-brand-green-light/20' : 'border-transparent'
          }`}
          id="programas-brillo"
        >
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold text-brand-green uppercase tracking-widest block">
                Nuestros Acompañamientos
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-brand-dark leading-tight">
                Conoce nuestras líneas de cuidado y crecimiento
              </h2>
              <p className="text-gray-500 text-xs md:text-sm max-w-xl mx-auto">
                Ofrecemos programas adaptados a cada necesidad y etapa del desarrollo infantil, integrando el amor, la libertad y el aprendizaje activo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              {/* 🌱 NIDO */}
              <div className="bg-brand-cream border border-brand-green/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1HP5do-QuvIALlPzxYlVF5iaET5TNM2AA" 
                      alt="Programa Nido" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Sprout className="w-3 h-3" />
                      <span>Estímulo</span>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif font-bold text-lg text-brand-dark flex items-center gap-2">
                      <span>🌱 Nido</span>
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Estimulación temprana diseñada para los más pequeños del hogar. Acompañamos con ternura sus primeros grandes descubrimientos y apoyamos su desarrollo psicomotriz e integral.
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <button 
                    onClick={(e) => { e.stopPropagation(); openBookingModal(); }}
                    className="w-full py-2.5 rounded-full border border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Preguntar por Nido</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* 😊 TALLER DE LA FELICIDAD */}
              <div className="bg-brand-cream border border-brand-green/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src="https://lh3.googleusercontent.com/d/16ByxSPLCvaVCBUqvVRXgr3Pxsoa4JOOC" 
                      alt="Taller de la Felicidad" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Smile className="w-3 h-3 fill-white text-brand-green" />
                      <span>Emociones</span>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif font-bold text-lg text-brand-dark flex items-center gap-2">
                      <span>😊 Taller de la Felicidad</span>
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Un cálido espacio para niños de 3 a 12 años donde fortalecemos hábitos saludables de estudio, realizamos apoyo de tareas y brindamos un fuerte desarrollo de su inteligencia emocional.
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <button 
                    onClick={(e) => { e.stopPropagation(); openBookingModal(); }}
                    className="w-full py-2.5 rounded-full border border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Preguntar por Taller</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* 🗣️ MIAU */}
              <div className="bg-brand-cream border border-brand-green/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1y-CmJlP7nXlIALB4h5m4mv0x6b7JZIc6" 
                      alt="Programa MIAU" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <MessageSquare className="w-3 h-3 fill-white text-brand-green" />
                      <span>Lenguaje</span>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif font-bold text-lg text-brand-dark flex items-center gap-2">
                      <span>🗣️ MIAU</span>
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Programa especializado de estimulación del lenguaje para favorecer las habilidades de comunicación y la claridad verbal, guiado con juegos, cantos e interacciones muy divertidas.
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <button 
                    onClick={(e) => { e.stopPropagation(); openBookingModal(); }}
                    className="w-full py-2.5 rounded-full border border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Preguntar por MIAU</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* 🍎 HORA FELIZ */}
              <div className="bg-brand-cream border border-brand-green/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 min-h-[160px] md:min-h-full">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1DPqNn9u0ha85Fmrg05dAmf9nfe7O1oL0" 
                      alt="Programa Hora Feliz" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm z-10">
                      <Utensils className="w-3 h-3" />
                      <span>Nutrición</span>
                    </div>
                  </div>
                  <div className="p-5 md:w-3/5 space-y-2 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-serif font-bold text-base text-brand-dark">
                        🍎 Hora Feliz
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Iniciativa de alimentación consciente. Diseñamos loncheras nutritivas, deliciosas y educamos sobre hábitos nutricionales positivos para nutrir el cuerpo y el cerebro.
                      </p>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); openBookingModal(); }}
                      className="mt-3 py-2 rounded-full border border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Saber de Hora Feliz</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 🎓 PREESCOLAR HOMESCHOOL */}
              <div className="bg-brand-cream border border-brand-green/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 min-h-[160px] md:min-h-full">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1J3iTUjn3zhnt_hk8B6ciF3jQZFUuRZnM" 
                      alt="Preescolar Homeschool" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm z-10">
                      <GraduationCap className="w-3 h-3" />
                      <span>Montessori</span>
                    </div>
                  </div>
                  <div className="p-5 md:w-3/5 space-y-2 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-serif font-bold text-base text-brand-dark">
                        🎓 Preescolar Homeschool
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Educación inicial respetuosa basada en el enfoque Montessori. Proporcionamos un espacio óptimo para el desarrollo cognitivo, sensorial y creativo antes del colegio formal.
                      </p>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); openBookingModal(); }}
                      className="mt-3 py-2 rounded-full border border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Saber de Preescolar</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: ¿POR QUÉ BRILLO DE LUNA? / SISTEMA DE APRENDIZAJE */}
        <section 
          ref={sistemaRef}
          onClick={!previewModeOnly ? () => onSectionClick('sistema') : undefined}
          className={`relative px-6 py-16 bg-brand-cream border-b-4 transition-all ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'sistema' ? 'border-brand-green bg-brand-green-light/20' : 'border-transparent'
          }`}
          id="sistema-aprendizaje"
        >
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              
              {/* Content side */}
              <div className="space-y-6">
                <span className="inline-block bg-brand-green-light text-brand-green text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">
                  🌱 Sistema de Aprendizaje
                </span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-brand-dark leading-tight">
                  ¿Por qué las familias eligen Brillo de Luna?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ofrecemos una alternativa educativa libre de presiones innecesarias. Diseñamos un sistema pensado en el bienestar del niño y en facilitar la vida armónica en el hogar.
                </p>

                <div className="space-y-5">
                  {/* No homework */}
                  <div className="bg-brand-green-light/10 border border-brand-green/5 p-4 rounded-2xl flex gap-3.5 items-start">
                    <div className="bg-brand-green text-white p-2 rounded-xl shrink-0">
                      <Heart className="w-4 h-4 fill-white text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-brand-dark">No dejamos tareas para la casa</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Creemos profundamente que el tiempo en familia es fundamental para el sano desarrollo emocional, juego libre y descanso de los niños.
                      </p>
                    </div>
                  </div>

                  {/* Montessori Evaluation */}
                  <div className="bg-brand-green-light/10 border border-brand-green/5 p-4 rounded-2xl flex gap-3.5 items-start">
                    <div className="bg-brand-green text-white p-2 rounded-xl shrink-0">
                      <Award className="w-4 h-4 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-brand-dark">Evaluación trimestral Montessori</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Realizamos un seguimiento descriptivo y cualitativo de su proceso individual, evaluando con empatía:
                      </p>
                      <ul className="grid grid-cols-2 gap-1 mt-2 text-[11px] text-brand-green font-semibold">
                        <li className="flex items-center gap-1">✓ Logros alcanzados</li>
                        <li className="flex items-center gap-1">✓ Procesos de aprendizaje</li>
                        <li className="flex items-center gap-1 col-span-2">✓ Aspectos que requieren acompañamiento</li>
                      </ul>
                    </div>
                  </div>

                  {/* Semi-personalized */}
                  <div className="bg-brand-green-light/10 border border-brand-green/5 p-4 rounded-2xl flex gap-3.5 items-start">
                    <div className="bg-brand-green text-white p-2 rounded-xl shrink-0">
                      <Users className="w-4 h-4 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-brand-dark">Educación semipersonalizada</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Cada docente acompaña un <strong>máximo de 6 niños</strong>. Esto nos permite garantizar una atención cercana, afectuosa, paciente, respetuosa e individualizada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual side */}
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-green to-brand-gold rounded-3xl blur opacity-15" />
                <div className="relative bg-brand-cream border border-brand-green/10 rounded-3xl overflow-hidden shadow-lg aspect-[4/5] flex flex-col justify-between">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1BdL2sD8Kt4uyEUi3FzbSc9Dx9FYShZZj" 
                    alt="Acompañamiento Brillo de Luna" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-mono font-bold uppercase text-brand-gold tracking-widest">
                      Atención Respetuosa
                    </span>
                    <h4 className="font-serif font-bold text-base mt-1">
                      "Un espacio adaptado a sus necesidades, no al revés."
                    </h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: NUESTRA FILOSOFÍA */}
        <section 
          ref={filosofiaRef}
          onClick={!previewModeOnly ? () => onSectionClick('filosofia') : undefined}
          className={`relative px-6 py-16 bg-brand-green text-white border-b-4 transition-all overflow-hidden ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'filosofia' ? 'border-brand-gold bg-brand-green/95' : 'border-transparent'
          }`}
          id="nuestra-filosofia"
        >
          {/* Subtle nature element backgrounds */}
          <div className="absolute -top-10 -right-10 text-white/5 text-[150px] font-serif select-none pointer-events-none">🌿</div>
          <div className="absolute -bottom-10 -left-10 text-white/5 text-[150px] font-serif select-none pointer-events-none">🌻</div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-10 items-center relative z-10">
            {/* Text side */}
            <div className="md:col-span-7 space-y-6">
              <span className="inline-block bg-brand-gold/20 text-brand-gold text-xs font-bold px-3 py-1 rounded-full uppercase font-mono border border-brand-gold/30">
                🧭 Nuestra Filosofía
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white leading-tight">
                Guiamos a las familias que eligen una educación respetuosa y consciente
              </h2>
              <p className="text-white/85 text-sm leading-relaxed">
                Creemos profundamente que los niños florecen cuando su aprendizaje está centrado en el desarrollo integral y sustentado en el amor. En Brillo de Luna, la educación no ocurre en cuatro paredes de asfalto:
              </p>
              
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
                <p className="font-serif italic text-sm text-brand-gold/90 leading-relaxed">
                  "Nuestros niños viven experiencias reales de aprendizaje, desde las actividades cotidianas más simples hasta el contacto íntimo con la naturaleza y el maravilloso acto de cultivar la tierra con sus propias manos."
                </p>
              </div>
            </div>

            {/* Photo side */}
            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-brand-gold/30 shadow-2xl aspect-[4/3]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1xijdt4Cz9iGIuNV8F-Y8-9Ds-TaJc9lb" 
                  alt="Cultivando la tierra" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-brand-gold text-brand-dark font-mono text-[9px] font-bold uppercase px-2.5 py-1 rounded-full shadow-sm">
                  Cultivo real 🥕
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3B: QUALIFIER SECTION (PARA QUIÊN ES Y PARA QUIÊN NO ES) */}
        <section 
          className="relative px-6 py-12 bg-brand-cream/40 border-b-4 border-transparent transition-all"
          id="qualifier-preview"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold text-brand-green uppercase tracking-widest block">
                Filtro de Compromiso
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-dark max-w-2xl mx-auto leading-tight">
                ¿Es Brillo de Luna el lugar ideal para tu familia?
              </h2>
              <p className="text-gray-500 text-xs md:text-sm max-w-lg mx-auto">
                No somos una escuela tradicional ni pretendemos serlo. Buscamos familias comprometidas con un cambio real en el bienestar de sus hijos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* ESTE COMPROMISO ES PARA TI SI */}
              <div className="bg-brand-green-light/20 border-2 border-brand-green/15 rounded-3xl p-6 md:p-8 space-y-5 shadow-sm transform hover:scale-[1.01] transition-transform">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-brand-green shrink-0" />
                  <h3 className="font-serif font-bold text-base text-brand-dark">
                    Este acompañamiento <span className="text-brand-green font-bold">SÍ es para ti</span> si...
                  </h3>
                </div>
                
                <ul className="space-y-3.5 text-xs text-gray-700">
                  <li className="flex gap-2.5 items-start">
                    <span className="text-brand-green mt-0.5 font-bold">✓</span>
                    <span><strong>Priorizas el bienestar emocional:</strong> Entiendes que un niño feliz, tranquilo y motivado aprende el doble de rápido.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="text-brand-green mt-0.5 font-bold">✓</span>
                    <span><strong>Sanas las tardes familiares:</strong> Deseas eliminar las batallas por tareas infinitas y recuperar el tiempo de calidad en casa.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="text-brand-green mt-0.5 font-bold">✓</span>
                    <span><strong>Valoras los ritmos individuales:</strong> Comprendes que tu hijo no es una máquina industrial y requiere su propio tiempo para florecer.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="text-brand-green mt-0.5 font-bold">✓</span>
                    <span><strong>Buscas comunidad en Popayán:</strong> Deseas encuentros reales, talleres presenciales y salidas de campo vivenciales de alta calidad.</span>
                  </li>
                </ul>
              </div>

              {/* ESTE COMPROMISO NO ES PARA TI SI */}
              <div className="bg-gray-50 border-2 border-gray-200/60 rounded-3xl p-6 md:p-8 space-y-5 shadow-sm transform hover:scale-[1.01] transition-transform">
                <div className="flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-gray-400 shrink-0" />
                  <h3 className="font-serif font-bold text-base text-gray-600">
                    Este acompañamiento <span className="text-gray-500 font-bold">NO es para ti</span> si...
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs text-gray-500">
                  <li className="flex gap-2.5 items-start">
                    <span className="text-red-400 mt-0.5 font-bold">✕</span>
                    <span><strong>Buscas notas frías:</strong> Te preocupan más las calificaciones cuantitativas que el desarrollo integral de las inteligencias de tu hijo.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="text-red-400 mt-0.5 font-bold">✕</span>
                    <span><strong>Quieres una "guardería":</strong> Buscas un lugar donde "dejar" a tu hijo todo el día para desentenderte por completo de su educación.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="text-red-400 mt-0.5 font-bold">✕</span>
                    <span><strong>Exiges memorización rígida:</strong> Crees que el aprendizaje consiste en dictar hojas de cuaderno y memorizar para responder exámenes masivos.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="text-red-400 mt-0.5 font-bold">✕</span>
                    <span><strong>Prefieres el encierro:</strong> Consideras que las ciencias se aprenden mejor en un libro estático que sembrando y explorando el mundo real.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3C: INTERACTIVE ASSESSMENT CALCULATOR (COMPATIBILIDAD Y ESTRÉS) */}
        <section 
          className="relative px-6 py-12 bg-brand-green-light/10 border-b-4 border-transparent transition-all"
          id="calculator-preview"
        >
          <div className="max-w-xl mx-auto">
            {/* CALCULATOR CARD */}
            <div className="bg-white border-2 border-brand-green/20 rounded-3xl p-6 md:p-8 shadow-xl space-y-6 relative overflow-hidden">
              {/* Background moon elements */}
              <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-brand-green-light/20 blur-xl pointer-events-none" />
              
              {/* STEP 0: START COMPONENT */}
              {quizStep === 0 && (
                <div className="space-y-5 text-center py-4">
                  <div className="bg-brand-green-light text-brand-green w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-brand-dark">
                      Calculadora de Estrés Escolar y Alivio Familiar
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Evalúa de forma amigable el bienestar de tu hijo frente al sistema tradicional y descubre si la ruta de Brillo de Luna es compatible con sus talentos naturales.
                    </p>
                  </div>
                  <button
                    onClick={() => setQuizStep(1)}
                    className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xs px-6 py-3 rounded-full transition-all shadow active:scale-95 cursor-pointer w-full"
                  >
                    Iniciar Evaluación Gratuita (30 Segundos)
                  </button>
                  <p className="text-[10px] text-gray-400 font-mono">
                    ✓ Sin registros obligatorios • Diagnóstico local de Popayán
                  </p>
                </div>
              )}

              {/* STEP 1: SCHOOL LEVEL */}
              {quizStep === 1 && (
                <div className="space-y-5">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span className="text-brand-green font-bold">PREGUNTA 1 DE 3</span>
                    <span>33% Completado</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-brand-dark">
                    ¿Cuál es el nivel educativo actual de tu hijo?
                  </h3>
                  <div className="space-y-3">
                    {[
                      { key: "preschool", label: "Preescolar o Inicial (3 a 6 años)" },
                      { key: "primary", label: "Básica Primaria (7 a 11 años)" },
                      { key: "secondary", label: "Básica Secundaria / Bachillerato (12+ años)" }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setQuizAnswers((prev) => ({ ...prev, level: opt.key }));
                          setQuizStep(2);
                        }}
                        className={`w-full text-left p-4 rounded-2xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                          quizAnswers.level === opt.key
                            ? "border-brand-green bg-brand-green-light/20 text-brand-dark"
                            : "border-gray-200 hover:border-brand-green/45 hover:bg-brand-cream/50 text-gray-600"
                        }`}
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-4 h-4 text-brand-green" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: DAILY STRESS HOURS */}
              {quizStep === 2 && (
                <div className="space-y-5">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span className="text-brand-green font-bold">PREGUNTA 2 DE 3</span>
                    <span>66% Completado</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-brand-dark">
                    ¿Cuánto tiempo o tensión generan las tareas y exigencias del colegio en casa?
                  </h3>
                  <div className="space-y-3">
                    {[
                      { key: "low", label: "Bajo: Menos de 1 hora de tareas, discusiones mínimas." },
                      { key: "moderate", label: "Moderado: Entre 1 y 2 horas diarias de peleas por deberes y cansancio." },
                      { key: "high", label: "Grave: Más de 3 horas diarias de batallas, llantos, gritos y desvelo familiar." }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setQuizAnswers((prev) => ({ ...prev, hours: opt.key }));
                          setQuizStep(3);
                        }}
                        className={`w-full text-left p-4 rounded-2xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                          quizAnswers.hours === opt.key
                            ? "border-brand-green bg-brand-green-light/20 text-brand-dark"
                            : "border-gray-200 hover:border-brand-green/45 hover:bg-brand-cream/50 text-gray-600"
                        }`}
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-4 h-4 text-brand-green" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: CONCERN */}
              {quizStep === 3 && (
                <div className="space-y-5">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span className="text-brand-green font-bold">PREGUNTA 3 DE 3</span>
                    <span>99% Completado</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-brand-dark">
                    ¿Cuál es tu mayor preocupación sobre la educación actual de tu hijo?
                  </h3>
                  <div className="space-y-3">
                    {[
                      { key: "motivation", label: "Pérdida de motivación y de su curiosidad natural por aprender." },
                      { key: "emotional", label: "Ansiedad, estrés constante o problemas de acoso escolar (bullying)." },
                      { key: "social", label: "Falta de socialización de calidad, libre de vicios o competencias masivas." },
                      { key: "rigidity", label: "El molde rígido de fábrica: no potencia sus inteligencias individuales." }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setQuizAnswers((prev) => ({ ...prev, concern: opt.key }));
                          setQuizStep(4);
                        }}
                        className={`w-full text-left p-4 rounded-2xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                          quizAnswers.concern === opt.key
                            ? "border-brand-green bg-brand-green-light/20 text-brand-dark"
                            : "border-gray-200 hover:border-brand-green/45 hover:bg-brand-cream/50 text-gray-600"
                        }`}
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-4 h-4 text-brand-green" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: DIAGNOSTIC RESULTS */}
              {quizStep === 4 && (
                <div className="space-y-5 text-center">
                  <div className="bg-brand-green-light text-brand-green w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase bg-brand-green text-white px-2.5 py-1 rounded-full">
                      DIAGNÓSTICO OBTENIDO
                    </span>
                    <h3 className="font-serif text-lg font-bold text-brand-dark mt-1">
                      {quizAnswers.hours === "high" 
                        ? "Nivel de Estrés: ALTO (¡Alerta Familiar!)" 
                        : quizAnswers.hours === "moderate" 
                        ? "Nivel de Estrés: MODERADO (Desgaste Latente)" 
                        : "Nivel de Estrés: BAJO (Acción Preventiva)"}
                    </h3>
                  </div>

                  <div className="bg-brand-cream border border-brand-green/15 p-4 rounded-2xl text-xs text-left text-gray-600 leading-relaxed space-y-3">
                    <p>
                      {quizAnswers.hours === "high" ? (
                        <strong>¡Alerta de Desgaste Emocional!</strong>
                      ) : (
                        <strong>Oportunidad de Florecimiento.</strong>
                      )}
                      {" "}Tu hijo está en una etapa crucial de desarrollo ({quizAnswers.level === "preschool" ? "Preescolar" : quizAnswers.level === "primary" ? "Primaria" : "Secundaria"}). El sistema escolar masivo convencional está generando tensiones innecesarias.
                    </p>
                    <p>
                      {quizAnswers.concern === "motivation" && "La pérdida de motivación indica que el método memorístico actual está apagando su interés natural por aprender. Tu hijo necesita un Enfoque Basado en Proyectos."}
                      {quizAnswers.concern === "emotional" && "La ansiedad constante por notas o bullying deteriora su autoestima infantil de manera grave. Tu hijo requiere un entorno seguro, amoroso y libre de presiones masivas."}
                      {quizAnswers.concern === "social" && "La socialización real no se da encerrado en una fila ruidosa de 40 niños. Se da en salidas vivenciales, proyectos colaborativos y asambleas democráticas."}
                      {quizAnswers.concern === "rigidity" && "Un molde rígido entierra sus inteligencias múltiples. Con nuestra planeación personalizada Waldorf-Montessori, tu hijo avanzará a su compás de forma feliz."}
                    </p>
                    <p className="border-t border-brand-green/10 pt-2.5 text-brand-green font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                      Ruta recomendada: Acompañamiento Brillo de Luna local Popayán.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <button
                      onClick={() => {
                        setQuizStep(0);
                        setQuizAnswers({ level: "", hours: "", concern: "" });
                        openBookingModal();
                      }}
                      className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xs px-6 py-3.5 rounded-full transition-all shadow w-full cursor-pointer animate-pulse"
                    >
                      Agendar mi Asesoría Gratuita para esta Ruta de Alivio
                    </button>
                    <button
                      onClick={() => {
                        setQuizStep(0);
                        setQuizAnswers({ level: "", hours: "", concern: "" });
                      }}
                      className="text-xs text-gray-400 underline hover:text-brand-green transition-colors cursor-pointer block mx-auto"
                    >
                      Volver a evaluar
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* SECTION 4: PILARES METODOLÓGICOS */}
        <section 
          ref={pillarsRef}
          onClick={!previewModeOnly ? () => onSectionClick('pillars') : undefined}
          className={`relative px-6 py-12 bg-brand-green-light/20 border-b-4 transition-all ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'pillars' ? 'border-brand-green bg-brand-green-light/30' : 'border-transparent'
          }`}
          id="pillars-preview"
        >
          {/* Analyze strategy badge floating */}
          {!previewModeOnly && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-brand-green-light text-brand-green hover:bg-brand-green/20 text-[10px] font-mono uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-brand-green/30 shadow-sm transition-all">
                <Sparkles className="w-3 h-3" />
                <span>Ver Estrategia de Copy</span>
              </span>
            </div>
          )}

          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold text-brand-green uppercase tracking-widest block">
                {LANDING_SECTIONS[3].content.kicker}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-dark max-w-2xl mx-auto leading-tight">
                Un modelo educativo centrado en <span className="italic text-brand-green">el ser</span>, no en estándares.
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                {LANDING_SECTIONS[3].content.subheadline}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {LANDING_SECTIONS[3].content.items?.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="bg-brand-cream border border-brand-green/15 rounded-2xl p-5 shadow-sm space-y-3 hover:shadow-md hover:border-brand-green/30 transition-all flex gap-4 items-start group"
                >
                  <div className="bg-brand-green-light text-brand-green p-3 rounded-xl shrink-0 mt-1">
                    {renderPillarIcon(pillar.iconName)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-sm text-brand-dark">
                        {pillar.title}
                      </h3>
                      <span className="bg-brand-green-light text-brand-green font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-full">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  openBookingModal();
                }}
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xs px-6 py-3.5 rounded-full transition-all shadow cursor-pointer"
              >
                {LANDING_SECTIONS[3].content.ctaText}
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: CÓMO FUNCIONA */}
        <section 
          ref={howRef}
          onClick={!previewModeOnly ? () => onSectionClick('how-it-works') : undefined}
          className={`relative px-6 py-12 bg-brand-cream border-b-4 transition-all ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'how-it-works' ? 'border-brand-green bg-brand-green-light/20' : 'border-transparent'
          }`}
          id="how-preview"
        >
          {/* Analyze strategy badge floating */}
          {!previewModeOnly && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-brand-green-light text-brand-green hover:bg-brand-green/20 text-[10px] font-mono uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-brand-green/30 shadow-sm transition-all">
                <Sparkles className="w-3 h-3" />
                <span>Ver Estrategia de Copy</span>
              </span>
            </div>
          )}

          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold text-brand-ochre uppercase tracking-widest block">
                {LANDING_SECTIONS[4].content.kicker}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-dark max-w-2xl mx-auto leading-tight">
                Tu transición hacia la <span className="italic text-brand-green">paz educativa</span> en solo 3 pasos
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                {LANDING_SECTIONS[4].content.subheadline}
              </p>
            </div>

            {/* Simple Timeline Steps */}
            <div className="grid md:grid-cols-3 gap-6 relative">
              {LANDING_SECTIONS[4].content.items?.map((step, idx) => (
                <div key={idx} className="relative bg-brand-cream border border-brand-green/15 rounded-2xl p-6 shadow-sm flex flex-col justify-between group hover:border-brand-green/40 transition-all">
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3.5 left-6 bg-brand-green text-white font-serif italic font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm shadow">
                    0{idx + 1}
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="font-serif font-bold text-sm text-brand-dark leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-green/10 mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-brand-green font-bold uppercase">
                      {idx === 0 ? "✓ 100% Gratis" : idx === 1 ? "✓ Plan a medida" : "✓ Acompañamiento"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  openBookingModal();
                }}
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xs px-8 py-4 rounded-full transition-all shadow-md cursor-pointer"
              >
                {LANDING_SECTIONS[4].content.ctaText}
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 6: TESTIMONIOS (PRUEBA SOCIAL) */}
        <section 
          ref={testimonialsRef}
          onClick={!previewModeOnly ? () => onSectionClick('testimonials') : undefined}
          className={`relative px-6 py-12 md:py-16 bg-brand-dark text-white border-b-4 transition-all ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'testimonials' ? 'border-brand-green bg-brand-green-light/10 text-brand-dark' : 'border-transparent'
          }`}
          id="testimonials-preview"
        >
          {/* Analyze strategy badge floating */}
          {!previewModeOnly && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-brand-green text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span>Estrategia de Testimonio</span>
              </span>
            </div>
          )}

          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold text-brand-green-light uppercase tracking-widest block">
                {LANDING_SECTIONS[5].content.kicker}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
                Familias que recuperaron la <span className="italic text-brand-green-light">felicidad</span> de sus hijos
              </h2>
              <p className="text-gray-300 text-xs max-w-xl mx-auto">
                {LANDING_SECTIONS[5].content.subheadline}
              </p>
            </div>

            {/* Testimonials List */}
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS_DATA.map((test) => (
                <div key={test.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:bg-white/10 transition-all">
                  
                  {/* Quote and Stars */}
                  <div className="space-y-3">
                    <div className="flex gap-0.5">
                      {[...Array(test.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <p className="text-[12px] text-gray-200 italic leading-relaxed">
                      \"{test.quote}\"
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <img 
                      src={test.avatarUrl} 
                      alt={test.parentName}
                      className="w-9 h-9 rounded-full object-cover border border-brand-gold/30"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-xs text-white">
                        {test.parentName}
                      </h4>
                      <p className="text-[10px] text-brand-gold font-medium">
                        {test.role}
                      </p>
                      <span className="block text-[9px] text-gray-400 font-mono">
                        {test.location}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Comunidad Brillo de Luna Photos */}
            <div className="pt-4 space-y-4">
              <p className="text-center text-[11px] font-mono uppercase font-bold text-brand-gold tracking-widest">
                🌿 La vida comunitaria en Brillo de Luna 🌿
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto pb-4">
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 aspect-[16/10] shadow-md">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1y-CmJlP7nXlIALB4h5m4mv0x6b7JZIc6" 
                    alt="Risas en comunidad" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-center text-[10px] text-white">
                    Momentos de risas y hermandad
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 aspect-[16/10] shadow-md">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1Nfp56_G6cgsWBFM45T68eQAYchLF9633" 
                    alt="Espacio al aire libre" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-center text-[10px] text-white">
                    Espacios libres y contacto al aire libre
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  openBookingModal();
                }}
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xs px-6 py-3 rounded-full transition-all shadow cursor-pointer"
              >
                {LANDING_SECTIONS[5].content.ctaText}
              </button>
            </div>
          </div>
        </section>

        {/* SPECIAL FAQS ACCORDION SECTION (Justifica racionalmente) */}
        <section className="px-6 py-12 bg-brand-cream border-b border-brand-green/10" id="faqs-accordion">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs text-brand-green font-bold uppercase tracking-wider font-mono">
                <HelpCircle className="w-4 h-4 text-brand-ochre" />
                <span>¿Tienes dudas técnicas?</span>
              </div>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-brand-dark">
                Preguntas Frecuentes de Familias
              </h2>
            </div>

            <div className="space-y-3.5">
              {FAQS.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-brand-green-light/20 border border-brand-green/10 rounded-xl p-4.5 transition-all [&_summary::-webkit-details-marker]:hidden cursor-pointer"
                >
                  <summary className="flex justify-between items-center list-none font-serif font-bold text-xs text-brand-dark">
                    <span>{faq.question}</span>
                    <span className="transition-transform group-open:rotate-180 text-brand-green">
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </summary>
                  <p className="text-xs text-gray-600 mt-2.5 leading-relaxed pl-1">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: CIERRE Y CTA FINAL */}
        <section 
          ref={closingRef}
          onClick={!previewModeOnly ? () => onSectionClick('closing') : undefined}
          className={`relative px-6 py-14 bg-gradient-to-tr from-brand-dark via-brand-green/80 to-brand-dark text-white transition-all ${
            !previewModeOnly ? 'cursor-pointer' : ''
          } ${
            !previewModeOnly && selectedSectionId === 'closing' ? 'border-brand-green bg-[#1F2C1C]' : ''
          }`}
          id="closing-preview"
        >
          {/* Analyze strategy badge floating */}
          {!previewModeOnly && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-brand-green-light text-brand-green font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3" />
                <span>Ver Estrategia de Copy</span>
              </span>
            </div>
          )}

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-xs font-mono font-bold text-brand-gold uppercase tracking-widest">
              🌙 {LANDING_SECTIONS[6].content.kicker}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
              La infancia de tu hijo pasa rápido. No permitas que el estrés escolar <span className="italic text-brand-green-light">apague</span> sus mejores años.
            </h2>
            <p className="text-gray-300 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              {LANDING_SECTIONS[6].content.subheadline}
            </p>

            <div className="pt-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  openBookingModal();
                }}
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>{LANDING_SECTIONS[6].content.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-[10px] text-gray-400 font-medium mt-3 font-mono">
                {LANDING_SECTIONS[6].content.microcopy}
              </p>
            </div>

            {/* GARANTÍA INCONDICIONAL DE PAZ FAMILIAR */}
            <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-5 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-left">
              <div className="w-14 h-14 shrink-0 rounded-full bg-brand-green/20 border-2 border-brand-green-light/30 flex items-center justify-center text-xl">
                🛡️
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif text-xs font-bold text-brand-gold uppercase tracking-wider">
                  Garantía de Paz Familiar de 30 Días
                </h4>
                <p className="text-[10px] text-gray-300 leading-relaxed">
                  Si durante los primeros 30 días de acompañamiento sientes que no hemos reducido el estrés escolar y devuelto la alegría del aprendizaje a tu hijo, te devolvemos el 100% de tu dinero. Confiamos plenamente en el poder del amor y el respeto pedagógico.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="bg-brand-cream/80 border-t border-brand-green/15 px-6 py-8 text-center text-xs text-brand-dark/70">
        <div className="max-w-md mx-auto flex flex-col items-center gap-3">
          <BrilloLogo layout="vertical" size="sm" />
          <p className="font-medium mt-1">
            © {new Date().getFullYear()} Brillo de Luna Homeschool • Popayán, Colombia. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-brand-green font-mono">
            Acompañamiento amoroso para familias valientes.
          </p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a 
        href="https://wa.me/573145639095?text=Hola%20Brillo%20de%20Luna,%20quiero%20conocer%20más%20sobre%20el%20acompañamiento%20inicial%20para%20mis%20hijos."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group cursor-pointer"
        title="Contactar por WhatsApp"
      >
        <span className="absolute right-full mr-3 bg-brand-dark text-white text-[11px] font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-white/10">
          ¿Tienes dudas? Chatea con nosotros 💬
        </span>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.66.986 3.298 1.447 5.355 1.448 5.405 0 9.799-4.393 9.802-9.797.002-2.597-1.012-5.035-2.859-6.883C17.058 2.073 14.613 1.06 12.015 1.06 6.612 1.06 2.221 5.451 2.218 10.854c-.001 2.105.56 4.116 1.624 5.895l-.997 3.638 3.731-.978c1.61.874 3.12 1.346 5.071 1.346zm11.13-7.558c-.307-.154-1.82-.898-2.101-.998-.282-.101-.487-.154-.691.154-.204.307-.792.998-.971 1.202-.18.204-.359.227-.666.073-.307-.154-1.297-.478-2.471-1.527-.913-.814-1.53-1.82-1.709-2.127-.18-.307-.019-.473.134-.625.137-.136.307-.359.461-.54.154-.18.205-.307.307-.513.102-.204.051-.385-.026-.54-.077-.154-.691-1.667-.947-2.28-.249-.598-.501-.517-.69-.517-.18 0-.384-.009-.589-.009-.204 0-.538.077-.82.385-.282.307-1.077 1.051-1.077 2.562 0 1.512 1.097 2.972 1.25 3.176.154.204 2.158 3.297 5.228 4.622.729.316 1.299.505 1.743.646.733.233 1.399.2 1.925.122.586-.087 1.82-.743 2.076-1.46.256-.718.256-1.333.18-1.46-.077-.127-.282-.204-.589-.359z" />
        </svg>
      </a>

    </div>
  );
}
