import { useEffect, useState } from "react";
import { headings } from "./data/dummyData";
import TableOfContents from "./tableOfContents";

function App() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const data = headings;
        setTableData(data);
        console.log(data);
    }, [tableData]);

    return (
        <div className="h-dvh p-2 ">
            <div className="rounded-xl flex flex-col h-full gap-3 bg-stone-400 overflow-auto">
                <h1 className="text-4xl text-center">React.js</h1>
                <div className="flex h-full">
                    <TableOfContents data={tableData} />

                    <div className=" overflow-scroll">
                        <ol>
                            {tableData.map((x) => (
                                <div className="mb-3 h-full overflow-auto">
                                    <li className="text-blue-500">{x.text}</li>
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
