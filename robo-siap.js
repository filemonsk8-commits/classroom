(function() {
    const rawData = prompt("Cole o código gerado pelo Classroom:");
    if(!rawData) return;
    const dados = JSON.parse(rawData);
    const inputs = document.querySelectorAll('input[type="text"]');
    
    inputs.forEach(input => {
        const linha = input.closest('tr');
        if (!linha) return;
        const nomeSIAP = linha.innerText.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        for (let nomeJS in dados) {
            if (nomeSIAP.includes(nomeJS)) {
                input.value = dados[nomeJS];
                input.style.backgroundColor = "#fff9c4";
                input.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    });
    alert("Processamento concluído!");
})();
