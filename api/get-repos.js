export default async function handler(request, response) {
  // Configurar cabeçalhos CORS para permitir que o teu frontend consuma a API
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Content-Type', 'application/json');

  const githubUsername = "FontouraC18H22O2";
  
  // O token vai ser lido diretamente das variáveis de ambiente da plataforma de alojamento
  const token = process.env.GITHUB_TOKEN; 

  const fetchUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`;

  try {
    const headers = {};
    if (token) {
      headers['Authorization'] = `token ${token}`;
    }

    const githubResponse = await fetch(fetchUrl, { headers });
    
    if (!githubResponse.ok) {
      return response.status(githubResponse.status).json({ error: 'Erro ao contactar o GitHub' });
    }

    const data = await githubResponse.json();

    // Filtrar os repositórios (remover forks) para enviar apenas o necessário ao frontend
    const filteredRepos = data.filter(repo => !repo.fork).map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      stargazers_count: repo.stargazers_count
    }));

    // Retorna a resposta de sucesso com os dados limpos
    return response.status(200).json(filteredRepos);

  } catch (error) {
    return response.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}