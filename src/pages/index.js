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
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6 flex gap-6 items-center flex-wrap">
        <div className="mx-auto px-6">
          <div className="text-center inline-block">
            <div className="text-7xl">🔐</div>
            <div className="mt-7 text-3xl md:text-4xl font-bold">
              Password Generator
            </div>
            <div className="text-gray-500">Generate strong password for your accounts !</div>
            <div className="mt-10 text-gray-400 border-t pt-10">powered by <a href="https://xupyter.sbs" className="text-red-400 underline">xupyter solutions</a> with love</div>
          </div>
        </div>
        <div className="min-w-xs flex-1">
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
            className="bg-gray-950 font-semibold text-white w-full py-3 rounded hover:bg-gray-900 cursor-pointer transition"
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
    </div>
  );
}
