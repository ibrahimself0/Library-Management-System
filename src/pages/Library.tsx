import Page from "../utils/Page.tsx";
import SearchBar from "../components/SearchBar.tsx";
import Slider from "../components/Slider.tsx";
import FavoritesList from "../components/Library/FavoritesList.tsx";
import Header from "../components/Header.tsx";

function Library() {
    return (
        <Page>
            <Header
            title = {"Library"}
            paragraph={" "}/>
            <SearchBar/>
            {/*Active borrows*/}
            <Slider/>
            {/*All Books*/}
            <Slider/>
            <FavoritesList/>
        </Page>
    );
}

export default Library;