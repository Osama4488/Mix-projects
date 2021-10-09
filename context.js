import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
const Context = createContext();

export const movieContext = () => useContext(Context);

// export const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
// });

export default function MyContext({ children }) {
  const [state, setState] = useState({
    data: [],
  });
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
}
