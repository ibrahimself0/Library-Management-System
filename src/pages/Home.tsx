import Page from "../utils/Page.tsx";
import Hero from "../components/Home/Hero/Hero.tsx";
import Slider from "../components/Slider.tsx";
import SignupCard from "../components/Home/SignupCard.tsx";
import CategoriesList from "../components/Home/CategoriesList.tsx";

function Home() {
    return (
       <Page>
           <Hero/>
           <CategoriesList/>
           {/*Popular*/}
           <Slider/>
           {/*New*/}
           <Slider/>
           <SignupCard/>
       </Page>
    );
}

export default Home;