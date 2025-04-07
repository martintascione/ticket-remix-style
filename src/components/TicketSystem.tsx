
import React from 'react';
import { Card } from "@/components/ui/card";
import { Barcode, Calendar, CheckCircle, Circle } from "lucide-react";

// Logo Component
const Logo = () => {
  return (
    <div className="relative w-24 h-24">
      <img 
        src="/lovable-uploads/5ec74454-5387-4fbf-9ee6-6f34e6dc4e9f.png" 
        alt="IMPORTAR Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

// Ticket Component
const TicketCard = () => {
  const ticketData = {
    company: "ESIMPORTAR SRL",
    location: "MIAMI - BUENOS AIRES",
    phone: "011 64352202",
    title: "PRESUPUESTO",
    client: "martin1",
    date: "2025-04-07",
    items: [
      { description: "11111", price: 111.00 },
      { description: "IVA Producto", price: 23.31 },
      { description: "1111", price: 111.00 },
      { description: "IVA Producto", price: 11.10 },
      { description: "Peso (Estimado)", price: "11.00 kg" },
      { description: "Envío MIAMI - CABA", price: 111.00 },
      { description: "IVA Envío (21%)", price: 23.31 },
    ],
    summary: {
      products: 222.00,
      shipping: 168.72,
      total: 390.72
    },
    footer: "IMPORTACIONES PERSONALES / EMPRESAS / RURALES"
  };

  // Helper function to check if an item should have a dot
  const shouldShowDot = (description: string) => {
    // Show dot for products and the shipping item (Envío MIAMI - CABA)
    // Don't show dot for IVA items, weight items or IVA shipping items
    if (description.toLowerCase().includes('iva')) return false;
    if (description.toLowerCase().includes('peso')) return false;
    
    // Specifically allow "Envío MIAMI - CABA" to have a dot
    if (description === "Envío MIAMI - CABA") return true;
    
    // For other items that contain "envío" in different formats, don't show dot
    if (description.toLowerCase().includes('envío') && description !== "Envío MIAMI - CABA") return false;
    
    // For all other items (products), show dot
    return true;
  };

  return (
    <Card className="ticket-shadow w-full max-w-md mx-auto bg-white overflow-hidden relative">
      {/* Colored header stripe */}
      <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
      
      <div className="p-6">
        {/* Company Header with improved styling */}
        <div className="text-center mb-5">
          <h1 className="text-xl font-bold tracking-wider text-gray-800">{ticketData.company}</h1>
          <p className="text-sm font-medium text-gray-600">{ticketData.location}</p>
          <p className="text-sm text-gray-500 mt-1">{ticketData.phone}</p>
        </div>
        
        {/* Title and Client Info - with card-like appearance */}
        <div className="bg-gray-50 rounded-lg p-4 mb-5 border-l-4 border-blue-500 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{ticketData.title}</h2>
              <div className="flex items-center mt-1 text-sm text-gray-600">
                <span className="font-medium mr-1">Cliente:</span> {ticketData.client}
              </div>
            </div>
            <div className="flex items-center text-gray-600 bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
              <Calendar className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-sm font-medium">{ticketData.date}</span>
            </div>
          </div>
        </div>
        
        {/* Items - with improved spacing and styling */}
        <div className="mb-5">
          <div className="flex justify-between font-medium py-2 text-sm text-gray-700 border-b border-gray-200">
            <span className="uppercase tracking-wider">Descripción</span>
            <span className="uppercase tracking-wider">Precios</span>
          </div>
          
          <div className="space-y-2 mt-2">
            {ticketData.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm py-1 items-center">
                <div className="flex items-center">
                  {shouldShowDot(item.description) ? (
                    <Circle className="w-2.5 h-2.5 mr-2 fill-blue-500 text-blue-500 flex-shrink-0" />
                  ) : (
                    <div className="w-2.5 mr-2 flex-shrink-0"></div>
                  )}
                  <span className="text-gray-700">{item.description}</span>
                </div>
                <span className="font-medium text-gray-800">
                  {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-dashed border-gray-300 my-4"></div>
        
        {/* Summary - with improved visual hierarchy */}
        <div className="mb-5 bg-blue-50 rounded-lg p-4 border border-blue-100">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Resumen</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm py-1">
              <span className="text-gray-700">Productos</span>
              <span className="font-medium">${ticketData.summary.products.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm py-1">
              <span className="text-gray-700">Envío + Impuestos</span>
              <span className="font-medium">${ticketData.summary.shipping.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="border-t border-blue-200 mt-3 pt-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-lg font-bold text-blue-600">${ticketData.summary.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        {/* Status - with improved visual styling */}
        <div className="flex items-center justify-center my-5 bg-green-50 text-green-700 py-2.5 px-4 rounded-full text-sm font-medium border border-green-200">
          <CheckCircle className="w-4 h-4 mr-2" /> 
          Presupuesto válido por 7 días
        </div>
        
        {/* Footer - with improved typography */}
        <div className="text-center text-sm text-gray-500 mt-6 mb-4 font-medium tracking-wide">
          {ticketData.footer}
        </div>
        
        {/* Barcode and Logo - with better spacing */}
        <div className="flex flex-col items-center mt-5 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-center mb-3 text-gray-400">
            <Barcode className="w-5 h-5 mr-2" />
            <span className="font-mono text-xs">ES2504072025</span>
          </div>
          <div className="mt-2">
            <Logo />
          </div>
        </div>
      </div>
      
      {/* Colored footer stripe */}
      <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
    </Card>
  );
};

// Main Container Component
const TicketSystem = () => {
  return (
    <div className="ticket-container">
      <TicketCard />
    </div>
  );
};

export { TicketSystem, TicketCard, Logo };
export default TicketSystem;
