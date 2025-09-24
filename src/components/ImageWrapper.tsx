import React from 'react';
const imgFirefly202509202220271 = "http://localhost:3845/assets/c3c5384572fa3c5d7f9688a21a3da25a604cbec8.png";
const img = "http://localhost:3845/assets/c15684d9f699e9cb7f13e344a73d68b7fecee5fb.svg";
const imgRoundedEdge = "http://localhost:3845/assets/a9263071dfc90232a311ff85a46723b01af13405.svg";
const img1 = "http://localhost:3845/assets/7abae9018c16c879a0ecf253f3801be4df871c5d.svg";
const img2 = "http://localhost:3845/assets/76a19a654fd33b162308d8793e6be12be8b26273.svg";
const img3 = "http://localhost:3845/assets/cdda679709040c2e11f4f60004ecd43395c397f0.svg";

export default function ImageWrapper() {
  return (
    <div className="relative grow min-w-[320px] lg:min-w-[550px] rounded-[16px] overflow-hidden bg-black h-[70vh] lg:h-full" data-name="Image Wrapper">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imgFirefly202509202220271}')` }}
      />

      <div className="absolute left-12 top-12 flex items-center gap-3 bg-[#0a0b0a] p-2 rounded-xl">
        <div className="size-[41px] rounded-lg bg-[rgba(24,24,24,0.5)] relative flex items-center justify-center">
          <div className="w-5 space-y-[5px]">
            <div className="h-px bg-[#efe7d2]" />
            <div className="h-px bg-[#efe7d2]" />
            <div className="h-px bg-[#efe7d2]" />
          </div>
          <div aria-hidden className="absolute inset-0 rounded-lg border border-[rgba(239,231,210,0.15)]" />
        </div>
        <div className="h-4 w-[130px] relative">
          <img alt="" src={img} className="absolute inset-0 h-full w-full" />
        </div>
        <div className="flex items-center gap-1">
          <div className="px-3 py-2 rounded-lg"> 
            <span className="text-[#efe7d2] text-[12px] tracking-[1px] uppercase">carta</span>
          </div>
          <div className="px-3 py-2 rounded-lg">
            <span className="text-[#efe7d2] text-[12px] tracking-[1px] uppercase">nosotros</span>
          </div>
          <div className="relative rounded-lg bg-[rgba(24,24,24,0.5)] px-3 py-2">
            <span className="text-[#efe7d2] text-[12px] tracking-[1px] uppercase">reservar</span>
            <div aria-hidden className="absolute inset-0 rounded-lg border border-[rgba(239,231,210,0.15)]" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-black/90" />

      <div className="absolute right-0 bottom-0 bg-[#0a0b0a] rounded-tl-2xl p-4">
        <div className="absolute -left-6 bottom-0 size-6">
          <img alt="" src={imgRoundedEdge} className="w-full h-full" />
        </div>
        <div className="absolute right-0 -top-6 size-6">
          <img alt="" src={imgRoundedEdge} className="w-full h-full" />
        </div>
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-full bg-[rgba(24,24,24,0.5)] flex items-center justify-center relative">
            <img alt="" src={img1} className="size-4" />
            <div aria-hidden className="absolute inset-0 rounded-full border border-[rgba(239,231,210,0.15)]" />
          </div>
          <div className="size-9 rounded-full bg-[rgba(24,24,24,0.5)] flex items-center justify-center relative">
            <img alt="" src={img2} className="size-4" />
            <div aria-hidden className="absolute inset-0 rounded-full border border-[rgba(239,231,210,0.15)]" />
          </div>
          <div className="size-9 rounded-full bg-[rgba(24,24,24,0.5)] flex items-center justify-center relative">
            <img alt="" src={img3} className="size-4" />
            <div aria-hidden className="absolute inset-0 rounded-full border border-[rgba(239,231,210,0.15)]" />
          </div>
        </div>
      </div>
    </div>
  );
}


