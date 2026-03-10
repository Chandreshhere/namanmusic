import React from "react";
import "./Project.css";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const Project = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            High-energy rock anthem
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            Roar of the Night
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            <ParallaxImage src="/project/banner.jpg" alt="Roar of the Night" />
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              About the Track
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              A powerful rock anthem that captures the spirit of late-night
              energy and raw emotion. *Roar of the Night* is our signature
              track that gets crowds moving and hearts pounding.
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Released
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              2024
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Genre
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Rock Anthem
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Duration
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              4:32
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Written by
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Naman Musica
            </AnimatedCopy>
          </div>
        </section>

        <section className="project-images">
          <div className="project-images-container">
            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-1.jpg" alt="Live Performance" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-2.jpg" alt="Recording Session" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-3.jpg" alt="Stage Setup" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-4.jpg" alt="Band Performance" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-5.jpg" alt="Crowd Energy" />
              </div>
            </div>
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Lead Vocals
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Naman Vaishnav
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Lead Guitar
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Electric Shredding
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Bass
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Groovy Foundation
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Drums
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Powerful Beats
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Produced by
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Naman Musica
            </AnimatedCopy>
          </div>
        </section>

        <section className="next-project">
          <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
            02 - 05
          </AnimatedCopy>
          <AnimatedCopy tag="h3" animateOnScroll={true}>
            Next Track
          </AnimatedCopy>

          <div className="next-project-img">
            <div className="next-project-img-wrapper">
              <ParallaxImage src="/work/work-2.jpg" alt="City Lights" />
            </div>
          </div>

          <AnimatedCopy tag="h4" animateOnScroll={true}>
            City Lights
          </AnimatedCopy>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Project);
