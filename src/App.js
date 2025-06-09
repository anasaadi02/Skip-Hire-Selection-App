import React, { useState } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import SkipSelection from './components/SkipSelection';
import './App.css';

function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const steps = [
    { id: 1, label: "Location", completed: true, icon: "📍" },
    { id: 2, label: "Waste Type", completed: true, icon: "♻️" },
    { id: 3, label: "Skip Size", active: true, icon: "📦" },
    { id: 4, label: "Permits", completed: false, icon: "📋" },
    { id: 5, label: "Schedule", completed: false, icon: "📅" },
    { id: 6, label: "Payment", completed: false, icon: "💳" },
  ];

  // Real API data with enhanced features
  const rawSkipData = [
    {"id":17933,"size":4,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":278,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:52.813","allowed_on_road":true,"allows_heavy_waste":true},
    {"id":17934,"size":6,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":305,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:52.992","allowed_on_road":true,"allows_heavy_waste":true},
    {"id":17935,"size":8,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":375,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.171","allowed_on_road":true,"allows_heavy_waste":true},
    {"id":17936,"size":10,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":400,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.339","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":17937,"size":12,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":439,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.516","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":17938,"size":14,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":470,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.69","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":17939,"size":16,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":496,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.876","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":15124,"size":20,"hire_period_days":14,"transport_cost":248,"per_tonne_cost":248,"price_before_vat":992,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:40.344435","updated_at":"2025-04-07T13:16:52.434","allowed_on_road":false,"allows_heavy_waste":true},
    {"id":15125,"size":40,"hire_period_days":14,"transport_cost":248,"per_tonne_cost":248,"price_before_vat":992,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:40.344435","updated_at":"2025-04-07T13:16:52.603","allowed_on_road":false,"allows_heavy_waste":false}
  ];

  // Transform API data with enhanced features
  const skipOptions = rawSkipData
    .filter(skip => !skip.forbidden)
    .map((skip, index) => {
      const priceWithVat = skip.price_before_vat * (1 + skip.vat / 100);
      const formattedPrice = `£${Math.round(priceWithVat)}`;
      
      // Add descriptions
      const descriptions = {
        4: "Perfect for small bathroom renovations or garden clearouts",
        6: "Ideal for kitchen refits and small building projects", 
        8: "Great for home extensions and medium-sized clearouts",
        10: "Perfect for large renovations and construction waste",
        12: "Suitable for major home improvements and landscaping",
        14: "Ideal for large construction projects and house clearouts",
        16: "Perfect for commercial renovations and large builds",
        20: "Suitable for major construction and demolition work",
        40: "Ideal for large-scale commercial and industrial projects"
      };

      // Set image URLs for all skip sizes
      const getImageUrl = (size) => {
        const imageMap = {
          4: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg",
          6: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg",
          8: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg",
          10: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg",
          12: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg",
          14: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg",
          16: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg",
          20: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg",
          40: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg"
        };
        return imageMap[size] || "";
      };
      
      return {
        id: skip.id,
        size: skip.size,
        name: `${skip.size} Yard Skip`,
        price: formattedPrice,
        priceBeforeVat: `£${skip.price_before_vat}`,
        hirePeriod: `${skip.hire_period_days} day hire period`,
        description: descriptions[skip.size],
        image: getImageUrl(skip.size),
        allowedOnRoad: skip.allowed_on_road,
        allowsHeavyWaste: skip.allows_heavy_waste,
        transportCost: skip.transport_cost,
        perTonneCost: skip.per_tonne_cost,
        postcode: skip.postcode,
        features: [
          skip.allowed_on_road ? "Road placement allowed" : "Private property only",
          skip.allows_heavy_waste ? "Heavy waste accepted" : "Light waste only",
          "Free delivery included",
          `${skip.hire_period_days} day hire period`
        ]
      };
    });

  const handleSkipSelect = (skipId) => {
    setSelectedSkip(skipId);
    const selectedSkipData = skipOptions.find(skip => skip.id === skipId);
    console.log('Selected skip:', selectedSkipData);
  };

  return (
    <div className="app">
      <Header />
      <ProgressBar steps={steps} />
      <main className="main-content">
        <SkipSelection 
          skipOptions={skipOptions} 
          selectedSkip={selectedSkip}
          onSkipSelect={handleSkipSelect}
        />
      </main>
    </div>
  );
}

export default App;