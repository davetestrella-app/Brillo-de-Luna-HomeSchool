/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CopyBlueprint {
  id: string;
  sectionTitle: string;
  objective: string; // Psychological objective for the parent
  wireframeGuide: string; // UI/UX layout recommendations
  copyFormula: string; // The formula used (e.g. PAS, AIDA, Rule of Three)
  copywriterTips: string[]; // Pro-tips for optimization or localizing in Popayán
  content: {
    kicker?: string;
    headline: string;
    subheadline?: string;
    ctaText: string;
    items?: Array<{
      title: string;
      description: string;
      iconName?: string;
      tag?: string;
    }>;
    microcopy?: string;
    extraNote?: string;
  };
}

export interface Testimonial {
  id: string;
  parentName: string;
  role: string; // "Mamá de..." / "Papá de..."
  location: string; // E.g., Popayán - Sector Belén
  stars: number;
  quote: string;
  avatarUrl?: string;
}

export interface BookingSimulation {
  parentName: string;
  parentPhone: string;
  childName: string;
  childAge: number;
  primaryConcern: string;
  modality: 'presencial' | 'semipresencial' | 'virtual';
  isSubmitted: boolean;
}
