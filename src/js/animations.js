import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function splitHeroTitle() {
  const line = document.querySelector(".letter-line");
  if (!line) return;
  const word = "HANDS.";
  line.innerHTML = [...word]
    .map((ch) => `<span class="char">${ch}</span>`)
    .join("");
}

function setDeviceView(view) {
  const device = document.querySelector("#hero-phone");
  if (!device) return;
  device.dataset.view = view;
}

export function initAnimations() {
  splitHeroTitle();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const phone = document.querySelector("#hero-phone");
  const stage = document.querySelector(".device-motion");
  const glow = document.querySelector(".stage-glow");
  const line = document.querySelector(".red-line");

  if (reduceMotion) {
    gsap.set([".scene-copy", ".char", phone, line], { clearProps: "all", opacity: 1 });
    return;
  }

  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  intro
    .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.9, transformOrigin: "left center" })
    .from(".navbar", { y: -20, opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".scene-arrival .eyebrow", { y: 16, opacity: 0, duration: 0.45 }, "-=0.2")
    .from(".hero-title .line", { y: 50, opacity: 0, stagger: 0.12, duration: 0.75 }, "-=0.15")
    .from(".hero-title .char", { y: 28, opacity: 0, stagger: 0.045, duration: 0.4 }, "-=0.45")
    .from(".scene-arrival .subtitle, .scene-arrival .explore", { y: 18, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.2")
    .from(stage, { x: 80, opacity: 0, duration: 1.1 }, "-=0.55");

  gsap.to(phone, {
    y: "-=10",
    duration: 2.6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  const mm = gsap.matchMedia();

  mm.add("(min-width: 901px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".experience",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.1,
      },
    });

    tl.to(stage, { xPercent: 0, yPercent: 8, scale: 1.05, rotate: -8, duration: 1 }, 0.08)
      .to(glow, { x: "-8%", opacity: 0.7, duration: 1 }, 0.08)
      .to(stage, { xPercent: 0, yPercent: 4, scale: 0.95, rotate: 0, duration: 1 }, 0.2)
      .to(glow, { x: "0%", opacity: 0.55, duration: 1 }, 0.2)
      .to(stage, { xPercent: -8, yPercent: 0, scale: 1.35, rotate: 0, duration: 1 }, 0.34)
      .to(glow, { x: "-12%", scale: 1.3, opacity: 0.45, duration: 1 }, 0.34)
      .to(stage, { xPercent: 18, yPercent: -18, scale: 2.1, rotate: 12, duration: 1 }, 0.48)
      .to(glow, { opacity: 0.25, duration: 1 }, 0.48)
      .to(stage, { xPercent: 0, yPercent: 0, scale: 1.05, rotate: 0, duration: 1 }, 0.62)
      .to(".explode-stack", { opacity: 1, duration: 0.4 }, 0.62)
      .to(".explode-layer[data-layer='1']", { y: -70, x: -40, opacity: 0.7, duration: 0.8 }, 0.64)
      .to(".explode-layer[data-layer='2']", { y: 20, x: 55, opacity: 0.55, duration: 0.8 }, 0.64)
      .to(".explode-layer[data-layer='3']", { y: 80, x: -30, opacity: 0.4, duration: 0.8 }, 0.64)
      .to(".explode-stack", { opacity: 0, duration: 0.3 }, 0.74)
      .to(stage, { xPercent: 6, scale: 1.1, rotate: 3, duration: 1 }, 0.76)
      .to(stage, { xPercent: 0, yPercent: 0, scale: 1, rotate: 0, duration: 1 }, 0.88);
  });

  const sceneViews = {
    arrival: "back",
    design: "back",
    colors: "back",
    display: "front",
    camera: "macro",
    performance: "explode",
    endurance: "energy",
    final: "back",
    specs: "back",
  };

  document.querySelectorAll(".scene").forEach((scene) => {
    const copy = scene.querySelector(".scene-copy");
    if (copy && scene.id !== "arrival") {
      gsap.from(copy.children, {
        y: 36,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scene,
          start: "top 68%",
        },
      });
    }

    ScrollTrigger.create({
      trigger: scene,
      start: "top center",
      end: "bottom center",
      onEnter: () => applyScene(scene.dataset.scene),
      onEnterBack: () => applyScene(scene.dataset.scene),
    });
  });

  function applyScene(name) {
    const view = sceneViews[name] || "back";
    setDeviceView(view);
    document.body.dataset.scene = name;

    if (name === "endurance") {
      gsap.fromTo(
        ".energy-wave",
        { scale: 0.4, opacity: 0.8 },
        { scale: 1.8, opacity: 0, duration: 1.6, ease: "power2.out" }
      );
    }
  }

  if (phone && window.matchMedia("(pointer: fine)").matches) {
    const xTo = gsap.quickTo(phone, "rotateY", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(phone, "rotateX", { duration: 0.45, ease: "power3.out" });

    window.addEventListener("mousemove", (event) => {
      if (document.body.dataset.scene && document.body.dataset.scene !== "arrival") return;
      const x = (event.clientX / window.innerWidth - 0.5) * 22;
      const y = -(event.clientY / window.innerHeight - 0.5) * 16;
      xTo(x);
      yTo(y);
    });
  }
}
