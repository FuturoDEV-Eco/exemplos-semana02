function buscarInformacoesCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(async (response) => await response.json() )
    .then((data) =>  {
        console.log(data)
       // if(data.erro === true) return null
        return data
    })
    .catch(() => {
        console.log("Não foi possivel pegar o cep")
        return null
    })
}

module.exports = buscarInformacoesCep