import React from 'react';
import MainWrapper from './components/MainWrapper';
import ImageWrapper from './components/ImageWrapper';
import Grid from './components/Grid';

type Frontpage1Props = {
  onNavigateToMenu: () => void;
  onNavigateToReservation: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToFrontpage?: () => void;
  onOpenMenuNav?: () => void;
};

export default function Frontpage1({ onNavigateToMenu, onNavigateToReservation, onNavigateToAbout, onNavigateToFrontpage, onOpenMenuNav }: Frontpage1Props) {
  return (
    <div className="min-h-screen desktop:h-screen w-full bg-[#0a0b0a] p-6 overflow-auto desktop:overflow-hidden">
      <MainWrapper>
        <ImageWrapper onNavigateToMenu={onNavigateToMenu} onNavigateToReservation={onNavigateToReservation} onNavigateToAbout={onNavigateToAbout} onNavigateToFrontpage={onNavigateToFrontpage} onOpenMenuNav={onOpenMenuNav} />
        <div className=" w-full desktop:w-[420px] shrink-0 h-auto desktop:h-full"><Grid onNavigateToMenu={onNavigateToMenu} /></div>
      </MainWrapper>
    </div>
  );
}