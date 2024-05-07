export function parseIndonesianCurrency(currencyString) {
  const numericString = currencyString.replace(/[^\d.]/g, "");

  const dotIndex = numericString.lastIndexOf(".");
  const cleanNumericString =
    numericString.substring(0, dotIndex) +
    numericString.substring(dotIndex + 1);

  const parsedValue = parseInt(cleanNumericString, 10);

  return parsedValue;
}
