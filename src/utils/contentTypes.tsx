import type {ReactElement} from "react";

export interface NavigationLink {
    id: number;
    href: string;
    text: string;
    dropdown: boolean;
    dropdownLinks?: NavigationLink[];
    element: ReactElement;
    noToken: boolean;
}
export interface HeaderProps{
    title: string;
    paragraph: string;
}
export interface HeaderText {
    cartHeaderTitle: string;
    cartHeaderParagraph: string;
}
export interface Book {
    id: number;
    title: string;
    cover_image: string;
    price: number;
    overall_rating: string;
    reviewers_count: number;
    available_copies: number;
    language: string;
    categories: Category[];
    authors: Author[];
}

export interface Category {
    id: number;
    name: string;
}

export interface Author {
    id: number;
    name: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    page: number | null;
    active: boolean;
}

export interface BooksLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface BooksMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: PaginationLink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface PopularBooksResponse {
    data: Book[];
    links: BooksLinks;
    meta: BooksMeta;
}