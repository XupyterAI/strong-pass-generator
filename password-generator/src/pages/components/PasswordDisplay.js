import React from "react";

export default function PasswordDisplay({ password }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between bg-gray-100 p-2 rounded border">
        <span className="break-all">{password}</span>
        <button
          onClick={copyToClipboard}
          className="text-blue-500 hover:text-blue-700 ml-2"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
