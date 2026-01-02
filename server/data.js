const rabbitHoles = [
  // Wikipedia Articles
  {
    id: 1,
    title: "The Great Emu War",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/Emu_War",
    description: "Military operation undertaken in Australia in late 1932 to address public concern over the number of emus running amok."
  },
  {
    id: 2,
    title: "Dancing Plague of 1518",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/Dancing_plague_of_1518",
    description: "A case of dancing mania that occurred in Strasbourg, Alsace, in July 1518. Around 400 people took to dancing for days without rest."
  },
  {
    id: 3,
    title: "Voynich Manuscript",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/Voynich_manuscript",
    description: "An illustrated codex hand-written in an unknown writing system. The vellum on which it is written has been carbon-dated to the early 15th century."
  },
  {
    id: 4,
    title: "Tarrare",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/Tarrare",
    description: "A French showman and soldier noted for his unusual appetite and eating habits. He could eat vast amounts of meat, corks, stones, and even live animals."
  },
  {
    id: 5,
    title: "List of sexually active popes",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/List_of_sexually_active_popes",
    description: "This is exactly what it sounds like. A historical list of popes who were sexually active before or during their papacy."
  },
  {
    id: 6,
    title: "Project MKUltra",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/MKUltra",
    description: "The illegal human experimentation program designed and undertaken by the U.S. Central Intelligence Agency, intended to develop procedures and identify drugs such as LSD for use in interrogations."
  },
  {
    id: 7,
    title: "The Bloop",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/Bloop",
    description: "An ultra-low-frequency and extremely powerful underwater sound detected by the U.S. National Oceanic and Atmospheric Administration in 1997."
  },
  {
    id: 8,
    title: "Unit 731",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/Unit_731",
    description: "A covert biological and chemical warfare research and development unit of the Imperial Japanese Army that undertook lethal human experimentation during World War II."
  },
  {
    id: 9,
    title: "Mary Toft",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/Mary_Toft",
    description: "An English woman who, in 1726, became the subject of considerable controversy when she successfully hoaxed doctors into believing that she had given birth to rabbits."
  },
  {
    id: 10,
    title: "DB Cooper",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/D._B._Cooper",
    description: "An unidentified man who hijacked a Boeing 727 aircraft in United States airspace between Portland and Seattle on November 24, 1971, ransomed $200,000, and parachuted to an uncertain fate."
  },
   {
    id: 11,
    title: "Timeline of the far future",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/Timeline_of_the_far_future",
    description: "Scientific projections of what will happen to Earth and the universe in the extremely distant future."
  },
  {
    id: 12,
    title: "The Wow! Signal",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/Wow!_signal",
    description: "A strong narrowband radio signal received on August 15, 1977, by Ohio State University's Big Ear radio telescope in the United States, then used to support the search for extraterrestrial intelligence."
  },

  // YouTube Documentaries / Videos
  {
    id: 101,
    title: "How Forks Were Invented",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=N5P6J5YJ5k4", // Example URL, finding a generic history one
    description: "The surprising and controversial history of the table fork."
  },
  {
    id: 102,
    title: "History of the entire world, i guess",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=xuCn8ux2gbs",
    description: "Bill Wurtz's fast-paced, humorous, and comprehensive history of the universe and human civilization."
  },
  {
    id: 103,
    title: "The Man Who Saved the World",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=L5il3r2yOQ4", // Referring to Stanislav Petrov
    description: "Stanislav Petrov, the man who single-handedly prevented nuclear war in 1983."
  },
  {
    id: 104,
    title: "Cicada 3301: An Internet Mystery",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=I2O7blSSzpI", // LEMMiNO
    description: "One of the most elaborate and mysterious puzzles in the history of the internet."
  },
  {
    id: 105,
    title: "The Fallen of World War II",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=DwKPFT-RioU",
    description: "A data-driven documentary about war and peace, visualizing the human cost of the second World War."
  },
  {
    id: 106,
    title: "Who Killed Captain Alex?",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=KEoGrbKAyKE",
    description: "Detailed look into Uganda's first action movie, a cult classic made on a shoestring budget."
  },
  {
    id: 107,
    title: "The Library of Babel",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=hZJcjk9b7Bw", // Vsauce
    description: "Vsauce explores the concept of a library containing every possible book that could ever be written."
  },
  {
    id: 108,
    title: "Marble Run using 11,000 Marbles",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=UYCtw26q4OQ",
    description: "A mesmerizing and incredibly complex marble run machine."
  },
  {
    id: 109,
    title: "Line Goes Up – The Problem With NFTs",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=YQ_xWvX1n9g",
    description: "Folding Ideas' deep dive into the technical and social issues surrounding NFTs and cryptocurrency."
  },
  {
    id: 110,
    title: "Ahoy: Polybius",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=_7X6Yeydgyg",
    description: "Investigating the urban legend of an arcade game said to induce madness and government brainwashing."
  }
];

module.exports = rabbitHoles;
