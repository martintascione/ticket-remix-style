
import { Card } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Barcode, Calendar, CheckCircle, Circle } from "lucide-react";

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

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden shadow-lg rounded-lg bg-white relative">
      {/* Colored top stripe */}
      <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      
      <div className="pt-6 px-8 pb-6">
        {/* Company Header */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold tracking-wide text-gray-800">{ticketData.company}</h1>
          <p className="text-sm text-gray-600 font-medium">{ticketData.location}</p>
          <p className="text-sm text-gray-500">{ticketData.phone}</p>
        </div>
        
        {/* Title and Client Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{ticketData.title}</h2>
              <div className="flex items-center mt-1 text-sm text-gray-600">
                <span className="font-medium mr-1">Cliente:</span> {ticketData.client}
              </div>
            </div>
            <div className="flex items-center text-gray-600 bg-white p-2 rounded border border-gray-100">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">{ticketData.date}</span>
            </div>
          </div>
        </div>
        
        {/* Items - REDUCED SPACING HERE */}
        <div className="mb-6">
          <div className="flex justify-between font-medium mb-2 text-sm text-gray-700 border-b pb-2">
            <span>DESCRIPCIÓN</span>
            <span>PRECIOS</span>
          </div>
          
          <div className="space-y-0.5">
            {ticketData.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm py-0.5 items-center">
                <div className="flex items-center">
                  <Circle className="w-2 h-2 mr-2 fill-blue-500 text-blue-500" />
                  <span className="text-gray-700">{item.description}</span>
                </div>
                <span className="font-medium text-gray-800">{typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-dashed border-gray-300 my-4"></div>
        
        {/* Summary */}
        <div className="mb-4 bg-gray-50 rounded-lg p-4 border border-gray-100">
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
          
          <div className="border-t border-gray-200 mt-3 pt-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-lg font-bold text-blue-600">${ticketData.summary.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        {/* Status */}
        <div className="flex items-center justify-center my-4 bg-green-50 text-green-700 py-2 px-4 rounded-full text-sm">
          <CheckCircle className="w-4 h-4 mr-2" /> Presupuesto válido por 7 días
        </div>
        
        {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-6 mb-3">
          {ticketData.footer}
        </div>
        
        {/* Barcode and Logo */}
        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center justify-center mb-3 text-gray-400">
            <Barcode className="w-6 h-6 mr-1" />
            <span className="font-mono text-xs">ES2504072025</span>
          </div>
          <Logo />
        </div>
      </div>
      
      {/* Colored bottom stripe */}
      <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </Card>
  );
};

export default TicketCard;
