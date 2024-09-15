function converter() {

    // Variável com o valor digitado pelo usuário
    var binario = Number(demo1.value);
    
    // Conversões
    let decimal = parseInt(binario, 2);
    let octal = decimal.toString(8);
    let hexadecimal = decimal.toString(16);
    
    // Declarando variáveis
    var demo2 = document.getElementById("demo2");
    var demo3 = document.getElementById("demo3");
    var demo4 = document.getElementById("demo4");
    var checkOctal = document.getElementById("checkbox1");
    var checkHexa = document.getElementById("checkbox2");
    var checkDeci = document.getElementById("checkbox3");
    
    // Lógica que verifica se o checkbox está marcado, mostra o resultado na tela e altera a display caso for verdadeiro
    if (checkOctal.checked) {
            demo2.style.display = 'block';
            demo2.innerHTML = `${octal}`;
    } else {
            demo2.style.display = 'none';
    }
    
    if (checkHexa.checked) {
            demo3.style.display = 'block';
            demo3.innerHTML = `${hexadecimal}`;
    } else {
            demo3.style.display = 'none';
    }
    
    if (checkDeci.checked) {
            demo4.style.display = 'block';
            demo4.innerHTML = `${decimal}`;
    } else {
            demo4.style.display = 'none';
    }
    
    // Exibe os valores convertidos no console
    console.log (`Decimal: ${decimal}`);
    console.log (`Octal: ${octal}`);
    console.log (`Hexadecimal: ${hexadecimal}`);
    console.log (`Binário: ${binario}`);
    
    }
    
    
    
    function resetar(){
    
    // Declarando as variáveis
    var demo2 = document.getElementById("demo2");
    var demo3 = document.getElementById("demo3");
    var demo4 = document.getElementById("demo4");
    var checkDeci = document.getElementById("checkbox1");
    var checkHexa = document.getElementById("checkbox2");
    var checkBi = document.getElementById("checkbox3");
    
    // Oculta resultados ao redefinir, com display 'none'
    demo2.style.display = 'none';
    demo3.style.display = 'none';
    demo4.style.display = 'none';
    
    // Desmarca as checkboxs
    checkDeci.checked = false;
    checkHexa.checked = false;
    checkBi.checked = false;
    
    }