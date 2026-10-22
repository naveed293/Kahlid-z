/**
 * Gallery items.
 *
 * RULES: only authentic, approved photographs may be published here.
 * No identifiable patient images, medical records or surgical images
 * without documented consent. Every item below is currently marked as a
 * placeholder (`placeholder: true`) until approved photographs are supplied.
 */

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'conferences', label: 'Conferences' },
  { id: 'lectures', label: 'Lectures & Teaching' },
  { id: 'clinic', label: 'Clinic & Facilities' },
  { id: 'portrait', label: 'Professional Portraits' },
];

import doctorPhoto from '../assets/images/doctor-photo.webp';

export const galleryItems = [
  {
    id: 1,
    category: 'portrait',
    caption: 'Dr. Khalid Khan Zadran',
    alt: 'Dr. Khalid Khan Zadran, Consultant Neurosurgeon',
    src: doctorPhoto,
    placeholder: false,
  },
  {
    id: 2,
    category: 'conferences',
    caption: 'Neurosurgery conference — awaiting approved photograph',
    alt: 'Placeholder image representing a medical conference hall',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=70',
    placeholder: true,
  },
  {
    id: 3,
    category: 'lectures',
    caption: 'Medical lecture or teaching session — awaiting approved photograph',
    alt: 'Placeholder image representing a medical teaching session',
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=70',
    placeholder: true,
  },
  {
    id: 4,
    category: 'clinic',
    caption: 'Rifah Medical Complex facilities — awaiting approved photograph',
    alt: 'Placeholder image representing a modern hospital corridor',
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=70',
    placeholder: true,
  },
  {
    id: 5,
    category: 'clinic',
    caption: 'Imaging and diagnostics suite — awaiting approved photograph',
    alt: 'Placeholder image representing an MRI scanner room',
    src: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1200&q=70',
    placeholder: true,
  },
  {
    id: 6,
    category: 'conferences',
    caption: 'Professional education event — awaiting approved photograph',
    alt: 'Placeholder image representing medical professionals at an educational event',
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=70',
    placeholder: true,
  },
  {
    id: 7,
    category: 'lectures',
    caption: 'Resident teaching rounds — awaiting approved photograph',
    alt: 'Placeholder image representing doctors in a teaching round',
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=70',
    placeholder: true,
  },
  {
    id: 8,
    category: 'portrait',
    caption: 'Team portrait — awaiting approved photograph',
    alt: 'Placeholder image representing a hospital medical team',
    src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=70',
    placeholder: true,
  },
];
