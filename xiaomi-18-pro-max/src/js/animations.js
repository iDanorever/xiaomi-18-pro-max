import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) return;

  const intro = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });

  intro
    .from(".hero-eyebrow", {
      y: 20,
      opacity: 0,
      duration: 0.6
    })
    .from(".hero h1", {
      y: 55,
      opacity: 0,
      duration: 0.9
    }, "-=0.25")
    .from(".hero-subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.6
    }, "-=0.45")
    .from(".hero-actions", {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, "-=0.3")
    .from(".hero-phone", {
      y: 90,
      opacity: 0,
      rotateY: -25,
      duration: 1.1
    }, "-=0.2");

  gsap.to(".hero-phone", {
    y: "-=13",
    duration: 2.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.from(".scene-label, .scene h2, .scene-description", {
    y: 35,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".scene",
      start: "top 75%"
    }
  });

  gsap.from(".design-device", {
    x: -70,
    opacity: 0,
    rotate: -18,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".design-stage",
      start: "top 75%"
    }
  });

  gsap.from(".design-copy", {
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".design-stage",
      start: "top 75%"
    }
  });

  gsap.from(".color-device", {
    scale: 0.8,
    opacity: 0,
    duration: 0.9,
    ease: "back.out(1.4)",
    scrollTrigger: {
      trigger: ".color-stage",
      start: "top 80%"
    }
  });
}