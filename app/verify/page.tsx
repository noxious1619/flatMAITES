"use client"; // This is a Client Component because it uses useState

import { useState } from "react";
import { ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

export default function VerifyPage() {
  const [enrollment, setEnrollment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // THE 148 LOGIC (Client-Side Check)
  const handleVerify = () => {
    setError(""); // Clear previous errors

    // 1. Basic Length Check
    if (enrollment.length !== 11) {
      setError("ID must be exactly 11 digits.");
      return;
    }

    // 2. Decode the ID
    const collegeCode = enrollment.substring(3, 6); // Characters 3,4,5
    const yearCode = parseInt(enrollment.substring(9, 11)); // Last 2 digits

    // 3. MAIT Check (148 or 964)
    if (collegeCode !== "148" && collegeCode !== "964") {
      setError("Access Denied. This is not a MAIT ID (Code 148/964).");
      return;
    }

    // 4. Batch Year Check (Optional: Allow only 2021-2026)
    if (yearCode < 21 || yearCode > 26) {
      setError("Batch year not eligible for this platform.");
      return;
    }

    // SUCCESS!
    setSuccess(true);
    // In the real app, we will save this to the database here.
  };

  return (
    <main className="min-h-screen bg-brand-bg flex items-center justify-center p-4">
      
      <div className="w-full max-w-lg bg-white border-2 border-black p-8 shadow-retro relative">
        
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck size={32} className="text-brand-blue" />
            <h1 className="font-heavy text-3xl uppercase">Security Check</h1>
          </div>
          <p className="font-mono text-sm text-gray-600">
            To keep <span className="font-bold">flatMAITES</span> exclusive, we verify every single user.
          </p>
        </div>

        {/* INPUT AREA */}
        <div className="mb-6">
          <label className="font-heavy text-xs uppercase mb-2 block">
            Enter Enrollment Number
          </label>
          <input 
            type="text" 
            placeholder="e.g. 07814802723"
            value={enrollment}
            onChange={(e) => setEnrollment(e.target.value)}
            className="w-full bg-gray-50 border-2 border-black p-4 font-mono text-lg focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-gray-300"
            maxLength={11}
          />
          
          {/* HELP TEXT */}
          <p className="mt-2 text-xs font-mono text-gray-400">
            We only check the college code (148/964).
          </p>
        </div>

        {/* ERROR MESSAGE (Shows if validation fails) */}
        {error && (
          <div className="mb-6 bg-red-100 border-2 border-red-500 p-3 flex items-start gap-3">
            <AlertCircle className="text-red-500 shrink-0" size={20} />
            <p className="font-mono text-xs text-red-700 font-bold">{error}</p>
          </div>
        )}

        {/* SUCCESS MESSAGE (Shows if validated) */}
        {success && (
          <div className="mb-6 bg-green-100 border-2 border-green-600 p-3 text-center">
            <p className="font-heavy text-green-700 uppercase">Verified Successfully!</p>
            <p className="font-mono text-xs text-green-800">Redirecting to Feed...</p>
          </div>
        )}

        {/* ACTION BUTTON */}
        <button 
          onClick={handleVerify}
          disabled={success} // Disable button if already verified
          className={`w-full font-heavy uppercase py-4 border-2 border-black shadow-retro transition-all flex items-center justify-center gap-2
            ${success 
              ? "bg-green-500 text-white cursor-default" 
              : "bg-black text-white hover:bg-white hover:text-black hover:shadow-retro-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-retro-active"
            }`}
        >
          {success ? "Welcome, Flatmate" : "Verify Identity"}
          {!success && <ArrowRight size={20} />}
        </button>

      </div>
    </main>
  );
}