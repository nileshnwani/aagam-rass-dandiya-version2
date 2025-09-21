import HeroSlider from "@/components/hero-slider";
import EventSchedule from "@/components/event-schedule";
import EventHighlights from "@/components/event-highlights";
import Gallery from "@/components/gallery";
import Pricing from "@/components/pricing";
import VenueTour from "@/components/venue-tour";
import Sponsors from "@/components/sponsors";
import PastEventGallery from "@/components/PastEventGallery";
import Organizers from "@/components/organizers";
import ContactNote from "@/components/contact-note";
export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Event Schedule Section */}
      <section id="schedule" className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
         
          </div>
          <EventSchedule />
        </div>
      </section>

  {/* Past Events Section */}
      <section id="past-events" className="py-16 bg-maroon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
<PastEventGallery/>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section id="event-highlights" className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <EventHighlights />
        </div>
      </section>

    

      {/* Gallery Section */}
      {/*  <section id="gallery" className="py-2 bg-maroon">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

          <Gallery />
        </div>
      </section>*/}

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-maroon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Pricing />
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactNote />
        </div>
      </section>


      {/* Venue Tour Section */}
      <section id="venue-tour" className="py-16 bg-maroon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <VenueTour />
        </div>
      </section>

      {/* Sponsors & Partners Section */}
      <section id="organizers" className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">   
          <Organizers/>

        </div>
      </section>
    </div>
  );
}
