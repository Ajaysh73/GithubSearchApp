// Initialize Github
const github = new Github();

// Initialize UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

// Attach event listener to serachUser
searchUser.addEventListener("keyup", function(event) {
  const userText = event.target.value;

  if (userText != "") {
    // call to github
    console.log(userText);
    github.getuser(userText).then(function(data) {
      if (data.profile.message === "Not Found") {
        // not found; Show Alert
        ui.showAlert("user not found!", "alert alert-danger");
      } else {
        // Show Profilr
        //console.log("found", data.profile, data.profileRepos);
        ui.showProfile(data.profile, data.profileRepos);
        ui.showRepos(data.profileRepos);
      }
    });
  } else {
    // clear profile
  }
});
