"use client";

import { useState, type FormEvent } from "react";

export default function QuickAction() {
  const [serialId, setSerialId] = useState("");

  function handleValidate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to your real validation endpoint
    console.log("Validating serial:", serialId);
  }

  return (
    <div className="space-y-lg">
      <form
        onSubmit={handleValidate}
        className="bg-primary p-lg rounded-xl text-on-primary flex flex-col gap-md relative overflow-hidden group"
      >
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform" />
        <h4 className="font-title-md text-title-md relative z-10">Quick Action</h4>
        <p className="font-body-md text-body-md opacity-80 relative z-10">
          Verify a document immediately using its Serial Number.
        </p>
        <div className="mt-md relative z-10">
          <input
            value={serialId}
            onChange={(e) => setSerialId(e.target.value)}
            placeholder="Enter Serial ID..."
            className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-md text-white placeholder-white/60 font-label-md outline-none focus:bg-white/20 transition-all mb-md"
            type="text"
          />
          <button
            type="submit"
            className="w-full bg-white text-primary font-bold py-2 rounded-lg hover:bg-surface-container transition-colors active:scale-95"
          >
            Validate Now
          </button>
        </div>
      </form>
    </div>
  );
}