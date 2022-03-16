import style from "./App.module.css";
import powered from "./assets/powered.png";
import leftArrow from "./assets/leftarrow.png";
import { useState } from "react";
import { levels, calcIMC, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem";

const App = () => {

  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [showIMC, setShowIMC] = useState<Level | null>(null);

  const handleCalcButton = () => {
    if(height && weight) {
      setShowIMC(calcIMC(height, weight));
      //alert(showIMC);
    }
    else{ 
      alert("Favor preencher ambos os campos, obrigado.");
    }

  };

  const handleArrowClick = () => {
    setShowIMC(null);
    setHeight(0);
    setWeight(0);
  }

  return(
    <div className={style.main}>
      <header className={style.headerContent}>
        <img src={powered} alt="logo" />
      </header>
      <div className={style.container}>
        <div className={style.leftSize}>
          <h1>Indice de Massa Corporal</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt.</p>
          <input type="number" 
            placeholder="Altura em metros (1.5)" 
            value={height > 0 ? height: ""} 
            onChange={e => setHeight(parseFloat(e.target.value))}
            disabled={showIMC ? true : false}
          />

          <input type="number" 
            placeholder="Peso em kg (72.5)" 
            value={weight > 0 ? weight: ""} 
            onChange={e => setWeight(parseFloat(e.target.value))}
            disabled={showIMC ? true : false}
          /> 

          <button onClick={handleCalcButton} disabled={showIMC ? true : false}>
            Calcular IMC
          </button>
        </div>
        <div className={style.rightSize}>
        {!showIMC &&
          <div className={style.grid}>
            
              {levels.map((item, index) => (
              //<div key={index}>
              //  {item.title}
              //  <img src={"./assets/" + item.icon + ".png"} alt="" />
              // <img src="./assets/down.png" alt="" />
              //</div>
              <GridItem item={item} key={index}/>)
            )}
          </div>
        }
        {showIMC &&
          <div className={style.rightBig}>
            <div className={style.rightArrow} onClick={handleArrowClick}><img src={leftArrow} alt="Voltar" width={25}/></div>
            <GridItem item={showIMC}/>
          </div>
        }
        </div>
      </div>
    </div>
  )
}

export default App;
