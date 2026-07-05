const riders = {
    1: "Tadej Pogačar",
    11: "Jonas Vingegaard",
    21: "Remco Evenepoel",
    31: "Mathieu van der Poel",
    41: "Wout van Aert"
};

const input = document.getElementById("numberInput");
const result = document.getElementById("result");

input.addEventListener("input", () => {
    const number = input.value;

    if (number === "") {
        result.textContent = "Bitte eine Nummer eingeben.";
        return;
    }

    result.textContent = riders[number] || "Nicht gefunden";
});
