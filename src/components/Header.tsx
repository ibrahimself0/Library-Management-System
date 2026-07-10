import type {HeaderProps} from "../utils/contentTypes.tsx";

function Header(props: HeaderProps) {
    return (
        <header>
            <h1>
                {props.title}
            </h1>

        </header>
    );
}

export default Header;