import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Profile } from "@/components/Profile";
import { Gallery } from "@/components/Gallery";
import { Booking } from "@/components/Booking";
import { Policies } from "@/components/Policies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FeatureImage } from "@/components/FeatureImage";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden bg-adobe-deep">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-adobe">
          <About />
          <Profile />
        </div>
        <Gallery />
        <FeatureImage
          variant="one"
          label="Desert Light"
          caption="Golden hour in the Sonoran"
        />
        <Booking />
        <Policies />
        <Contact />
        <FeatureImage variant="two" label="Evenings" caption="Where the desert meets the dark" />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
