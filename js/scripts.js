//Business Logic
function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(functin(word) {
    wordCount++;
  });
  return wordCount;
}