import type {ReactElement} from "react";

export interface NavigationLink {
    id: number;
    href: string;
    text: string;
    dropdown: boolean;
    dropdownLinks?: NavigationLink[];
    element: ReactElement;
}
export interface HeaderProps{
    title: string;
    paragraph: string;
}
export interface HeaderText {
    cartHeaderTitle: string;
    cartHeaderParagraph: string;
}
