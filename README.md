

1. What is JSX, and why is it used in React?

JSX means JavaScript XML. It allows us to write HTML-like code directly inside JavaScript files. We use it in React because it makes designing the website layout and creating components much easier, cleaner, and faster.

2. What is the difference between props and state?

Props: It is short for "properties". Props are used to send data from a parent component down to a child component. They are read-only and cannot be changed by the child.
State: It is the local data storage inside a component. State can change over time when a user interacts with the application, like clicking a button or typing.

3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows functional components to create, hold, and update their own local data state. In this project, I used it in `App.jsx` to manage the loaded tools array (`tools`) and to track the selected technologies list inside the stack (`stack`).

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook tells React to run a specific piece of code after the component renders on the screen. I needed it in this project to run a `fetch()` request and load the technology data from the local `technologies.json` file exactly once when the website opens.

5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify exactly which item in a dynamic list is changed, added, or removed. Without keys, React would have to reload the entire list from scratch every time, which reduces website performance.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI designs based on a specific condition, just like using an if-else statement. In this project, I used it inside `TechnologySection.jsx` to show a "Your stack is empty" text message when the stack length is 0, and show the selected item list when items are present.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent to Child: We pass data easily from a parent component down to a child component by using `props`.
Child to Parent: The parent component sends a callback function down as a prop, and the child component calls that function with data inside it to send information back up to the parent.
