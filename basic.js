function setPlayerStyle(player){
    player.style.border = '2px solid red';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
const allPlayer = document.getElementsByClassName('player');
for(const player of allPlayer){
    setPlayerStyle(player);
    // player.addEventListener('click',function(){
    //     player.style.backgroundColor = 'pink';
    // });
}
function addPlayer(){
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h2>New Player</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quo nemo excepturi ad sit, facere odio, perspiciatis ullam libero placeat error voluptas! Aut, quaerat adipisci necessitatibus est molestiae deserunt sint.</p>
    `
    playerContainer.appendChild(player);
    setPlayerStyle(player);
    // player.addEventListener('click',function(){
    //     player.style.backgroundColor = 'pink';
    // });

}

document.getElementById('players').addEventListener('click',function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'pink';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'pink';
    }
})