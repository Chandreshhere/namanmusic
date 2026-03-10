import projects from "../../data/projects";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Work.css";

import { gsap } from "gsap";

import Transition from "../../components/Transition/Transition";

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const carouselDescriptionRef = useRef(null);
  const carouselTitleRef = useRef(null);
  const workSliderVideoRef = useRef(null);
  const descriptionTextRef = useRef(null);
  const titleTextRef = useRef(null);
  const videoRef = useRef(null);
  const mainVideoRef = useRef(null);
  const navigate = useNavigate();

  const playMainVideo = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = false;
      mainVideoRef.current.play();
    }
  };

  const animateCarouselInfo = (newProject) => {
    const tl = gsap.timeline();

    tl.to([descriptionTextRef.current, titleTextRef.current], {
      yPercent: -100,
      duration: 0.75,
      stagger: 0.25,
      ease: "power4.in",
    });

    tl.to(
      videoRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          if (descriptionTextRef.current) descriptionTextRef.current.remove();
          if (titleTextRef.current && titleTextRef.current.parentNode) {
            titleTextRef.current.parentNode.remove();
          }
          if (videoRef.current) videoRef.current.remove();

          const newDescriptionEl = document.createElement("p");
          newDescriptionEl.className = "primary sm";
          newDescriptionEl.textContent = newProject.description;

          const titleContainer = document.createElement("div");
          titleContainer.className = "project-title-container";
          titleContainer.style.cursor = "pointer";

          const newTitleEl = document.createElement("h1");
          newTitleEl.textContent = newProject.title;

          titleContainer.onclick = () => navigate("/sample-project");

          titleContainer.appendChild(newTitleEl);

          const newVideoEl = document.createElement("video");
          newVideoEl.src = newProject.video;
          newVideoEl.loop = true;
          newVideoEl.playsInline = true;

          // Update rotated class based on new project
          if (newProject.isLandscape) {
            workSliderVideoRef.current.classList.add("rotated");
          } else {
            workSliderVideoRef.current.classList.remove("rotated");
          }

          gsap.set(newDescriptionEl, { yPercent: 100 });
          gsap.set(newTitleEl, { yPercent: 100 });
          gsap.set(newVideoEl, { opacity: 0 });

          carouselDescriptionRef.current.appendChild(newDescriptionEl);
          carouselTitleRef.current.appendChild(titleContainer);
          workSliderVideoRef.current.appendChild(newVideoEl);

          descriptionTextRef.current = newDescriptionEl;
          titleTextRef.current = newTitleEl;
          videoRef.current = newVideoEl;
          mainVideoRef.current = newVideoEl;

          // Play with sound after adding to DOM
          newVideoEl.play();

          const inTl = gsap.timeline();

          inTl.to(newVideoEl, {
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
          });

          inTl.to(
            [newDescriptionEl, newTitleEl],
            {
              yPercent: 0,
              duration: 0.75,
              stagger: 0.25,
              ease: "power4.out",
            },
            "-=0.5"
          );
          setActiveProject(newProject);
        },
      },
      "-=0.5"
    );
  };

  useEffect(() => {
    if (
      carouselDescriptionRef.current &&
      carouselTitleRef.current &&
      workSliderVideoRef.current
    ) {
      descriptionTextRef.current =
        carouselDescriptionRef.current.querySelector("p");

      const initialTitleLink = carouselTitleRef.current.querySelector("a");
      if (initialTitleLink) {
        const initialTitle = initialTitleLink.querySelector("h1");

        const titleContainer = document.createElement("div");
        titleContainer.className = "project-title-container";
        titleContainer.style.cursor = "pointer";

        const newTitle = initialTitle.cloneNode(true);
        titleContainer.appendChild(newTitle);

        titleContainer.onclick = () => navigate("/sample-project");

        initialTitleLink.parentNode.replaceChild(
          titleContainer,
          initialTitleLink
        );

        titleTextRef.current = newTitle;
      } else {
        titleTextRef.current = carouselTitleRef.current.querySelector("h1");
      }

      videoRef.current = workSliderVideoRef.current.querySelector("video");
      mainVideoRef.current = videoRef.current;
    }
  }, [navigate]);

  const handleWorkItemClick = (project) => {
    if (project.id !== activeProject.id) {
      animateCarouselInfo(project);
    } else {
      // If clicking the same project, just play with sound
      playMainVideo();
    }
  };

  return (
    <div className="page work">
      <div className="work-carousel">
        <div className={`work-slider-video ${activeProject.isLandscape ? "rotated" : ""}`} ref={workSliderVideoRef}>
          <video
            ref={mainVideoRef}
            src={activeProject.video}
            loop
            playsInline
            autoPlay
            muted
          />
        </div>

        <div className="work-items-preview-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`work-item ${
                activeProject.id === project.id ? "active" : ""
              }`}
              onClick={() => handleWorkItemClick(project)}
            >
              <video
                src={project.video}
                muted
                playsInline
              />
            </div>
          ))}
        </div>

        <div className="carousel-info">
          <div className="carousel-description" ref={carouselDescriptionRef}>
            <p className="primary sm">{activeProject.description}</p>
          </div>
          <div className="carousel-title" ref={carouselTitleRef}>
            <Link to="/sample-project">
              <h1>{activeProject.title}</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(Work);
