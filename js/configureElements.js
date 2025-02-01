// Configure buttons
let regenButton, cleanUpButton, smoothButton, methodSelect, gradientButton, currentMethod = "noise", buttonHolder
buttonHolder = document.getElementById("level-select")
regenButton = document.getElementById("regen");

// Set up responses
regenButton.addEventListener('click', regenerateWorld);


function applyGradient(){
    world.applyGradient()
}

function resizeScreen() {
    const centerHorz = canvasContainer.width() / 2;
    const centerVert = canvasContainer.height() / 2;
    resizeCanvas(canvasContainer.width(), canvasContainer.height());
}

function regenerateWorld() {
    seed++;
    world.generateWorld( Math.floor(Math.random(seed) * 100));
}


function makeButtons(levels, world){
    for (let level of levels){
        let button = document.createElement("button")
        button.textContent = level.name
        button.addEventListener("click",()=>  {
            world.currentLevel = level
            world.generateWorld()
        })
        buttonHolder.appendChild(button)
    }
}