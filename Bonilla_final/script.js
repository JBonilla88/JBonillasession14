function flipCard(container) {
    const innerCard = container.querySelector('.card-inner');
    innerCard.classList.toggle('is-flipped');
}

function kaijuRoar(soundPath) {
    
    var roar = new Audio(soundPath);
    roar.play();

    var title = document.getElementById('main-title');
    title.classList.add('shake-title');

    setTimeout(function() {
        title.classList.remove('shake-title');
    }, 4000);
}

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;


    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }


    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }


    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}


dragElement(document.getElementById('kaiju1'));
dragElement(document.getElementById('kaiju2'));
dragElement(document.getElementById('kaiju3'));
dragElement(document.getElementById('kaiju4'));
dragElement(document.getElementById('kaiju5'));
dragElement(document.getElementById('kaiju6'));
dragElement(document.getElementById('kaiju7'));
dragElement(document.getElementById('kaiju9'));
dragElement(document.getElementById('kaiju10'));
dragElement(document.getElementById('kaiju12'));
dragElement(document.getElementById('kaiju13'));
dragElement(document.getElementById('kaiju14'));
dragElement(document.getElementById('kaiju16'));

