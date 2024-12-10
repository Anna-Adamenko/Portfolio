[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7xShAZP7)
# Aufgabe 4 & 5

## Thema: Zoo und seine Bewohner
Erstelle eine Website bestehend aus vier Seiten.
Benutz zum Beispiel [unsplash](https://unsplash.com/de) für passende Bilder

### 1. Seite: Willkommensseite/Homepage
- Füge eine Begrüßungsnachricht, Bilder (Bildergalerie mit Grid System) und ein responsiv eingebundenes YouTube/Vimeo-Video hinzu (nutze das aspect-ratio Attribut für eine angepasste Darstellung).

### 2. Seite: Infoseite
Erstelle eine Tabelle mit folgenden Spalten:
- Tier
- Vegetarier (ja/nein)
- Gattung
- Lebensraum
- Patenschaft (ja/nein)
- Name (falls das Tier eine Patenschaft hat)
- Erweitere die Tabelle nach Bedarf.

Anforderungen:
- Fasse Zellen unter "Patenschaft" und "Name" zusammen, wenn keine Patenschaft vorhanden ist (mindestens ein Eintrag).
- Verbinde Zellen vertikal, um gemeinsame Informationen für mehrere Tiere darzustellen. (z.B. Vegetarier)
- Die Tabelle soll responsiv sein.

### 3. Seite: Kontaktseite
Implementiere ein Formular mit folgenden Feldern
Felder die Abgefragt werden (achte auf die Validierung server und clientseitig)
- Name
- E-Mail-Adresse
- Besuchstag ([date](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date))
- Besuchszeit ([time](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time))
- Zufriedenheit (Skala: [range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range))
- Weiterempfehlung ([ja/nein](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio))
- Lieblingstierart (Mehrfachauswahl möglich: [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox))
- Kommentar ([Textfeld](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea?retiredLocale=de))
- Besucherinformation ([Dropdown-Menü](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select?retiredLocale=de))
    - Familienausflug
    - Allein unterwegs
    - Gruppenausflug
    - Ausflug mit Freunden
    - was anderes
- Absende- und Zurücksetzbutton (submit & reset)

Speichere die Formulareingaben in einer JSON-Datei. Stelle sicher, dass das JSON-File bei erneuter Einsendung erweitert wird.
Das Abspeichern des Kommentars im JSON ist optional (für Tüftler), alle anderen Felder sollten "Muss" Felder sein!

### 4. Seite: Ausgabe
Zeige alle Eingaben aus der JSON-Datei. Wähle ein passendes Format zur Darstellung, wie z.B. eine Tabelle, Bootstrap-Cards, ein Akkordeon, ...

### Technische Anforderungen
Nutze die Fetch API für das Speichern und Auslesen der Daten. [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Bewertung
- Willkommensseite und Infoseite wird in Abgabe 4 bewertet
- Kontaktseite und Ausgabe wird in Abgabe 5 bewertet

### Was wird bewertet
- Ansprechendes **Design** (wenn du die Seiten nur mit einem CSS Framework stylst wird das Augenmerk besonders auf korrekte Verwendung des Frameworks und die Responsivität gesetzt)
- Achte auf korrekte **Semantik und Syntax** [Validator w3](https://validator.w3.org/)
- Achte darauf das die Seite **responsive** ist
- Nutze **SCSS** für dein eigenes Styling
- Achte auf deine **Ordnerstruktur**
- Achte auf bezeichnende **Seiten-, Variablen- und Funktionsnamen**
- Nutze ein **CSS Framework** deiner Wahl
    - [Bootstrap](https://getbootstrap.com/)
    - [Materialize](https://materializecss.com/)
    - [Tailwind](https://tailwindcss.com/)
    - [Bulma](https://bulma.io/)
    - ...
- Kreativität und Erweiterung der Grundanforderungen: Nutze CSS3 Spielereien, Pseudoklassen/Pseudoelemente und oder JS um die Seite aufzuwerten (nutze dazu dein Wissen aus dem vorherigen Semester)

### Bewertungskriterien:
- **Design**: Das Design sollte ansprechend sein. Besonders bei der Verwendung eines CSS-Frameworks wird auf die korrekte Anwendung und Responsivität geachtet.
- **Technische Umsetzung**: Korrekte Semantik und Syntax, Nutzung von SCSS, angemessene Ordnerstruktur, aussagekräftige Namen für Seiten, Variablen und Funktionen.
- **Funktionalität**: Die Seiten müssen responsiv und funktional sein.

## Punkteverteilung
- **Design und Responsivität**: 20%
- **Technische Korrektheit (Semantik, Syntax, SCSS, Nutzung des Frameworks)**: 40%
- **Funktionalität und Benutzerfreundlichkeit**: 30%
- **Kreativität und Erweiterung der Grundanforderungen**: 10%
