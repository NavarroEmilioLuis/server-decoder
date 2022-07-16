/*
  Returns a random code with specified size,
  containing only specified colors. Colors may repeat.

  size: int
  colors: array<string>
  canRepeat: boolean

  Return value: array<string>
*/
export function getCode(size, colors, canRepeat = true) {
  const code = [];

  while (code.length !== size) {
    // Get random float, get first decimal as integer, convert to valid index number
    const randomIndex = Math.floor(Math.random() * 10) % colors.length;
    const color = colors[randomIndex];

    if (canRepeat) code.push(color);
    // Don't allow duplicates
    else if (code.indexOf(color) === -1) code.push(color);
  }

  return code;
}
