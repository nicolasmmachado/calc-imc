import {Level} from "../../helpers/imc"
import style from "./GridItem.module.css"
import upImage from "../../assets/up.png"
import downImage from "../../assets/down.png"

type Props = {
    item: Level
}

export const GridItem = ({item}: Props) =>{
    return(
        <div className={style.main} style={{backgroundColor: item.color}}>
            <div className={style.gridTittle}>{item.title}</div>
            <div className={style.gridIcon}><img src={item.icon === "up" ? upImage : downImage} alt={item.icon === "up" ? "UpTumb" : "DownTumb"}/></div>
            <div className={style.gridInfo}>
                <>
                    IMC entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}.</strong>
                </>
            </div>
            {item.yourImc && 
                <div className={style.imc}>
                    Seu IMC é {item.yourImc} kg/m2.
                </div>}
        </div>
    );
}