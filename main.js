// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const one = 1;
const two = 2;
alert(one + two);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const isANum = 5;

if (!isNaN(isANum)) {
  alert("É um número");
} else {
  alert("Não é um número");
}

//     💡 Para saber o tipo de dado você pode usar o operador `typeof`

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const str = 5;

if (typeof str === 'string') {
  alert("É uma string")
} else {
  alert("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const myVar = "true";

if (typeof myVar === 'boolean') {
  alert("É um booleano")
} else {
  alert("Não é um booleano")
};

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const var1 = 12;
const var2 = 4;

alert(var1 - var2);
alert(var1 * var2);
alert(var1 / var2);


// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const myVar = 7;

const oddOrEven = (myVar % 2 === 0) ? "É um número par" : "É um número ímpar";
alert(oddOrEven)
