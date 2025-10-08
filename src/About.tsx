import React from 'react';
import Navbar from './components/Navbar';

// Imágenes - adaptando de localhost a rutas relativas
const imgMainBackground = "/assets/6f4f45cac41af1ccb46df6af8409b3d9401932e8.png";
const imgMiddleBackground = "/assets/e144b5bf3e6dc12f946c18304b11f2c75f422429.png";
const imgBottomBackground = "/assets/218f4a6bc2276cff28c243ef2003f5500ea8e718.png";
const imgPatternBackground = "/assets/c2677b078baaec864ae18abdd8cdd2cbf2e15980.png";
const imgLogo = "/assets/c15684d9f699e9cb7f13e344a73d68b7fecee5fb.svg";
const imgStar = "/assets/6f623a95aa7a7bb15c4c8514a9548a17fe0f9ca1.svg";

interface AboutProps {
  onNavigateToFrontpage: () => void;
  onNavigateToMenu: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToReservation?: () => void;
  onOpenMenuNav?: () => void;
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex gap-4 items-center justify-center w-full">
      <div className="flex items-center justify-center py-[7px]">
        <div className="flex items-center justify-center">
          <div className="flex-none rotate-[315deg]">
            <div className="relative size-2">
              <div aria-hidden className="absolute inset-0 border border-[rgba(239,231,210,0.15)]" />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(239,231,210,0.15)] h-px w-[20px]" />
      </div>
      <h2 className="text-[#efe7d2] text-[24px] mobile:text-[20px] tracking-[1px] uppercase" style={{ fontFamily: 'Forum, sans-serif', fontWeight: 400 }}>
        {title}
      </h2>
      <div className="flex items-center justify-center py-[7px]">
        <div className="bg-[rgba(239,231,210,0.15)] h-px w-[20px]" />
        <div className="flex items-center justify-center">
          <div className="flex-none rotate-[315deg]">
            <div className="relative size-2">
              <div aria-hidden className="absolute inset-0 border border-[rgba(239,231,210,0.15)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const separatorIcon = () => (
    <div className="flex items-center justify-center">
      <div className="flex-none rotate-[315deg]">
        <div className="relative size-2">
          <div aria-hidden className="absolute inset-0 border border-[rgba(239,231,210,0.15)]" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-between px-6 py-5 relative rounded-2xl w-full">
      <div aria-hidden className="absolute inset-0 rounded-2xl border border-[rgba(239,231,210,0.15)]" />
      <div className="flex gap-4 items-center">
        <span className="text-[#efe7d2] text-[14px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>By Pawel Gola</span>
        {separatorIcon()}
        <span className="text-[#efe7d2] text-[14px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>Licensing</span>
        {separatorIcon()}
        <span className="text-[#efe7d2] text-[14px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>Styleguide</span>
      </div>
    </div>
  );
}

function RatingCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-2 items-center p-8 relative rounded-2xl border border-[rgba(239,231,210,0.15)]">
      {/* Stars */}
      <div className="flex gap-1 items-center py-[7px]">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="relative size-4">
            <img alt="" src={imgStar} className="size-full opacity-70" />
          </div>
        ))}
      </div>
      
      {/* Title */}
      <h3 className="text-[#efe7d2] text-[24px] mobile:text-[20px] tracking-[1px] uppercase text-center" style={{ fontFamily: 'Forum, sans-serif', fontWeight: 400 }}>
        {title}
      </h3>
      
      {/* Subtitle */}
      <div className="text-[rgba(245,242,234,0.7)] text-[12px] tracking-[1px] uppercase text-center" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
        <p className="mb-0">Best Steak House</p>
        <p>Prague</p>
      </div>
    </div>
  );
}

export default function About({ onNavigateToFrontpage, onNavigateToMenu, onNavigateToAbout, onNavigateToReservation, onOpenMenuNav }: AboutProps) {
  return (
    <div className="min-h-screen desktop:h-screen w-full bg-[#0a0b0a] p-6 overflow-auto desktop:overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <img 
          alt="" 
          src={imgPatternBackground} 
          className="absolute inset-0 w-full h-full object-cover translate-x-[-50%] left-1/2"
        />
      </div>

      <div className="flex w-full h-auto desktop:h-full gap-4 rounded-tr-[48px] rounded-br-[48px] flex-col desktop:flex-row relative">
        {/* Image Wrapper - Fixed left side */}
        <div className="relative grow min-w-[320px] desktop:min-w-[550px] rounded-[16px] overflow-hidden bg-black h-[40vh] desktop:h-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${imgMainBackground}')` }}
          />

          {/* Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-black/60" />

          {/* Title */}
          <h1 className="absolute bottom-[100px] left-[56px] text-[#efe7d2] text-[80px] mobile:text-[60px] tracking-[2px] uppercase" style={{ fontFamily: 'Forum, sans-serif', fontWeight: 400 }}>
            sobre nosotros
          </h1>

          {/* Navbar */}
          <Navbar onNavigateToMenu={onNavigateToMenu} onNavigateToFrontpage={onNavigateToFrontpage} onNavigateToReservation={onNavigateToReservation} onOpenMenuNav={onOpenMenuNav} variant="main" />
        </div>

        {/* Content Wrapper - Scrollable right side */}
        <div className="w-full desktop:w-[50%] shrink-0 h-auto desktop:h-full overflow-y-auto relative">
          <div className="flex flex-col gap-4 items-start p-8 pb-20 w-full">
            
            {/* Top Section */}
            <div className="flex flex-col desktop:flex-row gap-4 w-full items-stretch">
              {/* Main Content Card */}
              <div className="flex flex-col justify-between p-12 relative rounded-2xl border border-[rgba(239,231,210,0.15)] flex-1">
                <h2 className="text-[#efe7d2] text-[32px] mobile:text-[28px] tracking-[1px] uppercase mb-4" style={{ fontFamily: 'Forum, sans-serif', fontWeight: 400 }}>
                  Sushi Artistry Redefined
                </h2>
                <p className="text-[#efe7d2] text-[16px] mobile:text-[14px] leading-[1.8]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>
                  Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.
                </p>
              </div>

              {/* Middle Image */}
              <div className="relative rounded-2xl overflow-hidden bg-black flex-1 min-h-[300px] desktop:min-h-auto">
                <img 
                  alt="" 
                  src={imgMiddleBackground} 
                  className="absolute inset-0 w-full h-full object-cover translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2"
                />
              </div>
            </div>

            {/* Ratings Section */}
            <div className="flex flex-col tablet:flex-row gap-4 w-full items-stretch">
              <RatingCard title="Trip Advisor" subtitle="Best Steak House Prague" />
              <RatingCard title="Michelin Guide" subtitle="Best Steak House Prague" />
              <RatingCard title="Star Dining" subtitle="Best Steak House Prague" />
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col desktop:flex-row gap-4 w-full items-stretch">
              {/* Bottom Image */}
              <div className="relative rounded-2xl overflow-hidden bg-black flex-1 min-h-[300px] desktop:min-h-auto">
                <img 
                  alt="" 
                  src={imgBottomBackground} 
                  className="absolute inset-0 w-full h-full object-cover left-0 top-[-74px]"
                />
              </div>

              {/* Story Card */}
              <div className="flex flex-col justify-between p-12 relative rounded-2xl border border-[rgba(239,231,210,0.15)] flex-1">
                <SectionHeader title="Our Story" />
                <p className="text-[#efe7d2] text-[16px] mobile:text-[14px] leading-[1.8]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>
                  Founded with a passion for culinary excellence, Qitchen's journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
