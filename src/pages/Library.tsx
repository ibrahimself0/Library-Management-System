import Page from "../utils/Page.tsx";
import SearchBar from "../components/SearchBar.tsx";
import BookSlider from "../components/BookSlider.tsx";
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
            <BookSlider/>
            {/*All Books*/}
            <BookSlider/>
            <FavoritesList/>
        </Page>
    );
}

export default Library;