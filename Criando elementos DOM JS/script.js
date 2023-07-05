const arrayPostagens = [
    {
      titulo: "Pop Vegan",
      subtitulo: "Comida vegana para todos!",
      data: "06/07/2023",
      texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
    },
    {
      titulo: "Make Hommus. Not War",
      subtitulo: "Só delivery, para curtir em casa!",
      data: "18/08/2023",
      texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
    },
    {
      titulo: "Churrascada do Mar",
      subtitulo: "Melhor do que estar na praia!",
      data: "30/08/2023",
      texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
    },
    {
      titulo: "Boucherie",
      subtitulo: "Pra quem gosta de carne!",
      data: "22/08/2023",
      texto: "Por lá, grelhados fixos no menu e sugestões de cortes especiais do dia, incluindo carnes bovinas, suínas e pescados, são acompanhados de um molho à escolha (barbecue, bordelaise, chimichurri, bernaise, ao poivre ou dijon), batata crisp e farofa panko."
    },
  ]
  const main = document.querySelector('main');
  
  for (let index = 0; index < arrayPostagens.length; index++) {
    
      
    // CRIAR ELEMENTO HTML
  
    const article = document.createElement('article');
  
    //INSERRIR HTML RESTANTETES
  
    article.innerHTML = `
    <h3>${arrayPostagens[index].titulo}</h3>
    <p class="subtitulo">${arrayPostagens[index].subtitulo}</p>
    <div class="data">${arrayPostagens[index].data}</div>
    <p>${arrayPostagens[index].texto}</p>
    `
    // COLOCAR NOVO ELEMENTO DA DOM
  
    main.appendChild(article)
  }
  