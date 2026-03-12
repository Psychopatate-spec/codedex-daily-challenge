function checkUrl(address) {
  let verifiedConditions = 0
  //First condition: starts with https:// or http://
  if (address.startsWith("http://") || address.startsWith("https://")) verifiedConditions++
  //Second condition: a dot is included
  if (address.includes(".")) verifiedConditions++
  //Third condition: only letters, digits, dots, columns, slashes and hyphens
  let filteredAddress = address.replaceAll(/[A-Za-z0-9.:/-]/g, "")
  if (filteredAddress === "") verifiedConditions++
  let isValid = verifiedConditions === 3 ? "valid" : "invalid"
  return isValid
}
