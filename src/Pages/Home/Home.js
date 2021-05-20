import React, { useState, useEffect } from "react";
import {
  GetInTouch,
  IntroCarousel,
  JoinUs,
  Loader,
  ProjectCarousel,
} from "../../Components";
import { Navbar, Footer } from "../../Widgets";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fade } from "react-slideshow-image";

const Home = () => {
  AOS.init();

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 5000);
  }, [setSpinner]);

  const [Clients, setClients] = useState([]);
  const [EmptyState, setEmptyState] = useState("");

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch(
        `https://just-original.herokuapp.com/api/v1/clients`
      );
      const data = await response.json();
      const item = data.data;
      if (item) {
        const lists = Object.values(item);
        setClients(lists);
      }
      if (!item) {
        setEmptyState("No Blogs Found.");
      }
    };
    fetchClients();
  }, []);

  const properties = {
    prevArrow: (
      <div style={{ display: "none" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ display: "none" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };

  return (
    <>
      {spinner ? (
        <Loader />
      ) : (
        <main data-aos="fade-down" data-aos-duration="2000">
          <Navbar navColor="white" logoBg="#fff" />
          <section className="home-container">
            <section className="home-text">
              <div
                className="home-carousel-content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <IntroCarousel Clients={Clients} />
              </div>
            </section>
          </section>
          <section className="why-join-us-container">
            <JoinUs />
          </section>
          <section>
            <ProjectCarousel />
          </section>
          <section>
            <GetInTouch />
          </section>
          <section>
            <Footer />
          </section>
        </main>
      )}
    </>
  );
};

export { Home };
