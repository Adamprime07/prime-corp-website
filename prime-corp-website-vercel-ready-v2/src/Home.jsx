
import React, { useState } from "react";
import { Building, Hammer, Paintbrush, Truck } from "lucide-react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://formspree.io/f/mqkrjryp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  const services = [
    {
      name: "Hochbau",
      icon: <Building className="w-8 h-8 text-yellow-400 mb-2" />,
      description: "Errichtung von Wohn- und Gewerbebauten mit modernster Technik.",
    },
    {
      name: "Sanierung",
      icon: <Hammer className="w-8 h-8 text-yellow-400 mb-2" />,
      description: "Erneuerung und Modernisierung bestehender Gebäude – effizient und nachhaltig.",
    },
    {
      name: "Innenausbau",
      icon: <Paintbrush className="w-8 h-8 text-yellow-400 mb-2" />,
      description: "Individueller Ausbau Ihrer Innenräume mit höchsten Qualitätsansprüchen.",
    },
    {
      name: "Abriss",
      icon: <Truck className="w-8 h-8 text-yellow-400 mb-2" />,
      description: "Fachgerechter Rückbau und Abrissarbeiten – sicher und umweltbewusst.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="flex flex-col items-center text-center space-y-6">
        <img src="/logo.png" alt="PRIME C.O.R.P. Logo" className="w-52 h-52 object-contain" />
        <h1 className="text-4xl font-bold text-yellow-400">PRIME C.O.R.P.</h1>
        <h2 className="text-md text-gray-500 tracking-widest uppercase">
          Construction • Operation • Restoration • Projekt
        </h2>
        <p className="text-lg max-w-xl mt-2 text-gray-300">
          Ihr starker Partner für Bauprojekte – modern, zuverlässig, hochwertig. Wir schaffen Werte, die bestehen.
        </p>
      </section>

      <section className="mt-20 space-y-10">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Unsere Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.name} className="bg-gray-900 rounded-xl p-6 text-center">
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-yellow-400">{service.name}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 space-y-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Galerie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 h-48 rounded-xl shadow-inner"></div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        {submitted ? (
          <p className="text-green-400">Vielen Dank! Wir melden uns in Kürze.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
            <textarea
              name="message"
              placeholder="Nachricht"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              rows="4"
            />
            <button type="submit" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
              Nachricht senden
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
