const reviews = [
  {
      id: 0,
      name: 'Agnivo Poddar',
      job: 'JavaScript Devoloper',
      img: './Assets/Agnivo.jpg',
      text: "Im Passionate JavaScript developer adept at creating responsive, user-centric web applications. Skilled in modern frameworks, problem-solving, and delivering high-quality code for engaging digital experiences.",

  },
  {
    id: 1,
    name: 'Radarshi Mukerjee',
    job: 'ux developer',
    img: './Assets/rado.jpg',
    text: "I'm a UX developer dedicated to crafting interactive and user-centric digital solutions. Proficient in coding and design, I bridge the gap between user experience and technical implementation. With a passion for optimizing web and app interactions, I leverage my skills in HTML, CSS, and JavaScript to create intuitive and visually compelling interfaces.",
  },
  {
    id: 2,
    name: 'Sohan Singha Roy',
    job: 'Researcher',
    img: './Assets/sohan.jpg',
    text: 'Im a dedicated researcher with a passion for uncovering insights and contributing to knowledge. My expertise lies in conducting thorough literature reviews, designing robust methodologies, and analyzing data to draw meaningful conclusions.',
  },
  {
    id: 3,
    name: 'Arnab Mondal',
    job: 'Presentation Maker',
    img: './Assets/arnab.jpg',
    text: 'Im Seasoned PPT designer with a flair for creating engaging and impactful presentations. Proficient in crafting visually appealing slides that effectively convey ideas. Adept at utilizing design principles and storytelling to enhance communication.',
  },
  {
    id: 4,
    name: 'Somnath Banik',
    job: 'Designer',
    img: './Assets/somnath.jpg',
    text: 'Im Experienced and creative designer with a passion for merging functionality and aesthetics. Proficient in various design tools, showcasing versatility across graphic, web, and UX/UI projects in a visually compelling portfolio. ',
  },
  {
      id: 5,
      name: 'Anirban Ghosh',
      job: 'data Preprocessor',
      img: './Assets/anirban.jpg',
      text: 'Im a skilled data preprocessor, adept at cleaning, transforming, and optimizing raw data for analysis. Proficient in tools and languages, I ensure datasets meet high-quality standards for effective insights. ',
  },
];
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;
// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  console.log("hello");
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});