/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BookingSimulation } from "../types";
import { Smile, Send, Heart, MapPin, Sparkles, RefreshCw, UserCheck, ShieldCheck } from "lucide-react";

export default function LeadSimulator() {
  const [formData, setFormData] = useState<BookingSimulation>({
    parentName: "",
    parentPhone: "",
    childName: "",
    childAge: 7,
    primaryConcern: "estres",
    modality: "presencial",
    isSubmitted: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'childAge' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.childName) {
      alert("Por favor, ingresa los nombres del padre y del niño para simular.");
      return;
    }
    setFormData(prev => ({ ...prev, isSubmitted: true }));
  };

  const handleReset = () => {
    setFormData({
      parentName: "",
      parentPhone: "",
      childName: "",
      childAge: 7,
      primaryConcern: "estres",
      modality: "presencial",
      isSubmitted: false
    });
  };

  const getPersonalizedResponse = () => {
    const { parentName, childName, childAge, primaryConcern, modality } = formData;
    
    let concernText = "";
    let solutionText = "";
    
    switch (primaryConcern) {
      case "estres":
        concernText = "el estrés diario con las tareas rígidas y las notas escolares tradicionales.";
        solutionText = `En Brillo de Luna para ${childName}, vamos a eliminar las tareas infinitas. Sustituiremos la memorización forzada por aprendizaje basado en proyectos vivenciales. ${childName} aprenderá matemáticas cocinando, midiendo o recolectando hojas en nuestros paseos. ¡Vas a ver cómo recupera la alegría de aprender sin lágrimas!`;
        break;
      case "socializacion":
        concernText = "la socialización y la necesidad de que interactúe sanamente con otros niños.";
        solutionText = `¡Te entendemos perfectamente, ${parentName}! En Popayán, Brillo de Luna tiene una comunidad activa de familias homeschoolers. Organizamos encuentros presenciales de socialización, talleres de teatro, arte y excursiones al aire libre (por ejemplo, caminatas ecológicas). ${childName} socializará en un ambiente libre de bullying y competencia destructiva, basado en la empatía.`;
        break;
      case "legal":
        concernText = "la validez legal de este modelo y cómo certificar los años escolares en Colombia.";
        solutionText = `Esta es la duda técnica más común. Quédate tranquila/o: En Colombia el homeschooling es plenamente constitucional. Para ${childName}, trabajamos de la mano con plataformas internacionales de validación y colegios sombrilla autorizados que emiten boletines oficiales válidos ante el Ministerio de Educación Nacional. Podrá ingresar a cualquier colegio tradicional o universidad en el futuro si así lo desean.`;
        break;
      case "tiempo":
        concernText = "el tiempo que ustedes como padres deben dedicarle y el miedo a no ser profesores expertos.";
        solutionText = `No tienes que ser profesor/a ni saberlo todo. Brillo de Luna te entrega la malla curricular masticada y planeada semana a semana. Además, ${childName} contará con tutorías virtuales y presenciales de apoyo dirigidas por pedagogos expertos. Tu rol es acompañar con amor; nosotros nos encargamos de la estructura académica y pedagógica.`;
        break;
      default:
        concernText = "el bienestar emocional general de tu hijo.";
        solutionText = `Diseñaremos una ruta personalizada para ${childName} que respete su temperamento y ritmos naturales, asegurándonos de que reciba atención con amor y paciencia.`;
    }

    return {
      greeting: `¡Hola, ${parentName}! Qué alegría conectar contigo desde Popayán.`,
      analysis: `Hemos recibido tu solicitud. Nos comentas que te preocupa especialmente para ${childName} (${childAge} años) ${concernText}`,
      actionPlan: solutionText,
      nextStep: `Nos encantaría invitarte a tomar un café virtual (o presencial en nuestra sede en Popayán) para entregarte tu diagnóstico pedagógico sin costo alguno.`
    };
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden flex flex-col h-full" id="lead-simulator-panel">
      {/* Header */}
      <div className="bg-brand-green p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-white/25 text-white p-1.5 rounded-lg">
            <Heart className="w-5 h-5 text-brand-gold animate-pulse" />
          </div>
          <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase">Emisor de Leads</span>
        </div>
        <h2 className="text-xl font-display font-bold tracking-tight">Simulador de Conversión</h2>
        <p className="text-brand-green-light text-sm mt-1">Experimenta cómo se capturan e interactúan los leads en Popayán</p>
      </div>

      <div className="p-6 flex-1 overflow-y-auto space-y-6">
        {!formData.isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4" id="conversion-form-sim">
            <div className="bg-brand-green-light/20 p-4 rounded-xl border border-brand-green-light/40 mb-2">
              <p className="text-xs text-brand-green leading-relaxed font-medium">
                Completa este formulario simulado para ver cómo el copywriting persuasivo de la landing page responde dinámicamente y con empatía a los temores de los padres.
              </p>
            </div>

            {/* Parent Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Nombre del Padre / Madre:
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                placeholder="Ej. Carolina Rojas"
                required
                className="w-full bg-white border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
              />
            </div>

            {/* Parent Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                WhatsApp o Celular (Simulado):
              </label>
              <input
                type="text"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleInputChange}
                placeholder="Ej. +57 312 345 6789"
                className="w-full bg-white border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
              />
            </div>

            {/* Child Info Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Nombre de tu hijo:
                </label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleInputChange}
                  placeholder="Ej. Sofía"
                  required
                  className="w-full bg-white border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Edad (Años):
                </label>
                <input
                  type="number"
                  name="childAge"
                  min="3"
                  max="17"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                />
              </div>
            </div>

            {/* Core Concern */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                ¿Cuál es tu mayor temor o preocupación?
              </label>
              <select
                name="primaryConcern"
                value={formData.primaryConcern}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green font-medium cursor-pointer"
              >
                <option value="estres">Estrés por tareas rígidas y notas escolares</option>
                <option value="socializacion">Socialización y aislamiento del niño</option>
                <option value="legal">Validez legal e ingreso posterior a universidades</option>
                <option value="tiempo">Falta de tiempo de los padres para enseñar</option>
              </select>
            </div>

            {/* Modality */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Modalidad de preferencia en Popayán:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['presencial', 'semipresencial', 'virtual'] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, modality: m }))}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg capitalize border transition-all ${
                      formData.modality === m
                        ? 'bg-brand-green/10 text-brand-green border-brand-green'
                        : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-ochre hover:bg-brand-ochre/90 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] mt-4 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Simular Registro del Padre</span>
            </button>
          </form>
        ) : (
          <div className="space-y-5 animate-fade-in" id="simulation-result">
            {/* Success card */}
            <div className="bg-brand-green-light/40 border border-brand-green-light p-4 rounded-2xl flex items-start gap-3">
              <div className="bg-brand-green text-white p-1 rounded-full shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-green">¡Lead Capturado Exitosamente!</h4>
                <p className="text-xs text-gray-600 mt-1">
                  En una landing page real, estos datos se sincronizan con un CRM (o WhatsApp API) para dar un seguimiento inmediato y ultra-personalizado.
                </p>
              </div>
            </div>

            {/* Personalized copywriting response */}
            <div className="border border-brand-gold/20 bg-[#FFFDF9] shadow-md p-5 rounded-2xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark font-mono text-[9px] uppercase px-3 py-1 font-bold rounded-bl-xl flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Respuesta del Copywriter</span>
              </div>

              {/* Message bubble feel */}
              <div className="space-y-3 pt-2 text-gray-800">
                <p className="font-display font-bold text-base text-brand-green flex items-center gap-1">
                  <Heart className="w-4 h-4 text-brand-ochre fill-brand-ochre shrink-0" />
                  {getPersonalizedResponse().greeting}
                </p>
                <p className="text-xs font-medium text-gray-500 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                  {getPersonalizedResponse().analysis}
                </p>
                <div className="bg-brand-green-light/10 border-l-4 border-brand-green p-4 text-sm leading-relaxed text-gray-700 italic rounded-r-xl">
                  {getPersonalizedResponse().actionPlan}
                </div>
                <p className="text-xs font-semibold text-brand-ochre flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {getPersonalizedResponse().nextStep}
                </p>
              </div>
            </div>

            {/* Why this converts */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-2">
              <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> ¿Por qué convierte esta respuesta?
              </h5>
              <ul className="space-y-1.5 text-[11px] text-gray-600 list-disc list-inside">
                <li><span className="font-semibold text-gray-700">Hiper-personalización:</span> Se dirige al padre y al hijo por sus nombres reales.</li>
                <li><span className="font-semibold text-gray-700">Resolución empática de objeciones:</span> Desactiva el dolor puntual sin rodeos de texto escolar.</li>
                <li><span className="font-semibold text-gray-700">Geolocalización:</span> Conecta de inmediato con Popayán, eliminando el sentimiento de frialdad virtual.</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Simular con otra familia</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
