import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Profile } from "@/components/Profile";
import { Gallery } from "@/components/Gallery";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FeatureImage } from "@/components/FeatureImage";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden bg-sand">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-sand-deep">
          <About />
        </div>
        <div className="md:hidden">
          <FeatureImage
            variant="featureTwo"
            label="Portrait"
            caption="Soft light, quiet moments"
            heightClass="h-[85vh]"
          />
        </div>
        <Gallery />
        <div className="bg-sand-deep">
          <Profile />
        </div>
        <FeatureImage
          variant="featureThree"
          label="Candid"
          caption="Effortless, unposed elegance"
          heightClass="h-[85vh] md:h-[90vh]"
        />
        <Booking />
        <FeatureImage
          variant="featureOne"
          label="Editorial"
          caption="Golden hour in the Sonoran desert"
          heightClass="h-[70vh] md:h-[90vh]"
        />
        <Contact />
        <div className="hidden md:block">
          <FeatureImage
            variant="footer"
            label="Lifestyle"
            caption="Where warmth meets intention"
            heightClass="md:h-[90vh]"
          />
        </div>
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
