const images = [
  {
    title: "Peace (Black Bull)",
    src: "/images/Peace_(Black_Bull).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon, pen, and pencil on board",
    date: "before 1978"
  },
  {
    title: "Untitled (Really Free!)",
    src: "./images/Untitled_(Really_Free!).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Marker and crayon on book page",
    date: "1967–1976",
    description: "Rowe was a deeply spiritual person who believed that God had bestowed her with artistic abilities, saying, “This the talent that he gave me and I have to use it.” She hung onto the frontispiece of Really Free!, a pamphlet reproducing the Gospel according to John and printed by the Bible Society in 1967, transforming it with her elegant signature. The way that she envelopes the phrase “Really Free!” with her name makes this relatively simple work, which inspired the title of this exhibition, a bold statement about how she expressed her personal freedom through art in the final years of her life."
  },
  {
    title: "Real Girl",
    src: "./images/Real_Girl.jpg",
    artist: "Nellie Mae Rowe",
    medium: "Color photograph, crayon, pen, and pencil on cardboard",
    date: "1980",
    description: "Real Girl is one of at least a dozen drawings in which Rowe embedded a picture of herself, embracing various visible dimensions of her identity and their intersections. As she told one reporter in 1979, “I am black and I love my blackness.” Here, she has placed her signature at the literal heart of her composition under an image of herself in front of her home holding a doll. She asserts that she is a “real girl” and uses traditionally feminine forms like the color bright pink, lacy edges, flowers, and the heart arabesque to complete this valentine to herself."
  },
  {
    title: "Untitled (Nellie and Judith's Houses)",
    src: "./images/Untitled_(Nellie_and_Judith’s_Houses).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Color photograph, crayon, pen, and pencil on cardboard",
    date: "1980",
    description: "Real Girl is one of at least a dozen drawings in which Rowe embedded a picture of herself, embracing various visible dimensions of her identity and their intersections. As she told one reporter in 1979, “I am black and I love my blackness.” Here, she has placed her signature at the literal heart of her composition under an image of herself in front of her home holding a doll. She asserts that she is a “real girl” and uses traditionally feminine forms like the color bright pink, lacy edges, flowers, and the heart arabesque to complete this valentine to herself."
  },
  {
    title: "Untitled (Nellie_Riding_Chicken)",
    src: "./images/Untitled_(Nellie_Riding_Chicken).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and pencil on paper",
    date: "1980",
    description: "Wearing green, a signature color in her wardrobe, Rowe rides a chicken toward a form that exemplifies how she married human, plant, and animal life in her work. Its facial features comprise the components of a tree: roots and low limbs form its beard and mustache, while budding branches create its eyes and hair. This peculiar face rests on a neck stacked with Star Trek–reminiscent chevrons, lending it an extraterrestrial air that befits Rowe’s belief in her drawings as emissaries of an unknown future—“things that ain’t been seen” or “something that ain’t been born yet,” as she put it."
  },
  {
    title: "My house is Clean Enought to Be healty and it dirty Enought to Be happy",
    src: "./images/Untitled_(Nellie_Riding_Chicken).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and pencil on paper",
    date: "1978–1982",
    description: "“I kept house long enough, I don’t want to be bothered by nobody ’cept self,” was how Rowe put her decision not to marry for a third time nor to seek further employment as a domestic worker. She got a kick out of household goods that cleverly and joyfully articulated the easing of domestic duties, like a napkin she saw at her niece’s that bore the phrase that is the title of this work."
  },
  {
    title: "What it is",
    src: "./images/What_it_is.jpeg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon, colored pencil, and pencil on paper",
    date: "1978–1982",
    description: "Rowe visualizes herself as a child, confidently walking down Paces Ferry Road, her ribbons forming a kind of halo as she goes. “What it is” is a popular greeting—akin to “What’s up?”—but Rowe also used it as an artistic statement that reflected the mysteries she was content to let remain unsolved in her work. “Most of the things that I draw, I don’t know what they are by name. People say, ‘Nellie, what is that?’ I say I don’t know, it is what it is. That is all I know. But I know one thing, I draw what is in my mind.”"
  },
  {
    title: "When I Was a Little Girl",
    src: "./images/When_I_Was_a_Little_Girl.jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon, marker, colored pencil, and pencil on paper",
    date: "1978",
    description: "Rowe captures the thwarted artistic efforts of her childhood through a series of vignettes in this work: one version of herself as a child floats across the composition, attaching drawings to the walls of her bedroom. Because her homemade adhesive attracted rats, Rowe was punished, and her mother can be seen holding a reed in one hand and a sweet fruit for her daughter in the other at the picture’s center. One of the dolls that Rowe made from dirty laundry appears at right, waiting to be played with and ultimately undone on wash day."
  },
  {
    title: "Untitled (Something that Ain’t Been Born Yet)",
    src: "./images/Untitled_(Something_that_Ain’t_Been_Born_Yet).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and pencil on ledger paper",
    date: "1978",
    description: "or inspiration, Rowe tapped into her subconscious in ways that the Surrealists had given credence to decades earlier, copying visions as she remembered them from her dreams and engaging in automatic drawing. As she described it, “I may make a start with a straight mark, and it will come to me what I want to make.” The way she followed her line into mysterious forms, testing whether they could become a tree, an animal, an elaborately dressed person, can be seen clearly in this work’s detailed but fluid composition."
  },
  {
    title: "Untitled (The Angel and the Devil’s Boot)",
    src: "./images/Untitled_(The_Angel_and_the_Devil’s_Boot).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon, pen, and pencil on cardboard",
    date: "1978"
  },
  {
    title: "Untitled (Fish)",
    src: "./images/Untitled_(Fish).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon, marker, and pencil on paper",
    date: "1980"
  },
  {
    title: "Untitled (Woman with Butterfly Wing)",
    src: "./images/Untitled_(Woman_with_Butterfly_Wing).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and marker on paper",
    date: "1980"
  },
  {
    title: "Untitled (Blue Dog with Red Collar)",
    src: "./images/Untitled_(Blue_Dog_with_Red_Collar).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and pencil on paper",
    date: "1978"
  },
  {
    title: "Untitled (Pig on Expressway)",
    src: "./images/Untitled_(Pig_on_Expressway).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and colored pencil on paper",
    date: "1980"
  },
  {
    title: "Please Let Me Be",
    src: "./images/Please_Let_Me_Be.jpg",
    artist: "Nellie Mae Rowe",
    medium: "Marker and pencil on mounted book page",
    date: "1947",
    description: "Rowe said she drew a little here and there before her employers, the Smiths, were both deceased, and this work dates from that early period. The sorrowful blue figure at the picture’s center and his plea for mercy may be a tribute to her father, who passed away in 1945. Her second husband, Henry Rowe, died the following year and suffered from what may have been a form of dementia, so the work could also be an empathetic message for him."
  },
  {
    title: "Untitled (Row of Figures)",
    src: "./images/Untitled_(Row_of_Figures).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and pen on cardboard fabric bolt",
    date: "1977"
  },
  {
    title: "Untitled (Nellie Mae and Joe Looking into Heaven)",
    src: "./images/Untitled_(Nellie Mae_and_Joe_Looking_into_Heaven).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon, colored pencil, and pencil on paper",
    date: "1980",
    description: "Rowe depicts herself seated in a red chair with her nephew, Joe Brown Sr., who was the son of her older sister Minerva. Rowe settled in Vinings after Brown had begun to make a life there, and when her first husband died, she stayed with Brown and his family until she remarried. She pays tribute to their lifelong friendship through the warm colors of this work, which reflect the glow of a setting sun. A glimpse of heaven emanates from the western corner of the sky, beckoning with its flowering field and rising phoenix, a symbol of spiritual rebirth."
  },
  {
    title: "Untitled (Smiling Woman)",
    src: "./images/Untitled_(Smiling_Woman).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and pencil on Sara Lee poundcake lid",
    date: "before 1978"
  },
  {
    title: "i Have Laid This Wold A Side i Am Happy with Lord",
    src: "./images/i_Have_Laid_This_Wold_A_Side_i_Am_Happy_with_Lord.jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon, colored pencil, and pencil on paper",
    date: "1982"
  },
  {
    title: "Untitled (Playhouse and Cross)",
    src: "./images/Untitled_(Playhouse_and_Cross).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and pencil on cardboard",
    date: "before 1978",
    description: "The population of Vinings was in the hundreds when Rowe moved to it around 1930, following her nephew Joe Brown Sr., who had already relocated there. They were part of a small settlement of Black families that relied on a segregated school, two churches, and a cemetery. Her second husband, Henry Rowe, is buried in that cemetery, which was just up a hill from her home. In this early drawing of her Playhouse, she celebrates the cemetery’s proximity and holy presence through the crucifix and radiating floral form in the sky."
  },
  {
    title: "Untitled (White Horse)",
    src: "./images/Untitled_(White_Horse).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon, chalk, and pencil on cardboard",
    date: "1964"
  },
  {
    title: "Untitled (Woman in Purple Dress with Green Chair)",
    src: "./images/Untitled_(Woman_in_Purple_Dress_with_Green_Chair).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon, pencil, and marker on paper",
    date: "1968-1982"
  },
  {
    title: "Untitled (Woman with Curly Hair)",
    src: "./images/Untitled_(Woman_with_Curly_Hair).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and pencil on ledger paper",
    date: "before 1978"
  },
  {
    title: "Untitled (Nellie in Her Garden)",
    src: "./images/Untitled_(Nellie_in_Her_Garden).jpg",
    artist: "Nellie Mae Rowe",
    medium: "Crayon and pencil on paper",
    date: "1978-1982"
  }
];
export default images;