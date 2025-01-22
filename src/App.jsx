import { meny } from "./Menydata.js";
import Dish from "./assets/Dish.jsx";
import MenyList from "./Meny.jsx";
function App() {
  return (
    <div>
      {meny.map((meny, id) => {
        return <Dish key={id} data={meny} />;
      })}
      <div>
        {meny.map((meny, id) => {
          return <MenyList key={id} data={meny} />;
        })}
      </div>
    </div>
  );
}

export default App;
