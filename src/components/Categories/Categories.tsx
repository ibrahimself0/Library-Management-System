import Page from "../../utils/Page.tsx";
import SearchBar from "../SearchBar.tsx";
import CategoriesGrid from "./CategoriesGrid.tsx";
import Navigator from "../Navigation/Navigator.tsx";

function Categories() {
    return (
        <Page>
            <SearchBar/>
            <CategoriesGrid/>
            <Navigator/>
        </Page>
    );
}

export default Categories;