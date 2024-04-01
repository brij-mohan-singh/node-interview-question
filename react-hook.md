what is a Hook?

Introduced in React 16.8, hooks are special functions that allow you to "hook into" React state and other features from function components. This means you can leverage the power of state management and side effects without resorting to class components.

 Benefits of Hooks:
  Functional Component Focus: Hooks enable clean and concise functional components, promoting better code readability and maintainability.
    State Management: They provide mechanisms (like useState) to manage component state within functional components.
    Side Effects: Hooks like useEffect allow you to perform side effects such as data fetching, subscriptions, or timers effectively.
    Code Reusability: You can create custom hooks to encapsulate reusable stateful logic across components.
            
   **  In summary, React hooks empower you to write more functional, maintainable, and reusable components in React applications. By understanding the core concepts, rules, and built-in hooks, you can effectively leverage their capabilities to create engaging and interactive user interfaces.**

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

       b). useReducer
       
          Provides an alternative to ‘useState’ for managing complex state logic involving multiple sub-values 
              or when the next state depends on the previous one.

2. Effect Hooks:
   
 a). ‘useEffect’:
   
                        It enables performing side effects, such as data fetching, subscriptions,
                         or DOM manipulations after the component has been rendered.
                                  
                           import React, { useState, useEffect } from 'react';
                                  
                                  function Example() {
                                    const [data, setData] = useState(null);
                                  
                                    useEffect(() => {
                                      // This effect runs after the component has rendered
                                  
                                      // Perform some asynchronous data fetching
                                      fetchData()
                                        .then((result) => {
                                          setData(result);
                                        })
                                        .catch((error) => {
                                          console.error('Error fetching data:', error);
                                        });
                                  
                                      // Clean up the effect
                                      return () => {
                                        // Perform any necessary cleanup here
                                        // This is optional but important to prevent memory leaks
                                      };
                                    }, []); // Empty dependency array, so the effect runs only once on component mount
                                  
                                    return <div>{data ? <p>Data: {data}</p> : <p>Loading data...</p>}</div>;
                                  }
                                  
                                  export default Example;

b). ‘useLayoutEffect’: Similar to ‘useEffect’, but runs synchronously after all DOM mutations are applied,
    useful for measuring layout or performing DOM manipulations that require synchronous updates.
                                          
                                    import React, { useState, useLayoutEffect } from 'react';
                                          
                                          function Example() {
                                            const [width, setWidth] = useState(0);
                                          
                                            useLayoutEffect(() => {
                                              // This effect runs synchronously after all DOM mutations
                                              // but before the browser paints
                                          
                                              const updateWidth = () => {
                                                const newWidth = document.documentElement.clientWidth;
                                                setWidth(newWidth);
                                              };
                                          
                                              // Add event listener for window resize
                                              window.addEventListener('resize', updateWidth);
                                          
                                              // Initial width update
                                              updateWidth();
                                          
                                              // Clean up the effect
                                              return () => {
                                                // Remove event listener
                                                window.removeEventListener('resize', updateWidth);
                                              };
                                            }, []); // Empty dependency array, so the effect runs only once on component mount
                                          
                                            return <div>Window width: {width}px</div>;
                                          }
                                          
                                          export default Example;


3. Context Hooks:

       ‘useContext’: This hook in React is used to consume values from a React context. It allows functional components to access
                      the value provided by a context provider higher up in the component tree without the need for prop drilling.

          
       1. Create a context
                  // createContext.js
                  import React from 'react';
                  
                  // Create a new context
                  const MyContext = React.createContext();
                  
                  export default MyContext;
   
       2. Provide a value using Context Provider
       
                      import React from 'react';
                      import MyContext from './createContext';
                      
                      function App() {
                        const value = 'Hello, Context!';
                      
                        return (
                          <MyContext.Provider value={value}>
                            <ChildComponent />
                          </MyContext.Provider>
                        );
                      }
   
       3. Consume the context value using ‘useContext’
       
               import React, { useContext } from 'react';
               import MyContext from './createContext';
               
               function ChildComponent() {
                 const contextValue = useContext(MyContext);
               
                 return <div>{contextValue}</div>;
               }

4. Ref Hooks:
    useRef: Provides a way to create mutable references to values or
    DOM elements that persist across renders.
   Often used for accessing or manipulating DOM elements.

                     import React, { useRef } from 'react';
                        
                        function Example() {
                          const inputRef = useRef(null);
                        
                          const handleClick = () => {
                            inputRef.current.focus();
                          };
                        
                          return (
                            <div>
                              <input type="text" ref={inputRef} />
                              <button onClick={handleClick}>Focus Input</button>
                            </div>
                          );
                        }
                        
                        export default Example;
