# 🏔️🛩️ Montrip - Agência de Viagens 

Projeto pessoal feito para um dos meus negócios, onde emito passagens aéreas com um valor mais acessível do que o modo convencional.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **Styled-Components** - de forma a auxiliar na implementação do CSS.


## 🚀 Uso

O site além de apresentar a empresa, permite que o usuário solicite uma cotação de passagem com mais facilidade. Algumas observações sobre isto:

1. O usuário tem a opção de selecionar quais trechos deseja: apenas ida ou ida e volta. Caso opte pelo último, o campo para preencher a data de volta é renderizado.
2. Com o auxílio do Hook UseForm, é feita a validação dos dados antes de enviar para o nosso sistema. Caso possua algum campo em branco, o mesmo ficará vermelho.
3. A data de volta é permitida apenas em datas posteriores á data de ida, para evitar preenchimentos errôneos e confusos.

## 🚧 Manutenção

Versáo mobile em andamento.



