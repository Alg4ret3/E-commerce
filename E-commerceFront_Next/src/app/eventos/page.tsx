'use client';

import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Calendar, MapPin } from 'lucide-react';
import { FullWidthVideo } from '@/components/molecules/FullWidthVideo';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* High Impact Video Header */}
      <section className="relative">
        <FullWidthVideo 
          videoUrl="/videos/VidEvent.mp4"
          title="Calendario de Eventos: NariñoTex"
          subtitle="La intersección entre la maestría textil y la vanguardia performativa de alta costura."
          showBottomGradient={true}
        />
      </section>

      {/* Intro section */}
      <section className="py-20 sm:py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <Typography variant="small" className="mb-6 block text-neutral-400 tracking-[0.3em] uppercase text-[10px]">Experiencia NariñoTex</Typography>
          <Typography variant="h1" className="mb-8 text-4xl sm:text-6xl editorial-spacing leading-tight">Próximos Encuentros</Typography>
          <Typography variant="body" className="text-secondary font-light text-sm sm:text-base leading-relaxed max-w-2xl">
            Gestionamos espacios de exhibición que elevan el estándar de la moda regional. 
            Accede a nuestro calendario curado de pasarelas, ferias industriales y talleres técnicos.
          </Typography>
        </div>

        {/* Global Events Grid */}
        <Typography variant="h3" className="mb-12 uppercase tracking-widest text-xs font-sans text-primary border-b border-border pb-6">Eventos Principales</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border overflow-hidden mb-32">
          {/* Item 1: Gala */}
          <div className="group bg-card p-8 sm:p-12 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-700 flex flex-col">
            <div className="aspect-[4/5] overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-1000 border border-border">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Gala" />
            </div>
            <div className="mt-8 flex-1 flex flex-col">
              <Typography variant="small" className="mb-4 block text-neutral-400 tracking-widest uppercase text-[9px]">Gala Exclusiva</Typography>
              <Typography variant="h3" className="mb-6 text-xl">Fashion Night 2026</Typography>
              <div className="flex flex-col gap-3 mb-8 text-secondary/60">
                <div className="flex items-center gap-2 text-[10px] tracking-wide"><Calendar size={12} strokeWidth={1} /> 15 Oct, 2026</div>
                <div className="flex items-center gap-2 text-[10px] tracking-wide"><MapPin size={12} strokeWidth={1} /> Hotel Cuellar, Pasto</div>
              </div>
              <Button variant="primary" className="mt-auto w-full py-4 text-[9px] uppercase tracking-[0.2em] font-medium">Reservar Plaza</Button>
            </div>
          </div>

          {/* Item 2: Taller */}
          <div className="group bg-card p-8 sm:p-12 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-700 flex flex-col">
            <div className="aspect-[4/5] overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-1000 border border-border">
              <img src="https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Workshop" />
            </div>
            <div className="mt-8 flex-1 flex flex-col">
              <Typography variant="small" className="mb-4 block text-neutral-400 tracking-widest uppercase text-[9px]">Masterclass Técnica</Typography>
              <Typography variant="h3" className="mb-6 text-xl">Fibras Inteligentes</Typography>
              <div className="flex flex-col gap-3 mb-8 text-secondary/60">
                <div className="flex items-center gap-2 text-[10px] tracking-wide"><Calendar size={12} strokeWidth={1} /> 22 Oct, 2026</div>
                <div className="flex items-center gap-2 text-[10px] tracking-wide"><MapPin size={12} strokeWidth={1} /> Centro de Innovación</div>
              </div>
              <Button variant="outline" className="mt-auto w-full py-4 text-[9px] uppercase tracking-[0.2em] font-medium">Más Detalles</Button>
            </div>
          </div>

          {/* Item 3: Showroom */}
          <div className="group bg-card p-8 sm:p-12 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-700 flex flex-col">
            <div className="aspect-[4/5] overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-1000 border border-border">
              <img src="https://images.unsplash.com/photo-1567401893424-d11eaec3c54d?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Showroom" />
            </div>
            <div className="mt-8 flex-1 flex flex-col">
              <Typography variant="small" className="mb-4 block text-neutral-400 tracking-widest uppercase text-[9px]">Venta Privada</Typography>
              <Typography variant="h3" className="mb-6 text-xl">Showroom Primavera</Typography>
              <div className="flex flex-col gap-3 mb-8 text-secondary/60">
                <div className="flex items-center gap-2 text-[10px] tracking-wide"><Calendar size={12} strokeWidth={1} /> 05 Nov, 2026</div>
                <div className="flex items-center gap-2 text-[10px] tracking-wide"><MapPin size={12} strokeWidth={1} /> Boutique Central</div>
              </div>
              <Button variant="outline" className="mt-auto w-full py-4 text-[9px] uppercase tracking-[0.2em] font-medium">Solicitar Pase</Button>
            </div>
          </div>
        </div>

        {/* Stands Section */}
        <Typography variant="h3" className="mb-12 uppercase tracking-widest text-xs font-sans text-primary border-b border-border pb-6">Exposición Comercial (Stands)</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border overflow-hidden">
          {/* Stand 1 */}
          <div className="group bg-card p-10 flex flex-col sm:flex-row gap-8 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
            <div className="w-full sm:w-1/3 aspect-square border border-border overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 group-active:grayscale-0 transition-all">
              <img src="https://images.unsplash.com/photo-1591010883017-0639965f377c?q=80&w=800" alt="Stand 1" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <Typography variant="h3" className="mb-4 text-base tracking-tight">Pabellón Textil-Sur</Typography>
              <Typography variant="body" className="text-xs text-neutral-500 mb-6 font-light">Especialistas en lanas naturales y acabados de alta montaña. Expositor #42.</Typography>
              <div className="flex items-center gap-4 text-[9px] tracking-[0.2em] uppercase font-bold text-primary">
                <span className="bg-primary/5 px-3 py-1 border border-primary/20">Stand B01</span>
                <span>Oct 18-20</span>
              </div>
            </div>
          </div>

          {/* Stand 2 */}
          <div className="group bg-card p-10 flex flex-col sm:flex-row gap-8 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
            <div className="w-full sm:w-1/3 aspect-square border border-border overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 group-active:grayscale-0 transition-all">
              <img src="https://images.unsplash.com/photo-1531050171669-70c4768e5218?q=80&w=800" alt="Stand 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <Typography variant="h3" className="mb-4 text-base tracking-tight">Atelier de Innovación</Typography>
              <Typography variant="body" className="text-xs text-neutral-500 mb-6 font-light">Muestra de procesos de tintura 100% ecológica y sin huella de agua.</Typography>
              <div className="flex items-center gap-4 text-[9px] tracking-[0.2em] uppercase font-bold text-primary">
                <span className="bg-primary/5 px-3 py-1 border border-primary/20">Stand A15</span>
                <span>Oct 18-20</span>
              </div>
            </div>
          </div>

          {/* Stand 3 */}
          <div className="group bg-card p-10 flex flex-col sm:flex-row gap-8 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors border-t border-border sm:border-t-0">
            <div className="w-full sm:w-1/3 aspect-square border border-border overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 group-active:grayscale-0 transition-all">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800" alt="Stand 3" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <Typography variant="h3" className="mb-4 text-base tracking-tight">Logística Fashion</Typography>
              <Typography variant="body" className="text-xs text-neutral-500 mb-6 font-light">Red de distribución internacional NariñoTex para diseñadores locales.</Typography>
              <div className="flex items-center gap-4 text-[9px] tracking-[0.2em] uppercase font-bold text-primary">
                <span className="bg-primary/5 px-3 py-1 border border-primary/20">Stand C08</span>
                <span>Oct 18-20</span>
              </div>
            </div>
          </div>

          {/* Stand 4 */}
          <div className="group bg-card p-10 flex flex-col sm:flex-row gap-8 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors border-t border-border sm:border-t-0">
            <div className="w-full sm:w-1/3 aspect-square border border-border overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 group-active:grayscale-0 transition-all">
              <img src="https://images.unsplash.com/photo-1485662191991-976a44358d5e?q=80&w=800" alt="Stand 4" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <Typography variant="h3" className="mb-4 text-base tracking-tight">Maquinaria de Corte</Typography>
              <Typography variant="body" className="text-xs text-neutral-500 mb-6 font-light">Demostración en vivo de sistemas láser de alta precisión.</Typography>
              <div className="flex items-center gap-4 text-[9px] tracking-[0.2em] uppercase font-bold text-primary">
                <span className="bg-primary/5 px-3 py-1 border border-primary/20">Stand D04</span>
                <span>Oct 18-20</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

