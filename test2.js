var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

function apples(input) {
    let manzanasPorCaja = 4;
    let cantidadCajas = [];
    let parCajas = [];
    let amigos = [];
    let cajasPorAmigos = 2;
    for (let i = 0; i < input.length; i += manzanasPorCaja) {
        cantidadCajas.push(input.slice(i, i + manzanasPorCaja));
    }

    for (let i = 0; i < cantidadCajas.length; i += cajasPorAmigos) {
        parCajas.push(cantidadCajas.slice(i, i + cajasPorAmigos));
    }

    for (let i = 0; i < parCajas.length; i += 2) {
        let grupo = parCajas.slice(i, i + 2);
        amigos.push(grupo);
    }
    return amigos;
}

console.log(apples(input));