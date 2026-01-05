
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  BUSINESS_INFO as INITIAL_BUSINESS_INFO, 
  MENU_ITEMS as INITIAL_MENU_ITEMS, 
  COMBO_OFFERS as INITIAL_COMBO_OFFERS,
  GALLERY_IMAGES as INITIAL_GALLERY_IMAGES
} from '../constants';
import { MenuItem, ComboOffer, GalleryImage } from '../types';

interface AppContextType {
  businessInfo: typeof INITIAL_BUSINESS_INFO;
  menuItems: MenuItem[];
  comboOffers: ComboOffer[];
  galleryImages: GalleryImage[];
  isAdmin: boolean;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  updateBusinessInfo: (info: typeof INITIAL_BUSINESS_INFO) => void;
  updateMenuItems: (items: MenuItem[]) => void;
  updateComboOffers: (offers: ComboOffer[]) => void;
  updateGalleryImages: (images: GalleryImage[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [businessInfo, setBusinessInfo] = useState(INITIAL_BUSINESS_INFO);
  const [menuItems, setMenuItems] = useState(INITIAL_MENU_ITEMS);
  const [comboOffers, setComboOffers] = useState(INITIAL_COMBO_OFFERS);
  const [galleryImages, setGalleryImages] = useState(INITIAL_GALLERY_IMAGES);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const savedInfo = localStorage.getItem('abc_cafe_info');
    const savedMenu = localStorage.getItem('abc_cafe_menu');
    const savedCombos = localStorage.getItem('abc_cafe_combos');
    const savedGallery = localStorage.getItem('abc_cafe_gallery');
    const savedAuth = localStorage.getItem('abc_cafe_admin');

    if (savedInfo) setBusinessInfo(JSON.parse(savedInfo));
    if (savedMenu) setMenuItems(JSON.parse(savedMenu));
    if (savedCombos) setComboOffers(JSON.parse(savedCombos));
    if (savedGallery) setGalleryImages(JSON.parse(savedGallery));
    if (savedAuth === 'true') setIsAdmin(true);
  }, []);

  const login = (email: string, pass: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = pass.trim();
    
    const targetEmail = 'sumanbasnet2030@gmail.com';
    const targetPass = 'sum@n12_';
    const altPass = 'sum@n12';

    if (cleanEmail === targetEmail && (cleanPass === targetPass || cleanPass === altPass)) {
      setIsAdmin(true);
      localStorage.setItem('abc_cafe_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('abc_cafe_admin');
  };

  const updateBusinessInfo = (info: typeof INITIAL_BUSINESS_INFO) => {
    setBusinessInfo(info);
    localStorage.setItem('abc_cafe_info', JSON.stringify(info));
  };

  const updateMenuItems = (items: MenuItem[]) => {
    setMenuItems(items);
    localStorage.setItem('abc_cafe_menu', JSON.stringify(items));
  };

  const updateComboOffers = (offers: ComboOffer[]) => {
    setComboOffers(offers);
    localStorage.setItem('abc_cafe_combos', JSON.stringify(offers));
  };

  const updateGalleryImages = (images: GalleryImage[]) => {
    setGalleryImages(images);
    localStorage.setItem('abc_cafe_gallery', JSON.stringify(images));
  };

  return (
    <AppContext.Provider value={{ 
      businessInfo, menuItems, comboOffers, galleryImages, isAdmin, 
      login, logout, updateBusinessInfo, updateMenuItems, updateComboOffers, updateGalleryImages
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
