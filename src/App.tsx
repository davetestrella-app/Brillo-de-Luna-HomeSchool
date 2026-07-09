/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import LandingPreview from "./components/LandingPreview";
import CopyConsole from "./components/CopyConsole";
import LeadSimulator from "./components/LeadSimulator";
import BrilloLogo from "./components/BrilloLogo";
import { LANDING_SECTIONS, BRAND_INFO } from "./data";
import { 
  Sparkles, 
  HelpCircle, 
  Info, 
  ChevronRight, 
  BookOpen, 
  Eye, 
  Smartphone, 
  X,
  MapPin,
  Heart
} from "lucide-react";

export default function App() {
  const [selectedSectionId, setSelectedSectionId] = useState<string>("hero");
  const [activePane, setActivePane] = useState<'console' | 'simulator'>('console');
  const [mobileView, setMobileView] = useState<'preview' | 'strategy'>('preview');
  const [viewMode, setViewMode] = useState<'strategy' | 'production'>('strategy');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const bookingFormRef = useRef<HTMLDivElement>(null);

  const handleSectionSelect = (id: string) => {
    setSelectedSectionId(id);
    if (window.innerWidth < 1024) {
      setMobileView('preview');
    }
  };

  const handleScrollToSection = (id: string) => {
    setSelectedSectionId(id);
  };

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
    setActivePane('simulator');
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans selection:bg-brand-green/20 selection:text-brand-green" id="main-applet-root">
      
      {/* PERSISTENT MODE SWITCHER / VIEWER CONTROLLER */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 px-6 py-3 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-brand-green bg-brand-green-light/40 px-2.5 py-1 rounded-full">
            PREVISUALIZADOR LIVE
          </span>
          <p className="text-xs text-gray-500 font-medium hidden md:inline">
            Ajusta cómo deseas interactuar con tu proyecto educativo:
          </p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-xl w-full sm:w-auto">
          <button
            onClick={() => setViewMode('strategy')}
            className={`flex-1 sm:flex-none py-2 px-4 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'strategy'
                ? 'bg-brand-green text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🛠️ Modo Estrategia
          </button>
          <button
            onClick={() => setViewMode('production')}
            className={`flex-1 sm:flex-none py-2 px-4 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'production'
                ? 'bg-brand-dark text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-950'
            }`}
          >
            🌐 Vista de Cliente (Limpia)
          </button>
        </div>
      </div>

      {/* PROFESSIONAL INTRODUCTORY BANNER (Only visible in Strategy Mode) */}
      {viewMode === 'strategy' && (
        <div className="bg-brand-dark text-[#E6EDE4] border-b border-brand-green/25 py-4 px-6 animate-fade-in" id="welcome-header">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <BrilloLogo layout="icon-only" size="md" className="shrink-0 bg-white/5 p-1 rounded-full border border-white/10" />
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="bg-brand-gold text-brand-dark text-[9px] font-hand font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase">
                    Copywriting & UX/UI Blueprint
                  </span>
                  <span className="text-xs text-brand-green-light font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-gold shrink-0" /> Popayán, Colombia
                  </span>
                </div>
                <h1 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight flex items-center gap-1.5">
                  <span>Brillo de Luna Homeschool</span>
                  <span className="text-sm font-sans font-normal text-brand-green-light/70 hidden sm:inline">
                    | Landing Page de Conversión
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white/5 p-2.5 px-3.5 rounded-xl border border-white/10 flex items-center gap-2.5">
                <div className="text-right">
                  <span className="block text-[9px] text-brand-gold uppercase tracking-widest font-bold">
                    Rol del Sistema
                  </span>
                  <span className="text-xs text-white font-medium">
                    Copywriter & UX Designer Educativo
                  </span>
                </div>
                <div className="w-2 h-2 bg-brand-green rounded-full animate-ping shrink-0" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STRATEGIC CONTEXT & INTRODUCTION CARDS (Only visible in Strategy Mode) */}
      {viewMode === 'strategy' && (
        <div className="max-w-7xl mx-auto px-6 pt-6 w-full animate-fade-in" id="strategic-summary">
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm grid md:grid-cols-3 gap-6 items-center">
            
            <div className="space-y-1.5 md:col-span-2">
              <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-4.5 h-4.5 text-brand-green" /> Propósito del Proyecto Educativo
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Brillo de Luna</strong> es un espacio de aprendizaje alternativo de Popayán para familias que hacen homeschooling. Esta landing page está diseñada con la <strong>fórmula PAS</strong> y principios de neurodiseño para calmar el estrés de los padres (dolor), presentar el acompañamiento amoroso (solución), y derribar las objeciones legales y de socialización de forma natural y transparente.
              </p>
            </div>

            <div className="bg-brand-green-light/20 border border-brand-green-light/60 p-4 rounded-xl flex items-start gap-3">
              <div className="bg-brand-green text-white p-1 rounded-lg shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-brand-gold" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-brand-green">Público Objetivo</h3>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Padres de Popayán cansados de la rigidez escolar, tareas exhaustivas, y preocupados por el bienestar emocional de sus hijos.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* CONDITIONAL CONTENT VIEW DEPENDING ON ACTIVE MODE */}
      {viewMode === 'production' ? (
        /* CLEAN CLIENT-FACING MODE */
        <div className="max-w-4xl mx-auto px-6 py-8 flex-1 w-full animate-fade-in" id="production-full-view">
          <div className="mb-6 bg-brand-green-light/30 border-2 border-brand-green/15 p-4 rounded-2xl text-xs text-brand-dark flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm font-sans">
            <div className="space-y-0.5 text-left">
              <span className="font-bold text-brand-green flex items-center gap-1">
                🌐 Vista de Cliente Activa
              </span>
              <p className="text-gray-600 text-[11px]">
                Así es exactamente como se verá la landing page en internet para los padres de Popayán al publicarse.
              </p>
            </div>
            <button
              onClick={() => setViewMode('strategy')}
              className="bg-brand-green text-white font-bold text-[10px] px-4 py-2 rounded-xl hover:bg-brand-green/90 transition-all cursor-pointer self-start sm:self-center uppercase tracking-wider shadow-sm"
            >
              Volver a Modo Diseño 🛠️
            </button>
          </div>

          {/* Pure Full Landing Frame */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-150/50">
            <LandingPreview 
              selectedSectionId=""
              onSectionClick={() => {}}
              bookingFormRef={bookingFormRef}
              openBookingModal={openBookingModal}
              previewModeOnly={true} // Informs LandingPreview to hide any interactive editor indicators if desired
            />
          </div>
        </div>
      ) : (
        /* INTERACTIVE STRATEGY / COPYWRITING BUILDER MODE */
        <>
          {/* RESPONSIVE TOGGLES FOR MOBILE VIEW */}
          <div className="lg:hidden px-6 pt-4 flex gap-2 animate-fade-in" id="mobile-navigation-pills">
            <button
              onClick={() => setMobileView('preview')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all ${
                mobileView === 'preview'
                  ? 'bg-brand-green text-white border-brand-green'
                  : 'bg-white text-gray-600 border-gray-200'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Vista de Landing Page</span>
            </button>
            <button
              onClick={() => setMobileView('strategy')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all ${
                mobileView === 'strategy'
                  ? 'bg-brand-green text-white border-brand-green'
                  : 'bg-white text-gray-600 border-gray-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Estrategia de Copy & Leads</span>
            </button>
          </div>

          {/* MASTER GRID LAYOUT */}
          <main className="max-w-7xl mx-auto p-6 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in" id="master-grid">
            
            {/* LEFT COMPONENT: LIVE LANDING PREVIEW (Col-span 7) */}
            <div className={`lg:col-span-7 w-full ${mobileView === 'preview' ? 'block' : 'hidden lg:block'}`}>
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <h3 className="font-display font-bold text-sm text-gray-700 uppercase tracking-wider">
                    Maqueta en Vivo (Filtro de Conversión)
                  </h3>
                </div>
                <span className="text-[11px] text-gray-400 font-mono hidden sm:inline">
                  📍 Haz clic en cualquier sección para analizar su Copywriting
                </span>
              </div>

              <LandingPreview 
                selectedSectionId={selectedSectionId}
                onSectionClick={handleSectionSelect}
                bookingFormRef={bookingFormRef}
                openBookingModal={openBookingModal}
              />
            </div>

            {/* RIGHT COMPONENT: STRATEGIC CONTROLS & LEAD SIMULATOR (Col-span 5) */}
            <div className={`lg:col-span-5 w-full space-y-6 ${mobileView === 'strategy' ? 'block' : 'hidden lg:block'}`}>
              
              {/* Panel Selector (Tabs) */}
              <div className="bg-white border border-gray-150 p-1.5 rounded-2xl flex shadow-sm">
                <button
                  onClick={() => setActivePane('console')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activePane === 'console'
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                  id="pane-console-toggle"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>1. Estrategia & Copy</span>
                </button>
                <button
                  onClick={() => setActivePane('simulator')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activePane === 'simulator'
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                  id="pane-simulator-toggle"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>2. Simulador de Lead</span>
                </button>
              </div>

              {/* Dynamic Panel rendering */}
              {activePane === 'console' ? (
                <CopyConsole 
                  selectedSectionId={selectedSectionId}
                  onSectionSelect={handleSectionSelect}
                  onScrollToSection={handleScrollToSection}
                />
              ) : (
                <LeadSimulator />
              )}

            </div>

          </main>
        </>
      )}

      {/* LEAD SIMULATION POPUP MODAL (When clicked on CTAs) */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in" id="booking-modal-overlay">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col relative border border-gray-100">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 p-2 rounded-full transition-all cursor-pointer"
              id="close-modal-btn"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Simulated Lead Form container inside Modal */}
            <div className="overflow-y-auto flex-1">
              <LeadSimulator />
            </div>

            {/* Modal helper footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-brand-ochre fill-brand-ochre" />
                <span>Simulador de Alta Conversión</span>
              </span>
              <span>Brillo de Luna Homeschool</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
