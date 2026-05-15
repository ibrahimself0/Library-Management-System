import Page from "../utils/Page.tsx";
import CreditsCard from "../components/CreditsCard.tsx";
import PointsCard from "../components/PointsCard.tsx";
import TransactionsListHead from "../components/Wallet/TransactionsListHead.tsx";
import Header from "../components/Header.tsx";

function Wallet() {
    return (
        <Page>
            <Header title="Your Wallet" paragraph="Manage your funds, track literary reward points, and view your transaction history within the sanctuary."/>
            <CreditsCard/>
            <PointsCard/>
            <TransactionsListHead/>
        </Page>
    );
}

export default Wallet;