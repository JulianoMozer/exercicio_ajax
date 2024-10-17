// Aguardamos a carga total do conteúdo da página antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
    const username = "JulianoMozer";  // Nome de usuário no GitHub (substitua com seu usuário, se necessário)
    
    // URL da API do GitHub que retorna os dados do perfil do usuário
    const apiUrl = `https://api.github.com/users/${username}`;

    // Função que vai buscar os dados do perfil
    function fetchProfileData() {
        // Faz a requisição à API do GitHub para obter os dados do usuário
        fetch(apiUrl)
            .then(response => response.json())  // Converte a resposta em formato JSON
            .then(data => {
                // Preenche os dados obtidos no HTML
                
                // Preenche o avatar do usuário com a URL da imagem de avatar
                document.getElementById("profile-avatar").src = data.avatar_url;

                // Verifica se o nome está presente, caso contrário, exibe "Usuário GitHub"
                const profileName = data.name ? data.name : "Usuário GitHub";
                document.getElementById("profile-name").textContent = profileName;
                
                // Preenche o nome de usuário (@) do perfil
                document.getElementById("profile-username").textContent = `@${data.login}`;

                // Preenche os números de repositórios, seguidores e seguindo
                // Usa "0" como valor padrão caso esses campos estejam vazios
                document.getElementById("repos").textContent = data.public_repos || "0";
                document.getElementById("followers").textContent = data.followers || "0";
                document.getElementById("following").textContent = data.following || "0";

                // Preenche o link para o perfil no GitHub
                document.getElementById("profile-link").href = data.html_url;
            })
            .catch(error => {
                // Caso ocorra algum erro ao tentar buscar os dados, exibe o erro no console
                console.error("Erro ao buscar dados do GitHub:", error);
            });
    }

    // Chama a função que faz a requisição para obter os dados do perfil
    fetchProfileData();
});
