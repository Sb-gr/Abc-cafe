
import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Navigate, Link } from 'react-router-dom';
import { 
  Save, Plus, Trash2, Coffee, Settings, 
  Utensils, Zap, Image as ImageIcon, ChevronLeft, 
  ExternalLink, CheckCircle2, AlertCircle 
} from 'lucide-react';
import { MenuCategory, GalleryImage, MenuItem } from '../types';

const AdminDashboard: React.FC = () => {
  const { 
    isAdmin, businessInfo, menuItems, comboOffers, galleryImages,
    updateBusinessInfo, updateMenuItems, updateComboOffers, updateGalleryImages 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'general' | 'menu' | 'combos' | 'gallery'>('general');
  const [editingInfo, setEditingInfo] = useState({ ...businessInfo });
  const [editingMenu, setEditingMenu] = useState<MenuItem[]>([]);
  const [editingGallery, setEditingGallery] = useState<GalleryImage[]>([]);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  // New gallery image form state
  const [newImage, setNewImage] = useState({ url: '', caption: '' });

  useEffect(() => {
    setEditingMenu([...menuItems]);
    setEditingGallery([...galleryImages]);
    setEditingInfo({ ...businessInfo });
  }, [menuItems, galleryImages, businessInfo]);

  if (!isAdmin) return <Navigate to="/login" />;

  const showStatus = (type: 'success' | 'error', msg: string) => {
    setStatus({ type, msg });
    setTimeout(() => setStatus(null), 3000);
  };

  const handleSaveGeneral = () => {
    updateBusinessInfo(editingInfo);
    showStatus('success', 'Business information updated!');
  };

  const handleAddMenuItem = () => {
    const newItem: MenuItem = { name: 'New Item', price: 0, category: 'Coffee & Tea', description: '' };
    setEditingMenu([newItem, ...editingMenu]);
  };

  const handleUpdateMenuItem = (index: number, field: keyof MenuItem, value: any) => {
    const updated = [...editingMenu];
    updated[index] = { ...updated[index], [field]: value };
    setEditingMenu(updated);
  };

  const handleDeleteMenuItem = (index: number) => {
    if (window.confirm('Are you sure you want to delete this menu item?')) {
      const updated = editingMenu.filter((_, i) => i !== index);
      setEditingMenu(updated);
      updateMenuItems(updated);
      showStatus('success', 'Item removed from menu.');
    }
  };

  const handleSaveMenu = () => {
    updateMenuItems(editingMenu);
    showStatus('success', 'Full menu saved successfully!');
  };

  const handleAddGalleryImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImage.url) return;
    const updated = [newImage, ...editingGallery];
    setEditingGallery(updated);
    updateGalleryImages(updated);
    setNewImage({ url: '', caption: '' });
    showStatus('success', 'Image added to gallery!');
  };

  const handleDeleteGalleryImage = (index: number) => {
    if (window.confirm('Delete this image from gallery?')) {
      const updated = editingGallery.filter((_, i) => i !== index);
      setEditingGallery(updated);
      updateGalleryImages(updated);
      showStatus('success', 'Image removed.');
    }
  };

  const menuCategories: MenuCategory[] = [
    'Coffee & Tea',
    'Cold Beverages',
    'Snacks & Fast Food',
    'Nepali Items',
    'Desserts'
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex">
      {/* Sidebar */}
      <aside className="w-72 bg-coffee-900 text-white hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-coffee-800">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-coffee-800 p-2 rounded-xl group-hover:bg-coffee-700 transition-colors">
              <Coffee className="h-6 w-6 text-coffee-200" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">ABC Panel</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
          <p className="px-4 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-coffee-400">Dashboard</p>
          <button
            onClick={() => setActiveTab('general')}
            className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl transition-all ${activeTab === 'general' ? 'bg-coffee-800 text-white shadow-lg' : 'text-coffee-300 hover:text-white hover:bg-coffee-800/50'}`}
          >
            <Settings className="h-5 w-5" />
            <span className="font-semibold text-sm">General Info</span>
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl transition-all ${activeTab === 'menu' ? 'bg-coffee-800 text-white shadow-lg' : 'text-coffee-300 hover:text-white hover:bg-coffee-800/50'}`}
          >
            <Utensils className="h-5 w-5" />
            <span className="font-semibold text-sm">Menu Items</span>
          </button>
          <button
            onClick={() => setActiveTab('combos')}
            className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl transition-all ${activeTab === 'combos' ? 'bg-coffee-800 text-white shadow-lg' : 'text-coffee-300 hover:text-white hover:bg-coffee-800/50'}`}
          >
            <Zap className="h-5 w-5" />
            <span className="font-semibold text-sm">Combo Offers</span>
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl transition-all ${activeTab === 'gallery' ? 'bg-coffee-800 text-white shadow-lg' : 'text-coffee-300 hover:text-white hover:bg-coffee-800/50'}`}
          >
            <ImageIcon className="h-5 w-5" />
            <span className="font-semibold text-sm">Gallery Mgmt</span>
          </button>
        </nav>

        <div className="p-6 border-t border-coffee-800">
          <Link to="/" className="flex items-center space-x-2 text-coffee-400 hover:text-white text-sm font-medium transition-colors px-4">
            <ChevronLeft className="h-4 w-4" />
            <span>View Public Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Header */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 p-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold text-coffee-900 capitalize flex items-center">
              {activeTab === 'general' && <Settings className="mr-3 h-8 w-8 text-coffee-200" />}
              {activeTab === 'menu' && <Utensils className="mr-3 h-8 w-8 text-coffee-200" />}
              {activeTab === 'combos' && <Zap className="mr-3 h-8 w-8 text-coffee-200" />}
              {activeTab === 'gallery' && <ImageIcon className="mr-3 h-8 w-8 text-coffee-200" />}
              {activeTab.replace('-', ' ')}
            </h1>
            <p className="text-gray-400 text-sm mt-1">Manage your cafe's {activeTab} content and settings.</p>
          </div>

          <div className="flex items-center space-x-4">
            {status && (
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold animate-fade-in ${status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {status.type === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                <span>{status.msg}</span>
              </div>
            )}
            
            {(activeTab === 'general' || activeTab === 'menu') && (
              <button 
                onClick={() => activeTab === 'general' ? handleSaveGeneral() : handleSaveMenu()}
                className="bg-coffee-900 text-white px-8 py-3.5 rounded-2xl font-bold flex items-center space-x-2 hover:bg-coffee-800 transition-all shadow-xl shadow-coffee-900/20 active:scale-95"
              >
                <Save className="h-5 w-5" />
                <span>Save All Changes</span>
              </button>
            )}
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {/* General Tab */}
          {activeTab === 'general' && (
            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Cafe Name</label>
                  <input
                    type="text"
                    value={editingInfo.name}
                    onChange={(e) => setEditingInfo({ ...editingInfo, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 transition-all font-medium"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Contact Phone</label>
                  <input
                    type="text"
                    value={editingInfo.phone}
                    onChange={(e) => setEditingInfo({ ...editingInfo, phone: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 transition-all font-medium"
                  />
                </div>
                <div className="col-span-1 md:col-span-2 space-y-4">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Physical Address</label>
                  <input
                    type="text"
                    value={editingInfo.location}
                    onChange={(e) => setEditingInfo({ ...editingInfo, location: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 transition-all font-medium"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Operating Hours</label>
                  <input
                    type="text"
                    value={editingInfo.hours}
                    onChange={(e) => setEditingInfo({ ...editingInfo, hours: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 transition-all font-medium"
                    placeholder="e.g. 7:00 AM – 9:00 PM"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Working Days</label>
                  <input
                    type="text"
                    value={editingInfo.days}
                    onChange={(e) => setEditingInfo({ ...editingInfo, days: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 transition-all font-medium"
                    placeholder="e.g. Sunday – Saturday"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Menu Tab */}
          {activeTab === 'menu' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-coffee-50 p-8 rounded-[2rem] border border-coffee-100">
                <div>
                  <h3 className="text-xl font-bold text-coffee-900">Manage Food & Drinks</h3>
                  <p className="text-coffee-600/70 text-sm">Add, remove, or update prices and descriptions.</p>
                </div>
                <button
                  onClick={handleAddMenuItem}
                  className="bg-coffee-900 text-white px-8 py-3.5 rounded-2xl font-bold flex items-center space-x-2 shadow-lg shadow-coffee-900/20 hover:bg-coffee-800 transition-all active:scale-95"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add New Item</span>
                </button>
              </div>

              <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Item Name & Desc</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Price (NPR)</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {editingMenu.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-6">
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => handleUpdateMenuItem(idx, 'name', e.target.value)}
                            className="w-full bg-transparent border-none focus:ring-0 font-bold text-coffee-900 placeholder:text-gray-300"
                            placeholder="Menu name..."
                          />
                          <input
                            type="text"
                            value={item.description || ''}
                            onChange={(e) => handleUpdateMenuItem(idx, 'description', e.target.value)}
                            className="w-full bg-transparent border-none focus:ring-0 text-sm text-gray-400 placeholder:text-gray-300 mt-1"
                            placeholder="Add brief description..."
                          />
                        </td>
                        <td className="px-8 py-6">
                          <select
                            value={item.category}
                            onChange={(e) => handleUpdateMenuItem(idx, 'category', e.target.value as MenuCategory)}
                            className="bg-white border border-gray-100 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-coffee-900 outline-none"
                          >
                            {menuCategories.map(cat => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 w-32">
                            <span className="text-gray-400 text-xs font-bold mr-2">Rs.</span>
                            <input
                              type="number"
                              value={item.price}
                              onChange={(e) => handleUpdateMenuItem(idx, 'price', parseInt(e.target.value) || 0)}
                              className="w-full bg-transparent border-none focus:ring-0 text-coffee-900 font-bold p-0"
                            />
                          </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button
                            onClick={() => handleDeleteMenuItem(idx)}
                            className="text-red-300 hover:text-red-500 transition-colors p-3 hover:bg-red-50 rounded-2xl"
                            title="Delete Item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {editingMenu.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-8 py-20 text-center text-gray-400">
                          <Utensils className="h-12 w-12 mx-auto mb-4 opacity-10" />
                          <p>No menu items found. Start by adding one!</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Combos Tab */}
          {activeTab === 'combos' && (
            <div className="bg-white rounded-[2.5rem] p-20 border border-gray-100 shadow-sm text-center">
              <div className="max-w-md mx-auto">
                <div className="bg-coffee-50 p-8 rounded-full inline-block mb-8">
                  <Zap className="h-20 w-20 text-coffee-300" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-coffee-900 mb-4">Combos Editor</h3>
                <p className="text-gray-500 mb-10 leading-relaxed">
                  The combo logic is currently locked for stability. You can modify prices of existing items in the Menu tab, and they will automatically update in most combo views soon.
                </p>
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 text-amber-700 text-sm font-medium flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5" />
                  <span>Full Combo CRUD is under development.</span>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-10 animate-fade-in">
              {/* Add Image Form */}
              <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-coffee-900 mb-8 flex items-center">
                  <Plus className="mr-3 text-coffee-200" />
                  Add New Gallery Image
                </h3>
                <form onSubmit={handleAddGalleryImage} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                  <div className="md:col-span-5 space-y-4">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Image URL</label>
                    <input
                      type="url"
                      value={newImage.url}
                      onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 transition-all"
                      placeholder="https://images.unsplash.com/..."
                      required
                    />
                  </div>
                  <div className="md:col-span-4 space-y-4">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Caption</label>
                    <input
                      type="text"
                      value={newImage.caption}
                      onChange={(e) => setNewImage({ ...newImage, caption: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 transition-all"
                      placeholder="e.g. Delicious Nepali Momos"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <button
                      type="submit"
                      className="w-full bg-coffee-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-coffee-800 transition-all shadow-lg active:scale-95"
                    >
                      <ImageIcon className="h-5 w-5" />
                      <span>Add Image</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {editingGallery.map((img, idx) => (
                  <div key={idx} className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                    <div className="aspect-square relative overflow-hidden">
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                        <a href={img.url} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md p-3 rounded-xl hover:bg-white/40 transition-colors">
                          <ExternalLink className="h-5 w-5 text-white" />
                        </a>
                        <button 
                          onClick={() => handleDeleteGalleryImage(idx)}
                          className="bg-red-500/80 backdrop-blur-md p-3 rounded-xl hover:bg-red-500 transition-colors"
                        >
                          <Trash2 className="h-5 w-5 text-white" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-bold text-coffee-900 text-sm truncate">{img.caption || 'No caption'}</p>
                    </div>
                  </div>
                ))}
                {editingGallery.length === 0 && (
                  <div className="col-span-full py-20 text-center text-gray-300">
                    <ImageIcon className="h-20 w-20 mx-auto mb-4 opacity-10" />
                    <p className="text-lg">Your gallery is empty.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
