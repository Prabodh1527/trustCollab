document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    // THEME

    const themeOptions =
        document.querySelectorAll(".theme-option");

    themeOptions.forEach(option => {

        option.addEventListener("click", () => {

            themeOptions.forEach(card =>
                card.classList.remove("active-theme")
            );

            option.classList.add("active-theme");

            const theme =
                option.querySelector("h4")
                .textContent
                .trim();

            if(theme === "Dark"){

                body.classList.add("dark-mode");

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }

            else if(theme === "Light"){

                body.classList.remove("dark-mode");

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

            else{

                localStorage.setItem(
                    "theme",
                    "system"
                );

                body.classList.remove("dark-mode");

            }

        });

    });

    // LOAD SAVED THEME

    const savedTheme =
        localStorage.getItem("theme");

    if(savedTheme === "dark"){

        body.classList.add("dark-mode");

    }

    // FONT SIZE

    const fontSelect =
        document.querySelector(
            ".appearance-select"
        );

    if(fontSelect){

        const savedFont =
            localStorage.getItem("fontSize");

        if(savedFont){

            fontSelect.value = savedFont;

            applyFont(savedFont);

        }

        fontSelect.addEventListener(
            "change",
            () => {

                const size =
                    fontSelect.value;

                applyFont(size);

                localStorage.setItem(
                    "fontSize",
                    size
                );

            }
        );

    }

    function applyFont(size){

        if(size === "Small"){

            document.documentElement.style.fontSize =
                "14px";

        }

        else if(size === "Large"){

            document.documentElement.style.fontSize =
                "18px";

        }

        else{

            document.documentElement.style.fontSize =
                "16px";

        }

    }

    // ACCENT COLORS

    document
        .querySelectorAll(".color-circle")
        .forEach(circle => {

            circle.addEventListener(
                "click",
                () => {

                    let color =
                        getComputedStyle(circle)
                        .backgroundColor;

                    document.documentElement
                        .style.setProperty(
                            "--primary-indigo",
                            color
                        );

                    localStorage.setItem(
                        "accentColor",
                        color
                    );

                }
            );

        });

    const savedColor =
        localStorage.getItem(
            "accentColor"
        );

    if(savedColor){

        document.documentElement
            .style.setProperty(
                "--primary-indigo",
                savedColor
            );

    }

});