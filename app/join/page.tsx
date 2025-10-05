"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function JoinFormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [class10, setClass10] = useState("");
  const [class12, setClass12] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, email, age, city, class10, class12, aadhaar };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzrFhfXQZva8QkJ-yxxq6dvSIlh2ss6towHa7aoziOje4Ja2VE-htbav6jkbTTOXrnH/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.status === "success") {
  // Redirect to thank you page
  router.push("/thank-you");
}
 else {
        setStatus("Error submitting form: " + data.message);
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Join Your Risk-Free Journey</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required className="border p-2 rounded"/>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="border p-2 rounded"/>
        <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} required className="border p-2 rounded"/>
        <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} required className="border p-2 rounded"/>
        <input type="text" placeholder="Class 10 Marks" value={class10} onChange={e => setClass10(e.target.value)} required className="border p-2 rounded"/>
        <input type="text" placeholder="Class 12 Marks" value={class12} onChange={e => setClass12(e.target.value)} required className="border p-2 rounded"/>
        <input type="text" placeholder="Aadhaar" value={aadhaar} onChange={e => setAadhaar(e.target.value)} required className="border p-2 rounded"/>
        <button type="submit" className="bg-blue-900 hover:bg-blue-950 text-white p-3 rounded">Submit</button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
