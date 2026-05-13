import Page from "../utils/Page.tsx";
import FilterCard from "../components/Search/FilterCard.tsx";
import BookGrid from "../components/BookGrid.tsx";
import Navigator from "../components/Navigation/Navigator.tsx";
import SearchHeader from "../components/Search/SearchHeader.tsx";
function Search() {
    return (

        <Page>
            <SearchHeader/>
            <FilterCard/>
            <BookGrid/>
            <Navigator/>
        </Page>
    );
}

export default Search;