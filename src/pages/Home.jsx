import Logout from "../components/Logout";

export default function Home(props) {
   return (
      <>
         <h1>Home</h1>
         <Logout clearData={props.clearData} />
      </>
   );
}
