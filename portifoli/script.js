document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Aqui você pode adicionar a lógica para enviar o formulário, como uma chamada AJAX
    
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    
    // Limpar os campos do formulário
    this.reset();
});
