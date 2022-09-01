import githubIcon from "../icons/github.svg";
import linkedinIcon from "../icons/linkedin.svg";

export default function Home() {
   return (
      <div className="home">
         <h1>Welcome to Progress Tracker</h1>
         <p>
            My name is Glen Calica. I made this website for my portfolio. Feel
            free to use this site as intended 😊😊
         </p>

         <p>
            This website is still not complete; I'll be revisiting this website
            in the future. One glaring issue is that this website isn't mobile
            friendly.
         </p>

         <p>
            This website is a MERN Stack project that also showcases my ability
            to design websites.
         </p>
         <h2>Front-end</h2>
         <ul>
            <li>React</li>
            <li>React Router</li>
            <li>TailwindCSS</li>
            <li>ChartJS</li>
         </ul>

         <h2>Back-end</h2>
         <ul>
            <li>Node JS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Bcryptjs</li>
            <li>REST APIs and CRUD</li>
         </ul>

         <h2>Full-stack</h2>
         <ul>
            <li>JWT Authentication and Authorization</li>
         </ul>

         <button className="w-28 my-2 mr-2 pr-1 rounded bg-slate-400">
            <a
               href="https://github.com/GlenCalica"
               className="flex justify-center p-1"
            >
               <img src={githubIcon} alt="Github" className="h-10" />
               <p className="mt-2 h-6">GitHub</p>
            </a>
         </button>
         <button className="w-30 my-2 pr-2 rounded bg-slate-400">
            <a
               href="https://www.linkedin.com/in/glencalica/"
               className="flex justify-center p-1"
            >
               <img src={linkedinIcon} alt="LinkedIn" className="h-10 p-2" />
               <p className="mt-2 h-6">LinkedIn</p>
            </a>
         </button>
      </div>
   );
}
