import ImageWrapper from './components/ImageWrapper';
import Navbar from './components/Navbar';
import MainWrapper from './components/MainWrapper';

// Menu data con preparaciones del mar chilenas
const menuSections = [
  {
    id: 'entradas',
    title: 'ENTRADAS',
    items: [
      {
        name: 'Pescado Frito',
        price: '$5',
        description: 'Delicioso mix de salmon y reineta fresca marinados en limón de pica con cebolla morada, cilantro y ají amarillo.',
        image: '/assets/pescadofrito.png',
        hasLeaf: true
      },
      {
        name: 'Lomo Salsa',
        price: '$5',
        description: 'Delicioso mix de salmon y reineta fresca marinados en limón de pica con cebolla morada, cilantro y ají amarillo.',
        image: '/assets/lomosalsa.png',
        hasLeaf: true
      },
      {
        name: 'Ceviche Mixto',
        price: '$5',
        description: 'Delicioso mix de salmon y reineta fresca marinados en limón de pica con cebolla morada, cilantro y ají amarillo.',
        image: '/assets/ceviche-mixto.png',
        hasLeaf: true
      },
      {
        name: 'Mariscal Caliente',
        price: '$5',
        description: 'Caldo marinero con una sabrosa mezcla de mariscos frescos, servido bien caliente al estilo chileno.',
        image: '/assets/mariscal.png',
        hasLeaf: true
      },
      {
        name: 'Ceviche de Corvina',
        price: '$5',
        description: 'Deliciosa corvina marinada en limón de pica con cebolla morada, cilantro y ají amarillo.',
        image: '/assets/mixparmesano.webp',
        hasLeaf: true
      },
      {
        name: 'Machas a la Parmesana',
        price: '$5',
        description: 'Machas frescas gratinadas con queso parmesano, mantequilla de ajo y perejil.',
        image: '/assets/3b26b652204bdad6e3d09d3a32b1bb8db457854f.png'
      },
      {
        name: 'Ostiones al Pil Pil',
        price: '$5',
        description: 'Ostiones frescos salteados en aceite de oliva con ajo, merkén y perejil.',
        image: '/assets/2279ba2be00dc243debd6e046f1b6aafc1457391.png'
      },
      {
        name: 'Empanadas de Mariscos',
        price: '$5',
        description: 'Empanadas horneadas rellenas con camarones, jaibas y queso, servidas con pebre.',
        image: '/assets/4168c2399769973d3d9b6d3b2d07bb31977cb3e4.png'
      }
    ]
  },
  {
    id: 'fondos',
    title: 'FONDOS',
    items: [
      {
        name: 'Caldillo de Congrio',
        price: '$12',
        description: 'Tradicional caldillo chileno con congrio, papas, zanahoria, cebolla y vino blanco.',
        image: '/assets/9131bfbeb67dc508967d5682ca2602328cc9bd08.png',
        hasLeaf: true
      },
      {
        name: 'Chupe de Centolla',
        price: '$12',
        description: 'Cremoso chupe con centolla patagónica, queso, huevo y especias aromáticas.',
        image: '/assets/b7c946f395b655b1660960ba5dea68fb0862e5cc.png'
      },
      {
        name: 'Paila Marina',
        price: '$12',
        description: 'Variedad de mariscos frescos en caldo aromático con cilantro y ají verde.',
        image: '/assets/d4c8207f8d34cfabf8a1529e236e83ca463bf5ab.png'
      },
      {
        name: 'Merluza a la Plancha',
        price: '$12',
        description: 'Filete de merluza austral a la plancha con mantequilla de limón y hierbas.',
        image: '/assets/6c20b9fd3e8d951a42625a5e8fc8cb401c12500b.png'
      },
      {
        name: 'Pulpo al Olivo',
        price: '$12',
        description: 'Tierno pulpo cocido servido con salsa de palta y mayonesa casera.',
        image: '/assets/d30cf921dc082a79bf383236acfd69b518d05681.png'
      },
      {
        name: 'Reineta a la Veracruzana',
        price: '$12',
        description: 'Reineta fresca con salsa de tomates, aceitunas, alcaparras y pimientos.',
        image: '/assets/85c7c05dbaff16e9831c461b315555281b6f566d.png'
      },
      {
        name: 'Salmón Ahumado',
        price: '$12',
        description: 'Salmón ahumado artesanal servido con alcaparras, cebolla y pan tostado.',
        image: '/assets/8aa55faa7fbe30075a3157543d59b1d995121bb3.png'
      }
    ]
  },
  {
    id: 'postres',
    title: 'POSTRES',
    items: [
      {
        name: 'Leche Asada Marina',
        price: '$16',
        description: 'Tradicional leche asada infusionada con agua de mar y caramelo de cochayuyo.',
        image: '/assets/32f4dd5ba64a9afabcd3c7f3ed0b0a33bf5d2b44.png',
        hasLeaf: true
      },
      {
        name: 'Torta de Lúcuma',
        price: '$16',
        description: 'Esponjosa torta de lúcuma con crema chantilly y dulce de leche.',
        image: '/assets/e2cc331b2c1f023cf5c814776c94843e9534b1d2.png',
        hasLeaf: true
      },
      {
        name: 'Sopaipillas con Manjar',
        price: '$16',
        description: 'Sopaipillas caseras servidas calientes con manjar de leche y canela.',
        image: '/assets/ba4f3f39892ae09e105842517b61415d2a54a307.png',
        hasLeaf: true
      },
      {
        name: 'Chirimoya Alegre',
        price: '$16',
        description: 'Chirimoya fresca con crema de coco y trozos de frutos secos.',
        image: '/assets/a414a67391142ab72b6c30416afe28fe9428152c.png',
        hasLeaf: true
      },
      {
        name: 'Calzones Rotos',
        price: '$16',
        description: 'Tradicionales calzones rotos espolvoreados con azúcar flor y miel de ulmo.',
        image: '/assets/b9512a74270df7c90d1930376c5ea35f245bf8c1.png',
        hasLeaf: true
      }
    ]
  }
];

