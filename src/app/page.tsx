import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Lindo Apartamento á Venda
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              &quot;Aproveite a oportunidade de viver em um belo apartamento com
              2 dormitórios, incluindo uma suíte, sala aconchegante, cozinha
              equipada com cooktop, banheiro moderno, área de serviço funcional
              e duas vagas na garagem. Localizado na avenida, desfrute da
              comodidade de ter uma ciclovia à sua disposição e dois mercados em
              frente. Além disso, o bairro está em constante crescimento, e a
              duplicação da avenida pela prefeitura trará melhorias no acesso.
              Não perca tempo, agende uma visita e garanta seu novo lar!&quot;
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Garagem
                </h2>
                <p className="leading-relaxed text-base">2 vagas na garagem</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Sala
                </h2>
                <p className="leading-relaxed text-base">
                  A sala possui um paniel de pedras encantador
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Cozinha
                </h2>
                <p className="leading-relaxed text-base">
                  Cozinha ja conta com armarios e fogão cooktop
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Suite
                </h2>
                <p className="leading-relaxed text-base">
                  Quarto com guarda roupa embutido com bastante espaço
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Sacadas
                </h2>
                <p className="leading-relaxed text-base">
                  Os dois quartos possuem sacadas com cortinhas 100% blackout
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Contato
                </h2>
                <p className="leading-relaxed text-base">
                  Voce pode entrar em contato com o proprietário Leonardo ou
                  Juliana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  width={500}
                  height={300}
                  src="https://res.cloudinary.com/leonardocintra/image/upload/v1686143215/WhatsApp_Image_2023-03-13_at_09.31.38_k3orim.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://res.cloudinary.com/leonardocintra/image/upload/v1686143216/WhatsApp_Image_2023-03-13_at_09.32.33_esgany.jpg"
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://res.cloudinary.com/leonardocintra/image/upload/v1686143215/WhatsApp_Image_2023-03-13_at_09.31.52_jd8ttr.jpg"
                  width={600}
                  height={360}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://res.cloudinary.com/leonardocintra/image/upload/v1686143215/WhatsApp_Image_2023-03-13_at_09.31.24_jjqnfa.jpg"
                  width={600}
                  height={360}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://res.cloudinary.com/leonardocintra/image/upload/v1686143215/WhatsApp_Image_2023-03-13_at_09.31.17_nmcefb.jpg"
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://res.cloudinary.com/leonardocintra/image/upload/v1686143216/WhatsApp_Image_2023-03-13_at_09.32.26_l78qwa.jpg"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
