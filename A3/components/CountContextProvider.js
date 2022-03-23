import React, {createContext, useContext, useState} from 'react';

const CountContext = createContext();

export default function CountContextProvider({children}) {
  const [count, setCount] = useState(505);

  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  );
}

export function useCountContext() {
  return useContext(CountContext);
}