import Navbar from './Navbar';

const imgFirefly202509202220271 = "/assets/c3c5384572fa3c5d7f9688a21a3da25a604cbec8.png";
const imgRoundedEdge = "/assets/a9263071dfc90232a311ff85a46723b01af13405.svg";
const img1 = "/assets/7abae9018c16c879a0ecf253f3801be4df871c5d.svg";
const img2 = "/assets/76a19a654fd33b162308d8793e6be12be8b26273.svg";
const img3 = "/assets/cdda679709040c2e11f4f60004ecd43395c397f0.svg";

type ImageWrapperProps = {
  onNavigateToMenu: () => void;
  onNavigateToReservation?: () => void;
};

export default function ImageWrapper({ onNavigateToMenu, onNavigateToReservation }: ImageWrapperProps) {
  return (
    <div className="relative grow min-w-[320px] desktop:min-w-[550px] rounded-[16px] overflow-hidden bg-black h-[70vh] desktop:h-full" data-name="Image Wrapper">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imgFirefly202509202220271}')` }}
      />

      <Navbar onNavigateToMenu={onNavigateToMenu} onNavigateToReservation={onNavigateToReservation} variant="main" />

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