import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Aagam Rass Dandiya 2025",
    "description": "Join us for the most vibrant and exciting Dandiya event of 2025! Experience traditional Gujarati culture with modern entertainment, delicious food, and unforgettable memories.",
    "startDate": "2025-01-10T18:30:00-05:00",
    "endDate": "2025-01-10T21:00:00-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Cineplax Hall",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York City",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Aagam Rass Dandiya",
      "url": "https://aagamrassdandiya.com",
      "email": "info@gmail.com",
      "telephone": "+1 (1234)-567-800"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Basic Pass",
        "price": "25",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://aagamrassdandiya.com/booking"
      },
      {
        "@type": "Offer",
        "name": "Premium Pass",
        "price": "45",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://aagamrassdandiya.com/booking"
      },
      {
        "@type": "Offer",
        "name": "VIP Pass",
        "price": "75",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://aagamrassdandiya.com/booking"
      }
    ],
    "image": [
      "https://aagamrassdandiya.com/og-image.jpg",
      "https://aagamrassdandiya.com/hero-1.jpg",
      "https://aagamrassdandiya.com/hero-2.jpg",
      "https://aagamrassdandiya.com/hero-3.jpg"
    ],
    "category": "Cultural Event",
    "audience": {
      "@type": "Audience",
      "audienceType": "Gujarati Community"
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
