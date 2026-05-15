import Page from "../utils/Page.tsx";
import CheckOutCard from "../components/CheckOut/CheckOutCard.tsx";
import CreditsCard from "../components/CreditsCard.tsx";
import PointsCard from "../components/PointsCard.tsx";
import AddressCard from "../components/CheckOut/AddressCard.tsx";
import Header from "../components/Header.tsx";

function CheckOut() {
    return (
        <Page>
            <Header
            title={"Check Out"}
            paragraph={" "}/>
            <CheckOutCard/>
            <AddressCard/>
            <CreditsCard/>
            <PointsCard/>
        </Page>
    );
}

export default CheckOut;