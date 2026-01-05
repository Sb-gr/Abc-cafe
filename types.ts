
export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  category: MenuCategory;
}

export type MenuCategory = 'Coffee & Tea' | 'Cold Beverages' | 'Snacks & Fast Food' | 'Nepali Items' | 'Desserts';

export interface ComboOffer {
  title: string;
  price: number;
  items: string[];
}

export interface GalleryImage {
  url: string;
  caption: string;
}
