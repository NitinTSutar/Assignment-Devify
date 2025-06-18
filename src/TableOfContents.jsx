import React from "react";

// Utility to generate slugified text
const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");

// Convert flat headings into nested tree
function buildTree(headings) {
    const root = [];
    const stack = [];

    for (const heading of headings) {
        const item = { ...heading, id: slugify(heading.text), children: [] };

        while (
            stack.length > 0 &&
            stack[stack.length - 1].level >= item.level
        ) {
            stack.pop();
        }

        if (stack.length === 0) {
            root.push(item);
            stack.push(item);
        } else {
            stack[stack.length - 1].children.push(item);
            stack.push(item);
        }
    }

    return root;
}

function ToCItem({ item }) {
    return (
        <li className="ml-4">
            <a
                href={`${item.id}`}
                className=" hover:underline hover:text-blue-500 block py-1 "
            >
                {item.text}
            </a>
            {item.children.length > 0 && (
                <ul className="ml-4 border-l border-gray-300 pl-2 list-disc">
                    {item.children.map((child) => (
                        <ToCItem key={child.id} item={child} />
                    ))}
                </ul>
            )}
        </li>
    );
}

const TableOfContents = ({ data }) => {
    const nested = buildTree(data);

    return (
        <nav className="bg-stone-300 rounded-lg mx-4 flex flex-col w-7xl pl-3 overflow-x-scroll">
            <h2 className="text-xl font-semibold my-4 text-center">
                Table of Contents
            </h2>
            <ul className="list-disc">
                {nested.map((item) => (
                    <ToCItem key={item.id} item={item} />
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
