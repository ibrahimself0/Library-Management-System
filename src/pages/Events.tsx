import Page from "../utils/Page.tsx";
import Header from "../components/Header.tsx";
import EventsGrid from "../components/Events/EventsGrid.tsx";

function Events() {
    return (
        <Page>
            <Header
                title={"Events"}
                paragraph={" "}
            />
            <EventsGrid/>
        </Page>
    );
}

export default Events;