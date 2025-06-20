import { PanelBottomClose, PanelBottomOpen } from "lucide-react";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import useSlugify from "./hooks/useSlugify";

const liVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

function ToCItem({ item, activeId, activeClass, collapsible }) {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = activeId === item.id;

    return (
        <motion.li
            variants={liVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
            className={`ml-4 ${isActive ? activeClass : ""}`}
        >
            <div className="flex justify-between items-center pr-2">
                <motion.a
                    href={`#${item.id}`}
                    whileHover={{ scale: 1.05 }}
                    className={`block py-1 flex-1 ${isActive ? activeClass : ""}`}
                    onClick={() => setIsOpen(true)}
                >
                    {item.text}
                </motion.a>

                {item.children.length > 0 && collapsible && (
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-2 text-gray-800 dark:text-gray-400"
                        aria-label={isOpen ? "Collapse section" : "Expand section"}
                    >
                        {isOpen ? <PanelBottomOpen size={20} /> : <PanelBottomClose size={20} />}
                    </motion.button>
                )}
            </div>

            {item.children.length > 0 && (
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ staggerChildren: 0.1 }}
                            className="ml-4 border-l border-gray-300 dark:border-gray-700 pl-2 list-disc"
                        >
                            {item.children.map((child) => (
                                <ToCItem
                                    key={child.id}
                                    item={child}
                                    activeId={activeId}
                                    activeClass={activeClass}
                                    collapsible={collapsible}
                                />
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            )}
        </motion.li>
    );
}

const buildTree = (headings, slugify, maxDepth) => {
    const root = [];
    const stack = [];

    for (const heading of headings) {
        if (heading.level > maxDepth) continue;

        const item = { ...heading, id: slugify(heading.text), children: [] };

        while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
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
};

const TableOfContents = ({ data, activeId, titleTag = "h2", maxDepth = 6, collapsible = true, activeClass = "text-blue-600 dark:text-amber-400" }) => {
    const slugify = useSlugify();
    const nested = buildTree(data, slugify, maxDepth);
    const Title = titleTag;

    useEffect(() => {
        const tocLinks = document.querySelectorAll("nav a[href^='#']");
        tocLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const id = link.getAttribute("href").substring(1);
                const element = document.getElementById(id);
                element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        });
        return () => {
            tocLinks.forEach((link) => {
                link.removeEventListener("click", () => {});
            });
        };
    }, [data]);

    return (
        <motion.div animate={{ x: [-100, 0] }} exit={{ x: [0, -100] }}>
            <nav className="bg-blue-100/90 sm:bg-gray-200 dark:bg-zinc-950/90 dark:sm:bg-zinc-950 rounded-lg mx-4 flex sm:h-full flex-col w-3xs px-3 overflow-x-scroll border-1 border-dashed sm:border-0 shrink-0 no-scrollbar absolute sm:static top-12 transition-colors duration-300 ease-in">
                <Title className="text-xl font-semibold my-4 text-center">Table of Contents</Title>
                <ul className="list-disc">
                    {nested.map((item) => (
                        <ToCItem
                            key={item.id}
                            item={item}
                            activeId={activeId}
                            activeClass={activeClass}
                            collapsible={collapsible}
                        />
                    ))}
                </ul>
            </nav>
        </motion.div>
    );
};

export default TableOfContents;
