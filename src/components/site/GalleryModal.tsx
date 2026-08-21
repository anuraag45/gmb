import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { PlaceholderImage } from '@/components/site/PlaceholderImage';
import { GALLERY_ITEMS } from '@/data/siteData';
import type { GalleryItem } from '@/data/siteData';
import { useLanguage } from '@/context/LanguageContext';

interface GalleryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialItem?: GalleryItem | null;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  open,
  onOpenChange,
  initialItem
}) => {
  const [filter, setFilter] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(initialItem || null);
  const { t } = useLanguage();

  const categories = [
    { key: 'All', label: t('common.all') },
    { key: 'Technical', label: t('common.technical') },
    { key: 'Events', label: t('common.events') },
    { key: 'Sports', label: t('common.sports') },
    { key: 'Industrial', label: t('common.industrial') }
  ];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === filter);

  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="max-w-4xl">
      <div className="space-y-6">
        
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#EA580C] uppercase block">
            {t('gallery.eyebrow')}
          </span>
          <h3 className="text-2xl font-bold font-heading text-[#0B2F52]">
            {t('gallery.modalTitle')}
          </h3>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-1 border-b border-slate-200 pb-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setFilter(cat.key);
                setActiveItem(null);
              }}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === cat.key
                  ? 'bg-[#0B2F52] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Focus Item Detail if clicked */}
        {activeItem && (
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3 animate-in fade-in duration-200">
            <div className="rounded-md overflow-hidden">
              <PlaceholderImage
                label={activeItem.imageLabel}
                aspectRatio="wide"
                className="w-full h-64"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono font-semibold uppercase bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                  {t(`common.${activeItem.category.toLowerCase()}`, activeItem.category)}
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  {t(`gallery.items.${activeItem.id}.title`, activeItem.title)}
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(`gallery.items.${activeItem.id}.description`, activeItem.description)}
              </p>
            </div>
          </div>
        )}

        {/* Grid of photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto pr-1">
          {filteredItems.map((item) => {
            const itemTitle = t(`gallery.items.${item.id}.title`, item.title);
            const categoryLabel = t(`common.${item.category.toLowerCase()}`, item.category);

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="rounded-lg overflow-hidden border border-slate-200 hover:border-[#0B2F52] cursor-pointer transition-all hover:shadow-sm group bg-white"
              >
                <PlaceholderImage
                  label={item.imageLabel}
                  aspectRatio="landscape"
                  className="w-full h-36"
                />
                <div className="p-3">
                  <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 block mb-0.5">
                    {categoryLabel}
                  </span>
                  <h5 className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-[#0B2F52]">
                    {itemTitle}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Dialog>
  );
};
