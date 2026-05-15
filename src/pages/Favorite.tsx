import Page from "../utils/Page.tsx";
import BookGrid from "../components/BookGrid.tsx";
import Header from "../components/Header.tsx";

function Favorite() {
    return (
        <Page>
            <Header
            title={"Favorite"}
            paragraph={" "}/>
            <BookGrid/>
        </Page>
    );
}

export default Favorite;