let activity = document.getElementById('activity'),
type = document.getElementById('type'),
price = document.getElementById('price'),
accessibility = document.getElementById('accessibility'),
participants = document.getElementById('participants'),
newActivityBtn = document.getElementById('newActivity');

newActivityBtn.onclick = newTask;


async function newTask(){
    let url = "http://www.boredapi.com/api/activity";
    let response = await fetch(url);
    let result = await response.json();

    activity.innerHTML = result.activity;
    type.innerHTML = `type: ${result.type}`;
    price.innerHTML = `price: ${result.price * 100} lvl`;
    accessibility.innerHTML = `accessibility: ${+result.accessibility * 100}%`;
    participants.innerHTML = `participants: ${result.participants}`;

    
}
newTask();


