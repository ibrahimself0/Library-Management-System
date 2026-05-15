import Page from "../utils/Page.tsx";
import Hero from "../components/Home/Hero/Hero.tsx";
import BookSlider from "../components/BookSlider.tsx";
import SignupCard from "../components/Home/SignupCard.tsx";
import CategoriesList from "../components/Home/CategoriesList.tsx";

function Home() {
    return (
       <Page>
           <Hero/>
           <CategoriesList/>
           {/*Popular*/}
           <BookSlider/>
           {/*New*/}
           <BookSlider/>
           <SignupCard/>
       </Page>
    );
}

export default Home;