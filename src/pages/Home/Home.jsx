import workList from "../../data/workList";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Reviews from "../../components/Reviews/Reviews";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

import Transition from "../../components/Transition/Transition";

const heroImages = [
  "/home/hero.jpg",
  "/home/hero2.jpg",
  "/home/hero3.jpg",
  "/home/hero4.jpg",
  "/home/hero5.jpg",
];

const Home = () => {
  const workItems = Array.isArray(workList) ? workList : [];
  const stickyTitlesRef = useRef(null);
  const titlesRef = useRef([]);
  const stickyWorkHeaderRef = useRef(null);
  const homeWorkRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const handleVideoClick = useCallback((workId, e) => {
    e.preventDefault();
    const video = videoRefs.current[workId];
    if (!video) return;

    if (playingVideo === workId) {
      video.pause();
      video.muted = true;
      setPlayingVideo(null);
    } else {
      // Pause any other playing video
      Object.entries(videoRefs.current).forEach(([id, v]) => {
        if (v && Number(id) !== workId) {
          v.pause();
          v.muted = true;
        }
      });
      video.muted = false;
      video.play();
      setPlayingVideo(workId);
    }
  }, [playingVideo]);

  // Hero image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const stickySection = stickyTitlesRef.current;
    const titles = titlesRef.current.filter(Boolean);

    if (!stickySection || titles.length !== 3) {
      window.removeEventListener("resize", handleResize);
      return;
    }

    gsap.set(titles[0], { opacity: 1, scale: 1 });
    gsap.set(titles[1], { opacity: 0, scale: 0.75 });
    gsap.set(titles[2], { opacity: 0, scale: 0.75 });

    const pinTrigger = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${window.innerHeight * 5}`,
      pin: true,
      pinSpacing: true,
    });

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: stickySection,
        start: "top top",
        end: `+=${window.innerHeight * 4}`,
        scrub: 0.5,
      },
    });

    masterTimeline
      .to(
        titles[0],
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.3,
          ease: "power2.out",
        },
        1
      )

      .to(
        titles[1],
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        1.25
      );

    masterTimeline
      .to(
        titles[1],
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.3,
          ease: "power2.out",
        },
        2.5
      )

      .to(
        titles[2],
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        2.75
      );

    const workHeaderSection = stickyWorkHeaderRef.current;
    const homeWorkSection = homeWorkRef.current;

    let workHeaderPinTrigger;
    if (workHeaderSection && homeWorkSection) {
      workHeaderPinTrigger = ScrollTrigger.create({
        trigger: workHeaderSection,
        start: "top top",
        endTrigger: homeWorkSection,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }

    return () => {
      pinTrigger.kill();
      if (workHeaderPinTrigger) {
        workHeaderPinTrigger.kill();
      }
      if (masterTimeline.scrollTrigger) {
        masterTimeline.scrollTrigger.kill();
      }
      masterTimeline.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          <div className="hero-img">
            {heroImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt="Naman Musica Band"
                className={
                  index === currentImageIndex
                    ? "active"
                    : index === prevImageIndex
                      ? "prev"
                      : ""
                }
              />
            ))}
          </div>

          <div className="hero-carousel">
            <div className="hero-carousel-track">
              {[...heroImages, ...heroImages].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Naman Musica Band"
                />
              ))}
            </div>
          </div>

          <div className="hero-header">
            <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.7}>
              Naman
            </AnimatedCopy>
            <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.8}>
              Musica
            </AnimatedCopy>
          </div>
        </section>

        <section ref={stickyTitlesRef} className="sticky-titles">
          <div className="sticky-titles-nav">
            <p className="primary sm">About The Band</p>
            <p className="primary sm">Book Us</p>
          </div>
          <div className="sticky-titles-footer">
            <p className="primary sm">Versatile Rock Band</p>
            <p className="primary sm">Available for Events</p>
          </div>
          <h2 ref={(el) => (titlesRef.current[0] = el)}>
            We create music that moves souls and ignites stages.
          </h2>
          <h2 ref={(el) => (titlesRef.current[1] = el)}>
            Every performance is a journey of energy, passion, and sound.
          </h2>
          <h2 ref={(el) => (titlesRef.current[2] = el)}>
            From rock anthems to soulful ballads — we bring the vibe.
          </h2>
        </section>

        <section ref={stickyWorkHeaderRef} className="sticky-work-header">
          <AnimatedCopy tag="h1" animateOnScroll="true">
            Our Music
          </AnimatedCopy>
        </section>

        <section ref={homeWorkRef} className="home-work">
          <div className="home-work-list">
            {workItems.map((work, index) => (
              <div
                key={work.id}
                className="home-work-item"
                onClick={work.video ? (e) => handleVideoClick(work.id, e) : undefined}
                style={work.video ? { cursor: "pointer" } : undefined}
              >
                <p className="primary sm">{`${String(index + 1).padStart(
                  2,
                  "0"
                )} - ${String(workItems.length).padStart(2, "0")}`}</p>
                <h3>{work.title}</h3>
                <div className="work-item-img">
                  {work.video ? (
                    <div className="work-item-video-wrap">
                      <video
                        ref={(el) => (videoRefs.current[work.id] = el)}
                        src={work.video + "#t=0.1"}
                        playsInline
                        loop
                        preload="auto"
                        muted
                      />
                      {playingVideo !== work.id && (
                        <div className="video-play-btn">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2" />
                            <polygon points="19,15 35,24 19,33" fill="white" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ) : (
                    <img src={work.image} alt={work.title} />
                  )}
                </div>
                <h4>{work.category}</h4>
              </div>
            ))}
          </div>
        </section>

        <Reviews />

        <section className="hobbies">
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Rock
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Fusion
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Acoustic
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Live
            </AnimatedCopy>
          </div>
        </section>

        <ContactForm />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
