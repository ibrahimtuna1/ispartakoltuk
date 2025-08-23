"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 max-w-5xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6">İletişim</h2>
      <p className="mb-6 text-gray-700">
        Randevu almak için formu doldurun veya WhatsApp’tan bize ulaşın.
      </p>
      <form className="grid gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Adınız"
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="tel"
          placeholder="Telefon"
          className="border rounded-lg px-4 py-2"
        />
        <select className="border rounded-lg px-4 py-2">
          <option>Koltuk Yıkama</option>
          <option>Yatak Yıkama</option>
          <option>Araç Koltuğu</option>
        </select>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Gönder
        </button>
      </form>
    </section>
  );
}
