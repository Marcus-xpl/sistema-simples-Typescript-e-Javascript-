import * as readline from 'readline';
interface Teclado {
    nome: string;
    estoque: number;
    compativel: string;
    Tecnologia: string;
    Sobre: string;
    alt: string;
    lar: string;
    peso: string;
    material:string;
    dds:string;
}
var produto: Teclado = {
    nome:" Teclado Magnético Gamer Redragon Kumara Pro RGB, Branco, Switch Vermelho, ABNT2 - K552-RGB-PRO.\n",
    estoque: 150,
    compativel:" PC, Notebook",
    Tecnologia:" USB",
    Sobre:" A capacidade de remover e substituir keycaps facilita a limpeza e manutenção do teclado.\n      Além disso, em muitos teclados mecânicos, os switches podem ser trocados, permitindo\n      a substituição de peças danificadas ou a personalização do teclado.\n",
    alt:" 4 cm",
    lar:" 35 cm",
    peso:" 1,2 Kg",
    material:" Acrilonitrila butadieno estireno\n",
    dds:" O Teclado Mecânico Gamer Redragon Kumara Pro RGB é a escolha perfeita para quem busca desempenho e\n     estilo. Com seus switches mecânicos de alta durabilidade e retroiluminação RGB personalizável,\n     você estará pronto para enfrentar qualquer desafio com conforto e precisão. Não perca a chance de elevar sua\n     experiência de digitação e jogo com um teclado projetado para se destacar.\n"
}
function cadastrar(teclado: Teclado): string {
    var mensagem = `
    --Nome:${teclado.nome}
    --Vantagens:${teclado.Sobre}
    -Compativel:${teclado.compativel}
    -Entradas:${teclado.Tecnologia}
    -Altura:${teclado.alt}
    -Largura:${teclado.lar}
    -Peso do produto:${teclado.peso}
    -Quantidade em Estoque:${teclado.estoque}
    -Material de Fabricação:${teclado.material}
     Detalhes do Produto:${teclado.dds}`;

    return mensagem;
}
console.log(cadastrar(produto));
// Cria uma interface readline para entrada e saída
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Função para coletar dados do produto
function coletarProduto(): void {

rl.question("| Digite o nome do produto: ",function(nome) {
rl.question("| Por que escolher este produto ?: ", function(sobre) {
rl.question("| Compativel: ",function(_compativel) {
rl.question("| Entradas: ",function(_Tecnologia){
rl.question("| Altura do produto: ",function(_Altura){
rl.question("| Largura do produto: ",function(_Largura){
rl.question("| Peso do produto: ",function(_Peso){
rl.question("| Quantidade em estoque: ",function(_Estoque){
rl.question("| Material de Fabricação: ",function(_Material){
rl.question("| Detalhes do Produto: ",function(_dds){

console.log(`\n -------------------------------Produto cadastrado com sucesso. Obrigado por usar este código para cadastrar seu produto.---------------------------\n\n    --Nome: ${nome}\n\n    --Vantagens: ${sobre}\n\n    -Compatível: ${_compativel}\n    -Entradas: ${_Tecnologia}\n    -Altura: ${_Altura}\n    -Largura: ${_Largura}\n    -Peso: ${_Peso}\n    -Quantidade em Estoque: ${_Estoque}\n    -Material de Fabricação: ${_Material}\n\n     Detalhes do Produto: ${_dds}\n`);
 rl.close();

});
});
});
});
});
});
});
});
});
});
}
// Coleta os dados do produto e exibe
coletarProduto();
