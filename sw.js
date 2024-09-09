self.addEventListener('push', function(event) {
  const options = {
    body: "Valor MZN 1000,00",
    icon: "https://raw.githubusercontent.com/VOIDabinerJR/VOIDpayWebMVP2/main/img/logo.ico",
    requireInteraction: true,
  };

  event.waitUntil(
    self.registration.showNotification('Venda Aprovada!', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/') // Abrir a janela da aplicação ao clicar na notificação
  );
});
