import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Sheikh Momin | Creative Projects & Case Studies</title>
        <meta name="description" content="Explore Sheikh Momin's portfolio featuring web development, video editing, motion graphics, and digital marketing projects. View live case studies and creative work." />
        <meta name="keywords" content="portfolio, web development, video editing, motion graphics, digital marketing, case studies" />
        <link rel="canonical" href="/portfolio" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-20">
          <Portfolio />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;