what is a Hook?
Introduced in React 16.8, hooks are special functions that allow you to "hook into" React state and other features from function components. This means you can leverage the power of state management and side effects without resorting to class components.
 Benefits of Hooks:
            Functional Component Focus: Hooks enable clean and concise functional components, promoting better code readability and maintainability.
            State Management: They provide mechanisms (like useState) to manage component state within functional components.
            Side Effects: Hooks like useEffect allow you to perform side effects such as data fetching, subscriptions, or timers effectively.
            Code Reusability: You can create custom hooks to encapsulate reusable stateful logic across components.
            
            In summary, React hooks empower you to write more functional, maintainable, and reusable components in React applications. By understanding the core concepts, rules, and 
             built-in hooks, you can effectively leverage their capabilities to create engaging and interactive user interfaces.

1. State Hooks:
  a) ‘useState’: It is the most commonly used React Hook. It allows functional components to have state variables. It takes an initial state value as the argument and returns an array with two elements — the current state value and a function to update that state.

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

2. useReducer

Provides an alternative to ‘useState’ for managing complex state logic involving multiple sub-values or when the next state depends on the previous one.

