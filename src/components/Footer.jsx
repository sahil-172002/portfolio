import { Github, gmail, Instagram, LinkedIn } from "../data/links"

function Footer() {
    return (
        <div className="p-5 text-sm md:text-lg leading-relaxed flex flex-col items-center mt-14">
            <p className="dark:text-gray-300 font-semibold text-gray-800 text-center">
          Copyright © 2024, <a className="text-yellow-600 " href="https://www.linkedin.com/in/sahil-andhare-3248b5205/">Sahil Andhare.</a> All Rights Reserved.
            </p>
            {/* <p className="from-neutral-300 pt-1"> sahil172002@gmail.com
            </p> */}
            <ul className="dark:text-gray-300 text-gray-800 mt-4 flex items-center gap-4">
            <li className="flex items-center gap-2">
                    <img className="w-6" src="/gmail.png" alt="gmail" />
                    <a className="hover:underline" target="_blank" href={gmail}>
                        Gmail
                    </a>
                </li>
                <li className="flex items-center gap-2">
                    <img className="w-6" src="/linkedin.png" alt="linked" />
                    <a className="hover:underline" target="_blank" href={LinkedIn}>
                        LinkedIn
                    </a>
                </li>
                
                <li className="flex items-center gap-2">
                    <img className="w-5 dark:invert" src="/github.png" alt="github" />
                    <a className="hover:underline" target="_blank" href={Github}>
                        Github
                    </a>
                </li>
                <li className="flex items-center gap-2">
                    <img className="w-6" src="/instagram.png" alt="instagram" />
                    <a className="hover:underline" target="_blank" href={Instagram}>
                        Instagram
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Footer