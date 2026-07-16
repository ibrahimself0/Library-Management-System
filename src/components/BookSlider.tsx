import type { Book } from "../utils/contentTypes.tsx";

interface BookSliderProps {
    title: string;
    books: Book[];
    loading?: boolean;
    error?: Error | null;
}

function BookSlider({
                        title,
                        books,
                        loading,
                        error
                    }: BookSliderProps) {

    if (loading) {
        return (
            <section className="w-full px-6 py-8">
                Loading books...
            </section>
        );
    }

    if (error) {
        console.error("Error loading books...", error);

        return (
            <section className="w-full px-6 py-8 text-red-500">
                Failed to load books
            </section>
        );
    }

    return (
        <section className="w-full max-w-full overflow-hidden px-6 py-8">
            <h2 className="text-2xl font-bold mb-6">
                {title}
            </h2>

            <div
                className="
                    flex
                    gap-6
                    overflow-x-auto
                    max-w-full
                    pb-4
                    scrollbar-hide
                "
            >
                {books.map((book) => {
                    console.log(book.cover_image)
                    return (
                        <div
                            key={book.id}
                            className="
                            w-55
                            shrink-0
                            rounded-xl
                            shadow-md
                            overflow-hidden
                            bg-white
                        "
                        >
                            <img
                                src={book.cover_image}
                                alt={book.title}
                                onError={(e) => {
                                    console.log("IMAGE FAILED:", e.currentTarget.src);
                                }}
                                className="w-full h-72 object-cover"
                            />

                            <div className="p-4">
                                <h3 className="font-semibold truncate">
                                    {book.title}
                                </h3>

                                <p className="text-green-600 font-bold mt-2">
                                    ${book.price}
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    ⭐ {book.overall_rating}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default BookSlider;