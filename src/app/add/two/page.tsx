// app/add/page.tsx
"use client";

import { useState } from "react";

export default function AddPage() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Text input value:", inputValue);
    // You can process the input value here (e.g., make an API call)
  };

  return (
    <div>
      <h1>Add Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter something"
        />
        <button type="submit">Submit-two</button>
      </form>
    </div>
  );
}
