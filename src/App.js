import Fullpage from "./layouts/fullPage";
import data from "./data.json";
import './styles/app.scss';

function App() {
  return (
    <main className="App">
      <Fullpage data={data}/>
    </main>
  );
}

export default App;
