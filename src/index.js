// const Joi = require("@hapi/joi");
// const {
//   pedidoSchema,
//   boletoSchema,
//   compradorSchema,
//   // tokenConfirmacaoPagamento,
// } = require("../src/validation/index");

class ShopFacil {
  constructor(key, merchId, env) {
    this._key = key;
    this._merchId = merchId;
    this._env = env;
    if (this._env == "HML") {
      this._apiURL =
        "https://homolog.meiosdepagamentobradesco.com.br/transf/transacao";
    } else if (this._env == "PRD") {
      // this._apiURL = "https://meiosdepagamentobradesco.com.br/api";
    }
  }

  pedido = () => {
    console.log(this._apiURL);
  };

  comprador = (comprador) => {};

  boleto = (pedido, comprador, boletoBancario) => {
    
  };

  transferenciaBancaria = (pedido, comprador, token_request_confirmacao_pagamento) => {}

  tokenConfirmacaoPagamento = (token_request_confirmacao_pagamento) => {};
}

const sf = new ShopFacil("", "", "HML");
sf.pedido();
