// Deklaration der Variablen für die Anzahl der Runden und die Anzahl der Gewinne von Computer und Benutzer
let rounds = 0;
let compWin = 0;
let userWin = 0;

// Array mit den Klassen für die Symbol-Icons
const symbolIcons = ['bi bi-boxes fs-1', 'bi bi-book fs-1', 'bi bi-scissors fs-1'];

// Selektieren aller Buttons mit der Klasse choice und speichere sie in die Variable gameButtons
let gameButtons = document.getElementsByClassName('choice');


// Füge jedem Button einen Event-Listener (for oder forEach) für das Klicken auf die Schaltflächen hinzufügen, for Schleife
// dabei soll die Funktion playGame ausgeführt werden
document.getElementsByClassName('choice');
for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener('click', playGame);
}

// Füge einen Event-Listener für das Klicken auf den "Nochmal spielen" Button hinzufügen, der soll direkt location.reload() aufrufen um die Seite neu zu laden
document.getElementById('playAgain').addEventListener('click', function() {
    location.reload();
});

// Funktion zum Ausführen des Spielzugs
function playGame(event) {
    // Durch event.currentTarget kannst du auf den Button zugreifen
    // lese das Attribute data-value mit getAttribute aus, wandle den Wert in eine Zahl um und speicher den Wert in eine Konstante
    const userSymbol = parseInt(event.currentTarget.getAttribute('data-value'));

    // Zufällig generiertes Symbol für den Computer
    const computerSymbol = Math.floor(Math.random() * 3);

    // Anzeige der Symbole für Benutzer und Computer
    // Um das richtige Symbol anzuzeigen sind die Klassen im Array symbolIcon gespeichert, durch den data-value kann an der Stelle vom Array zugegriffen werden
    // Füge dem Element mit der ID symbolUser das HTML `<i class="${symbolIcons[userSymbol]}"></i>` hinzu und
    // dem Element mit der ID symbolComp das HTML `<i class="${symbolIcons[computerSymbol]}"></i>`
    document.getElementById('symbolUser').innerHTML = `<i class="${symbolIcons[userSymbol]}"></i>`;
    document.getElementById('symbolComp').innerHTML = `<i class="${symbolIcons[computerSymbol]}"></i>`;

    // Erhöhe did Anzahl der Runden (gespeichert in der Variable
    rounds++;

    // Ersetze die aktualisierte Rundenanzahl im Element mit der ID roundEle
    document.getElementById('roundEle').textContent = rounds;

    // Überprüfung, ob die maximale Anzahl an 3 Runden erreicht wurde
    // Wenn es die dritte Runde ist, entferne die EventListener von den Buttons mit der Klasse choice
    // und entferne die Klasse d-none vom button mit der ID playAgain
    if (rounds === 3) {
        for (let i = 0; i < gameButtons.length; i++) {
            gameButtons[i].removeEventListener('click', playGame);
        }
        document.getElementById('playAgain').classList.remove('d-none');
    }

    // Überprüfung des Ergebnisses
    // Wenn Gleichstand (userSymbol und computerSymbol)
    // Überprüfung des Ergebnisses
    // Wenn Gleichstand (userSymbol und computerSymbol)
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

    // Gib im Element mit der ID userResult aus wie oft der User gewonnen hat (userWin)
    // und im Element mit der ID compResult wie oft der Computer gewonnen hat (compWin)
    document.getElementById('userResult').textContent = userWin;
    document.getElementById('compResult').textContent = compWin;

}
