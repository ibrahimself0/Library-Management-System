import Page from "../utils/Page.tsx";
import Avatar from "../components/Profile/Avatar.tsx";
import ProfileNavBar from "../components/Navigation/ProfileNavBar.tsx";
import Bio from "../components/Profile/Bio.tsx";
import Button from "../components/Button.tsx";
import PointsCard from "../components/PointsCard.tsx";
import Quote from "../components/Profile/Quote.tsx";

function Profile() {
    return (
        <Page>
            <ProfileNavBar/>
            <Avatar/>
            <Bio/>
            <Button/>
            <PointsCard/>
            <Quote/>
        </Page>
    );
}

export default Profile;