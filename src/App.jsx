import { useEffect, useState } from "react";
import { headings } from "./data/dummyData";
import TableOfContents from "./tableOfContents";


function App() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const data = headings;
        setTableData(data);
        console.log(data);
    }, []);

    return (
        <div>
          <TableOfContents data={tableData}/>
        </div>
    );
}

export default App;
