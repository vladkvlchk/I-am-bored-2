let activity = document.getElementById('activity');
let newActivityBtn = document.getElementById('newActivity');
newActivityBtn.onclick = newTask;


async function newTask(){
    let url = "http://www.boredapi.com/api/activity";
    let response = await fetch(url);
    let result = await response.json();

    console.log(result);

    activity.innerHTML = result.activity;
    
}
newTask();


