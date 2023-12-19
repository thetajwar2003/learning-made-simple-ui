import React from "react";

export default function Partners() {
  const partners = [
    {
      name: "EduTech Innovations",
      logo: "https://lh3.googleusercontent.com/p/AF1QipP63z2FQrf3eQrj2flPy8giME8YFVkspJ7Ks7c=s1360-w1360-h1020",
      description:
        "Leading provider of cutting-edge educational technology solutions, enhancing digital learning experiences worldwide.",
    },
    {
      name: "Global Scholars Foundation",
      logo: "https://yt3.googleusercontent.com/UeYX1buI_V4G9xjYbpRBVd6GnuM9fq9ESTp-3eWW5bIMVysoJnsn_QVGiz2zIVXVpy4YjvPh=s176-c-k-c0x00ffffff-no-rj",
      description:
        "A non-profit organization committed to promoting education in underserved communities across the globe.",
    },
    {
      name: "NextGen Learning",
      logo: "https://www.nextgenlearning.org/assets/img/logo.no-shadow.png",
      description:
        "Pioneers in developing interactive and immersive learning platforms for the next generation of students.",
    },
  ];

  return (
    <>
      <main className="bg-black text-white p-24 mt-48 mb-96">
        <div className="container mx-auto">
          <h1 className="title-font text-4xl md:text-7xl mb-8 font-medium text-center">
            Our Partners
          </h1>
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-24">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center mx-7">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="rounded object-cover h-20 w-100 mb-4"
                />
                <h2 className="text-xl font-semibold">{partner.name}</h2>
                <p className="text-center">{partner.description}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
