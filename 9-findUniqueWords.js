function findUniqueWords(transcript) {
  let words = transcript
    .toLowerCase()                 //Converts to lower case letters
    .replace(/[^\w\s]|_/g, "")     //Removes punctuation
    .split(/\s+/)                  //Removes white spaces
    .filter(word => word !== "")   //Removes empty strings
  return new Set(words).size
}
