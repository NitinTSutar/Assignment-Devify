import React, { useState } from "react";

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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="ml-4">
            <div className="flex justify-between items-center pr-2">
                <a
                    href={`#${item.id}`}
                    className="hover:underline hover:text-blue-500 block py-1 flex-1"
                    onClick={() => setIsOpen(true)}
                >
                    {item.text}
                </a>

                {item.children.length > 0 && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-2 text-gray-600 hover:text-black"
                        aria-label={
                            isOpen ? "Collapse section" : "Expand section"
                        }
                    >
                        {isOpen ? "^" : "+"}
                    </button>
                )}
            </div>

            {item.children.length > 0 && isOpen && (
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
        <nav className="bg-gray-100/80 sm:bg-gray-100 dark:bg-zinc-900 dark:sm:bg-zinc-900 rounded-lg mx-4 flex flex-col w-max px-3 overflow-x-scroll shrink-0 no-scrollbar absolute sm:static top-20">
            <h2 className="text-xl font-semibold my-4 text-center">
                Table of Contents
            </h2>
            <ul
                className="list-disc"
                onClick={(e) => {
                    const target = e.target;
                    if (target.tagName === "A") {
                        e.preventDefault(); // <- add this line
                        const id = target
                            .getAttribute("href")
                            ?.replace("#", "");
                        const element = document.getElementById(String(id));
                        element?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }
                }}
            >
                {nested.map((item) => (
                    <ToCItem
                        key={item.id}
                        item={item}
                        href={slugify(item.text)}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
