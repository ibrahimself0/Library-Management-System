import {
    BookOpen,
    BriefcaseBusiness,
    Brain,
    Palette,
    ScrollText,
    ArrowRight,
} from "lucide-react";

const categories = [
    {
        title: "Novels",
        books: "+1,200 books",
        icon: BookOpen,
    },
    {
        title: "Business",
        books: "+840 books",
        icon: BriefcaseBusiness,
    },
    {
        title: "Philosophy",
        books: "+450 books",
        icon: Brain,
    },
    {
        title: "Art & Design",
        books: "+320 books",
        icon: Palette,
    },
    {
        title: "History",
        books: "+980 books",
        icon: ScrollText,
    },
];

function CategoriesList() {

    return (
        <section className="w-full py-10">

            <div className="mb-8 flex items-start justify-between">
                <div>
                    <h2 className="text-4xl font-serif font-semibold text-slate-900">
                        Explore Genres
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Broaden your horizons through our curated taxonomy.
                    </p>
                </div>

                <button className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-black">
                    View All Categories
                    <ArrowRight />
                </button>
            </div>


            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <div
                            key={category.title}
                            className={`rounded-2xl border p-7 transition-all duration-200 cursor-pointer "bg-[#F5F1E6] text-slate-800 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <Icon
                                size={28}
                                strokeWidth={2}
                                className={" text-gray-500"}
                            />

                            <h3 className="mt-10 text-xl font-serif">{category.title}</h3>

                            <p
                                className="mt-2 text-sm text-gray-500"

                            >
                                {category.books}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default CategoriesList;