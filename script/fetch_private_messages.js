const url = "json/private_messages.json";
const container = document.getElementById("privateMessagesContainer");

function showConversations() {
  container.innerHTML = ``
}

function showPrivateMessages(sender) {
  container.innerHTML = ``
  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (const item of data[sender]) {
        container.innerHTML += `<div class="privateMessageContainer">
        <div class="linkUsername" onclick="directUserProfile(${item.from})">${item.from}:</div>
        <p class="userMessage">${item.message}</p>
        <p class="dateMessage">${item.date}</p>
    </div>`;
      }
      
    })
    .catch(error => {
      console.error("error fetch", error);
    })
  container.innerHTML += `<a href="cozymail.html">Back to messages</a>`
}
