what is a Hook?
Introduced in React 16.8, hooks are special functions that allow you to "hook into" React state and other features from function components. This means you can leverage the power of state management and side effects without resorting to class components.
Key Benefits of Hooks:

Functional Component Focus: Hooks enable clean and concise functional components, promoting better code readability and maintainability.
State Management: They provide mechanisms (like useState) to manage component state within functional components.
Side Effects: Hooks like useEffect allow you to perform side effects such as data fetching, subscriptions, or timers effectively.
Code Reusability: You can create custom hooks to encapsulate reusable stateful logic across components.
Core Rules for Using Hooks:

Function Components Only: Hooks can only be called inside React function components. They don't work within class components.
Top-Level Placement: Hooks must be called at the top level of a component function, before the return statement. This ensures they run in the correct order during rendering.
No Conditional Calls: Avoid calling hooks conditionally (like inside if statements) as this can lead to unexpected behavior due to React's rendering process.
Common Built-in Hooks:

useState: Manages component state. It returns an array containing the current state value and a function to update it.
useEffect: Executes side effects after a component renders (or re-renders). This includes tasks like data fetching, subscriptions, timers, or DOM manipulations.
useContext: Provides a way to access context values established within a React context.
Custom Hooks:

You can create custom hooks to encapsulate reusable stateful logic. These hooks typically start with the use prefix (e.g., useForm) and can use other built-in hooks internally. Here's a simplified example of a custom hook for managing form state:

JavaScript
import { useState } from 'react';

function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return [values, handleChange];
}
Use code with caution.
This custom hook, useForm, takes an initial state object and returns an array containing the current form values and a function to handle form changes. You can then use this hook in your components:

JavaScript
function MyComponent() {
  const [formData, setFormData] = useForm({ name: '', email: '' });

  // ...

  return (
    <form>
      <input type="text" name="name" value={formData.name} onChange={setFormData} />
      {/* ... */}
    </form>
  );
}
Use code with caution.
In summary, React hooks empower you to write more functional, maintainable, and reusable components in React applications. By understanding the core concepts, rules, and built-in hooks, you can effectively leverage their capabilities to create engaging and interactive user interfaces.




1. State Hooks:
   ‘useState’: It is the most commonly used React Hook. It allows functional components to have state variables. It takes an initial state value as the argument and returns an array with two elements — the current state value and a function to update that state.

                  import React, { useState } from 'react';
                  
                  function Counter() {
                    const [count, setCount] = useState(0);
                  
                    const increment = () => {
                      setCount(count + 1);
                    };
                  
                    return (
                      <div>
                        <p>Count: {count}</p>
                        <button onClick={increment}>Increment</button>
                      </div>
                    );
                  }
