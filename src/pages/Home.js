import React from "react";
import NavBar from "../components/navBar";
import Hero from "../components/hero";
import CommunityWhy from "../components/community_why";
import Footer from "../components/footer";
import Award from "../components/award";
import { Helmet } from "react-helmet";
import Testimonials from "../components/testimonials";
import Initiatives from "../components/initiatives";
import Statistics from "../components/statistics";
import Discord_Banner from "../components/Discord_Banner";
 
import { Modal , Button } from "react-bootstrap"; 
import { useEffect, useState } from "react";
import { red } from "@mui/material/colors";

const Home = () => {

   const [showModal, setShowModal] = useState(false);
   const newCommunityUrl = "https://community.knowlumi.com";


    useEffect(() => {
      setShowModal(true);
    }, []);

      const handleRedirect = () => {
        setShowModal(false); 
        window.location.href = newCommunityUrl; 
      };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EETI Foundation</title>
        <meta property="og:site_name" content="EETI Foundation" />
        <meta property="og:title" content="EETI Foundation" />
        <meta property="og:url" content="https://eetifoundation.org" />
        <meta
          property="og:image"
          itemprop="image"
          content="%PUBLIC_URL%/logo192.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A community initiative from college of engineering Trivandrum, EETI Foundation is a group of young innovators future entrepreneurs and technology enthusiasts across Kerala"
        />
      </Helmet>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered >
        <Modal.Header closeButton style={{ borderBottom: "none", padding: "0.8rem" }}>
          <Modal.Title style={{ fontSize: "1.2rem" }}>
            Important Update
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "0.8rem" }}>EETI Foundation is now Lumi Community!</Modal.Body>
        <Modal.Footer style={{ padding: "0.2rem",  borderTop: "none" }}>
          
          <Button
            style={{
              fontSize: "0.8rem",
              height: "clamp(2.5rem, 6vw, 3rem)",
              backgroundColor: "rgb(255, 132, 94)",
              borderColor: "rgb(255, 132, 94)",
              color: "white",
              padding: "clamp(0.5rem, 2vw, 1rem) clamp(1rem, 4vw, 1rem)",
            }}
            onClick={handleRedirect}
          >
            Go to New Community
          </Button>
        </Modal.Footer>
      </Modal>

      <NavBar />
      <Hero />
      <Discord_Banner />
      <hr></hr>
      <Statistics />
      <hr></hr>
      <Initiatives />
      <CommunityWhy />
      <Award />
      <hr></hr>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
