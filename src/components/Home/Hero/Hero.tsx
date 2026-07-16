import SearchBar from "../../SearchBar.tsx";
import { useState } from "react";
import { BookOpen, Users, Flame } from "lucide-react";

function StatsCard() {
    return (
        <div
            className="
                flex
                w-full
                max-w-4xl
                items-center
                justify-between
                rounded-xl
                border
                border-gray-200
                bg-[#F8F6F4]
                px-10
                py-8
                shadow-sm
                mt-5
                gap-8
            "
        >
            <StatItem
                icon={<BookOpen size={22} />}
                value="25,400+"
                label="TOTAL BOOKS"
            />

            <Divider />

            <StatItem
                icon={<Users size={22} />}
                value="12.8k"
                label="ACTIVE USERS"
            />

            <Divider />

            <StatItem
                icon={<Flame size={22} />}
                value="The Midnight Library"
                label="MOST BORROWED TODAY"
            />
        </div>
    );
}

function StatItem({
                      icon,
                      value,
                      label,
                  }: {
    icon: React.ReactNode;
    value: string;
    label: string;
}) {
    return (
        <div className="flex items-center gap-4 min-w-0">
            <div className="text-[#0F5A43]">
                {icon}
            </div>

            <div className="min-w-0">
                <h3 className="text-2xl font-newsreader truncate text-[#17322A]">
                    {value}
                </h3>

                <p className="text-xs uppercase tracking-wide text-gray-500">
                    {label}
                </p>
            </div>
        </div>
    );
}

function Divider() {
    return (
        <div className="h-10 w-px bg-gray-200 shrink-0" />
    );
}

function Hero() {
    const [search, setSearch] = useState("");

    return (
        <section
            className="
                flex
                flex-col
                items-center
                justify-center
                w-full
                max-w-full
                overflow-hidden
                px-6
            "
        >
            <h1 className="text-center text-6xl font-newsreader leading-tight">
                Curated journeys for the
            </h1>

            <h1 className="text-center text-6xl font-newsreader leading-tight">
                modern reader.
            </h1>

            <SearchBar
                value={search}
                onChange={setSearch}
                className="w-full max-w-3xl"
            />

            <StatsCard />
        </section>
    );
}

export default Hero;