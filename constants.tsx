
import { MenuItem, ComboOffer, GalleryImage } from './types';
import { Coffee, Utensils, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import React from 'react';

export const BUSINESS_INFO = {
  name: "ABC Cafe",
  location: "Birtamod, Jhapa, Nepal",
  phone: "+977-9704738463",
  hours: "7:00 AM – 9:30 PM",
  days: "Sunday – Saturday (Open Daily)",
  whatsapp: "https://wa.me/9779704738463"
};

export const MENU_ITEMS: MenuItem[] = [
  // Coffee & Tea
  { name: 'Espresso', price: 150, category: 'Coffee & Tea' },
  { name: 'Cappuccino', price: 220, category: 'Coffee & Tea' },
  { name: 'Latte', price: 240, category: 'Coffee & Tea' },
  { name: 'Mocha', price: 260, category: 'Coffee & Tea' },
  { name: 'Americano', price: 200, category: 'Coffee & Tea' },
  { name: 'Milk Tea', price: 80, category: 'Coffee & Tea' },
  { name: 'Black Tea', price: 60, category: 'Coffee & Tea' },
  { name: 'Lemon Tea', price: 90, category: 'Coffee & Tea' },
  { name: 'Masala Tea', price: 100, category: 'Coffee & Tea' },
  
  // Cold Beverages
  { name: 'Iced Coffee', price: 280, category: 'Cold Beverages' },
  { name: 'Cold Coffee with Ice Cream', price: 320, category: 'Cold Beverages' },
  { name: 'Fresh Lemon Soda', price: 120, category: 'Cold Beverages' },
  { name: 'Cold Drinks', price: 100, category: 'Cold Beverages' },
  { name: 'Seasonal Fruit Juice', price: 180, category: 'Cold Beverages' },

  // Snacks & Fast Food
  { name: 'Veg Sandwich', price: 180, category: 'Snacks & Fast Food' },
  { name: 'Chicken Sandwich', price: 220, category: 'Snacks & Fast Food' },
  { name: 'French Fries', price: 160, category: 'Snacks & Fast Food' },
  { name: 'Cheese Fries', price: 200, category: 'Snacks & Fast Food' },
  { name: 'Veg Burger', price: 250, category: 'Snacks & Fast Food' },
  { name: 'Chicken Burger', price: 300, category: 'Snacks & Fast Food' },
  { name: 'Veg Momos', price: 180, category: 'Snacks & Fast Food' },
  { name: 'Chicken Momos', price: 220, category: 'Snacks & Fast Food' },

  // Nepali Items
  { name: 'Sel Roti (2 pcs)', price: 120, category: 'Nepali Items' },
  { name: 'Aloo Chop', price: 100, category: 'Nepali Items' },
  { name: 'Samosa', price: 80, category: 'Nepali Items' },
  { name: 'Chatpate', price: 120, category: 'Nepali Items' },
  { name: 'Pakoda', price: 140, category: 'Nepali Items' },

  // Desserts
  { name: 'Chocolate Cake', price: 200, category: 'Desserts' },
  { name: 'Brownie', price: 180, category: 'Desserts' },
  { name: 'Ice Cream (1 scoop)', price: 120, category: 'Desserts' },
];

export const COMBO_OFFERS: ComboOffer[] = [
  { title: "Coffee + Veg Sandwich", price: 330, items: ["Coffee", "Veg Sandwich"] },
  { title: "Coffee + French Fries", price: 300, items: ["Coffee", "French Fries"] },
  { title: "Burger + Cold Drink", price: 360, items: ["Burger", "Cold Drink"] },
  { title: "Momo + Cold Drink", price: 300, items: ["Momo", "Cold Drink"] },
  { title: "Coffee + Cake", price: 380, items: ["Coffee", "Cake"] },
  { title: "Sel Roti + Milk Tea", price: 180, items: ["Sel Roti", "Milk Tea"] },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", caption: "Premium Roasted Coffee" },
  { url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", caption: "Our Cozy Interior" },
  { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", caption: "Warm Atmosphere" },
  { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800", caption: "Delicious Snacks" },
  { url: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800", caption: "Authentic Momos" },
  { url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800", caption: "Morning Vibes" },
];
