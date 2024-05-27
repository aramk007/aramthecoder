// useLocalStorage is being used to add toggler state to localStorage without writing more JS scripts.
import useLocalStorage from "use-local-storage";
import "./App.css";
import Path from "./Routes/Path";

function App() {
  // using custom hook from useLocalStorage package to update the state and localStorage
  // with a bolean key-value pair to toggle the correct CSS theme. For example if "isDark", true then the dark theme will activate.
  // users preference is being stored to localStorage
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    // data-theme is a custom HTML attribute
    // We can toggle the entire theme based on the value of data-theme attribute
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div className="content-wrapper">
        <Path isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
