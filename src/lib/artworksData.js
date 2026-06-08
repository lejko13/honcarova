export const ARTWORKS = [
  {
    id: "poezia",
    title: { sk: "Poézia", en: "Poetry" },
    year: "2019",
    technique: { sk: "Sprinkláž", en: "Sprinklage" },
    dimensions: "80 × 80 cm",
    rozmerY_VYSKAA:80,
    rozmerX_SIRKA:80,
    images: [
      "https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/eca9c1be4_3.jpg",
      "https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/eca9c1be4_3.jpg",
      "https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/eca9c1be4_3.jpg",
    ],
    // description: {
    //   sk: "Dielo Poézia vzniklo ako vizuálna báseň – experimentálna plocha, kde pigment padá slobodne a náhodne vytvára vrstvené poetické štruktúry. Povrch maľby odkazuje na rytmus slov, na tichú hudbu, ktorú nesie každý verš.",
    //   en: "The work Poetry was created as a visual poem – an experimental surface where pigment falls freely and randomly creates layered poetic structures. The surface of the painting refers to the rhythm of words, to the quiet music carried by every verse.",
    // },
    featured: true,
  },
  {
    id: "rytmus-zivota",
    title: { sk: "Rytmus života", en: "Rhythm of Life" },
    year: "2020",
    technique: { sk: "Akryl", en: "Acrylic" },
    dimensions: "80 cm",
     rozmerY_VYSKAA:80,
    rozmerX_SIRKA:80,
    images: [
      "https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/7f9bf7172_13.jpg",
      "https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/7f9bf7172_13.jpg",
      "https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/7f9bf7172_13.jpg",
    ],
    // description: {
    //   sk: "Rytmus života zachytáva pulz každodennosti – striedanie svetla a tieňa, pohyb a pokoj, radosť aj melanchóliu. Farebné vrstvy akrylu vytvárajú kompozíciu, ktorá dýcha a vibruje ako živý organizmus.",
    //   en: "Rhythm of Life captures the pulse of everyday existence – the alternation of light and shadow, movement and stillness, joy and melancholy. The layered acrylic colours create a composition that breathes and vibrates like a living organism.",
    // },
    featured: true,
  },
  {
    id: "sunny",
    title: { sk: "Sunny", en: "Sunny" },
    year: "2021",
    technique: { sk: "Akryl", en: "Acrylic" },
    dimensions: "150 × 40 cm",
     rozmerY_VYSKAA:40,
    rozmerX_SIRKA:150,
    images: [
      "https://media.base44.com/images/public/69feebcd18c7ddc435e04f5d/2757e6ba8_sunnyakrly.jpg",
      "https://media.base44.com/images/public/69feebcd18c7ddc435e04f5d/2757e6ba8_sunnyakrly.jpg",
      "https://media.base44.com/images/public/69feebcd18c7ddc435e04f5d/2757e6ba8_sunnyakrly.jpg",
    ],
    // description: {
    //   sk: "Sunny  je vertikálna meditácia na svetlo. Vysoký formát plátna umožňuje svetlu stúpať nahor, rozlievať sa a transformovať sa – od teplej zemitosti pri základni po vzdušnú ľahkosť v hornej časti diela.",
    //   en: "Sunny is a vertical meditation on light. The tall canvas format allows light to ascend, spread and transform – from warm earthiness at the base to airy lightness at the top of the work.",
    // },
    featured: true,
  },
  


];

export const TECHNIQUE_KEYS = [...new Set(ARTWORKS.map((a) => a.technique.en))];
export const YEAR_KEYS = [...new Set(ARTWORKS.map((a) => a.year))].sort();