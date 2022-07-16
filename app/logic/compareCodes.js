/*
  Helper function for compareCodes.
  Returns properties of the colors contained
  inside a code. The shape of the properties
  are the colors as keys and the number of appearances 
  as values.

  code: array<string>

  Return value: object {}
*/
function getCodeProps(code) {
  const props = {};

  code.forEach((color) => {
    if (props[color]) props[color]++;
    else props[color] = 1;
  });

  return props;
}

/*
  Returns the result of comparing two
  codes (a, b). Includes the number of
  color matches and the number of
  position matches.

  a, b: array<string>

  Return value: object {}
*/
export function compareCodes(a, b) {
  const propsA = getCodeProps(a);
  const propsB = getCodeProps(b);

  let colorMatches = 0;
  let positionMatches = 0;

  // Check color matches
  Object.entries(propsA).forEach(([color, amount]) => {
    if (propsB[color]) {
      colorMatches += Math.min(amount, propsB[color]);
    }
  });

  // Check positional matches
  for (let i = 0; i < a.length; i++) {
    const colorA = a[i];
    const colorB = b[i];

    if (colorA === colorB) positionMatches++;
  }

  return { colorMatches, positionMatches };
}
