// Aguarda o documento estar pronto
$(document).ready(function() {
    console.log("Documento pronto. Inicializando o tabuleiro.");
    
    // Configuração inicial do chessboard.js
    var config = {
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png', // Caminho padrão das peças
        position: 'start', // Posição inicial
        draggable: true // Permite arrastar peças
    };
    
    // Inicializa o tabuleiro na div #meuTabuleiro
    var board = Chessboard('meuTabuleiro', config);
    
    console.log("Tabuleiro inicializado.");
});
