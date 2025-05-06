function exibirMateriais() {
  let passos = prompt(
    `Digite a partir de qual passo deseja prosseguir:
    
1.) Materiais necessarios
2.) Escolha de grãos
3.) Meça a quantidade de café
4.) Moer o café
5.) Aqueça a água
6.) Método de preparo
7.) Filtre o café
8.) Sirva e aprecie`
  );

  passos = validacaoNumeroInteiro(passos);

  switch (passos) {
    case 1:
      alert(
        `Materiais necessários:\n\n- Grãos de café frescos\n- Moedor de café (manual ou elétrico)\n- Água filtrada\n- Filtro de café (se for usar coador)\n- Cafeteira ou método de preparo (Coador, French press, Aeropress, etc.)\n- Recipiente para servir (xícara ou caneca)`
      );
    case 2:
      alert(
        `Opte por grãos frescos de boa qualidade. O tipo de grão (arábica ou robusta) e a torra (clara, média ou escura) podem influenciar o sabor do café.`
      );
    case 3:
      alert(
        `Uma proporção padrão é 10 gramas de café para cada 100 ml de água (ou aproximadamente 1 colher de sopa para 100 ml de água).\nAjuste essa quantidade conforme sua preferência pessoal (mais forte ou mais fraco).`
      );
    case 4:
      alert(
        `Utilize um moedor de café para moer os grãos na hora. Isso ajuda a preservar os óleos essenciais e o sabor do café.\n- Moagem grossa: Ideal para métodos como French press ou coador de pano.\n- Moagem média: Boa para a cafeteira filtrada.`
      );
    case 5:
      alert(
        `Aqueça a água até cerca de 90-96°C (não deixe ferver completamente). Isso ajuda a extrair melhor o sabor sem queimar o café.\nSe não tiver um termômetro, deixe a água ferver e aguarde cerca de 30 segundos para alcançar a temperatura ideal.`
      );
    case 6:
      alert(
        `Existem várias maneiras de preparar o café, e cada uma tem um impacto no sabor final:\n\n- Coador (tradicional): Coloque o filtro no suporte e adicione o café moído. Despeje a água quente aos poucos, em movimentos circulares, para garantir uma extração uniforme.\n- French Press: Coloque o café moído na prensa (com moagem grossa) e adicione a água quente. Mexa levemente e deixe em infusão por cerca de 4 minutos. Após esse tempo, pressione o êmbolo suavemente para separar o café da borra.\n- Aeropress: Adicione o café moído no cilindro da Aeropress, adicione a água quente e mexa. Depois, coloque o filtro e pressione o êmbolo de forma constante.\n- Cafeteira italiana (Moka): Coloque água no fundo da base da cafeteira até a válvula. Coloque o café moído no filtro. Monte a cafeteira e leve ao fogo médio. O café começará a subir para o recipiente superior.`
      );
    case 7:
      alert(
        `Se você estiver usando um coador ou French press, o café já deve estar filtrado após a extração. No caso de métodos como a Aeropress ou cafeteira italiana, o processo de filtragem ocorre enquanto o café é empurrado ou transbordado.`
      );
    case 8:
      alert(
        `Sirva o café na xícara ou caneca de sua preferência.\nSe gostar, adicione açúcar, leite ou até mesmo um pouco de espuma de leite para um café especial.`
      );
    case 9:
      alert(
        `Frescor: O café deve ser consumido logo após ser preparado para aproveitar ao máximo seu aroma e sabor.\n\nArmazenamento: Guarde os grãos de café em um recipiente hermético, longe da luz e da umidade, para preservar sua frescura.\n\nLimpeza: Lave bem os utensílios após cada uso para evitar que resíduos de café alterem o sabor do seu próximo preparo.`
      );
    default:
      "Digite um valor valido.";
      break;
  }
}

exibirMateriais();
