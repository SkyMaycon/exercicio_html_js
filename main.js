const form = document.getElementById("myForm");
      const numA = document.getElementById("numA");
      const numB = document.getElementById("numB");
      const result = document.getElementById("result");
      
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        if (parseInt(numB.value) > parseInt(numA.value)) {
          result.innerHTML = "Formulário válido!";
        } else {
          result.innerHTML = "Formulário inválido. O número B deve ser maior que o número A.";
        }
      });