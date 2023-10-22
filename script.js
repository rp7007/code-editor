document.addEventListener("DOMContentLoaded", function() {
    const codeElement = document.getElementById("code");
    const copyButton = document.getElementById("copy-button");
    const saveButton = document.getElementById("save-button");
    const lockButton = document.getElementById("lock-button");

    // Copy button functionality
    copyButton.addEventListener("click", function() {
        const codeText = codeElement.innerText;
        const textArea = document.createElement("textarea");
        textArea.value = codeText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    });

    // Save button functionality (you can implement this as needed)
    saveButton.addEventListener("click", function() {
        // Implement save functionality here
    });

    // Lock/Unlock button functionality
    let isLocked = false;
    lockButton.addEventListener("click", function() {
        isLocked = !isLocked;
        codeElement.contentEditable = !isLocked;
        lockButton.textContent = isLocked ? "Unlock" : "Lock";
    });
});
