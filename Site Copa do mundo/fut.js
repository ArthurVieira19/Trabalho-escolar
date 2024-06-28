document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Exibir mensagem de agradecimento
    document.getElementById('mensagem').style.display = 'block';
    
    // Limpar o formulário
    document.getElementById('contactForm').reset();
});