import Page from "../utils/Page.tsx";
import {Sidebar} from "lucide-react";
import UserInfo from "../components/Settings/UserInfo.tsx";
import Appearance from "../components/Settings/Appearance.tsx";
import Language from "../components/Settings/Language.tsx";
import BackButtonNavBar from "../components/BackButtonNavBar.tsx";

function Settings() {
    return (
        <Page>
            <BackButtonNavBar/>
            <Sidebar/>
            <UserInfo/>
            <Appearance/>
            <Language/>
        </Page>
    );
}

export default Settings;