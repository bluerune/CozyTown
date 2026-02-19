const url = "json/forum_messages.json";
const container = document.getElementById("container");

function showMessagesForum(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `
    <div class="forummessageContainer">
        <img src="" class="profilepicture" alt="">
        <div class="linkUsername" onclick="directUserProfile(${item.username})">${item.username}</div>:<p>
            "${item.title}"</p>
        <p class="userMessage">${item.message}</p>
        <p class="dateMessage"> ${item.date}</p>
    </div>`;
  }
}

function getForumName(name) {
  forumName = name;
  console.log(forumName);
}

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