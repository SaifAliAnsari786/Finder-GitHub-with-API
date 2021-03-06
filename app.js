//Init github
const github = new GitHub;

//Init ui
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

// serch input event listner
searchUser.addEventListener('keyup',(e) =>{
    //Get input text
    const userText = e.target.value;
    if(userText !== ''){
        //Make http call
        github.getUser(userText)
        .then(data =>{
            // console.log(data);
          if(data.profile.message === 'NOT FOUND'){
              //show alert
               ui.showAlert('User not found', 'alert alert-danger');
          }else{
              // show profile 
              ui.showProfile(data.profile);
              ui.showRepos(data.repos);
          }
        })
    }else {
        //Clear profile
        ui.clearProfile();
    }
});