const startButton = document.getElementById('startButton');
const loaderWrapper = document.getElementById('loaderWrapper');
const messageText = document.getElementById('messageText');
const countdownText = document.getElementById('countdownText');
const alarmSound = document.getElementById('alarmSound');
const body = document.body;
const introContainer = document.getElementById('introContainer');
const explosionVideo = document.getElementById('explosionVideo');
const postExplosionImage = document.getElementById('postExplosionImage');

startButton.addEventListener('click', function() {
    startButton.disabled = true; // Desabilita o botão para evitar múltiplos cliques
    loaderWrapper.classList.add('active'); // Mostra o loader
    messageText.textContent = "O ESTRAGO COMEÇARÁ EM... ";

    let countdown = 5;
    countdownText.textContent = countdown;

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownText.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            messageText.textContent = "ALERTA! ALERTA! ALERTA!";
            countdownText.textContent = ""; // Limpa o contador
            
            // Inicia o áudio do alarme e o efeito de piscar em vermelho
            alarmSound.play();
            body.classList.add('alert-blink');

            // Tempo para o alarme soar e a tela piscar (ajustei para 3 segundos de alarme)
            setTimeout(() => {
                body.classList.remove('alert-blink'); // Remove o efeito de piscar
                alarmSound.pause(); // Para o som do alarme
                alarmSound.currentTime = 0; // Reseta o áudio

                // Esconde o container principal
                introContainer.classList.add('hidden');

                // Exibe o vídeo de explosão
                explosionVideo.classList.add('active');
                explosionVideo.play();
                explosionVideo.muted = false; // Permite que o som do vídeo seja reproduzido
                
                // Quando o vídeo terminar, exibe a imagem
                explosionVideo.onended = () => {
                    explosionVideo.classList.remove('active');
                    explosionVideo.muted = true; // Volta a mutar para o próximo play, se houver
                    
                    // Exibe a imagem por 15 segundos
                    postExplosionImage.classList.add('active');
                    
                    setTimeout(() => {
                        postExplosionImage.classList.remove('active');
                        // Redireciona para a página do quiz
                        window.location.href = 'game.html'; // Redireciona para a página do seu quiz
                    }, 20000); // 15 segundos
                };

                // Caso o vídeo não tenha o evento 'onended' (ex: formato incorreto),
                // ou como um fallback, podemos usar um setTimeout para o vídeo também.
                // Mas 'onended' é mais preciso para a duração do vídeo.
                // Se você quiser um tempo fixo para o vídeo:
                // setTimeout(() => {
                //     explosionVideo.classList.remove('active');
                //     explosionVideo.pause();
                //     explosionVideo.currentTime = 0;
                //     // Código para exibir a imagem e redirecionar aqui
                // }, 5000); // Exemplo: 5 segundos de vídeo
            }, 3000); // Tempo total do alarme e pisca-pisca (3 segundos)
        }
    }, 1000); // Atualiza a cada 1 segundo
});