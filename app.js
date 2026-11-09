
// Caesar Cipher Function
function caesarCipher(text, shift) {
    return text.replace(/[a-z]/gi, function(letter) {
        let base = letter === letter.toUpperCase() ? 65 : 97;

        return String.fromCharCode(
            (letter.charCodeAt(0) - base + shift + 26) % 26 + base
        );
    });
}

// Get message and key
function getValues() {
    let message = document.getElementById("message").value;
    let key = Number(document.getElementById("key").value);

    if (!message.trim() || !Number.isInteger(key) || key < 1 || key > 25) {
        alert("Enter a message and a key between 1 and 25!");
        return null;
    }

    return { message, key };
}

// Encrypt Button
document.getElementById("encryptBtn").onclick = function() {
    let data = getValues();
    if (data) {
        document.getElementById("result").value =
            caesarCipher(data.message, data.key);
    }
};

// Decrypt Button
document.getElementById("decryptBtn").onclick = function() {
    let data = getValues();
    if (data) {
        document.getElementById("result").value =
            caesarCipher(data.message, -data.key);
    }
};

// Brute Force Button
document.getElementById("crackBtn").onclick = function() {
    let message = document.getElementById("crackMessage").value;

    if (!message.trim()) {
        alert("Enter an encrypted message first!");
        return;
    }

    let output = "";

    for (let key = 1; key <= 25; key++) {
        output += "Key " + key + ": " +
                  caesarCipher(message, -key) + "<br>";
    }

    document.getElementById("crackResults").innerHTML = output;
};

// Secret Mission
document.getElementById("checkBtn").onclick = function() {
    let answer = document.getElementById("answer").value.trim().toUpperCase();
    let feedback = document.getElementById("feedback");

    if (answer === "HELLO WORLD") {
        feedback.textContent = "ACCESS GRANTED! Mission completed.";
    } else {
        feedback.textContent = "ACCESS DENIED! Try again.";
    }
};
