import { meny } from "./Menydata.js";
import Dish from "./assets/Dish.jsx";
function App() {
  return (
    <div>
      {meny.map((meny, id) => {
        return <Dish key={id} data={meny} />;
      })}
      <div></div>
    </div>
  );
}

export default App;
