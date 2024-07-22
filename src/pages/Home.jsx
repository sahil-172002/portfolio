import Project from "../components/ui/Project";
import { projects, skills } from "../data/data";

function Home() {
  return (
    <main>
      <section className=" max-w-2xl sm:mt-16 flex flex-col gap-4 items-start sm:flex-row-reverse sm:items-center justify-between">
      <a href="/sahil-resume.pdf" target="_blank" className="p-2 mr-3 rounded-md border font-bold">
          Resume
        </a>
        <span>
          <h1 className="text-3xl  font-bold ml-2 dark:text-gray-200 text-gray-800">
           Sahil Andhare
          </h1>
          <p className="w-full max-w-sm mt-2 font-medium dark:text-gray-200 text-gray-600 text-lg leading-relaxed">
           Web Dev & Designer | TCW Intern @GFG
          </p>
        </span>
        
        <img
          id="profilePic"
          className="w-32 h-32 mr-6 pt-2  my-2"
          src="./enderman.png"
          alt="enderman"
        />
        

      </section>
     

      <section className="mt-8 max-w-2xl">
        <h3 className="text-xl font-bold dark:text-gray-200 text-gray-600">
          Skills
        </h3>

        <ul className="flex flex-col sm:flex-row flex-wrap gap-8 mt-4 items-start">
          {skills.map((skill) => (
            <li
              key={skill.description}
              className="flex items-center gap-2 md:border border-gray-300 dark:md:border-gray-secondary md:p-3 rounded-lg w-full md:max-w-xs h-full md:h-20"
            >
              <i className={`${skill.iconClass} text-3xl`} alt="skillIcon" />
              <p className="text-base font-medium dark:text-gray-200 text-gray-700">
                {skill.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 flex gap-4 flex-col justify-center w-full items-center">
        <h3 className="text-xl font-bold dark:text-gray-200 text-gray-600">
          My Work
        </h3>

       
       <div className="flex flex-row justify-between items-center w-full flex-wrap">
        <ul className="sm:flex-row flex-wrap gap-2 mt-4 items-start">
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              year={project.year}
              description={project.description}
              source={project.source}
              demo={project.demo}
              level={project.level}
            />
          ))}
        </ul>
   
        <ul className="sm:flex-row flex-wrap gap-2 mt-4 items-start">
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              year={project.year}
              description={project.description}
              source={project.source}
              demo={project.demo}   
              level={project.level}
            />
          ))}
        </ul>

        
        </div>

      </section>
    </main>
  );    
}

export default Home;
