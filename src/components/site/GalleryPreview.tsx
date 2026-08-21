import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PlaceholderImage } from '@/components/site/PlaceholderImage';
import { GALLERY_ITEMS } from '@/data/siteData';
import type { GalleryItem } from '@/data/siteData';
import { GalleryModal } from '@/components/site/GalleryModal';
import { useLanguage } from '@/context/LanguageContext';

export const GalleryPreview: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const { t } = useLanguage();

  const openItem = (item: GalleryItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const campusAerial = GALLERY_ITEMS.find((i) => i.id === 'campus-aerial') || GALLERY_ITEMS[0];
  const electricalLab = GALLERY_ITEMS.find((i) => i.id === 'electrical-lab') || GALLERY_ITEMS[2];
  const civilModels = GALLERY_ITEMS.find((i) => i.id === 'civil-models') || GALLERY_ITEMS[3];
  const campusCourtyard = GALLERY_ITEMS.find((i) => i.id === 'campus-courtyard') || GALLERY_ITEMS[1];
  const computerLab = GALLERY_ITEMS.find((i) => i.id === 'computer-lab') || GALLERY_ITEMS[4];
  const machineShop = GALLERY_ITEMS.find((i) => i.id === 'machine-shop') || GALLERY_ITEMS[6];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#06182B] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs md:text-sm font-bold font-mono tracking-widest text-[#EA580C] uppercase block">
              {t('gallery.eyebrow')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white leading-tight">
              {t('gallery.title')}
            </h2>
          </div>

          <button
            onClick={() => {
              setSelectedItem(null);
              setModalOpen(true);
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>{t('common.viewFullGallery')}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Asymmetric Gallery Grid matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Large Left Item (Spans 6 cols, 2 rows height) */}
          <div className="md:col-span-6 flex flex-col">
            <div 
              onClick={() => openItem(campusAerial)}
              className="rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer h-full min-h-[320px] md:min-h-[420px] flex"
            >
              <PlaceholderImage
                label={campusAerial.imageLabel}
                variant="dark"
                className="w-full h-full min-h-[320px] md:min-h-[420px]"
              />
            </div>
          </div>

          {/* Right Column Layout (Spans 6 cols) */}
          <div className="md:col-span-6 flex flex-col gap-4">
            
            {/* Top row of right side (2 small boxes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => openItem(electricalLab)}
                className="rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer h-48"
              >
                <PlaceholderImage
                  label={electricalLab.imageLabel}
                  variant="dark"
                  className="w-full h-full"
                />
              </div>
              <div 
                onClick={() => openItem(civilModels)}
                className="rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer h-48"
              >
                <PlaceholderImage
                  label={civilModels.imageLabel}
                  variant="dark"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Bottom row of right side (1 wide box) */}
            <div 
              onClick={() => openItem(campusCourtyard)}
              className="rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer h-52 md:h-56"
            >
              <PlaceholderImage
                label={campusCourtyard.imageLabel}
                variant="dark"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Bottom Extra Row (Computer & Machine Shop) */}
          <div className="md:col-span-3">
            <div 
              onClick={() => openItem(computerLab)}
              className="rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer h-40"
            >
              <PlaceholderImage
                label={computerLab.imageLabel}
                variant="dark"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <div 
              onClick={() => openItem(machineShop)}
              className="rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer h-40"
            >
              <PlaceholderImage
                label={machineShop.imageLabel}
                variant="dark"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Fill out the remaining space smoothly with extra student club items */}
          <div className="md:col-span-6 flex items-center justify-between px-6 py-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xs">
            <div>
              <h4 className="text-sm font-semibold text-white">{t('gallery.experienceTitle')}</h4>
              <p className="text-xs text-slate-400">{t('gallery.experienceSubtitle')}</p>
            </div>
            <button
              onClick={() => {
                setSelectedItem(null);
                setModalOpen(true);
              }}
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              {t('gallery.browsePhotos')}
            </button>
          </div>

        </div>

      </div>

      {/* Gallery Modal / Lightbox */}
      <GalleryModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        initialItem={selectedItem}
      />
    </section>
  );
};
