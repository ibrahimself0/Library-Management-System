import type {HeaderProps} from "../utils/contentTypes.tsx";

function Header(props: HeaderProps) {
    return (
        <header>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.smallText}
            </p>
        </header>
    );
}

export default Header;