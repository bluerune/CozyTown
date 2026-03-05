const url = "../json/private_messages.json";
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
        container.innerHTML += `<div class="forumMessageContainer">
        <div class="linkUsername" onclick="directUserProfile(${item.from})">${item.from}:</div>
        <p class="userMessage">${item.message}</p>
        <p class="dateMessage">${item.date}</p>
    </div>`;
      }
      
    })
    .catch(error => {
      console.error("error fetch", error);
    })
  container.innerHTML += `<a href="../inbox.html">Back to messages</a>`
}


// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     switch (sender) {
//       case "cherise_dnd":
//         showPrivateMessages(data.cherise_dnd);
//         break;
//       case "fairylady_003":
//         showPrivateMessages(data.cherise_dnd);
//         break;
//       case "cherrypoptart":
//         showPrivateMessages(data.cherise_dnd);
//         break;
//       case "dylanator":
//         showPrivateMessages(data.cherise_dnd);
//         break;
//       case "sing_the_blues":
//         showPrivateMessages(data.cherise_dnd);
//         break;
//       case "carly_mcr":
//         showPrivateMessages(data.cherise_dnd);
//         break;
//       case "jo_star":
//         showPrivateMessages(data.cherise_dnd);
//         break;
//     }
//   })
//   .catch(error => {
//     console.error("Error fetch", error);
//   });