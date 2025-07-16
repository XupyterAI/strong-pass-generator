import React from "react";

export default function PasswordDisplay({ password }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between bg-gray-200 py-3 px-4 rounded">
        <span className="break-all">{password}</span>
        <button
          onClick={copyToClipboard}
          className="text-indigo-600 font-bold hover:text-blue-700 ml-2 cursor-pointer"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
