  let showMessage = false;
  function mudar() {
    const button = document.getElementById('javo');
    if (showMessage) {
      button.innerHTML = 'Clique para ver uma mensagem!';
    } else {
      button.innerHTML = 'Nunca desista do seus sonhos :)';
    }
    showMessage = !showMessage;
  }


    
