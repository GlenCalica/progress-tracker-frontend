import Logout from "../components/Logout";

export default function Home(props) {
   return (
      <div className="home">
         <h1>Welcome to Progress Tracker</h1>
         <p>
            My name is Glen Calica. I made this website for my portfolio. Feel
            free to use this site as intended 😊😊
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

         <p>LinkedIn: </p>
         <p>GitHub: </p>

         <Logout clearData={props.clearData} />
      </div>
   );
}
