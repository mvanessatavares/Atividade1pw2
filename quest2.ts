//Primeiro cria uma interface com as informações de cada pessoa
interface Pessoa{
    nome:string;
    idade:number;
    profissao:string;
}

//Adciona o Pessoa em cada uma das variaveis
let pessoa1 = {} as Pessoa;

pessoa1.nome = "maria";

pessoa1.idade = 29;

pessoa1.profissao = "atriz";



let pessoa2 = {} as Pessoa;

pessoa2.nome = "roberto";

pessoa2.idade = 19;

pessoa2.profissao = "Padeiro";


//nessa etapa foi apenas além de adcionar o pessoa, também foi colocado : no lugar do =
let pessoa3:Pessoa = {

nome: "laura",

idade: 32,

profissao: "Atriz"

};



let pessoa4:Pessoa = {

nome:"carlos",

idade:19,

profissao: "padeiro"

}