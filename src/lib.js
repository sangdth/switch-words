/*
 * This function take a string, split it into pair words,
 * then swap their first characters together, then join them
 * back and return a string;
 */
export const switchWordsDefault = (string) => {
  if (!string || typeof string !== 'string') return "";
  // Words is array of all words from input string
  const words = string.trim().split(" ");

  // Split into chunks of 2, because we could have bigger chunk size
  const chunks = words.reduce((a, _, i) => {
    if (i % 2 === 0) {
      a.push(words.slice(i, i + 2));
    }
    return a;
  }, []);

  // Swap the first character on every chunk. We make it separated
  // because we can do more complex swap if needed.
  const swapped = chunks.map((p) => {
    if (p.length === 2) {
      return [
        p[1].charAt(0) + p[0].substring(1, p[0].length),
        p[0].charAt(0) + p[1].substring(1, p[1].length),
      ];
    }

    return p;
  });

  // Simply flat out the chunks, because we already know
  // it does not have any deeper level, so concat is ok now
  return [].concat(...swapped).join(" ");
};

/*
 * This function serves the same functionality with above,
 * except it tries to do it as short as possible.
 */
// eslint-disable-next-line
export const switchWordsMini = s => (!s || typeof s !== 'string') ? '' : s.trim().split(" ").reduce((a, c, i, o) => (a.push((i + 1) % 2 === 0 ? o[i - 1].charAt(0) + c.substring(1, c.length) : o[i + 1] ? o[i + 1].charAt(0) + c.substring(1, c.length) : c), a), []).join(" ");
