const generateCodeBtn = document.getElementById('generateCodeBtn');
    const enterCodeBtn = document.getElementById('enterCodeBtn');
    const chatCodeContainer = document.getElementById('chatCodeContainer');
    const chatCodeInput = document.getElementById('chatCodeInput');
    const joinChatBtn = document.getElementById('joinChatBtn');
    const generatedCodeBtn = document.getElementById('generatedCodeBtn');

    generateCodeBtn.addEventListener('click', () => {
      const randomCode = Math.floor(10000 + Math.random() * 90000);
      alert(`Generated Chat Code: ${randomCode}`);
      generatedCodeBtn.style.display = 'inline-block';
      generatedCodeBtn.textContent = `Generated Code: ${randomCode}`;
      generatedCodeBtn.setAttribute('data-code', randomCode);
      generatedCodeBtn.focus();
    });

    enterCodeBtn.addEventListener('click', () => {
      chatCodeContainer.style.display = 'block';
    });

    joinChatBtn.addEventListener('click', () => {
      const enteredCode = chatCodeInput.value.trim();
      if (enteredCode !== '') {
        alert(`Joining chat with code: ${enteredCode}`);
      } else {
        alert('Please enter a chat code.');
      }
    });
    generatedCodeBtn.addEventListener('click', () => {
      const code = generatedCodeBtn.getAttribute('data-code');
      alert(`Generated Chat Code: ${code}`);
    });