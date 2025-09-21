// Site configuration exported as TypeScript objects

// Site information
export const siteInfo = {
  name: "Aagam Rass Dandiya",
  tagline: "Premium Dandiya Event 2025",
  description: "Join us for the most vibrant and exciting Dandiya event of 2025! Experience traditional Gujarati culture with modern entertainment, delicious food, and unforgettable memories.",
  contactEmail: "info@aagamrassdandiya.com",
  phoneNumber: "+1 (555) 123-4567",
  socialMedia: {
    instagram: "https://instagram.com/aagamrassdandiya",
    facebook: "https://facebook.com/aagamrassdandiya",
    twitter: "https://twitter.com/aagamrassdandiya"
  }
};

// Theme configuration
export const theme = {
  colors: {
    primary: "#680605",
    primaryText: "#F8ECC6",
    secondary: "#F8ECC6",
    secondaryText: "#680605"
  },
  fonts: {
    heading: "Playfair Display",
    body: "Inter"
  }
};

// Event details
export const eventDetails = {
  title: "Aagam Rass Dandiya 2025",
  date: "October 15, 2025",
  time: "6:00 PM - 12:00 AM",
  venue: {
    name: "Hyatt Place Convention Center",
    address: "123 Main Street, New York, NY 10001",
    googleMapsUrl: "https://maps.google.com/?q=123+Main+Street+New+York+NY+10001",
    virtualTourVideo: "/herovideo.mp4"
  },
  schedule: [
    {
      time: "6:00 PM",
      activity: "Doors Open & Welcome Drinks",
      date:"1-2-2022"
    },
    {
      time: "7:00 PM",
      activity: "Opening Ceremony & Traditional Aarti"
      ,date:"1-2-2022"
    },
    {
      time: "8:00 PM",
      activity: "Dandiya Raas Begins"
      ,date:"1-2-2022"
    },
    {
      time: "9:00 PM",
      activity: "Dinner Service"
      ,date:"1-2-2022"
    },
    {
      time: "10:00 PM",
      activity: "Special Performance"
      ,date:"1-2-2022"
    },
    {
      time: "10:30 PM",
      activity: "Garba & DJ Session"
      ,date:"1-2-2022"
    },
    {
      time: "12:00 AM",
      activity: "Event Concludes"
      ,date:"1-2-2022"
    }
  ],
  pricing: [
    {
      name: "Standard",
      price: "$75",
      features: ["General Entry", "Access to Dance Floor", "Dinner Buffet", "Welcome Drink"]
    },
    {
      name: "Premium",
      price: "$125",
      features: ["Priority Entry", "Premium Seating", "Dinner Buffet", "Open Bar", "Exclusive Dandiya Sticks", "Event T-shirt"],
      highlighted: true
    },
    {
      name: "VIP",
      price: "$200",
      features: ["VIP Entry & Lounge Access", "Reserved Premium Seating", "Gourmet Dinner Buffet", "Premium Open Bar", "Luxury Dandiya Sticks", "Event Merchandise Pack", "Meet & Greet with Performers", "Professional Photo Session"]
    }
  ]
};

// Gallery configuration
export const gallery = {
  categories: [
    "Dancing",
    "Food",
    "Decorations",
    "Music",
    "Group Photos",
    "Awards",
    "Closing Ceremony"
  ],
  images: [
    {
      src: "/gallery/dancing-1.jpg",
      alt: "Energetic dandiya dancers",
      category: "Dancing",
      year: "2024"
    },
    {
      src: "/gallery/food-1.jpg",
      alt: "Traditional Gujarati cuisine",
      category: "Food",
      year: "2024"
    },
    {
      src: "/gallery/decorations-1.jpg",
      alt: "Colorful venue decorations",
      category: "Decorations",
      year: "2024"
    },
    {
      src: "/gallery/music-1.jpg",
      alt: "Live music performance",
      category: "Music",
      year: "2024"
    },
    {
      src: "/gallery/group-1.jpg",
      alt: "Group photo of participants",
      category: "Group Photos",
      year: "2024"
    },
    {
      src: "/gallery/awards-1.jpg",
      alt: "Best dancer award ceremony",
      category: "Awards",
      year: "2024"
    },
    {
      src: "/gallery/closing-1.jpg",
      alt: "Closing ceremony celebrations",
      category: "Closing Ceremony",
      year: "2024"
    },
    {
      src: "/gallery/dandiya-1.jpg",
      alt: "Traditional dandiya sticks",
      category: "Dancing",
      year: "2024"
    }
  ]
};

