"use client";

export default function Services() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Hizmetlerimiz</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-500">
            Koltuk Yıkama
          </h3>
          <p className="text-gray-600">
            Ev ve ofis koltukları için profesyonel temizlik
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-500">
            Araç Koltuğu
          </h3>
          <p className="text-gray-600">
            Aracınız için hijyenik koltuk yıkama hizmeti
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-500">
            Yatak Yıkama
          </h3>
          <p className="text-gray-600">
            Alerjen ve lekelerden arındırılmış uyku alanları
          </p>
        </div>
      </div>
    </section>
  );
}
