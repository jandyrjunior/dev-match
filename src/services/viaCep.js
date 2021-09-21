async function obterCidade(cep) {
  try {
    const resposta = await fetch(`http://viacep.com.br/ws/${cep}/json/`, {
      method: 'GET'
    });
    
    const { localidade, erro } = await resposta.json();

    if (erro) {
      return false;
    }

    return localidade;
  } catch (error) {
    return false;
  }
}

module.exports = {
  obterCidade
}