// Aguarda o documento estar pronto
$(document).ready(function() {
    console.log("Documento pronto. Inicializando o tabuleiro.");
    
    // Configuração inicial do chessboard.js
    var config = {
        // ### A CORREÇÃO ESTÁ AQUI ###
        // Apontamos o caminho completo das imagens no CDN
        pieceTheme: 'https://unpkg.com/@chrisoakman/chessboard.js@1.0.0/img/chesspieces/wikipedia/{piece}.png',
        
        position: 'start', // Posição inicial
        draggable: true // Permite arrastar peças
    };
    
    // Inicializa o tabuleiro na div #meuTabuleiro
    var board = Chessboard('meuTabuleiro', config);
    
    console.log("Tabuleiro inicializado.");
});
