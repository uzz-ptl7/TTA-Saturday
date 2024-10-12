const ul = document.querySelector('#listContainer')

const list = ['Find wife for Isma', 'Attend Isma Marriage', 'Visit Isma after Marriage', 'Play with Isma Children', 'lkill Isma']

list.forEach(function(listItem){
    ul.appendChild = `<li class="bg-blue-200 p-3 rounded-lg my-2 flex space-between justify-between"><span>⭕</span><span>Find wife for Isma</span><span class="cursor-pointer">🗑️ ✏️</span></li>`
});