// Verifique se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(function(registration) {
        console.log('Service Worker registrado com sucesso:', registration);
  
        // Adiciona evento no botão para solicitar permissão de notificação
        document.getElementById("notificarBtn").addEventListener("click", function() {
          solicitarPermissaoNotificacao(registration);
        });
      })
      .catch(function(error) {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  }
  
  // Função para solicitar permissão de notificação e enviar uma notificação
  function solicitarPermissaoNotificacao(registration) {
    const opcoes = {
      body: "Valor MZN 1000,00",
      icon: "https://raw.githubusercontent.com/VOIDabinerJR/VOIDpayWebMVP2/main/img/logo.ico",
      requireInteraction: true, // Mantém a notificação na tela até a interação
    };
  
    if ("Notification" in window) {
      // Verifica se a permissão já foi concedida
      if (Notification.permission === "granted") {
        console.log("Permissão concedida, enviando notificação...");
        registration.showNotification("Venda Aprovada!", opcoes);
      }
      // Se a permissão não foi negada anteriormente, solicita permissão
      else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission) {
          if (permission === "granted") {
            console.log("Permissão concedida, enviando notificação...");
            registration.showNotification("Venda Aprovada!", opcoes);
          } else {
            console.log("Permissão negada para notificações.");
          }
        });
      } else {
        console.log("Permissão negada para notificações.");
      }
    } else {
      console.log("Navegador não suporta notificações.");
    }
  }
  