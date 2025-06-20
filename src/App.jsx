import { useEffect, useState } from "react";
import { headings } from "./data/dummyData";
import TableOfContents from "./TableOfContents";
import { AlignJustify, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import useSlugify from "./hooks/useSlugify";

const App = () => {
    const [tableData, setTableData] = useState([]);
    const [visibility, setVisibility] = useState(true);
    const [darkMode, setDarkMode] = useState(() => {
        const storedMode = localStorage.getItem("darkMode"); //*getting value of darkMode from localstroage
        return storedMode !== null ? JSON.parse(storedMode) : false;
    });
    const [activeId, setActiveId] = useState(null);
    const slugify = useSlugify();

    useEffect(() => {
        //* setting visibility of ToC to true for wide screens and false for mobile screen
        function handleResize() {
            if (window.innerWidth >= 640) {
                setVisibility(true);
            } else {
                setVisibility(false);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const data = headings;
        setTableData(data);
    }, []);

    useEffect(() => {
        //* Saving darkMode to localStorage.
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        setActiveId(id);
                        window.history.replaceState(null, "", `#${id}`);
                    }
                });
            },
            {
                rootMargin: "0px 0px -70% 0px",
                threshold: 0.1,
            }
        );

        const elements = document.querySelectorAll("li[id]");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [tableData]);

    return (
        <div className="flex flex-col gap-3 h-screen bg-stone-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 overflow-auto transition-colors duration-300 ease-in">
            <div
                className="absolute cursor-pointer m-4 sm:hidden"
                onClick={() => setVisibility(!visibility)}
            >
                <AlignJustify />
            </div>
            <motion.div
                className="absolute right-8 top-5 cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95, rotate: 180 }}
                    className="cursor-pointer"
                >
                    {darkMode ? <Moon /> : <Sun />}
                </motion.button>
            </motion.div>
            <motion.h1
                className="text-4xl text-gray-800 font-extrabold dark:text-gray-100 text-center transition-colors duration-300 ease-in"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                React.js
            </motion.h1>
            <div className="flex h-[91%]">
                {visibility && (
                    <TableOfContents
                        data={tableData}
                        activeId={activeId}
                        titleTag="h3"
                        maxDepth={4}
                        collapsible={true}
                        activeClass="text-green-600 dark:text-lime-400"
                    />
                )}

                {/* ↓ Added scroll-smooth here ↓ */}
                <div className="bg-gray-200 dark:bg-zinc-950 ml-4 sm:ml-0 p-3 lg:px-20 mr-4 rounded-lg h-full overflow-scroll scroll-smooth no-scrollbar transition-colors duration-300 ease-in">
                    <ol>
                        {tableData.map((x, i) => (
                            <div className="mb-3 h-full overflow-auto " key={i}>
                                <li
                                    id={slugify(x.text)}
                                    className="text-amber-700 text-2xl mt-8 mb-1"
                                >
                                    {x.text}
                                </li>
                                <p>{x.content}</p>
                            </div>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default App;
