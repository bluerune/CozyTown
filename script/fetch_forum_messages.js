const url = "json/forum_messages.json";
const container = document.getElementById("forumMessagesContainer");

function showMessagesForum(dataArray) {
  for (const item of dataArray) {
    if (item.trigger == "") {
      container.innerHTML += `
    <div class="forumMessageContainer">
        <div class="linkUsername" onclick="directUserProfile('${item.username}')">
        <img class="userProfilePictureMessage" src="../img/user_profile_empty.png"></img><p>${item.username}</p></div><p class="tittleMessage">
            "${item.title}"</p>
        <p class="userMessage">${item.message}</p>
        <p class="dateMessage"> ${item.date}</p>
    </div>`;
    }

  }
}

function getForumName(name) {
  forumName = name;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      switch (forumName) {
        case "general":
          showMessagesForum(data.general);
          break;
        case "pets":
          showMessagesForum(data.pets);
          break;
        case "fashion":
          showMessagesForum(data.fashion);
          break;
        default:
          console.log("Error: Foro no existente");
      }
    })
    .catch(error => {
      console.error("Error fetch", error);
    });

}