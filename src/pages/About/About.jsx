import React from "react";
import "./About.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const About = () => {
  return (
    <ReactLenis root>
      <div className="page about">
        <section className="about-header">
          <h1>Est</h1>
          <h1>2018</h1>
        </section>

        <section className="about-hero">
          <div className="about-hero-img">
            <img src="/about/about-hero.jpg" alt="Naman Musica Band" />
          </div>
        </section>

        <section className="about-me-copy">
          <div className="about-me-copy-wrapper">
            <AnimatedCopy animateOnScroll={true} tag="h3">
              We are Naman Musica — a versatile rock band from India, driven by
              raw energy, soulful melodies, and a passion for live music. Our
              sound blends rock, fusion, and acoustic elements into something
              uniquely ours.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              For us, music isn't just performance — it's connection. Every
              stage we step on becomes a shared experience between us and the
              audience. We believe in authenticity, energy, and leaving
              everything on the stage.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              From intimate acoustic sets to high-energy rock shows, we adapt
              our sound to every venue while staying true to who we are. If you
              feel the music — we've done our job.
            </AnimatedCopy>
          </div>
        </section>

        <section className="services">
          <div className="services-col">
            <div className="services-banner">
              <img src="/about/services-banner.jpg" alt="Live Performance" />
            </div>
            <p className="primary">Crafted with Passion</p>
          </div>
          <div className="services-col">
            <h4>
              Every performance is a chance to connect with our audience, push
              creative boundaries, and create unforgettable moments. We approach
              each gig with dedication, energy, and purpose.
            </h4>

            <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Live Performances</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    From weddings to music festivals, we bring explosive energy
                    and crowd-engaging performances. Our live shows feature
                    original compositions, popular covers, and non-stop
                    entertainment that keeps audiences on their feet.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Original Music</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    We create original rock compositions that blend Indian and
                    Western influences. Our songs tell stories, evoke emotions,
                    and showcase our unique sound that sets us apart.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Event Entertainment</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    We cater to corporate events, private parties, college
                    fests, and destination weddings. Our versatile repertoire
                    includes rock, Bollywood, retro classics, and international
                    hits — tailored to your event's vibe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-banner-img">
          <div className="about-banner-img-wrapper">
            <img src="/about/about-banner.jpg" alt="Band on Stage" />
          </div>
        </section>

        <section className="fav-tools">
          <div className="fav-tools-header">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              The Band
            </AnimatedCopy>
            <AnimatedCopy tag="h2" animateOnScroll={true} delay={0.25}>
              Meet The Members
            </AnimatedCopy>
            <AnimatedCopy
              tag="p"
              animateOnScroll={true}
              className="secondary"
              delay={0.5}
            >
              Five musicians united by a love for rock music and live
              performance. Together, we create the sound of Naman Musica.
            </AnimatedCopy>
          </div>

          <div className="fav-tools-list">
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-1.jpg" alt="Naman Vaishnav" />
                </div>
                <h4>Naman Vaishnav</h4>
                <p className="primary sm">Lead Vocals & Frontman</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-2.jpg" alt="Lead Guitarist" />
                </div>
                <h4>Lead Guitar</h4>
                <p className="primary sm">Electric & Acoustic</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-3.jpg" alt="Rhythm Guitarist" />
                </div>
                <h4>Rhythm Guitar</h4>
                <p className="primary sm">Chords & Backing Vocals</p>
              </div>
            </div>
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-4.jpg" alt="Bassist" />
                </div>
                <h4>Bass Guitar</h4>
                <p className="primary sm">Low End Groove</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-5.jpg" alt="Drummer" />
                </div>
                <h4>Drums</h4>
                <p className="primary sm">Beats & Percussion</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-6.jpg" alt="Keyboard" />
                </div>
                <h4>Keyboards</h4>
                <p className="primary sm">Keys & Synths</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
