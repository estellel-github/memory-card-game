const fetchImages = async (): Promise<{ src: string; name: string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { src: "/src/assets/bostonhuahua.png", name: "Boston Huahua" },
        { src: "/src/assets/ratcha.png", name: "Ratcha" },
        { src: "/src/assets/malchi.png", name: "Malchi" },
        { src: "/src/assets/cheagle.png", name: "Cheagle" },
        { src: "/src/assets/jackchi.png", name: "Jackchi" },
        { src: "/src/assets/chigi.png", name: "Chigi" },
        { src: "/src/assets/shichi.png", name: "Shichi" },
        { src: "/src/assets/ratchi.png", name: "Ratchi" },
        { src: "/src/assets/chipoo.png", name: "Chipoo" },
        { src: "/src/assets/chiweenie.png", name: "Chiweenie" },
        { src: "/src/assets/pomchi.png", name: "Pomchi" },
        { src: "/src/assets/chug.png", name: "Chug" },
      ]);
    }, 500);
  });
};

export default fetchImages;
