import Page from "../utils/Page.tsx";
import Header from "../components/Header.tsx";
import CreateEventFileds from "../components/CreateEvent/CreateEventFileds.tsx";
import Button from "../components/Button.tsx";

function CreateEvent() {
    return (
        <Page>
             <Header
             title={"Create Event"}
             paragraph={" "}/>
            <CreateEventFileds/>
            <Button/>
            <Button/>
        </Page>
    );
}

export default CreateEvent;