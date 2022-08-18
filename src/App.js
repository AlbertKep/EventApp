// global styles
import { Global } from "./globals/Global";

// components
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Global />
      <Navigation />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
