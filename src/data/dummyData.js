export const headings = [
    {
        level: 1,
        text: "Getting Started",
        content: `
Welcome to the documentation! This section will guide you through the setup process,
including what tools you'll need and how to install everything. Whether you're a beginner 
or just refreshing your skills, this is the perfect place to begin.

Welcome to the documentation! This section will guide you through the setup process,
including what tools you'll need and how to install everything. Whether you're a beginner 
or just refreshing your skills, this is the perfect place to begin.

Welcome to the documentation! This section will guide you through the setup process,
including what tools you'll need and how to install everything. Whether you're a beginner 
or just refreshing your skills, this is the perfect place to begin.
    `,
    },
    {
        level: 2,
        text: "Installation",
        content: `
To install the project, first make sure you have Node.js and npm installed on your machine.
Run \`npm install\` in the root folder to install all dependencies. This will include React,
Tailwind CSS, and any necessary tooling for the Table of Contents generator.

To install the project, first make sure you have Node.js and npm installed on your machine.
Run \`npm install\` in the root folder to install all dependencies. This will include React,
Tailwind CSS, and any necessary tooling for the Table of Contents generator.

To install the project, first make sure you have Node.js and npm installed on your machine.
Run \`npm install\` in the root folder to install all dependencies. This will include React,
Tailwind CSS, and any necessary tooling for the Table of Contents generator.
    `,
    },
    {
        level: 2,
        text: "Project Structure",
        content: `
Understanding the folder layout helps with navigation and debugging. The key folders include:
- \`/components\`: reusable UI components
- \`/utils\`: helper functions like slugify
- \`/pages\`: main content and demos
- \`/styles\`: global Tailwind configurations

Understanding the folder layout helps with navigation and debugging. The key folders include:
- \`/components\`: reusable UI components
- \`/utils\`: helper functions like slugify
- \`/pages\`: main content and demos
- \`/styles\`: global Tailwind configurations

Understanding the folder layout helps with navigation and debugging. The key folders include:
- \`/components\`: reusable UI components
- \`/utils\`: helper functions like slugify
- \`/pages\`: main content and demos
- \`/styles\`: global Tailwind configurations
    `,
    },
    {
        level: 3,
        text: "Folder Breakdown",
        content: `
Each folder is organized for scalability. For example, the \`/components\` folder contains
modular parts like \`TableOfContents.jsx\`, which is responsible for rendering the ToC tree.

Each folder is organized for scalability. For example, the \`/components\` folder contains
modular parts like \`TableOfContents.jsx\`, which is responsible for rendering the ToC tree.

Each folder is organized for scalability. For example, the \`/components\` folder contains
modular parts like \`TableOfContents.jsx\`, which is responsible for rendering the ToC tree.
    `,
    },
    {
        level: 3,
        text: "File Naming Conventions",
        content: `
We follow PascalCase for component files (e.g., \`TableOfContents.jsx\`) and camelCase for
utility functions. This makes it easy to identify file types and maintain consistency across the codebase.

We follow PascalCase for component files (e.g., \`TableOfContents.jsx\`) and camelCase for
utility functions. This makes it easy to identify file types and maintain consistency across the codebase.

We follow PascalCase for component files (e.g., \`TableOfContents.jsx\`) and camelCase for
utility functions. This makes it easy to identify file types and maintain consistency across the codebase.
    `,
    },
    {
        level: 1,
        text: "Core Concepts",
        content: `
This section dives into the foundational ideas behind React and how we build modular, interactive UI.
You’ll learn about components, props, and state management.

This section dives into the foundational ideas behind React and how we build modular, interactive UI.
You’ll learn about components, props, and state management.

This section dives into the foundational ideas behind React and how we build modular, interactive UI.
You’ll learn about components, props, and state management.
    `,
    },
    {
        level: 2,
        text: "Components",
        content: `
React components are the building blocks of any UI. They let you split the UI into independent,
reusable pieces. There are two main types: functional and class components.

React components are the building blocks of any UI. They let you split the UI into independent,
reusable pieces. There are two main types: functional and class components.

React components are the building blocks of any UI. They let you split the UI into independent,
reusable pieces. There are two main types: functional and class components.
    `,
    },
    {
        level: 3,
        text: "Functional Components",
        content: `
These are JavaScript functions that return JSX. They're simpler and often preferred in modern
React development. They work great with hooks and make code more readable.

These are JavaScript functions that return JSX. They're simpler and often preferred in modern
React development. They work great with hooks and make code more readable.

These are JavaScript functions that return JSX. They're simpler and often preferred in modern
React development. They work great with hooks and make code more readable.
    `,
    },
    {
        level: 3,
        text: "Class Components",
        content: `
Although functional components are now favored, class components still exist and are useful when
dealing with legacy projects or advanced patterns like error boundaries.

Although functional components are now favored, class components still exist and are useful when
dealing with legacy projects or advanced patterns like error boundaries.

Although functional components are now favored, class components still exist and are useful when
dealing with legacy projects or advanced patterns like error boundaries.
    `,
    },
    {
        level: 2,
        text: "Props and State",
        content: `
Props are used to pass data from parent to child components. State, on the other hand, is used to
store local data that a component needs to render or update. Understanding both is essential to mastering React.

Props are used to pass data from parent to child components. State, on the other hand, is used to
store local data that a component needs to render or update. Understanding both is essential to mastering React.

Props are used to pass data from parent to child components. State, on the other hand, is used to
store local data that a component needs to render or update. Understanding both is essential to mastering React.
    `,
    },
    {
        level: 1,
        text: "Advanced Topics",
        content: `
Now that you've covered the basics, let’s explore some advanced patterns and hooks. These allow
for more powerful and flexible UIs.

Now that you've covered the basics, let’s explore some advanced patterns and hooks. These allow
for more powerful and flexible UIs.

Now that you've covered the basics, let’s explore some advanced patterns and hooks. These allow
for more powerful and flexible UIs.
    `,
    },
    {
        level: 2,
        text: "Hooks",
        content: `
Hooks are functions that let you use state and lifecycle methods in functional components.
Common hooks include \`useState\`, \`useEffect\`, and \`useContext\`. You can also build your own custom hooks.

Hooks are functions that let you use state and lifecycle methods in functional components.
Common hooks include \`useState\`, \`useEffect\`, and \`useContext\`. You can also build your own custom hooks.

Hooks are functions that let you use state and lifecycle methods in functional components.
Common hooks include \`useState\`, \`useEffect\`, and \`useContext\`. You can also build your own custom hooks.
    `,
    },
    {
        level: 3,
        text: "useEffect vs useLayoutEffect",
        content: `
While \`useEffect\` runs after the paint, \`useLayoutEffect\` runs synchronously after DOM mutations
but before paint. This means it can block visual updates, making it ideal for measurements or syncing with DOM.

While \`useEffect\` runs after the paint, \`useLayoutEffect\` runs synchronously after DOM mutations
but before paint. This means it can block visual updates, making it ideal for measurements or syncing with DOM.

While \`useEffect\` runs after the paint, \`useLayoutEffect\` runs synchronously after DOM mutations
but before paint. This means it can block visual updates, making it ideal for measurements or syncing with DOM.
    `,
    },
    {
        level: 4,
        text: "Best Practices",
        content: `
Use \`useEffect\` for most side effects unless you specifically need to manipulate layout.
Always clean up effects where needed and avoid infinite loops by managing dependencies properly.

Use \`useEffect\` for most side effects unless you specifically need to manipulate layout.
Always clean up effects where needed and avoid infinite loops by managing dependencies properly.

Use \`useEffect\` for most side effects unless you specifically need to manipulate layout.
Always clean up effects where needed and avoid infinite loops by managing dependencies properly.
    `,
    },
    {
        level: 1,
        text: "Conclusion",
        content: `
You've now built a fully functional, accessible, and customizable Table of Contents in React.
This project demonstrates skills in component design, DOM manipulation, accessibility, and dynamic rendering.

You've now built a fully functional, accessible, and customizable Table of Contents in React.
This project demonstrates skills in component design, DOM manipulation, accessibility, and dynamic rendering.

You've now built a fully functional, accessible, and customizable Table of Contents in React.
This project demonstrates skills in component design, DOM manipulation, accessibility, and dynamic rendering.
    `,
    },
];
