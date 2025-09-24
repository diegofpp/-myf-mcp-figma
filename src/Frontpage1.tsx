import React from 'react';
import MainWrapper from './components/MainWrapper';
import ImageWrapper from './components/ImageWrapper';
import Grid from './components/Grid';

export default function Frontpage1() {
  return (
    <div className="min-h-screen lg:h-screen w-full bg-[#0a0b0a] p-6 overflow-auto lg:overflow-hidden">
      <MainWrapper>
        <ImageWrapper />
        <div className="w-full lg:w-[420px] shrink-0 h-auto lg:h-full"><Grid /></div>
      </MainWrapper>
    </div>
  );
}


