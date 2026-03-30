function dataHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }
    if(!data){
        data = new Date();
    }

    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}
try{
    const data = new Date('2025-01-01 11:01:35');
    const hora = dataHora();
    console.log(hora);
} catch(e){
    // Tratar erro
} finally{
    console.log('Tenha um bom dia!');
}
