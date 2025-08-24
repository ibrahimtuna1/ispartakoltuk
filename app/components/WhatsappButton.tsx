"use client";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/905306209416?text=Merhaba,%20temizlik%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-50"
    >
      <img
        src="/images/whatsapp.png"
        alt="WhatsApp"
        className="h-10 w-10"
      />
    </a>
  );
}
