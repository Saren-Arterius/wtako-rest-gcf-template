export const sleep = ms => new Promise(rs => setTimeout(rs, ms));

export const normalizeURL = (base: string, url: string) => {
  // https://www.example.com/path
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  // //www.example.com/path
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  // /path
  if (url.startsWith('/')) {
    return `${base}${url.substr(1)}`;
  }
  // www.example.com/path
  if (url.split('/')[0].includes('.')) {
    return `http://${url}`;
  }
  // path
  return `${base}${url}`;
};

export const trimChar = (string, charsToRemove) => {
  const set = {};
  charsToRemove.split('').forEach((c) => { set[c] = true; });
  while (set[string.charAt(0)]) {
    string = string.substring(1);
  }
  while (set[string.charAt(string.length - 1)]) {
    string = string.substring(0, string.length - 1);
  }
  return string;
};

export const counter = (words: [string]) => {
  const freqs = {};
  words.forEach((w) => {
    freqs[w] = (freqs[w] || 0) + 1;
  });
  return freqs;
};
