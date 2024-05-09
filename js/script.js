
    // Haal de tekst van xmp en plaats deze in de bijbehorende knop
    window.addEventListener("DOMContentLoaded", function() {
        var numberOfButtons = 50; // Aantal knoppen
        for (var i = 1; i <= numberOfButtons; i++) {
            var copyText = document.getElementById("copyText" + i).innerText;
            var copyBtn = document.getElementById("copyBtn" + i);
            copyBtn.innerText = copyText;
        }
    });

    // Eventlisteners voor klikken op de knoppen
    document.querySelectorAll(".copyBtn").forEach(function(button) {
        button.addEventListener("click", function() {
            var copyText = this.previousElementSibling.innerText;
            navigator.clipboard.writeText(copyText).then(function() {
                console.log("Tekst gekopieerd: " + copyText);
                // Toon de popup
                var popup = document.createElement("div");
                popup.textContent = "Tekst gekopieerd: " + copyText;
                popup.style.position = "fixed";
                popup.style.bottom = "20px";
                popup.style.left = "50%";
                popup.style.transform = "translateX(-50%)";
                popup.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                popup.style.color = "white";
                popup.style.padding = "10px 20px";
                popup.style.borderRadius = "5px";
                popup.style.transition = "opacity 0.5s";
                document.body.appendChild(popup);
                // Laat de popup na 2 seconden verdwijnen
                setTimeout(function() {
                    popup.style.opacity = "0";
                    setTimeout(function() {
                        document.body.removeChild(popup);
                    }, 500);
                }, 2000);
            }, function(err) {
                console.error("Kopiëren mislukt: ", err);
            });
        });
    });

    //Cookies popup voor home index 
    document.addEventListener("DOMContentLoaded", function() {
        var popup = document.getElementById('cookie-popup');
        setTimeout(function() {
            popup.style.display = 'none';
        }, 2000); // Verberg na 2 seconden
    });

