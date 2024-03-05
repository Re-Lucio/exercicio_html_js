function validarForm() {
    var A = document.getElementById("inputA").value;
    var B = document.getElementById("inputB").value;

    if (B > A) {
        alert('Parabéns! Tudo certo.');
        return true;
    } else {
        alert('Que pena! tente novamente.');
        return false;
    }
}
