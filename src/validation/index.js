const Joi = require("@hapi/joi");

exports.pedidoSchema = Joi.object({
  numero: Joi.number().max(27).required(),
  valor: Joi.number().max(13).required(),
  descricao: Joi.string().max(255).required(),
});

exports.compradorSchema = Joi.object({
  nome: Joi.string().max(40).required(),
  documento: Joi.number().max(255).required(),
  ip: Joi.string().min(16).max(50).optional(),
  user_agent: Joi.string().max(255).optional(),
});

exports.boletoSchema = Joi.object({
  beneficiario: Joi.string().max(150).required(),
  carteira: Joi.number().min(2).max(2).required(),
  nosso_numero: Joi.number().min(3).max(11).required(),
  data_emissao: Joi.date().required(), // TODO: Ver formatação
  data_vencimento: Joi.date().required(), // TODO: Ver formatação
  valor_titulo: Joi.number().max(13).required(),
  url_logotipo: Joi.string().max(255).optional(),
  mensagem_cabecalho: Joi.string().max(200).optional(),
  tipo_renderizacao: Joi.string().max(1).optional(),
  instrucoes: Joi.object({
    instrucao_linha_1: Joi.string().max(60).optional(),
    instrucao_linha_2: Joi.string().max(60).optional(),
    instrucao_linha_3: Joi.string().max(60).optional(),
    instrucao_linha_4: Joi.string().max(60).optional(),
    instrucao_linha_5: Joi.string().max(60).optional(),
    instrucao_linha_6: Joi.string().max(60).optional(),
    instrucao_linha_7: Joi.string().max(60).optional(),
    instrucao_linha_8: Joi.string().max(60).optional(),
    instrucao_linha_9: Joi.string().max(60).optional(),
    instrucao_linha_10: Joi.string().max(60).optional(),
    instrucao_linha_11: Joi.string().max(60).optional(),
    instrucao_linha_12: Joi.string().max(60).optional(),
  }).optional(),
  registro: Joi.object({
    agencia_pagador: Joi.number().max(5).optional(),
    razao_conta_pagador: Joi.string().max(5).optional(),
    conta_pagador: Joi.number().max(8).optional(),
    controle_participante: Joi.string().max(25).optional(),
    qtde_parcelas: Joi.number().max(2).optional(),
    qtde_dias_multa: Joi.number().max(2).optional(),
    aplicar_multa: Joi.boolean().optional(),
    valor_percentual_multa: Joi.number().max(4).optional(),
    valor_multa: Joi.number().optional(),
    valor_desconto_bonificacao: Joi.number().max(10).optional(),
    debito_automatico: Joi.boolean().optional(),
    rateio_credito: Joi.boolean().optional(),
    endereco_debito_automatico: Joi.string().max(1).optional(),
    tipo_ocorrencia: Joi.string().max(3).optional(),
    especie_titulo: Joi.number().max(2).optional(),
    primeira_instrucao: Joi.string().max(2).optional(),
    segunda_instrucao: Joi.string().max(2).optional(),
    qtde_dias_juros: Joi.number().max(2).optional(),
    valor_juros_mora: Joi.number().max(13).optional(),
    Percentual_juros_mora: Joi.number().max(8).optional(),
    data_limite_desconto: Joi.date().optional(),
    valor_desconto: Joi.number().max(8).optional(),
    valor_iof: Joi.number().max(1).optional(),
    valor_abatimento: Joi.number().max(13).optional(),
    tipo_inscricao_pagador: Joi.string().max(2).optional(),
    sequencia_registro: Joi.string().max(6).optional(),
  }).optional(),
});

// exports.tokenConfirmacaoPagamento = Joi.string().max(256).optional(),
