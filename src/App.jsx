import { useEffect, useState } from "react";
import { headings } from "./data/dummyData";
import TableOfContents from "./TableOfContents";
import { AlignJustify } from "lucide-react";

const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");

function App() {
    const [tableData, setTableData] = useState([]);
    const [visibility, setVisibitliy] = useState(true);

    useEffect(() => {
        const data = headings;
        setTableData(data);
    }, [tableData]);

    return (
        <div className="h-screen p-2 ">
            <div className="rounded-xl flex flex-col gap-3 h-full bg-stone-500 overflow-auto">
                <h1 className="text-4xl text-center">
                    <div
                        className="absolute m-4 sm:hidden"
                        onClick={() => setVisibitliy(!visibility)}
                    >
                        <AlignJustify />
                    </div>
                    React.js
                </h1>
                <div className="flex h-[91%]">
                    {visibility && <TableOfContents data={tableData} />}

                    <div className="bg-stone-200 p-3 px-20 mr-4 rounded-lg h-full overflow-scroll no-scrollbar">
                        <ol>
                            {tableData.map((x, i) => (
                                <div
                                    className="mb-3 h-full overflow-auto "
                                    key={i}
                                >
                                    <li
                                        id={slugify(x.text)}
                                        className="text-blue-500"
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
