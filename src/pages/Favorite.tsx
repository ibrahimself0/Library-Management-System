import Page from "../utils/Page.tsx";
import FavoriteHeader from "../components/Favorite/FavoriteHeader.tsx";
import BookGrid from "../components/BookGrid.tsx";

function Favorite() {
    return (
        <Page>
            <FavoriteHeader/>
            <BookGrid/>
        </Page>
    );
}

export default Favorite;