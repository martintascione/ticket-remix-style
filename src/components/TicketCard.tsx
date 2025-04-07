
import { Card } from "@/components/ui/card";
import Logo from "@/components/Logo";

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
    <Card className="w-full max-w-md mx-auto overflow-hidden shadow-lg">
      {/* Ticket header with perforated edge */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="flex-1 bg-gray-200 mx-0.5 rounded-b-sm"></div>
          ))}
        </div>
      </div>
      
      <div className="pt-6 px-6 pb-4">
        {/* Company Header */}
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold tracking-wider">{ticketData.company}</h1>
          <p className="text-sm text-gray-600">{ticketData.location}</p>
          <p className="text-sm text-gray-600">{ticketData.phone}</p>
        </div>
        
        <Divider />
        
        {/* Título y Cliente */}
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{ticketData.title}</h2>
          <div className="flex justify-center text-sm text-gray-600">
            <span className="font-semibold mr-1">Cliente:</span> {ticketData.client} 
            <span className="mx-2">|</span>
            <span className="font-semibold mr-1">Fecha:</span> {ticketData.date}
          </div>
        </div>
        
        <Divider />
        
        {/* Items */}
        <div className="mb-4">
          <div className="flex justify-between font-medium mb-2">
            <span className="text-gray-700">DESCRIPCIÓN</span>
            <span className="text-gray-700">PRECIOS</span>
          </div>
          
          {ticketData.items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm py-1">
              <span className="text-gray-800">{item.description}</span>
              <span className="text-gray-800">{typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}</span>
            </div>
          ))}
        </div>
        
        <Divider />
        
        {/* Resumen */}
        <div className="text-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">Resumen</h3>
        </div>
        
        <Divider />
        
        {/* Summary Details */}
        <div className="mb-4">
          <div className="flex justify-between text-sm py-1">
            <span className="text-gray-800">Productos</span>
            <span className="text-gray-800">${ticketData.summary.products.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm py-1">
            <span className="text-gray-800">Envío + Impuestos</span>
            <span className="text-gray-800">${ticketData.summary.shipping.toFixed(2)}</span>
          </div>
        </div>
        
        <Divider />
        
        {/* Total */}
        <div className="flex justify-between items-center py-2">
          <span className="text-lg font-bold">Total</span>
          <span className="text-lg font-bold">${ticketData.summary.total.toFixed(2)}</span>
        </div>
        
        <Divider />
        
        {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-4 mb-2">
          {ticketData.footer}
        </div>
        
        {/* Logo */}
        <div className="flex justify-center mt-4 mb-2">
          <Logo />
        </div>
      </div>
      
      {/* Bottom perforated edge */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="flex-1 bg-gray-200 mx-0.5 rounded-t-sm"></div>
          ))}
        </div>
      </div>
    </Card>
  );
};

// Helper component for dividers
const Divider = () => {
  return <div className="border-t border-dashed border-gray-300 my-3" />;
};

export default TicketCard;
