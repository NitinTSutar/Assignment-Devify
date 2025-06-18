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
        <div>
            <div className="m-2 rounded-xl flex flex-col  gap-3 bg-stone-600 h-dvh overflow-clip">
                <h1 className="text-4xl text-center">React.js</h1>
                <div className="flex">
                    <TableOfContents data={tableData} />

                    <div className="h-dvh overflow-x-scroll scroll-smooth">
                        <ol>
                            {tableData.map((x) => (
                                <div className="mt-3">
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
