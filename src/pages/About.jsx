import Link from "../components/ui/Link";
import {
  College,
  CSS,
  Express,
  Git,
  HTML,
  JS,
  Nextjs,
  Nodejs,
  React,
  TailwindCSS,
} from "../data/links";

function About() {
  return (
    <main className="mt-20">
      <div className="hidden sm:block">
        <img className="w-20 h-20 rounded-full" src="/logo.png" alt="logo" />
      </div>

      <section className="mt-8 flex flex-col gap-4 items-start">
        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          I&apos;m Sahil Andhare, an Engineering Student from
          <Link href={College}> JSCOE, Pune </Link>. I started my journey as a
          web developer in 2022 and since then, I have learned a lot of
          technologies.
        </p>

        {/* New "About Me" section */}
        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          Hi, I'm Sahil Andhare, and I’m passionate about creating web
          experiences that are not only functional but also enjoyable to use.
          With a Bachelor’s degree in Information & Technology and a background
          in web development, I love transforming ideas into interactive web
          applications.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          My journey has taken me through exciting roles, from developing a web
          app that turns YouTube videos into quizzes to designing intuitive loan
          module pages. At Bizatcloud Solution and GeeksforGeeks, I gained
          practical experience in building and optimizing web applications,
          tackling new challenges, and delivering user-friendly solutions.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          I’ve also enjoyed sharing my knowledge by writing over 10 technical
          articles that help others understand complex concepts more easily. On
          the side, I ventured into the gaming world, generating ₹3 lakhs in
          revenue through a project that combined my tech skills with digital
          marketing.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          I’m proficient in HTML, CSS, JavaScript, React, and more, and I’m
          always excited to learn and grow. My goal is to create web experiences
          that are both innovative and meaningful, making a real difference for
          users.
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          My journey began with the basics of
          <Link href={HTML}> HTML </Link>,<Link href={CSS}> CSS </Link>, and
          <Link href={JS}> JavaScript </Link>, which laid a strong foundation
          for my frontend development skills. Over time, I have expanded my
          expertise to include modern frameworks and libraries such as
          <Link href={React}> React </Link>,<Link href={Nextjs}> Next.js </Link>
          , and
          <Link href={TailwindCSS}> Tailwind CSS </Link>. I am passionate about
          building responsive and user-friendly web applications that provide a
          seamless experience across different devices and platforms.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          Throughout my projects, I have focused on writing clean, maintainable
          code and adhering to best practices in web development. I have
          experience working with version control systems like
          <Link href={Git}> Git </Link>, which has helped me collaborate
          effectively with other developers. Additionally, I have explored
          backend technologies like
          <Link href={Nodejs}> Node.js </Link> and
          <Link href={Express}> Express </Link>
          to gain a holistic understanding of web development.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          Apart from technical skills, I am a strong advocate for continuous
          learning and staying updated with the latest industry trends. I
          actively participate in online communities, attend webinars, and
          contribute to open-source projects to enhance my knowledge and give
          back to the developer community.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          My goal is to leverage my skills and knowledge to create impactful web
          applications that solve real-world problems. I am excited about the
          opportunities in frontend development and look forward to
          collaborating with like-minded professionals to build innovative
          solutions.
        </p>
      </section>
    </main>
  );
}

export default About;
