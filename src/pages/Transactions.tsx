import Page from "../utils/Page.tsx";
import Navigator from "../components/Navigation/Navigator.tsx";
import TransactionsFilter from "../components/Transactions/TransactionsFilter.tsx";
import TransactionsList from "../components/Transactions/TransactionsList.tsx";
import Header from "../components/Header.tsx";

function Transactions() {
    return (
        <Page>
            <Header
            title = {"Transactions"}
            paragraph={" "}/>
            <TransactionsFilter/>
            <TransactionsList/>
            <Navigator/>
        </Page>
    );
}

export default Transactions;