import Page from "../utils/Page.tsx";
import LibraryHeader from "../components/Library/LibraryHeader.tsx";
import SearchBar from "../components/SearchBar.tsx";
import Slider from "../components/Slider.tsx";
import FavoritesList from "../components/Library/FavoritesList.tsx";

function Library() {
    return (
        <Page>
            <LibraryHeader/>
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