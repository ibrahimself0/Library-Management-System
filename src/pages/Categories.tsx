import Page from "../utils/Page.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CategoriesGrid from "../components/Categories/CategoriesGrid.tsx";
import Navigator from "../components/Navigation/Navigator.tsx";
import Header from "../components/Header.tsx";

function Categories() {
    return (
        <Page>
            <Header
            title={"Categories"}
            paragraph={" "}/>
            <SearchBar/>
            <CategoriesGrid/>
            <Navigator/>
        </Page>
    );
}

export default Categories;