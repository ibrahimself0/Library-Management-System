import Page from "../utils/Page.tsx";
import Header from "../components/Header.tsx";
import RegistrationProgressBar from "../components/Attendees/RegistrationProgressBar.tsx";
import AttendeesList from "../components/Attendees/AttendeesList.tsx";
import Navigator from "../components/Navigation/Navigator.tsx";
import TotalCard from "../components/TotalCard.tsx";

function Attendees() {
    return (
        <Page>
            <Header title={"Attendees"}
            paragraph={" "}/>
            <RegistrationProgressBar />
            <AttendeesList/>
            <Navigator/>
            <TotalCard/>
            <TotalCard/>
        </Page>
    );
}

export default Attendees;