import Experience from "../components/ui/Experience";
import Project from "../components/ui/Project";
import { experience, projects, skills } from "../data/data";

function Home() {
  return (
    <main>
      <section className=" max-w-2xl sm:mt-16 flex gap-4  items-start  flex-col-reverse sm:flex-row-reverse sm:items-center justify-center md:justify-between mt-20">
        <div>
        <a
          href="/sahil-resume.pdf"
          // target="_blank"
          className="p-2 mr-3 text-gray-700 text-center dark:text-yellow-500 dark:border-white-900 rounded-md border border-gray-700 font-bold"
        >
          Resume
        </a>
        </div>
        <div id="namenrole" className="mr-12">
  <h1 className="text-3xl font-bold dark:text-gray-200 text-gray-800">
    Sahil Andhare
  </h1>
  <p className="w-full mt-2 font-medium dark:text-gray-200 text-gray-600 text-sm md:text-lg leading-relaxed">
    Web Developer | TCW Intern @GFG
  </p>
  <p className="w-full mt-2 font-medium dark:text-gray-200 text-gray-600 text-sm md:text-lg leading-relaxed">
    Ex-Web Dev Intern @Bizzatcloud Solutions
  </p>
 
</div>


        <img
          id="profilePic"
          className="w-34 h-32 mr-6 pt-2  my-2 object-cover "
          src="./enderman.png"
          alt="enderman"
        />
      </section>

      <section className="mt-6 max-w-2xl">
      <div className="flex justify-center p-2">
  <h3 className="px-4 w-fit p-2 rounded-md border-2  dark:border-sky-900 border-gray-300 text-gray-700 dark:text-yellow-500 font-bold transition-colors flex items-center gap-2 snap-end">
  <img className="w-7 h-7 rounded-full" src="/skills.svg" alt="logo" />
    Skills
  </h3>
</div>
        <ul className="flex flex-col sm:flex-row flex-wrap gap-8 mt-8 items-start">
          {skills.map((skill) => (
            <li
              key={skill.description}
              className="flex items-center justify-center gap-2 border border-gray-300 dark:md:border-white-900 p-3 rounded-lg w-full md:max-w-xs h-full md:h-20"
            >
              <i className={`${skill.iconClass} text-3xl`} alt="skillIcon" />
              <p className="text-base font-medium dark:text-gray-200 text-gray-700">
                {skill.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className=" flex gap-4 flex-col justify-center w-full items-center">
        <h3 className="text-xl mt-14 font-bold dark:text-gray-200 text-gray-600">
          My Experience
        </h3>

        <div className=" mt-3 flex flex-row justify-between items-center w-full flex-wrap">
          

          <ul className="flex gap-7 justify-center items-center flex-wrap">
            {experience.map((project) => (
              <Experience
                key={project.id}
                id={project.id}
                title={project.title}
                year={project.year}
                description={project.description}
                // source={project.source}
                // demo={project.demo}
                companyName={project.companyName}
              />
            ))}
          </ul>
        </div>
      </section>


      <section className="mt-14 flex gap-4 flex-col justify-center w-full items-center">
        <h3 className="text-xl font-bold dark:text-gray-200 text-gray-600">
          My Work
        </h3>

        <div className="mt-3 flex flex-row justify-between items-center w-full flex-wrap">
        

          <ul className="flex gap-7 justify-center items-center flex-wrap">
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
