export function parseIndonesianCurrency(currencyString) {
  // Remove all non-numeric characters except dots
  const numericString = currencyString.replace(/[^\d.]/g, "");

  // Remove all dots from the string
  const cleanNumericString = numericString.replace(/\./g, "");

  // Parse the cleaned numeric string into an integer
  const parsedValue = parseInt(cleanNumericString, 10);

  return parsedValue;
}
