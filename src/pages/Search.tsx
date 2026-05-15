import Page from "../utils/Page.tsx";
import FilterCard from "../components/Search/FilterCard.tsx";
import BookGrid from "../components/BookGrid.tsx";
import Navigator from "../components/Navigation/Navigator.tsx";
import Header from "../components/Header.tsx";
function Search() {
    return (

        <Page>
            <Header
            title={"Search"}
            paragraph={" "}/>
            <FilterCard/>
            <BookGrid/>
            <Navigator/>
        </Page>
    );
}

export default Search;