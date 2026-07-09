/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import LandingPreview from "./components/LandingPreview";
import LeadContactForm from "./components/LeadContactForm";
import { X, Heart } from "lucide-react";

export default function App() {
  const [selectedSectionId, setSelectedSectionId] = useState<string>("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const bookingFormRef = useRef<HTMLDivElement>(null);

  const handleSectionSelect = (id: string) => {
    setSelectedSectionId(id);
    // Reset selection after trigger to allow re-clicks
    setTimeout(() => {
      setSelectedSectionId("");
    }, 800);
  };

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans selection:bg-brand-green/20 selection:text-brand-green" id="main-applet-root">
      
      {/* Pristine Full Landing Page */}
      <main className="flex-1 w-full flex flex-col" id="clean-landing-frame">
        <LandingPreview 
          selectedSectionId={selectedSectionId}
          onSectionClick={handleSectionSelect}
          bookingFormRef={bookingFormRef}
          openBookingModal={openBookingModal}
          previewModeOnly={true} // Hides all developer copywriting badges and editor borders
        />
      </main>

      {/* REALISTIC LEAD REGISTRATION MODAL (When parents click CTAs) */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-brand-dark/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in animate-duration-200" id="booking-modal-overlay">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-xl w-full max-h-[92vh] flex flex-col relative border border-brand-green/10">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 bg-brand-cream hover:bg-brand-green-light/60 text-brand-dark hover:text-brand-green p-2.5 rounded-full transition-all cursor-pointer z-10 border border-brand-green/10"
              id="close-modal-btn"
              aria-label="Cerrar formulario"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Simulated Lead Form container inside Modal */}
            <div className="overflow-y-auto flex-1">
              <LeadContactForm onSuccess={() => {}} />
            </div>

            {/* Modal helper footer */}
            <div className="bg-brand-cream/40 px-6 py-4 border-t border-brand-green/10 flex items-center justify-between text-[11px] text-gray-500 font-sans">
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-brand-ochre fill-brand-ochre" />
                <span>Asesoría Pedagógica Personalizada</span>
              </span>
              <span className="font-semibold text-brand-green">Brillo de Luna Homeschool</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
