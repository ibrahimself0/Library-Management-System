import Page from "../utils/Page.tsx";
import Header from "../components/Header.tsx";
import EventsSliders from "../components/EventsSliders.tsx";
import CurrentEventCard from "../components/MyEvents/CurrentEventCard.tsx";

function MyEvents() {
    return (
        <Page>
            <Header
                title={"MyEvents"}
                paragraph={" "}/>
            <CurrentEventCard/>
            <EventsSliders />

        </Page>
    );
}

export default MyEvents;