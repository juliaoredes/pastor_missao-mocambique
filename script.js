/**
 * Processa o formulário de doação e redireciona para o WhatsApp
 */
function processarFormulario(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const valor = document.getElementById('valor').value;
    
    // Configuração do telefone de destino (Corrigido)
    const telefoneDestino = "5522999902217"; 

    // Monta a mensagem personalizada para o WhatsApp
    const texto = `Olá! Meu nome é ${nome} (${email}) e acabei de realizar uma doação de R$ ${valor},00 PIX para apoiar a Sala de Informática em Moçambique. Segue o comprovante em anexo:`;
    
    // Cria a URL de redirecionamento do WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${telefoneDestino}&text=${encodeURIComponent(texto)}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(url, '_blank');
}

/**
 * Copia a chave Pix automaticamente ao clicar no campo
 */
function copiarPix() {
    const inputPix = document.getElementById('chave-pix');
    
    // Seleciona o texto do campo
    inputPix.select();
    inputPix.setSelectionRange(0, 99999); // Para dispositivos móveis
    
    // Copia para a área de transferência
    navigator.clipboard.writeText(inputPix.value);
    
    // Alerta visual simples
    alert("Chave Pix copiada com sucesso!");
}