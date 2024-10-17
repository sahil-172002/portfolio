import React from "react";
import Card from "./Card";
import social from "../../assets/img/social.png";
import g2g from "../../assets/img/g2g.png";
import yt from "../../assets/img/yt.png";


function Projects() {
    return (
        <>
            <div className="dark:bg-[#00091D]">
                <div className="flex  justify-center items-center p-8 h-full mx-auto">
                    <h1 className="text-4xl dark:text-white  font-bold">
                        My Projects
                    </h1>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-14 justify-center md:justify-start md:mx-auto py-6 sm:py-0 w-full max-w-screen-lg  dark:bg-[#00091D]">
                    <Card
                        src={social}
                        name="AiQuizGen"
                        desc="AIQuizGen is an innovative web application designed to create customized quizzes from just one word."
                        T1="JS"
                        T2="Express"
                        T3="AI"
                        T4="Vanta JS"
                        btn="Get Code"
                        LiveLink="https://ai-quiz-gen.vercel.app/"
                        GithubLink="https://github.com/sahil-172002/AIQuizGen"
                    />
                    <Card
                        src={g2g}
                        name="Global-Gamers-Store"
                        desc="I developed web application designed to make buying and selling digital gaming assets effortless."
                        T1="Node"
                        T2="React"
                        T3="MongoDB"
                        btn="Get Code"
                        LiveLink="gamers-soul-store.vercel.app"
                        GithubLink="https://github.com/sahil-172002/GamersSoul-Store"
                    />
                    <Card
                        src={yt}
                        name="YT-Thumbnail Downloader"
                        desc="Developed a Blog Application in which users can post their though, ideas by writing blogs with images. "
                        T1="React"
                        T2="Tailwind CSS"
                        T3="Appwrite"
                        btn="Get Code"
                        LiveLink="https://hd-youtube-thumbnail-download.vercel.app/"
                        GithubLink="https://github.com/sahil-172002/YT-Thumbnail-Downloader"
                    />
                  
                </div>
            </div>
        </>
    );
}

export default Projects;
