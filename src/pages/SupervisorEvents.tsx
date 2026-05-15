import Page from "../utils/Page.tsx";
import Header from "../components/Header.tsx";
import Button from "../components/Button.tsx";
import TotalCard from "../components/TotalCard.tsx";
import EventsSliders from "../components/EventsSliders.tsx";
import ActiveEventsList from "../components/SupervisorEvents/ActiveEventsList.tsx";

function SupervisorEvents() {
    return (
        <Page>
             <Header
             title="Supervisor Events"
             paragraph={" "}/>
            <Button/>
            <TotalCard/>
            <TotalCard/>
            <EventsSliders/>
            <ActiveEventsList/>

        </Page>
    );
}

export default SupervisorEvents;