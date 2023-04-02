const url = 'http://localhost:3000/tasks';

try{
    fetch(url, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        let rawData = JSON.stringify(response);
        let data = JSON.parse(rawData).tasks;

        // const num = document.createElement('div');
        // const title = document.createElement('div');
        // const desc = document.createElement('div');
        // const importance = document.createElement('div');

        // num.textContent = data.tasknum;
        // title.textContent = data.title;
        // desc.textContent = data.description;
        // importance.textContent = data.importance;

        for (let i = 0; i < Object.keys(data).length; i++) {
            const taskDiv = document.createElement('button');
            taskDiv.classList.add('task');
          
            // Create three new text nodes and append them to the div
            const title = document.createElement('p');
            const desc = document.createElement('p');
            const importance = document.createElement('p');
          
            taskDiv.appendChild(title);
            //taskDiv.appendChild(desc);
            taskDiv.appendChild(importance);
          
            title.textContent = data[i].title;
            desc.textContent = data[i].description;
            importance.textContent = data[i].importance;
          
            const tasksDiv = document.getElementById('tasks');
            tasksDiv.appendChild(taskDiv);
          }          
    })
} catch (err) {
    alert(err);
}