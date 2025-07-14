import { useState } from "react";
import { generatePassword } from "../utils/generatePassword";
import PasswordOptions from "./components/Passwordptions";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordStrength from "./components/passwordStrength";

export default function Home() {
  const [length, setLength] = useState(12);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [usePassphrase, setUsePassphrase] = useState(false);
  const [typingFriendly, setTypingFriendly] = useState(false);

  const [password, setPassword] = useState("");

  const handleGenerate = () => {
    const newPass = generatePassword({
      length,
      useUppercase,
      useLowercase,
      useNumbers,
      useSymbols,
      usePassphrase,
      typingFriendly,
    });
    console.log('newPass --  ', newPass)
    setPassword(newPass);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">🔐 Password Generator</h1>

        <PasswordOptions
          length={length}
          setLength={setLength}
          useUppercase={useUppercase}
          setUseUppercase={setUseUppercase}
          useLowercase={useLowercase}
          setUseLowercase={setUseLowercase}
          useNumbers={useNumbers}
          setUseNumbers={setUseNumbers}
          useSymbols={useSymbols}
          setUseSymbols={setUseSymbols}
          usePassphrase={usePassphrase}
          setUsePassphrase={setUsePassphrase}
          typingFriendly={typingFriendly}
          setTypingFriendly={setTypingFriendly}
        />

        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Generate Password
        </button>

        {password && (
          <>
            <PasswordDisplay password={password} />
            <PasswordStrength password={password} />
          </>
        )}
      </div>
    </div>
  );
}
