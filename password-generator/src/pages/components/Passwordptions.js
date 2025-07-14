import React from "react";

export default function PasswordOptions({
  length,
  setLength,
  useUppercase,
  setUseUppercase,
  useLowercase,
  setUseLowercase,
  useNumbers,
  setUseNumbers,
  useSymbols,
  setUseSymbols,
  usePassphrase,
  setUsePassphrase,
  typingFriendly,
  setTypingFriendly,
}) {
  return (
    <>
      <div className="mb-4">
        <label className="block font-semibold">Password Length: {length}</label>
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
          disabled={usePassphrase} 
        />
      </div>

      <div className="space-y-2 mb-4">
        <label className="block">
          <input
            type="checkbox"
            checked={useUppercase}
            onChange={() => setUseUppercase(!useUppercase)}
            disabled={usePassphrase}
          />
          <span className="ml-2">Uppercase</span>
        </label>
        <label className="block">
          <input
            type="checkbox"
            checked={useLowercase}
            onChange={() => setUseLowercase(!useLowercase)}
            disabled={usePassphrase}
          />
          <span className="ml-2">Lowercase</span>
        </label>
        <label className="block">
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
            disabled={usePassphrase}
          />
          <span className="ml-2">Numbers</span>
        </label>
        <label className="block">
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}
            disabled={usePassphrase}
          />
          <span className="ml-2">Symbols</span>
        </label>

        <label className="block">
          <input
            type="checkbox"
            checked={usePassphrase}
            onChange={() => {
              setUsePassphrase(!usePassphrase);
              if (!usePassphrase) {
                setTypingFriendly(false);
              }
            }}
          />
          <span className="ml-2">Passphrase Style (xkcd)</span>
        </label>

        <label className="block">
          <input
            type="checkbox"
            checked={typingFriendly}
            onChange={() => setTypingFriendly(!typingFriendly)}
            disabled={usePassphrase}
          />
          <span className="ml-2">Typing-friendly Password</span>
        </label>
      </div>
    </>
  );
}
