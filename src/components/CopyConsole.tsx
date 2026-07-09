/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CopyBlueprint } from "../types";
import { LANDING_SECTIONS } from "../data";
import { BookOpen, Compass, Sparkles, Target, HelpCircle, Eye, CornerRightDown, CheckCircle2 } from "lucide-react";

interface CopyConsoleProps {
  selectedSectionId: string;
  onSectionSelect: (id: string) => void;
  onScrollToSection: (id: string) => void;
}

export default function CopyConsole({
  selectedSectionId,
  onSectionSelect,
  onScrollToSection
}: CopyConsoleProps) {
  const [activeTab, setActiveTab] = useState<'psy' | 'wireframe' | 'formula'>('psy');
  const selectedSection = LANDING_SECTIONS.find(s => s.id === selectedSectionId) || LANDING_SECTIONS[0];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden flex flex-col h-full" id="copy-console-panel">
      {/* Console Header */}
      <div className="bg-brand-dark p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-brand-gold/20 text-brand-gold p-1.5 rounded-lg">
            <Sparkles className="w-5 h-5" id="sparkles-icon" />
          </div>
          <span className="text-xs font-mono tracking-widest text-brand-gold uppercase">Consola de Estrategia</span>
        </div>
        <h2 className="text-xl font-display font-bold tracking-tight">Copywriting & UX Blueprint</h2>
        <p className="text-gray-300 text-sm mt-1">Estructura persuasiva de conversión para Brillo de Luna</p>
      </div>

      {/* Section Selector */}
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Seleccionar Sección para Analizar:
        </label>
        <div className="relative">
          <select
            value={selectedSectionId}
            onChange={(e) => {
              onSectionSelect(e.target.value);
              onScrollToSection(e.target.value);
            }}
            className="w-full bg-white border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green font-medium cursor-pointer"
            id="section-strategy-selector"
          >
            {LANDING_SECTIONS.map((section) => (
              <option key={section.id} value={section.id}>
                {section.sectionTitle}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Strategy Tabs */}
      <div className="flex border-b border-gray-100 text-sm">
        <button
          onClick={() => setActiveTab('psy')}
          className={`flex-1 py-3 px-4 font-medium flex items-center justify-center gap-2 border-b-2 transition-all ${
            activeTab === 'psy'
              ? 'border-brand-green text-brand-green bg-brand-green-light/10 font-semibold'
              : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50'
          }`}
          id="tab-psy"
        >
          <Target className="w-4 h-4" />
          <span>Objetivo</span>
        </button>
        <button
          onClick={() => setActiveTab('wireframe')}
          className={`flex-1 py-3 px-4 font-medium flex items-center justify-center gap-2 border-b-2 transition-all ${
            activeTab === 'wireframe'
              ? 'border-brand-green text-brand-green bg-brand-green-light/10 font-semibold'
              : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50'
          }`}
          id="tab-wireframe"
        >
          <Compass className="w-4 h-4" />
          <span>UX & Layout</span>
        </button>
        <button
          onClick={() => setActiveTab('formula')}
          className={`flex-1 py-3 px-4 font-medium flex items-center justify-center gap-2 border-b-2 transition-all ${
            activeTab === 'formula'
              ? 'border-brand-green text-brand-green bg-brand-green-light/10 font-semibold'
              : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50'
          }`}
          id="tab-formula"
        >
          <BookOpen className="w-4 h-4" />
          <span>Copy & Fórmula</span>
        </button>
      </div>

      {/* Tab Content Area */}
      <div className="p-6 flex-1 overflow-y-auto space-y-6">
        {activeTab === 'psy' && (
          <div className="space-y-4 animate-fade-in" id="content-psy">
            <div className="bg-brand-green-light/20 p-4 rounded-xl border border-brand-green-light">
              <h4 className="text-xs font-bold text-brand-green uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" /> Enfoque Psicológico del Padre
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {selectedSection.objective}
              </p>
            </div>
            
            <div className="border border-amber-100 bg-amber-50/40 p-4 rounded-xl">
              <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" /> ¿Qué piensa el usuario aquí?
              </h4>
              <p className="text-xs text-amber-900 leading-relaxed italic">
                {selectedSection.id === 'hero' && '"¿Es esto otra escuela estresante o de verdad respetan a mi hijo?"'}
                {selectedSection.id === 'pain' && '"Vaya, no soy el único que se siente agotado por las tareas eternas... esto describe exactamente mi día a día."'}
                {selectedSection.id === 'solution' && '"Suena hermoso, ¿pero cómo hacen para mantener el nivel académico sin estrés?"'}
                {selectedSection.id === 'pillars' && '"¿Cómo socializa si no va al colegio? ¿Es legal en Popayán? Necesito bases serias."'}
                {selectedSection.id === 'how-it-works' && '"¿Qué tan difícil es arrancar? No quiero complicarle la vida a mi hijo."'}
                {selectedSection.id === 'testimonials' && '"Quiero ver si otras mamás de Popayán ya lo probaron y están tranquilas."'}
                {selectedSection.id === 'closing' && '"El año escolar tradicional ya va a empezar/avanzar y mi hijo sigue estresado. Agendaré hoy."'}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'wireframe' && (
          <div className="space-y-4 animate-fade-in" id="content-wireframe">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> Estructura Visual Recomendada (Wireframe)
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {selectedSection.wireframeGuide}
              </p>
            </div>
            
            <div className="bg-brand-green/5 p-4 rounded-xl border border-brand-green/10">
              <span className="text-[10px] font-mono uppercase bg-brand-green/10 text-brand-green px-2 py-0.5 rounded-full font-bold">
                UX Tip de Conversión
              </span>
              <p className="text-xs text-gray-700 mt-2">
                Mantén una relación visual de espacio generoso (espacio negativo). Los padres buscan calma y amor, por lo que una interfaz apretada o llena de banners y alertas de urgencia agresivas destruye la confianza y la calidez emocional del proyecto.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'formula' && (
          <div className="space-y-5 animate-fade-in" id="content-formula">
            <div className="bg-brand-ochre/10 p-4 rounded-xl border border-brand-ochre/20">
              <h4 className="text-xs font-bold text-brand-ochre uppercase tracking-wider mb-1">
                Fórmula de Copywriting Aplicada
              </h4>
              <span className="text-sm font-display font-semibold text-gray-800">
                {selectedSection.copyFormula}
              </span>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                Consejos del Copywriter (Especializado en Popayán)
              </h4>
              <ul className="space-y-3">
                {selectedSection.copywriterTips.map((tip, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Eye className="w-4 h-4 text-gray-400" />
          <span>Interacción en vivo</span>
        </div>
        <button
          onClick={() => {
            onScrollToSection(selectedSection.id);
          }}
          className="bg-brand-green hover:bg-brand-green/90 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
          id={`scroll-to-btn-${selectedSection.id}`}
        >
          <span>Ir a sección en el diseño</span>
          <CornerRightDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </div>
  );
}
