let rounds = 0;
let compWin = 0;
let userWin = 0;

const symbolIcons = ['bi bi-boxes fs-1', 'bi bi-book fs-1', 'bi bi-scissors fs-1'];

let gameButtons = document.getElementsByClassName('choice');

document.getElementsByClassName('choice');
for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener('click', playGame);
}
document.getElementById('playAgain').addEventListener('click', function() {
    location.reload();
});

// Funktion zum Ausführen des Spielzugs
function playGame(event) {
    const userSymbol = parseInt(event.currentTarget.getAttribute('data-value'));

    const computerSymbol = Math.floor(Math.random() * 3);

    document.getElementById('symbolUser').innerHTML = `<i class="${symbolIcons[userSymbol]}"></i>`;
    document.getElementById('symbolComp').innerHTML = `<i class="${symbolIcons[computerSymbol]}"></i>`;

    rounds++;

    document.getElementById('roundEle').textContent = rounds;

    if (rounds === 3) {
        for (let i = 0; i < gameButtons.length; i++) {
            gameButtons[i].removeEventListener('click', playGame);
        }
        document.getElementById('playAgain').classList.remove('d-none');
    }

    if (userSymbol === computerSymbol) {
        return;
    } else
    // Bestimmung des Gewinners und Aktualisierung der entsprechenden Anzeige
        // 0 = Stein, 1 = Papier, 2 = Schere
    if ((userSymbol === 0 && computerSymbol === 2) ||
        (userSymbol === 1 && computerSymbol === 0) ||
        (userSymbol === 2 && computerSymbol === 1))
    {
        userWin++;
    } else {
        compWin++;
    }

    document.getElementById('userResult').textContent = userWin;
    document.getElementById('compResult').textContent = compWin;

}
