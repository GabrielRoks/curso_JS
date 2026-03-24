function soma(x, y){
    if (typeof x !== "number" || typeof y !== "number"){
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}
try{
    console.log(soma(1, "10"));
} catch(err){
    // console.log(err);
    console.log('Algo inesperado ocorreu, não é sua culpa.')
}
// try{
//     console.log(naoExisto);
// } catch(err){
//     console.log('naoExisto não existe.');
//     console.log(err);
// }