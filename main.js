console.log("animejs");

anime({
  targets: ".circle",
  translateX: 250,
  delay: anime.stagger(200, { start: 1000 }),
  background: "#0000FF",
  direction: "alternate",
});
