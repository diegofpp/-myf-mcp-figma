import React from 'react';
import { ReactNode } from 'react';

type MainWrapperProps = {
  children: ReactNode;
};

export default function MainWrapper({ children }: MainWrapperProps) {
  return (
    <div
      data-name="Main Wrapper"
      className="flex w-full h-auto lg:h-full gap-4 rounded-tr-[48px] rounded-br-[48px] flex-col lg:flex-row"
    >
      {children}
    </div>
  );
}


