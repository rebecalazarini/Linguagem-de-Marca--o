function consultarendereco(){
    let cep = document.getElementById('cep').value;
    let url = "https://viacep.com.br/ws/" + cep + "/json/";

    if(cep.length !== 8) {
        alert("CEP Invalido!!");
        return;
    }

    fetch(url).then(function (response){
        response.json().then(mostrardados)
    })
}

function mostrardados(dados){
    let resultado = document.querySelector('#resultado');
    if (dados.erro) {
        resultado.innerHTML = `Não foi possivel localizar o endereco`
    } else {
        resultado.innerHTML = `
        <p>Endereço: ${dados.localidade}</p>
        <p>Logradouro: ${dados.logradouro}</p>
        <p>Complemento: ${dados.complemento}</p>
        <p>Estado: ${dados.estado}</p>
        <p>Região: ${dados.região}</p>
        <p>DDD: ${dados.ddd}</p>
        `
    }
}