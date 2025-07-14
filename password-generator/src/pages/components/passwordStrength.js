import React from "react";

const getStrength = (password) => {
  let score = 0;
  if (!password) return { label: "Too Weak", color: "bg-red-500" };
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { label: "Weak", color: "bg-red-500" };
  if (score === 2) return { label: "Medium", color: "bg-yellow-500" };
  if (score >= 3) return { label: "Strong", color: "bg-green-500" };
};

export default function PasswordStrength({ password }) {
  const { label, color } = getStrength(password);

  return (
    <div className="mt-2">
      <div className="h-2 w-full rounded bg-gray-300">
        <div
          className={`h-2 ${color} rounded`}
          style={{
            width:
              label === "Strong"
                ? "100%"
                : label === "Medium"
                ? "66%"
                : "33%",
          }}
        ></div>
      </div>
      <p className="text-sm mt-1 font-semibold text-gray-700">{label}</p>
    </div>
  );
}
