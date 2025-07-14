const words = [
  "tree", "river", "light", "cloud", "banana", "mountain", "window",
  "dream", "pencil", "camera", "ocean", "planet", "sun", "moon", "star"
];

export function generatePassword(options) {
  const {
    length,
    useUppercase,
    useLowercase,
    useNumbers,
    useSymbols,
    usePassphrase,
    typingFriendly
  } = options;


  if (usePassphrase) {
    const wordCount = 4;
    const passphrase = Array.from({ length: wordCount }, () => {
      return words[Math.floor(Math.random() * words.length)];
    }).join("-");
    return passphrase;
  }

  const easyChars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let charset = "";

  if (typingFriendly) {
    charset = easyChars;
  } else {
    if (useUppercase) charset += upper;
    if (useLowercase) charset += lower;
    if (useNumbers) charset += numbers;
    if (useSymbols) charset += symbols;
  }

  if (charset.length === 0) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
