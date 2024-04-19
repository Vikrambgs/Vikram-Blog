import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
    const path = useLocation().pathname;


    return (
        <Navbar className="border-b-2">
            <Link
                to="/"
                className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
                <span className="px-2 py-1 bg-gradient-to-r from-pink-600 to-blue-600 rounded-md text-white">
                    Vikram's
                </span>
                Blog
            </Link>

            <form action="">
                <TextInput
                    id="search"
                    type="text"
                    placeholder="Search here"
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                />
            </form>

            <Button color="gray" pill className="inline w-12 h-10 lg:hidden">
                <AiOutlineSearch />
            </Button>

            <div className="flex gap-2 md:order-2">
                <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
                    <FaMoon/>
                </Button>

                <Link to="/sign-in">
                    <Button outline gradientDuoTone="greenToBlue">
                        Sign In
                    </Button>
                </Link>

                <Navbar.Toggle />

            </div>
            <Navbar.Collapse>
                <Navbar.Link as={'div'} active={path === "/"}>
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link as={'div'} active={path === "/about"}>
                    <Link to="/about">About</Link>
                </Navbar.Link>
                <Navbar.Link as={'div'} active={path === "/projects"}>
                    <Link to="/projects">Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
