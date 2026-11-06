function calculateStatus() {

    const level = Number(
        document.getElementById("level").value
    );

    document.getElementById("hp").textContent =
        100 + level * 10;

    document.getElementById("atk").textContent =
        20 + level * 5;

    document.getElementById("hit").textContent =
        50 + level * 8;

    document.getElementById("def").textContent =
        10 + level * 4;

    document.getElementById("eva").textContent =
        10 + level * 3;
}
