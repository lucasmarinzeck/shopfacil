const Joi = require("@hapi/joi");
const {
  pedidoSchema,
  boletoSchema,
  compradorSchema,
  tokenConfirmacaoPagamento,
} = require("../src/validation/index");

class ShopFacil {
  constructor(key, merchId, env) {
    this._key = key;
    this._merchId = merchId;
    this._env = env;
  }


  urlProd = "https://meiosdepagamentobradesco.com.br/api";
  urlHomolog =
    "https://homolog.meiosdepagamentobradesco.com.br/transf/transacao";

  _env === 'PROD' ? : 

  pedido = (pedido) => {
    console.log(pedidoSchema.validate(pedido));
  };

  comprador = (comprador) => {
    Joi.validate(comprador, compradorSchema, () => {});
  };

  boleto = (boleto) => {
    Joi.validate(boleto, boletoSchema, () => {});
  };

  tokenConfirmacaoPagamento = (token) => {};

  sendRequest = () => {};
}

const sf = new ShopFacil("", "", "");

sf.pedido({
  numero: 82312312318,
  valor: 200,
  descricao: "de produto no valor de R$ 250,00",
});
