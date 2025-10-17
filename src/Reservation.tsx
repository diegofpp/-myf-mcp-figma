import React, { useState } from 'react';
import Navbar from './components/Navbar';

// Imágenes - adaptando de localhost a rutas relativas
const imgMainBackground = "/assets/24a2fbd3cb5648cd4f6686480c062db1d5cff2fe.png";
const imgPatternBackground = "/assets/c2677b078baaec864ae18abdd8cdd2cbf2e15980.png";

interface ReservationProps {
  onNavigateToFrontpage: () => void;
  onNavigateToMenu: () => void;
  onNavigateToAbout?: () => void;
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
        <div className="bg-[rgba(239,231,210,0.15)] h-px w-[50px]" />
      </div>
      <h2 className="text-[#efe7d2] text-[32px] mobile:text-[24px] tracking-[1px] uppercase" style={{ fontFamily: 'Forum, sans-serif', fontWeight: 400 }}>
        {title}
      </h2>
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
        <span className="text-[#efe7d2] text-[14px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>Mar y Fuego</span>
        {separatorIcon()}
        <span className="text-[#efe7d2] text-[14px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>Restaurante</span>
        {separatorIcon()}
        <span className="text-[#efe7d2] text-[14px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>2025</span>
      </div>
    </div>
  );
}

export default function Reservation({ onNavigateToFrontpage, onNavigateToMenu, onNavigateToAbout, onOpenMenuNav }: ReservationProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '',
    date: '',
    time: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario de reserva enviado:', formData);
    // Aquí se podría agregar lógica para enviar los datos al servidor
  };

  return (
    <div className="min-h-screen desktop:h-screen w-full bg-[#0a0b0a] p-6 overflow-auto desktop:overflow-hidden">
      <div className="flex w-full h-auto desktop:h-full gap-4 rounded-tr-[48px] rounded-br-[48px] flex-col desktop:flex-row">
        {/* Image Wrapper - Fixed left side */}
        <div className="relative grow min-w-[320px] desktop:min-w-[550px] rounded-[16px] overflow-hidden bg-black h-[40vh] desktop:h-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${imgMainBackground}')` }}
          />

          {/* Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-black/90" />

          {/* Title 
          <h1 className="absolute bottom-[100px] left-[56px] text-[#efe7d2] text-[80px] mobile:text-[60px] tracking-[2px] uppercase" style={{ fontFamily: 'Forum, sans-serif', fontWeight: 400 }}>
            reservar
          </h1>
          */}

          {/* Navbar */}
          <Navbar onNavigateToMenu={onNavigateToMenu} onNavigateToAbout={onNavigateToAbout} onNavigateToFrontpage={onNavigateToFrontpage} onOpenMenuNav={onOpenMenuNav} variant="main" />
        </div>

        {/* Reservation Form - Scrollable right side */}
        <div className="w-full desktop:w-[50%] shrink-0 h-auto desktop:h-full overflow-y-auto">
          {/* Pattern Background */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <img 
              alt="" 
              src={imgPatternBackground} 
              className="absolute inset-0 w-full h-full object-cover translate-x-[-50%] left-1/2"
            />
          </div>

          <div className="flex flex-col gap-4 items-start p-8 pb-20 rounded-2xl w-full relative">
            <div aria-hidden className="absolute inset-0 rounded-2xl border border-[rgba(239,231,210,0.15)]" />

            {/* Navbar for Reservation 
            <div className="border border-green-500 flex flex-col gap-8 items-start w-full mt-8">
              <div className="border border-white-500 flex gap-2 items-center justify-center p-2 rounded-xl w-full">
                <div className="border border-white-500 flex gap-1 items-center justify-center grow">
                  <div className="relative rounded-lg">
                    <div className="flex items-center justify-center px-3 py-2">
                      <span className="text-[#efe7d2] text-[12px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
                        Reservar mesa
                      </span>
                    </div>
                    <div aria-hidden className="absolute inset-0 rounded-lg border border-[rgba(239,231,210,0.15)]" />
                  </div>
                </div>
              </div>
            </div>
            */}

            {/* Form Content */}
            <div className="flex flex-col gap-16 items-center w-full">
              {/* Header Section */}
              <div className="flex flex-col gap-4 items-center w-full">
                <SectionHeader title="reservas" />
                <p className="text-[#efe7d2] text-[18px] mobile:text-[16px] text-center leading-[1.5] max-w-[500px]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>
                  Asegura tu lugar en Qitchen, donde te espera un sushi excepcional y una experiencia gastronómica memorable.
                </p>
              </div>

              {/* Reservation Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start w-full max-w-[600px]">
                {/* Campo de Nombre */}
                <div className="bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-[10px] w-full">
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-6 py-4 bg-transparent text-[#efe7d2] text-[16px] placeholder-[#efe7d2] outline-none"
                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
                  />
                </div>

                {/* Campo de Teléfono */}
                <div className="bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-[10px] w-full">
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-6 py-4 bg-transparent text-[#efe7d2] text-[16px] placeholder-[#efe7d2] outline-none"
                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
                  />
                </div>

                {/* Campo de Email */}
                <div className="bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-[10px] w-full">
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-6 py-4 bg-transparent text-[#efe7d2] text-[16px] placeholder-[#efe7d2] outline-none"
                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
                  />
                </div>

                {/* Three Column Row */}
                <div className="flex flex-col mobile:flex-row gap-4 w-full">
                  {/* Comensales */}
                  <div className="bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-[10px] flex-1">
                    <input
                      type="number"
                      placeholder="Comensales"
                      min="1"
                      value={formData.guests}
                      onChange={(e) => handleInputChange('guests', e.target.value)}
                      className="w-full px-6 py-4 bg-transparent text-[#efe7d2] text-[16px] placeholder-[#efe7d2] outline-none"
                      style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
                    />
                  </div>

                  {/* Fecha */}
                  <div className="bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-[10px] flex-1">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="w-full px-6 py-4 bg-transparent text-[#efe7d2] text-[16px] placeholder-[#efe7d2] outline-none"
                      style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
                    />
                  </div>

                  {/* Hora */}
                  <div className="bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-[10px] flex-1">
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="w-full px-6 py-4 bg-transparent text-[#efe7d2] text-[16px] placeholder-[#efe7d2] outline-none"
                      style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
                    />
                  </div>
                </div>

                {/* Botón de Envío */}
                <button
                  type="submit"
                  className="w-full bg-[#efe7d2] text-[#0a0b0a] px-6 py-4 rounded-[8px] hover:bg-[#efe7d2]/90 transition-colors"
                >
                  <span className="text-[12px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
                    Reservar
                  </span>
                </button>
              </form>
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