// Past events
export const pastEvents = [
  {
    year: "2024",
    title: "Aagam Rass Dandiya 2024",
    description: "Our biggest event yet with over 500 attendees and performances by renowned artists.",
    imageUrl: "/gallery/2024/main.jpg",
    highlights: [
      "Celebrity performance by Falguni Pathak",
      "Gourmet Gujarati cuisine"
    ]
  },
  {
    year: "2023",
    title: "Aagam Rass Dandiya 2023",
    description: "A vibrant celebration of culture and tradition with participants from across the country.",
    imageUrl: "/gallery/2023/main.jpg",
    highlights: [
      "Traditional folk dance competition",
      "Authentic regional food stalls",
      "Live music by local artists"
    ]
  }
];

// Sponsors
export const sponsors = [
  {
    name: "Gujarati Samaj of New York",
    logo: "/sponsors/gujarati-samaj.png",
    website: "https://gujaratisamajny.org"
  },
  {
    name: "Desi Food Catering",
    logo: "/sponsors/desi-food.png",
    website: "https://desifoodcatering.com"
  },
  {
    name: "Community Bank",
    logo: "/sponsors/community-bank.png",
    website: "https://communitybank.com"
  },
  {
    name: "Bollywood Music Radio",
    logo: "/sponsors/bollywood-music.png",
    website: "https://bollywoodmusicradio.com"
  },
  {
    name: "NYC Cultural Events",
    logo: "/sponsors/nyc-events.png",
    website: "https://nycevents.org"
  },
  {
    name: "Desi Fashion House",
    logo: "/sponsors/desi-fashion.png",
    website: "https://desifashion.com"
  }
];

// Hero slider
export const heroSlider = [
  {
    image: "/background.jpg",
    title: "आ",
    subtitle: "Aarambh",
    description: "The sacred beginning of rhythm and devotion.\n\nWhere every step carries faith and celebration.\n\nAarambh of Aagam Dandiya."
  },
  {
    image: "/background.jpg",
    title: "ग",
    subtitle: "Garba",
    description: "The heartbeat of tradition and togetherness.\n\nCircles of joy that unite every soul.\n\nGarba, the spirit of Aagam Dandiya."
  },
  {
    image: "/background.jpg",
    title: "म",
    subtitle: "Mahotsav",
    description: "A grand festival of culture and unity.\n\nWhere devotion meets dance in its purest form.\n\nMahotsav begins with Aagam Dandiya"
  }
];


// Countdown timer
export const countdownTimer = {
  eventDate: "2025-10-15T18:00:00",
  title: "Countdown to Dandiya Night",
  subtitle: "Mark your calendars for the biggest cultural event of the year"
};

// Export all configurations as a single object
// Event highlights configuration
export const eventHighlights = [
  {
    title: "Traditional Dandiya Performance",
    description: "Experience authentic Gujarati dance forms performed by skilled artists",
    category: "Performance"
  },
  {
    title: "Live Music Orchestra",
    description: "Enjoy traditional and fusion music performed by our talented musicians",
    category: "Music"
  },
  {
    title: "Gourmet Gujarati Cuisine",
    description: "Savor authentic dishes prepared by master chefs using traditional recipes",
    category: "Food"
  },
  {
    title: "Best Dancer Competition",
    description: "Showcase your skills and win exciting prizes in our dance competition",
    category: "Competition"
  },
  {
    title: "Cultural Exhibition",
    description: "Explore the rich heritage and traditions of Gujarat through interactive displays",
    category: "Culture"
  },
  {
    title: "Professional Photography",
    description: "Capture your memories with our professional photography services",
    category: "Service"
  }
];

export const siteConfig = {
  siteInfo,
  theme,
  eventDetails,
  gallery,
  pastEvents,
  sponsors,
  heroSlider,
  countdownTimer,
  eventHighlights,
};

export default siteConfig;