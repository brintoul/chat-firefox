document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
      const sendButton = document.querySelector('button[aria-label="Send prompt"]');
      if (sendButton) {
        sendButton.click();
      }
  }
});
