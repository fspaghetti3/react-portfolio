function Projects() {
  const projects = [
    {
      title: "Thing One",
      image: "",
      liveLink: "",
      githubLink: ""
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