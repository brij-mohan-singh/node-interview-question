what is a Hook?
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
