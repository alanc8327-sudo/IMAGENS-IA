async function gerarImagem() {
  const prompt = document.getElementById("prompt").value;
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "Gerando imagem...";

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer SUA_CHAVE_API_AQUI" // coloque sua chave aqui
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        prompt: prompt,
        size: "512x512"
      })
    });

    const data = await response.json();
    const imageUrl = data.data[0].url;

    resultado.innerHTML = `<img src="${imageUrl}" alt="Imagem gerada">`;
  } catch (error) {
    resultado.innerHTML = "Erro ao gerar imagem.";
    console.error(error);
  }
}