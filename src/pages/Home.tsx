import Page from "../utils/Page.tsx";
import Hero from "../components/Home/Hero/Hero.tsx";
import BookSlider from "../components/BookSlider.tsx";
import SignupCard from "../components/Home/SignupCard.tsx";
import CategoriesList from "../components/Home/CategoriesList.tsx";
import { usePopularBooks } from "../hooks/usePopularBooks.ts";
import { useEffect } from "react";

function Home() {
    const { mutate, data, isPending, error } = usePopularBooks();

    useEffect(() => {
        mutate();
    }, [mutate]);

    const popularBooks = data?.data ?? [];

    return (
        <Page>
            <Hero />

            <CategoriesList />


            <BookSlider
                title="Popular Books"
                books={popularBooks}
                loading={isPending}
                error={error}
            />


            <BookSlider
                title="New Books"
                books={popularBooks}
                loading={isPending}
                error={error}
            />

            <SignupCard />
        </Page>
    );
}

export default Home;