const imgVector = "/assets/f604f05016d0f59efd3ac3efcc4c316dc7bd4308.svg";

function PhLeafLight() {
  return (
    <div className="relative size-4">
      <div className="absolute inset-[13.28%]">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
    </div>
  );
}

function MenuItem({ item }: { item: any }) {
  return (
    <div className="flex flex-col mobile:flex-row gap-4 mobile:gap-6 items-start mobile:items-center w-full">
      <div className="bg-[#0a0b0a] h-[120px] mobile:h-[100px] w-full mobile:w-[150px] overflow-hidden relative rounded-xl shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${item.image}')` }}
        />
      </div>
      <div className="flex flex-col gap-1 grow w-full mobile:w-auto">
        <div className="flex gap-4 items-end w-full">
          <div className="flex gap-3 items-center">
            <h5 className="text-[#efe7d2] text-[18px] mobile:text-[22px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
              {item.name}
            </h5>
            {item.hasLeaf && <PhLeafLight />}
          </div>
          <div className="flex-1 flex justify-end">
            <div className="h-px w-full border-t border-dashed border-[rgba(239,231,210,0.15)]" />
          </div>
          <span className="text-[#efe7d2] text-[18px] mobile:text-[22px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
            {item.price}
          </span>
        </div>
        <p className="text-[rgba(245,242,234,0.7)] text-[13px] mobile:text-[14px] leading-[1.5]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
          {item.description}
        </p>
      </div>
    </div>
  );
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
        <div className="bg-[rgba(239,231,210,0.15)] h-px w-[50px]" />
      </div>
      <h3 className="text-[#efe7d2] text-[32px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
        {title}
      </h3>
      <div className="flex items-center justify-center py-[7px]">
        <div className="bg-[rgba(239,231,210,0.15)] h-px w-[50px]" />
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
  return (
    <div className="flex items-center justify-between px-6 py-5 relative rounded-2xl w-full">
      <div aria-hidden className="absolute inset-0 rounded-2xl border border-[rgba(239,231,210,0.15)]" />
      <div className="flex gap-4 items-center">
        <span className="text-[#efe7d2] text-[14px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Mar y Fuego</span>
        <div className="flex items-center justify-center">
          <div className="flex-none rotate-[315deg]">
            <div className="relative size-2">
              <div aria-hidden className="absolute inset-0 border border-[rgba(239,231,210,0.15)]" />
            </div>
          </div>
        </div>
        <span className="text-[#efe7d2] text-[14px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Restaurante</span>
        <div className="flex items-center justify-center">
          <div className="flex-none rotate-[315deg]">
            <div className="relative size-2">
              <div aria-hidden className="absolute inset-0 border border-[rgba(239,231,210,0.15)]" />
            </div>
          </div>
        </div>
        <span className="text-[#efe7d2] text-[14px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>2025</span>
      </div>
    </div>
  );
}

type MenuProps = {
  onNavigateToFrontpage: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToReservation?: () => void;
  onOpenMenuNav?: () => void;
};

export default function Menu({ onNavigateToFrontpage, onNavigateToAbout, onNavigateToReservation, onOpenMenuNav }: MenuProps) {
  return (
    <div className="min-h-screen desktop:h-screen w-full bg-[#0a0b0a] p-3 overflow-auto desktop:overflow-hidden">
      <MainWrapper>
        {/* Image Wrapper - Fixed left side */}
        <div className="relative grow min-w-[320px] desktop:min-w-[550px] rounded-[16px] overflow-hidden bg-black h-[70vh] desktop:h-full">
          <ImageWrapper 
            onNavigateToMenu={() => {}} 
            onNavigateToReservation={onNavigateToReservation || (() => {})} 
            onNavigateToAbout={onNavigateToAbout} 
            onNavigateToFrontpage={onNavigateToFrontpage} 
            onOpenMenuNav={onOpenMenuNav} 
          />
        </div>
        
        {/* Menu Grid - Scrollable right side */}
        <div className="w-full desktop:w-[50%] shrink-0 h-auto desktop:h-full overflow-y-auto">
          <div className="flex flex-col gap-4 items-start p-8 pb-20 rounded-2xl w-full relative">
            <div aria-hidden className="absolute inset-0 rounded-2xl border border-[rgba(239,231,210,0.15)]" />
            
            
            {/* Navbar */}
            <div className="flex flex-col gap-8 items-start w-full -mt-4">
              <Navbar variant="menu" onNavigateToFrontpage={onNavigateToFrontpage} onNavigateToReservation={onNavigateToReservation} />
            </div>
            
            {/* Menu Sections */}
            <div className="flex flex-col gap-24 items-start w-full">
              {menuSections.map((section) => (
                <div key={section.id} className="flex flex-col gap-12 items-start w-full">
                  <SectionHeader title={section.title} />
                  <div className="flex flex-col gap-8 items-start w-full">
                    {section.items.map((item, index) => (
                      <MenuItem key={index} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-4">
            <Footer />
          </div>
        </div>
      </MainWrapper>
    </div>
  );
}