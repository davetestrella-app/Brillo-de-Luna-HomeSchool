import React, { useState } from "react";
import { Smile, Send, Heart, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

interface LeadContactFormProps {
  onSuccess?: () => void;
}

export default function LeadContactForm({ onSuccess }: LeadContactFormProps) {
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState(7);
  const [primaryConcern, setPrimaryConcern] = useState("estres");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !childName || !parentPhone) {
      alert("Por favor, completa los campos requeridos.");
      return;
    }
    setIsSubmitted(true);
    if (onSuccess) {
      onSuccess();
    }
  };

  const getPersonalizedResponse = () => {
    let concernText = "";
    let solutionText = "";

    switch (primaryConcern) {
      case "estres":
        concernText = "el estrés generado por las tareas infinitas y las notas tradicionales.";
        solutionText = `En Brillo de Luna para ${childName}, sustituiremos la memorización forzada por aprendizaje basado en proyectos reales. Aprenderá jugando, cocinando, explorando y creando. ¡Verás cómo recupera la alegría de aprender sin lágrimas ni frustraciones!`;
        break;
      case "socializacion":
        concernText = "la socialización y el deseo de que interactúe sanamente.";
        solutionText = `Te entendemos perfectamente. En Popayán, contamos con una comunidad cálida de familias homeschoolers. Organizamos talleres presenciales de teatro, arte, música y salidas al campo donde ${childName} podrá hacer amigos reales en un ambiente libre de acoso o presiones.`;
        break;
      case "legal":
        concernText = "la validez legal y académica de este modelo en Colombia.";
        solutionText = `Descuida: educar en casa es plenamente constitucional. Respaldamos el proceso de ${childName} con boletines oficiales válidos expedidos por colegios sombrilla autorizados que cumplen con todas las normas del Ministerio de Educación. Podrá ingresar a cualquier universidad o escuela tradicional en el futuro.`;
        break;
      case "tiempo":
        concernText = "el temor de no disponer de suficiente tiempo o no saber cómo enseñar.";
        solutionText = `No tienes que ser maestro/a ni saberlo todo. Te entregamos la ruta curricular totalmente planificada semana a semana y ${childName} tendrá el apoyo constante de pedagogos dedicados. Tu rol es simplemente acompañar con amor y verle brillar.`;
        break;
      default:
        concernText = "el bienestar educativo integral de tu hijo.";
        solutionText = `Diseñaremos una ruta a la medida de ${childName} respetando su temperamento y ritmos naturales de aprendizaje.`;
    }

    return {
      title: `¡Gracias, ${parentName}!`,
      intro: `Hemos recibido tu solicitud de asesoría. Comprendemos que tu mayor inquietud para ${childName} (${childAge} años) es ${concernText}`,
      plan: solutionText,
      nextStep: `Un asesor de Brillo de Luna se pondrá en contacto contigo en las próximas horas al teléfono ${parentPhone} para coordinar tu Diagnóstico Pedagógico Gratuito.`
    };
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden flex flex-col h-full" id="lead-contact-form">
      {/* Header */}
      <div className="bg-brand-green p-6 text-white text-center space-y-2">
        <div className="inline-flex bg-white/10 p-2 rounded-full">
          <Heart className="w-5 h-5 text-brand-gold fill-brand-gold animate-pulse" />
        </div>
        <h2 className="text-xl font-serif font-bold">Agenda tu Ruta de Luz</h2>
        <p className="text-brand-green-light text-xs max-w-sm mx-auto leading-relaxed">
          Recibe un Diagnóstico Pedagógico Gratuito de 30 minutos y descubre cómo el homeschooling amoroso puede transformar la vida de tu hijo en Popayán.
        </p>
      </div>

      <div className="p-6 md:p-8 flex-1 overflow-y-auto">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4" id="consultation-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Parent Name */}
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Tu Nombre Completo <span className="text-brand-ochre">*</span>
                </label>
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Ej. Carolina Rojas"
                  required
                  className="w-full bg-brand-cream/40 border border-brand-green/10 text-gray-800 rounded-xl px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                />
              </div>

              {/* Parent Phone */}
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  WhatsApp / Celular <span className="text-brand-ochre">*</span>
                </label>
                <input
                  type="tel"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  placeholder="Ej. 312 345 6789"
                  required
                  className="w-full bg-brand-cream/40 border border-brand-green/10 text-gray-800 rounded-xl px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Child Name */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Nombre de tu Hijo/a <span className="text-brand-ochre">*</span>
                </label>
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  placeholder="Ej. Sofía"
                  required
                  className="w-full bg-brand-cream/40 border border-brand-green/10 text-gray-800 rounded-xl px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                />
              </div>

              {/* Child Age */}
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Edad
                </label>
                <input
                  type="number"
                  min="3"
                  max="17"
                  value={childAge}
                  onChange={(e) => setChildAge(parseInt(e.target.value) || 0)}
                  className="w-full bg-brand-cream/40 border border-brand-green/10 text-gray-800 rounded-xl px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                />
              </div>
            </div>

            {/* Parent Email */}
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                Correo Electrónico (Opcional)
              </label>
              <input
                type="email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                placeholder="Ej. carolina@example.com"
                className="w-full bg-brand-cream/40 border border-brand-green/10 text-gray-800 rounded-xl px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
              />
            </div>

            {/* Core Concern */}
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                ¿Cuál es tu mayor temor o desafío actualmente?
              </label>
              <select
                value={primaryConcern}
                onChange={(e) => setPrimaryConcern(e.target.value)}
                className="w-full bg-brand-cream/40 border border-brand-green/10 text-gray-800 rounded-xl px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green cursor-pointer font-medium"
              >
                <option value="estres">Estrés y ansiedad por tareas rígidas o notas</option>
                <option value="socializacion">Socialización y temor a que se aísle</option>
                <option value="legal">Validez legal de la educación en casa en Colombia</option>
                <option value="tiempo">Falta de tiempo de los padres para dar clases</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-ochre hover:bg-brand-ochre/95 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] mt-4 cursor-pointer text-xs uppercase tracking-wider"
            >
              <Send className="w-4 h-4" />
              <span>Agendar mi Asesoría Gratuita</span>
            </button>
            <p className="text-[10px] text-gray-400 text-center">
              🔒 Tus datos son tratados con confidencialidad absoluta y amparados bajo la Ley de Habeas Data.
            </p>
          </form>
        ) : (
          <div className="space-y-6 animate-fade-in text-left" id="success-response">
            {/* Success Card */}
            <div className="bg-brand-green-light/40 border border-brand-green-light/80 p-5 rounded-2xl flex items-start gap-3.5 shadow-sm">
              <div className="bg-brand-green text-white p-1.5 rounded-full shrink-0">
                <CheckCircle2 className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-brand-dark">{getPersonalizedResponse().title}</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Tu solicitud ha sido registrada de forma segura en nuestro sistema.
                </p>
              </div>
            </div>

            {/* Personalized Copywriting Response */}
            <div className="border border-brand-green/10 bg-[#FFFDF9] shadow-md p-6 rounded-2xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-green text-white font-mono text-[9px] uppercase px-3 py-1 font-bold rounded-bl-xl flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-gold animate-pulse" />
                <span>Ruta de Luz</span>
              </div>

              <div className="space-y-3.5 pt-2 text-gray-800">
                <p className="text-xs leading-relaxed text-gray-600">
                  {getPersonalizedResponse().intro}
                </p>
                <div className="bg-brand-green-light/10 border-l-4 border-brand-green p-4 text-xs md:text-sm leading-relaxed text-gray-700 italic rounded-r-xl font-serif">
                  "{getPersonalizedResponse().plan}"
                </div>
                <p className="text-xs font-semibold text-brand-dark leading-relaxed flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <MapPin className="w-4 h-4 text-brand-ochre shrink-0 mt-0.5" />
                  <span>{getPersonalizedResponse().nextStep}</span>
                </p>
              </div>
            </div>

            {/* WhatsApp Integration Button */}
            <div className="text-center space-y-3">
              <p className="text-[11px] text-gray-500 font-medium">
                ¿Prefieres agendar de inmediato por WhatsApp?
              </p>
              <a
                href={`https://wa.me/573123456789?text=Hola%20Brillo%20de%20Luna,%20mi%20nombre%20es%20${encodeURIComponent(parentName)}%20y%20me%20gustar%C3%ADa%20agendar%20la%20asesor%C3%ADa%20para%20mi%20hijo%20${encodeURIComponent(childName)}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-[0.98] text-xs uppercase tracking-wider cursor-pointer"
              >
                <span>💬 Escríbenos por WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setParentName("");
                setParentPhone("");
                setParentEmail("");
                setChildName("");
                setChildAge(7);
              }}
              className="w-full text-xs text-gray-400 hover:text-brand-green underline transition-colors cursor-pointer text-center block pt-2"
            >
              Volver a rellenar el formulario
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
