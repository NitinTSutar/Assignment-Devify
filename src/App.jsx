import { useEffect, useState } from "react";
import { headings } from "./data/dummyData";
import TableOfContents from "./TableOfContents";
import { AlignJustify, Moon, Sun } from "lucide-react";

const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");

function App() {
    const [tableData, setTableData] = useState([]);
    const [visibility, setVisibitliy] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const data = headings;
        setTableData(data);
    }, [tableData]);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="h-screen bg-stone-100 dark:bg-zinc-800 p-2 ">
            <div className=" rounded-xl flex flex-col gap-3 h-full bg-stone-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 overflow-auto">
                <div
                        className="absolute m-4 sm:hidden"
                        onClick={() => setVisibitliy(!visibility)}
                    >
                        <AlignJustify />
                    </div>
                    <div
                        className="absolute right-8 top-5"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {!darkMode && <Sun />}
                        {darkMode && <Moon />}
                    </div>
                <h1 className="text-4xl text-gray-800 dark:text-gray-100 text-center">
                    
                    React.js
                </h1>
                <div className="flex h-[91%]">
                    {visibility && <TableOfContents data={tableData} />}

                    <div className="bg-gray-100 dark:bg-zinc-900 ml-4 sm:ml-0 p-3 lg:px-20 mr-4 rounded-lg h-full overflow-scroll no-scrollbar">
                        <ol>
                            {tableData.map((x, i) => (
                                <div
                                    className="mb-3 h-full overflow-auto "
                                    key={i}
                                >
                                    <li
                                        id={slugify(x.text)}
                                        className="text-amber-700 text-xl"
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
        </div>
    );
}

export default App;
