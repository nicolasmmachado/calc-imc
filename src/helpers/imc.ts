export type Level = {
    title: string;
    color: string;
    icon: "down" | "up";
    imc: number[];
    yourImc?: number
};

export const levels: Level[] = [
    {title: "Desnutrição", color: "rgb(150, 163, 171)", icon: "down", imc: [0, 18.5]},
    {title: "Peso ideal", color: "rgb(14, 173, 105)", icon: "up", imc: [18.6, 24.9]},
    {title: "Sobrepeso", color: "rgb(226, 176, 57)", icon: "down", imc: [25, 30]},
    {title: "Obesidade", color: "rgb(195, 66, 63)", icon: "down", imc: [30.1, 99]}
];

export const calcIMC = (height: number, weight: number) => {
    const imc = parseFloat((weight / (height * height)).toFixed(2));
    

    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            let copyLevels = {...levels[i]}
            copyLevels.yourImc = imc;
            return copyLevels;
        }
    }

    return null;
}