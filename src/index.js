const Joi = require('@hapi/joi')

class ShopFacil {
  constructor(key, merchId, env) {
    this._key = key;
    this._merchId = merchId;
    this._env = env;
  }

  pedido = (pedido) => {
    if (pedido && pedido.numero && pedido.valor && pedido.descricao) {
      console.log("ok");
    } else {
      console.log("NOT OK");
    }
    return pedido;
  };

  comprador = (comprador) => {
    if (
      comprador &&
      comprador.nome &&
      comprador.documento &&
      comprador.endereco.cep &&
      comprador.endereco.logradouro &&
      comprador.endereco.numero &&
      comprador.endereco.bairro &&
      comprador.endereco.cidade &&
      comprador.endereco.uf
    )
      return comprador;
  };

  boleto = (boleto) => {
    if(boleto && boleto.beneficiario && boleto.carteira &&)
  };

  sendRequest = () => {
    console.log("aaaaaaa");
  };
}

const sf = new ShopFacil("a", "b", "c");

sf.pedido({
  numero: "0-9_A-Z_.MAX-27-CH99",
  valor: "15000",
  descricao: "Descritivo do pedido",
});
