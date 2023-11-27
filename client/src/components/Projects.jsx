import starImage from '../assets/star1.png'
import weatherApp from '../assets/weatherapp.jpg'
import movieCave from '../assets/mc1.png'
import jate from '../assets/jate.png'
import tfire from '../assets/tfire.jpg'
import sq from '../assets/sq.jpg'



function Projects() {
  const projects = [
    {
      title: "STAR",
      image: starImage,
      liveLink: "https://social-media-app123-a735270541c9.herokuapp.com/",
      githubLink: "https://github.com/fspaghetti3/social-media-app"
    },
    {
      title: "Weather App",
      image: weatherApp, 
      liveLink: "https://fspaghetti3.github.io/weather-app/",
      githubLink: "https://github.com/fspaghetti3/weather-app"
    },
    {
      title: "MovieCave",
      image: movieCave,
      liveLink: "https://fspaghetti3.github.io/movie-project/",
      githubLink: "https://github.com/fspaghetti3/movie-project"
    },
    {
      title: "J.A.T.E",
      image: jate,
      liveLink: "https://jate-1-005c2bacda69.herokuapp.com/",
      githubLink: "https://github.com/fspaghetti3/jate"
    },
    {
      title: "TekFire",
      image: tfire,
      liveLink: "https://tekfire-d5ba20163777.herokuapp.com/",
      githubLink: "https://github.com/fspaghetti3/tech-blog2"
    },
    {
      title: "Spooky Quiz",
      image: sq,
      liveLink: "https://fspaghetti3.github.io/quiz-game/",
      githubLink: "https://github.com/fspaghetti3/quiz-game"
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.liveLink}>Live Demo</a>
          <a href={project.githubLink}>GitHub Repo</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;