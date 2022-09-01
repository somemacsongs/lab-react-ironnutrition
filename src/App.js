import 'antd/dist/antd.min.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox.js';
import style from "./Apps.module.css"
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';

function App() {
  return (
    <div>
      <h3 align="center">Food List</h3>
      <AddFoodForm key="form"/>
      <div className={style.grid}>
      {
        foods.map((current)=>{
          return (
            <FoodBox food={current} key={current.name}/>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
