import React from "react";
import Card from "./Card";
import MernChatApp from "../../assets/img/mernChatApp.png";
import Soccer from "../../assets/img/soccer.png";
import Blog from "../../assets/img/blog.png";
import Social from "../../assets/img/social.png";
import Bubble from "../../assets/img/bubble.png";
import ChatApp from "../../assets/img/chatapp.png";
import Todo from "../../assets/img/todo.png";
import Spotify from "../../assets/img/spotify.png";

function Projects() {
    return (
        <>
            <div className="dark:bg-[#0e1630]">
                <div className="flex  justify-center items-center p-8 h-full mx-auto">
                    <h1 className="text-4xl dark:text-white  font-bold">
                        My Projects
                    </h1>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-14 justify-center md:justify-start md:mx-auto py-6 sm:py-0 w-full max-w-screen-lg  dark:bg-[#0e1630] ">
                    <Card
                        src={Social}
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
                        src={Blog}
                        name="ClashofClans-Store"
                        desc="I developed web application designed to make buying and selling digital gaming assets effortless."
                        T1="Node"
                        T2="React"
                        T3="MongoDB"
                        btn="Get Code"
                        LiveLink="#"
                        GithubLink="https://github.com/sahil-172002"
                    />
                    <Card
                        src={Blog}
                        name="Tree Trop Tales - Blog App"
                        desc="Developed a Blog Application in which users can post their though, ideas by writing blogs with images. "
                        T1="React"
                        T2="Tailwind CSS"
                        T3="Appwrite"
                        btn="Get Code"
                        LiveLink="https://mega-blog-project-bice.vercel.app/"
                        GithubLink="#"
                    />
                    {/* <Card
                        src={Soccer}
                        name="Animating Website"
                        desc="I've crafted a dynamic and engaging soccer club website. With smooth animations and transitions powered by GSAP."
                        T1="JavaScript"
                        T2="CSS"
                        T3="GSAP"
                        btn="Get Code"
                        LiveLink="https://soccer-club-eta.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/Animating-Website"
                    />
                    <Card
                        src={Bubble}
                        name="Bubble Game"
                        desc="Dive into a world of delightful distraction with our charming bubble game site! Crafted with love using HTML, CSS, and JavaScript"
                        T1="HTML"
                        T2="CSS"
                        T3="JavaScript"
                        btn="Get Code"
                        LiveLink="https://bubble-bash-ten.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/Bubble-Game"
                    />
                    <Card
                        src={ChatApp}
                        name="Mystery Meet - Chat App"
                        desc="Implemented a own chat app using socket.io library. As the name mystrey you can chat with any random person this is the uniqueness of this app."
                        T1="HTML"
                        T2="JavaScript"
                        T3="Socket.IO"
                        btn="Get Code"
                        LiveLink=""
                        GithubLink="https://github.com/swamiabhishek45/MysteryMeet-Chat-App"
                    />
                    <Card
                        src={Todo}
                        name="Add Todo"
                        desc="Created a simple yet efficient to-do website. Storing to-dos locally using localStorage enhances accessibility and persistence."
                        T1="React"
                        T2="TailwindCSS"
                        T3="Context API"
                        btn="Get Code"
                        LiveLink=""
                        GithubLink="https://github.com/swamiabhishek45/React.js-Learning/tree/main/Projects/10todoContextLocal"
                    />
                    <Card
                        src={Spotify}
                        name="Spotify Clone"
                        desc="This app provides you a smooth experience with responsiveness. It has songs that you like. This app is responsive in small devices also."
                        T1="HTML"
                        T2="CSS"
                        T3="JavaScript"
                        btn="Get Code"
                        LiveLink=""
                        GithubLink="https://github.com/swamiabhishek45/Spotify-Clone"
                    /> */}
                </div>
            </div>
        </>
    );
}

export default Projects;
