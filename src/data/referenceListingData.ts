export interface ListingPhoto {
  id: string;
  url: string;
  category: string;
  title: string;
}

export const referenceListingData = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  pricePerNight: 5699, // ₹28,499 / 5
  totalPrice: 28499,
  nights: 5,
  dates: "Oct 18 - 23, 2026",
  rating: 4.95,
  reviewsCount: 19,
  host: {
    name: "Mirashya",
    coHosts: [
      { name: "John", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
      { name: "Sarah", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
      { name: "Mike", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80" },
      { name: "Emma", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
      { name: "David", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
      { name: "Lisa", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" },
      { name: "Alex", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" }
    ]
  },
  amenities: [
    "Sofa", "Air conditioning", "Indoor jacuzzi", "TV", "Wifi", 
    "Kitchen", "Free parking", "Pool", "Gym", "Balcony"
  ]
};

export const listingPhotos: ListingPhoto[] = [
  // Living Room 1 (5 photos)
  { id: "lr1-1", url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80", category: "living-room-1", title: "Living room 1" },
  { id: "lr1-2", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", category: "living-room-1", title: "Living room 1" },
  { id: "lr1-3", url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", category: "living-room-1", title: "Living room 1" },
  { id: "lr1-4", url: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1200&q=80", category: "living-room-1", title: "Living room 1" },
  { id: "lr1-5", url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80", category: "living-room-1", title: "Living room 1" },

  // Living Room 2 (5 photos)
  { id: "lr1-6", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", category: "living-room-2", title: "Living room 2" },
  { id: "lr1-7", url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80", category: "living-room-2", title: "Living room 2" },
  { id: "lr1-8", url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80", category: "living-room-2", title: "Living room 2" },
  { id: "lr1-9", url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80", category: "living-room-2", title: "Living room 2" },
  { id: "lr1-10", url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80", category: "living-room-2", title: "Living room 2" },

  // Full Kitchen (7 photos)
  { id: "fk-1", url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80", category: "kitchen", title: "Full kitchen" },
  { id: "fk-2", url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80", category: "kitchen", title: "Full kitchen" },
  { id: "fk-3", url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80", category: "kitchen", title: "Full kitchen" },
  { id: "fk-4", url: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=1200&q=80", category: "kitchen", title: "Full kitchen" },
  { id: "fk-5", url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80", category: "kitchen", title: "Full kitchen" },
  { id: "fk-6", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", category: "kitchen", title: "Full kitchen" },
  { id: "fk-7", url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80", category: "kitchen", title: "Full kitchen" },

  // Bedroom (7 photos)
  { id: "br-1", url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", category: "bedroom", title: "Bedroom" },
  { id: "br-2", url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80", category: "bedroom", title: "Bedroom" },
  { id: "br-3", url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", category: "bedroom", title: "Bedroom" },
  { id: "br-4", url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80", category: "bedroom", title: "Bedroom" },
  { id: "br-5", url: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80", category: "bedroom", title: "Bedroom" },
  { id: "br-6", url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", category: "bedroom", title: "Bedroom" },
  { id: "br-7", url: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80", category: "bedroom", title: "Bedroom" },

  // Full Bathroom (5 photos)
  { id: "fb-1", url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", category: "bathroom", title: "Full bathroom" },
  { id: "fb-2", url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80", category: "bathroom", title: "Full bathroom" },
  { id: "fb-3", url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", category: "bathroom", title: "Full bathroom" },
  { id: "fb-4", url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", category: "bathroom", title: "Full bathroom" },
  { id: "fb-5", url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80", category: "bathroom", title: "Full bathroom" },

  // Gym (4 photos)
  { id: "gym-1", url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80", category: "gym", title: "Gym" },
  { id: "gym-2", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80", category: "gym", title: "Gym" },
  { id: "gym-3", url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80", category: "gym", title: "Gym" },
  { id: "gym-4", url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80", category: "gym", title: "Gym" },

  // Exterior (3 photos)
  { id: "ep-1", url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80", category: "exterior", title: "Exterior" },
  { id: "ep-2", url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80", category: "exterior", title: "Exterior" },
  { id: "ep-3", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80", category: "exterior", title: "Exterior" },

  // Pool (3 photos)
  { id: "ep-4", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", category: "pool", title: "Pool" },
  { id: "ep-5", url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80", category: "pool", title: "Pool" },
  { id: "ep-6", url: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=1200&q=80", category: "pool", title: "Pool" },

  // Additional Photos (4 photos)
  { id: "ap-1", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", category: "additional", title: "Additional photos" },
  { id: "ap-2", url: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1200&q=80", category: "additional", title: "Additional photos" },
  { id: "ap-3", url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80", category: "additional", title: "Additional photos" },
  { id: "ap-4", url: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?auto=format&fit=crop&w=1200&q=80", category: "additional", title: "Additional photos" }
];

export interface PhotoCategory {
  id: string;
  title: string;
  description?: string;
}

export const photoCategories: PhotoCategory[] = [
  { 
    id: "living-room-1", 
    title: "Living room 1",
    description: "Sofa · Air conditioning · Ceiling fan · TV"
  },
  { 
    id: "living-room-2", 
    title: "Living room 2",
    description: "Ceiling fan · Hot tub"
  },
  { 
    id: "kitchen", 
    title: "Full kitchen",
    description: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery"
  },
  { 
    id: "bedroom", 
    title: "Bedroom",
    description: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi"
  },
  { 
    id: "bathroom", 
    title: "Full bathroom",
    description: "Hairdryer · Hot water · Shampoo · Shower gel"
  },
  { 
    id: "gym", 
    title: "Gym",
    description: "Air conditioning · Gym · Exercise equipment · Ceiling fan"
  },
  { 
    id: "exterior", 
    title: "Exterior"
  },
  { 
    id: "pool", 
    title: "Pool"
  },
  { 
    id: "additional", 
    title: "Additional photos"
  }
];
