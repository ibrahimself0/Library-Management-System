import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    ShoppingCart,
    CircleUserRound,
    Menu,
    X,
} from "lucide-react";

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-stone-200">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between ">

                <div className="flex justify-start items-center gap-10">

                    <Link
                        to="/"
                        className="text-2xl font-newsreader font-bold text-[#0F3D36]"
                    >
                        Shelfify
                    </Link>


                    <div className="hidden md:flex items-center gap-4 text-sm">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-[#0F6B58] pb-1 text-[#0F3D36] font-medium"
                                    : "pb-1 text-gray-500 hover:text-[#0F3D36]"
                            }
                        >
                            Discovery
                        </NavLink>

                        <NavLink
                            to="/categories"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-[#0F6B58] pb-1 text-[#0F3D36] font-medium"
                                    : "pb-1 text-gray-500 hover:text-[#0F3D36]"
                            }
                        >
                            Categories
                        </NavLink>

                        <NavLink
                            to="/library"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-[#0F6B58] pb-1 text-[#0F3D36] font-medium"
                                    : "pb-1 text-gray-500 hover:text-[#0F3D36]"
                            }
                        >
                            My Library
                        </NavLink>

                </div>

                </div>


                <div className="hidden md:flex items-center gap-5 text-[#0F3D36]">

                    <Link to="/cart">
                        <ShoppingCart
                            size={20}
                            className="hover:text-[#0F6B58] transition"
                        />
                    </Link>

                    <Link to="/profile">
                        <CircleUserRound
                            size={20}
                            className="hover:text-[#0F6B58] transition"
                        />
                    </Link>

                </div>


                <button
                    className="md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>


            {mobileOpen && (
                <div className="md:hidden border-t bg-white">

                    <div className="flex flex-col p-4 space-y-4">

                        <NavLink
                            to="/"
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-700 hover:text-[#0F6B58]"
                        >
                            Discovery
                        </NavLink>

                        <NavLink
                            to="/categories"
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-700 hover:text-[#0F6B58]"
                        >
                            Categories
                        </NavLink>

                        <NavLink
                            to="/library"
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-700 hover:text-[#0F6B58]"
                        >
                            My Library
                        </NavLink>

                        <hr />

                        <Link
                            to="/cart"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 text-gray-700 hover:text-[#0F6B58]"
                        >
                            <ShoppingCart size={18} />
                            Cart
                        </Link>

                        <Link
                            to="/profile"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 text-gray-700 hover:text-[#0F6B58]"
                        >
                            <CircleUserRound size={18} />
                            Profile
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
};