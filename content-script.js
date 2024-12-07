document.addEventListener('keydown', (event) => {
  console.log("KEYDOWN!!");
  if (event.key === 'Enter') {
      const sendButton = document.querySelector('button[aria-label="Send prompt"]');
      if (sendButton) {
        sendButton.click();
      }
  }
});