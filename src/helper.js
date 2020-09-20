

// Calcula la diferencia entre years
export function obtenerDiferenciaYear  (year) {

    return new Date().getFullYear() - year
}


// Calcuar segun la marca de automovil 

export function calcularMarca (marca) { 

    let incremento ;

    switch (marca) {
        case "Americano":
            incremento = 1.15
            
            break;

        case "Europeo":
            incremento = 1.30
            
            break;

        case "Asiatico":
            incremento = 1.05
            
            break;

        default:
            break;

            
    }


    return incremento;

 }


// Calcula el Plan 

export function obtenerPlan (plan ) {

    return plan === "basico" ? 1.20 : 1.50 ;
}