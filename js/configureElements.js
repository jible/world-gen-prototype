// Configure buttons
let regenButton, cleanUpButton, smoothButton, methodSelect, gradientButton, currentMethod = "noise", buttonHolder
buttonHolder = document.getElementById("level-select")
gradientButton = document.getElementById("gradient")
regenButton = document.getElementById("regen");
smoothButton = document.getElementById("smooth");

// Set up responses
gradientButton.addEventListener('click', applyGradient)
regenButton.addEventListener('click', regenerateWorld);
smoothButton.addEventListener('click', smoothWorld);


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

function cleanUpWorld() {
    world.cleanUp();
}

function smoothWorld() {
    world.applySmooth();
}

function makeButtons(levels, world){
    for (let level of levels){
        let button = document.createElement("button")
        console.log(button)
        button.textContent = level.name
        button.addEventListener("click",()=>  {
            world.currentLevel = level
            world.generateWorld()
        })
        buttonHolder.appendChild(button)
    }
}