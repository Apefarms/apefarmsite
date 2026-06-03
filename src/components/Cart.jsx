import { useState, useEffect } from 'react';

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) {
  const subtotal = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace('₹', '').replace('/kg', ''));
    const weight = parseInt(item.weight) || 1;
    return sum + (price * weight * item.quantity);
  }, 0);

  const handleCheckout = () => {
    let message = "Hi! I would like to place an order:\n\n";
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.weight}) - Qty: ${item.quantity}\n`;
    });
    message += `\nSubtotal: ₹${subtotal}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919940061057?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-neutral-900">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-neutral-500 gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p className="text-lg font-medium">Your cart is empty</p>
              <button
                onClick={onClose}
                className="text-mango-600 font-semibold hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${item.weight}`} className="flex gap-4 group">
                <div className={`w-20 h-20 rounded-2xl ${item.color} flex-shrink-0 flex items-center justify-center p-2`}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-md" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-neutral-900">{item.name}</h3>
                      <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">{item.weight}</p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id, item.weight)}
                      className="text-neutral-400 hover:text-red-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="flex items-center border border-neutral-200 rounded-full">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.weight, item.quantity - 1)}
                        className="px-3 py-1 hover:text-mango-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.weight, item.quantity + 1)}
                        className="px-3 py-1 hover:text-mango-600 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-neutral-900">{item.price.split('/')[0]}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-neutral-100 bg-neutral-50/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-neutral-600 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-neutral-900">₹{subtotal}</span>
            </div>
            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full bg-neutral-900 text-white font-bold py-4 rounded-full shadow-lg hover:bg-neutral-800 transition-all active:scale-[0.98]">
                Checkout Now
              </button>
              {/* <button 
                onClick={onClose}
                className="w-full bg-white border border-neutral-200 text-neutral-700 font-bold py-4 rounded-full hover:bg-neutral-50 transition-all active:scale-[0.98]"
              >
                View full cart
              </button> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
