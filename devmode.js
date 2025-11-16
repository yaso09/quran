if (window.location.hash == "#devmode") {
    const monitor = document.createElement("div");
    monitor.id = "devmodemonitor";
    monitor.style.position = "fixed";
    monitor.style.top = "12px";
    monitor.style.left = "12px";
    monitor.style.zIndex = 999;

    document.body.appendChild(monitor);

    document.addEventListener("keydown", function (e) {
        // ctrlKey: CTRL basılı mı?
        // e.code === "Space": boşluk tuşu mu?
        if (e.ctrlKey && e.code === "Enter") {
            console.log("CTRL + SPACE algılandı!");

            // localStorage'deki tüm değerleri çek
            const tumVeriler = {};

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                tumVeriler[key] = localStorage.getItem(key);
            }

            console.log("localStorage içeriği:", tumVeriler);
            document.querySelector("#devmodemonitor").innerHTML = JSON.stringify(tumVeriler);
        }
    });

    console.info("Devmode activated");
} else document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "Enter") {
        window.location.hash = "#devmode";
        window.location.reload();
    }
})