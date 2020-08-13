    function mostrarEsconderMenu() {

        var mediaQuery = window.matchMedia("(max-width: 768px)");

        if (mediaQuery.matches) {
            var menuDisplay = document.getElementById("menu").style.display;

            if (menuDisplay == "block") {
                document.getElementById("menu").style.display = "none";
            } else {
                document.getElementById("menu").style.display = "block";
            }
        }

    }

    function esconderMenu() {
        var menuDisplay = document.getElementById("menu").style.display;

        if (menuDisplay == "block") {
        document.getElementById("menu").style.display = "none";
        }
    }
