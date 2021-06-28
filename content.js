
let video = document.querySelector("video");

if (video) {
    video.pause();

    const container = document.createElement("div");
    container.style.width = "90px";
    container.style.height = "40px";
    container.style.position = "fixed";
    container.style.backgroundColor = "rgba(255,255,255,0.5)";
    container.style.borderRadius = "20px";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "space-around";
    container.style.zIndex = "1000000";

    const changeSpeed = (val) => {
        val.target.innerText === "+" ? video.playbackRate += 0.1 : video.playbackRate -= 0.1;
        current.textContent = Math.floor((video.playbackRate + Number.EPSILON) * 100) / 100;
    };

    const slower = document.createElement("button");
    slower.textContent = "-";
    slower.style.fontWeight = "bold";
    slower.style.fontFamily = "sans-serif";
    slower.style.borderRadius = "100%";
    slower.style.border = "none";
    slower.addEventListener("click", changeSpeed);

    const current = document.createElement("p");
    current.textContent = video.playbackRate;
    current.style.fontWeight = "bold";
    current.style.fontFamily = "sans-serif";
    current.style.userSelect = "none";

    const faster = document.createElement("button");
    faster.textContent = "+";
    faster.style.fontWeight = "bold";
    faster.style.fontFamily = "sans-serif";
    faster.style.borderRadius = "100%";
    faster.style.border = "none";
    faster.addEventListener("click", changeSpeed);

    container.appendChild(slower);
    container.appendChild(current);
    container.appendChild(faster);

    document.querySelector("body").appendChild(container);
}