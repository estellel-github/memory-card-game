const fetchImages = async (): Promise<{ src: string; name: string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { src: "/assets/bostonhuahua.png", name: "Boston Huahua" },
        { src: "/assets/ratcha.png", name: "Ratcha" },
        { src: "/assets/malchi.png", name: "Malchi" },
        { src: "/assets/cheagle.png", name: "Cheagle" },
        { src: "/assets/jackchi.png", name: "Jackchi" },
        { src: "/assets/chigi.png", name: "Chigi" },
        { src: "/assets/shichi.png", name: "Shichi" },
        { src: "/assets/ratchi.png", name: "Ratchi" },
        { src: "/assets/chipoo.png", name: "Chipoo" },
        { src: "/assets/chiweenie.png", name: "Chiweenie" },
        { src: "/assets/pomchi.png", name: "Pomchi" },
        { src: "/assets/chug.png", name: "Chug" },
      ]);
    }, 500);
  });
};

export default fetchImages;
