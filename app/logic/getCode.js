/*
  Returns a random code with specified config. Will read
  size, colors and if duplicates are allowed.

  config: object {}

  Return value: array<string>
*/
export function getCode(config) {
  const { size, colors, duplicates } = config;
  const code = [];

  while (code.length !== size) {
    // Get random float, get first decimal as integer, convert to valid index number
    const randomIndex = Math.floor(Math.random() * 10) % colors.length;
    const color = colors[randomIndex];

    if (duplicates) code.push(color);
    // Don't allow duplicates
    else if (code.indexOf(color) === -1) code.push(color);
  }

  return code;
}
