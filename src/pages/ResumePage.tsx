import { Helmet } from "react-helmet-async";
import Resume from "@/components/Resume";

const ResumePage = () => {
  return (
    <>
      <Helmet>
        <title>Resume - Sheikh Momin | Digital Marketer · Web Developer · Video Editor</title>
        <meta 
          name="description" 
          content="View Sheikh Momin's professional resume - Digital Marketing Specialist, Web Developer, Video Editor, and Motion & Graphic Designer. Experienced in SEO, React, and creative design." 
        />
        <meta name="keywords" content="Sheikh Momin, resume, digital marketing, web development, video editing, graphic design, SEO, React" />
        <meta property="og:title" content="Resume - Sheikh Momin | Digital Marketer · Web Developer · Video Editor" />
        <meta property="og:description" content="Professional resume showcasing expertise in digital marketing, web development, video editing, and graphic design." />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href="https://sheikh.lovable.app/resume" />
      </Helmet>
      <Resume />
    </>
  );
};

export default ResumePage;