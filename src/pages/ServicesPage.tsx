import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services - Sheikh Momin | Web Development, Video Editing & Digital Marketing</title>
        <meta name="description" content="Professional services including Meta ad management, web development, video editing, and 2D illustrations. Get expert digital marketing and creative solutions." />
        <meta name="keywords" content="web development, video editing, digital marketing, Meta ads, motion graphics, illustration services" />
        <link rel="canonical" href="/services" />
      </Helmet>
      
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navigation />
        <main className="pt-14 sm:pt-16 lg:pt-20">
          <Services />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;