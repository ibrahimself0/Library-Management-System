import Page from "../utils/Page.tsx";
import CartList from "../components/Cart/CartList.tsx";
import BackButtonNavBar from "../components/BackButtonNavBar.tsx";
import ProceedToCheckOutCard from "../components/Cart/ProceedToCheckOutCard.tsx";
import Header from "../components/Header.tsx";
import {useLang} from "../contexts/LanguageProvider.tsx";
import {headersText} from "../utils/content.tsx";


function Cart() {
    const {lang} = useLang();
    return (
        <Page>
            <BackButtonNavBar/>
            <Header
                title={headersText[lang].cartHeaderTitle}
                paragraph={headersText[lang].cartHeaderParagraph}
            />
            <CartList/>
            <ProceedToCheckOutCard/>
        </Page>
    );
}

export default Cart;