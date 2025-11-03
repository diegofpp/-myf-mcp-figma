import React from 'react'
const imgImage = "/assets/cristian.png";
const imgImage1 = "/assets/24a2fbd3cb5648cd4f6686480c062db1d5cff2fe.png";
const imgImage2 = "/assets/e144b5bf3e6dc12f946c18304b11f2c75f422429.png";
const imgRoundedEdge = "/assets/a9263071dfc90232a311ff85a46723b01af13405.svg";
const imgArrow = "/assets/616eeb88867bd458812dfa44d204fd6bc743a917.svg";

type GridProps = {
  onNavigateToMenu: () => void;
};

function GridCard({
  image,
  label,
  onNavigateToMenu,
}: {
  image: string;
  label: string;
  onNavigateToMenu: () => void;
}) {
  return (
    <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-black">
      {/* Imagen optimizada con responsive loading */}
      <img
        src={image}
        alt={`${label} card`}
        className="w-full h-full object-cover"
      />
      
      <button 
        onClick={onNavigateToMenu}
        className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-[#0a0b0a] to-transparent pt-3 pl-6 pr-1"
      >
        {/*<div className="absolute -left-6 bottom-0 size-6">
          <img alt="" src={imgRoundedEdge} className="w-full h-full" />
        </div>
        <div className="absolute right-0 -top-6 size-6">
          <img alt="" src={imgRoundedEdge} className="w-full h-full" />
        </div>*/}
        <div className="flex items-center justify-end gap-3 pb-0">
          <span className="rotating-text text-[#efe7d2] uppercase tracking-[1px] text-[16px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>{label}</span>
          <div className="size-8 rounded-full bg-[rgba(24,24,24,0.5)] flex items-center justify-center relative">
            <img alt="" src={imgArrow} className="size-4" />
            <div aria-hidden className="absolute inset-0 rounded-full border border-[rgba(239,231,210,0.15)]" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default function Grid({ onNavigateToMenu }: GridProps) {
  return (
    <div className="flex w-full flex-col tablet:flex-row desktop:flex-col gap-4 max-w-none desktop:max-w-[420px] h-auto desktop:h-full">
      <div className="h-[250px] tablet:h-[200px] tablet:flex-1 desktop:h-auto desktop:flex-1 desktop:min-h-0">
        <GridCard image={imgImage} label="carta" onNavigateToMenu={onNavigateToMenu} />
      </div>
      <div className="h-[250px] tablet:h-[200px] tablet:flex-1 desktop:h-auto desktop:flex-1 desktop:min-h-0">
        <GridCard image={imgImage1} label="reservas" onNavigateToMenu={() => {}} />
      </div>
      <div className="h-[250px] tablet:h-[200px] tablet:flex-1 desktop:h-auto desktop:flex-1 desktop:min-h-0">
        <GridCard image={imgImage2} label="nuestro Restaurant" onNavigateToMenu={() => {}} />
      </div>
    </div>
  );
}