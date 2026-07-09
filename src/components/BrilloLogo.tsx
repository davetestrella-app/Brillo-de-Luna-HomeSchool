import React from "react";

interface BrilloLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  layout?: "vertical" | "horizontal" | "icon-only";
}

export default function BrilloLogo({
  className = "",
  size = "md",
  layout = "vertical",
}: BrilloLogoProps) {
  // Dimensions based on size
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-14 h-14",
    lg: "w-24 h-24",
    xl: "w-40 h-40",
  };

  const textSizes = {
    sm: {
      title: "text-lg",
      subtitle: "text-[7px] py-0.5 px-2",
    },
    md: {
      title: "text-2xl",
      subtitle: "text-[9px] py-0.5 px-3.5",
    },
    lg: {
      title: "text-4xl",
      subtitle: "text-[12px] py-1 px-5",
    },
    xl: {
      title: "text-5xl",
      subtitle: "text-[15px] py-1.5 px-7",
    },
  };

  // Reusable High-Fidelity Crescent Moon SVG with logo-exact color gradient & filigree decoration
  const MoonSVG = ({ className = "" }: { className?: string }) => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-sm`}
    >
      <defs>
        {/* Exact logo gradient: turquoise/mint to pastel coral/pink */}
        <linearGradient id="brilloMoonGradient" x1="10%" y1="5%" x2="90%" y2="95%">
          <stop offset="0%" stopColor="#4BD8C5" />
          <stop offset="35%" stopColor="#5FC9BB" />
          <stop offset="70%" stopColor="#B39EBA" />
          <stop offset="100%" stopColor="#E28AA4" />
        </linearGradient>
      </defs>

      {/* Crescent Moon Path */}
      <path
        d="M 45 6 A 41 41 0 1 0 88 77 A 35 35 0 1 1 45 6 Z"
        fill="url(#brilloMoonGradient)"
      />

      {/* Intricate Swirl/Filigree/Leafy Patterns (hand-designed vector paths overlaid on the moon) */}
      <g stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.85">
        {/* Swirl 1: Lower center curving up */}
        <path d="M 40 76 C 35 70, 32 55, 38 45 C 41 40, 48 42, 45 48 C 42 52, 35 48, 36 42" />
        {/* Swirl 2: Branching scroll */}
        <path d="M 33 58 C 28 50, 29 40, 35 32 C 38 28, 43 30, 41 35 C 39 39, 34 37, 35 33" />
        {/* Swirl 3: Upper hook */}
        <path d="M 42 28 C 40 22, 43 15, 48 10 C 50 8, 53 11, 51 14 C 49 17, 46 16, 47 13" />
        {/* Leaves & vines accents */}
        <path d="M 30 65 Q 26 62, 28 58 Q 32 62, 30 65" fill="white" opacity="0.3" />
        <path d="M 32 47 Q 27 45, 28 41 Q 33 44, 32 47" fill="white" opacity="0.3" />
        <path d="M 37 32 Q 34 28, 36 24 Q 40 28, 37 32" fill="white" opacity="0.3" />
        <path d="M 46 18 Q 44 14, 47 11 Q 49 15, 46 18" fill="white" opacity="0.3" />
        
        {/* Additional decorative flourishes from the lower tip */}
        <path d="M 52 79 C 58 77, 68 76, 73 70 C 76 67, 73 63, 69 65 C 65 67, 66 72, 71 70" />
        <path d="M 59 74 Q 63 71, 61 68 Q 57 71, 59 74" fill="white" opacity="0.3" />
      </g>
    </svg>
  );

  if (layout === "icon-only") {
    return <MoonSVG className={`${iconSizes[size]} ${className}`} />;
  }

  if (layout === "horizontal") {
    return (
      <div className={`flex items-center gap-3 ${className}`} id="brillo-logo-horizontal">
        <MoonSVG className={`${iconSizes[size]} shrink-0`} />
        <div className="flex flex-col">
          <span className={`${textSizes[size].title} font-script font-bold text-brand-dark leading-none tracking-wide`}>
            Brillo de luna
          </span>
          {/* Custom organic brush stroke simulation with CSS */}
          <div className="mt-1 flex">
            <span
              className={`${textSizes[size].subtitle} font-hand font-bold text-white bg-brand-green uppercase tracking-[0.15em] rounded-md shadow-sm relative inline-block`}
              style={{
                borderRadius: "20% 10px 18% 8px / 8px 12px 10px 15px",
                backgroundImage: "linear-gradient(100deg, #589D91 0%, #68ABA0 100%)",
              }}
            >
              HOME SCHOOLING
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default Vertical Layout
  return (
    <div
      className={`flex flex-col items-center text-center ${className}`}
      id="brillo-logo-vertical"
    >
      <MoonSVG className={`${iconSizes[size]} mb-3`} />
      <span
        className={`${textSizes[size].title} font-script font-bold text-brand-dark tracking-wide leading-none mb-1`}
      >
        Brillo de luna
      </span>
      {/* Hand-drawn styled brushstroke banner container */}
      <div className="relative inline-flex justify-center items-center mt-1">
        {/* Irregular brushstroke effect */}
        <span
          className={`${textSizes[size].subtitle} font-hand font-bold text-white bg-brand-green uppercase tracking-[0.18em] shadow-sm`}
          style={{
            borderRadius: "24% 8% 20% 12% / 10px 14px 11px 16px",
            backgroundImage: "linear-gradient(102deg, #589D91 0%, #67AFA2 100%)",
            paddingLeft: "1.25em",
            paddingRight: "1.1em",
            display: "inline-block",
          }}
        >
          HOME SCHOOLING
        </span>
      </div>
    </div>
  );
}
