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
b)  ‘useReducer’: Provides an alternative to ‘useState’ for managing complex state logic involving multiple sub-values or when the next state depends on the previous one.

                                          or 

useReducer Hook Explained:- 
                     The useReducer hook, introduced alongside other hooks in React 16.8, provides a mechanism for managing complex state logic within functional components. 
                     It's particularly useful when you have:

                     1. Multiple State Values: If your component deals with several interconnected state values, useReducer helps keep the state updates organized and predictable.
                     2. Complex State Updates: When updating your component's state depends on the previous state, useReducer offers a clear way to define the state transition logic.
                     
Breakdown of useReducer:
                useReducer accepts two arguments:
                
               1.  Reducer Function: This function is the heart of useReducer. It takes two arguments: the current state (state) and an action object (action). 
                  Its responsibility is to return the new state based on the action type and payload (if present) within the action object. Here's the basic structure:
                  
                const reducerFunction = (state, action) => {
                                switch (action.type) {
                                  case 'INCREMENT':
                                    return { ...state, count: state.count + 1 };
                                  case 'DECREMENT':
                                    return { ...state, count: state.count - 1 };
                                  default:
                                    return state;
                                }
                              };

            2.   Initial State: This argument specifies the initial state object that your component's state will start with. It can be a simple value or 
                 a more complex object structure.
                 
                 Return Values:
                        useReducer returns an array containing two elements:
                              Current State: This reflects the current value of the component's state based on the reducer function and dispatched actions.
                              Dispatch Function: This function is used to trigger state updates. You call dispatch with an action object that tells the reducer how to update the state.



              Example: Counter with useReducer
                Here's a basic example demonstrating useReducer for managing a counter:

                                                          
                                                          import React, { useReducer } from 'react';
                                                          
                                                          const initialState = { count: 0 };
                                                          
                                                          const reducer = (state, action) => {
                                                            switch (action.type) {
                                                              case 'INCREMENT':
                                                                return { ...state, count: state.count + 1 };
                                                              case 'DECREMENT':
                                                                return { ...state, count: state.count - 1 };
                                                              default:
                                                                return state;
                                                            }
                                                          };
                                                          
                                                          function Counter() {
                                                            const [state, dispatch] = useReducer(reducer, initialState);
                                                          
                                                            const increment = () => {
                                                              dispatch({ type: 'INCREMENT' });
                                                            };
                                                          
                                                            const decrement = () => {
                                                              dispatch({ type: 'DECREMENT' });
                                                            };
                                                          
                                                            return (
                                                              <div>
                                                                <p>Count: {state.count}</p>
                                                                <button onClick={increment}>Increment</button>
                                                                <button onClick={decrement}>Decrement</button>
                                                              </div>
                                                            );
                                                          }

                            
                            Use code with caution.
                            In this example:
                            
                            The reducer function handles state updates based on the action type ('INCREMENT' or 'DECREMENT').
                            The Counter component uses useReducer to get the current state (state) and the dispatch function.
                            The increment and decrement functions dispatch actions to trigger state updates.
                            Additional Considerations:
                            
                            Custom Hooks: You can create custom hooks using useReducer to encapsulate reusable state logic for more complex scenarios.
                            Comparison to useState: While useState is suitable for simpler state management, useReducer becomes valuable when dealing 
                            with complex state updates or multiple interconnected state values.
                            By effectively leveraging useReducer, you can enhance the organization, maintainability, and predictability of state management in your React functional components.
