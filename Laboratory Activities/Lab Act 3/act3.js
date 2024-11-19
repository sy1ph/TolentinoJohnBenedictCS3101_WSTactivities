function counter() {
    const text = document.getElementById('textinput').value.trim();

    const words = text.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    const sentences = text.split(/[.!?]+/).filter(Boolean);
    const sentenceCount = sentences.length;

    document.getElementById('wordCount').textContent = `Words: ${wordCount}`;
    document.getElementById('sentenceCount').textContent = `Sentences: ${sentenceCount}`;
}
