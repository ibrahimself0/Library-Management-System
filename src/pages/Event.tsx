import Page from "../utils/Page.tsx";
import EventHero from "../components/Event/EventHero.tsx";
import EventDetailsCard from "../components/Event/EventDetailsCard.tsx";
import FeaturedSpeaker from "../components/Event/FeaturedSpeaker.tsx";

function Event() {
    return (
        <Page>
            <EventHero />
            <EventDetailsCard/>
            <FeaturedSpeaker/>
        </Page>
    );
}

export default Event;