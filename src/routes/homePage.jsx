import AnimatedLayout from "../../animation/AnimatedLayout"
import { FaCheck, FaBuilding, FaHouse, FaMapPin, FaPhone, FaWhatsapp } from "react-icons/fa6"
export default function HomePage() {
    return (
      <AnimatedLayout>
        <div
          className="hero min-h-4/5"
          style={{
            backgroundImage: 'url("/hero.jpg")',
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md lg:max-w-lg">
              <div className="card glass text-neutral-content w-96">
                <div className="card-body items-center text-center">
                  <h2 className="card-title p-3 border-b-2  border-white font-bold">
                    ME HAMIDOU DAOU
                  </h2>
                  <p className="my-5">
                    Avocat au Barreau du Mali <br /> droit des affaires et de
                    litiges de patent
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      target="_blank"
                      href="https://wa.me/905364613555"
                      className="btn btn-primary"
                    >
                      <FaWhatsapp className="h-5 w-5" /> Contacter Maitre
                      Hamidou
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 m-5">
          <p className="text-primary">
            ME Hamidou Daou, Avocat au Barreau du Mali
          </p>
          <div className="border-b-2 border-primary pb-1  mt-5">
            <span className="text-2xl">
              Bienvenue chez HD Conseils – Votre Partenaire Juridique à Bamako
            </span>
          </div>
          <p className="mt-4 text-sm">
            Chez HD Conseils, nous incarnons l&apos;excellence juridique et
            l&apos;intégrité au service de nos clients. Fondé par ME Hamidou
            Daou, avocat inscrit au barreau de Bamako, notre cabinet se
            distingue par son approche stratégique et personnalisée,
            garantissant des solutions juridiques adaptées aux besoins
            spécifiques de chaque client.
          </p>
          <p className="mt-2 text-sm">
            Nous nous engageons à défendre vos droits avec rigueur, à vous
            conseiller avec transparence, et à vous accompagner dans la
            complexité des démarches juridiques, qu&apos;il s&apos;agisse de
            litiges, de contrats, ou de négociations stratégiques.
          </p>{' '}
          <p className="mt-2 text-sm">
            Notre mission est de faire de la justice un levier de protection et
            de développement pour nos clients, qu&apos;ils soient entreprises,
            institutions, ou particuliers. Avec HD Conseils, vous choisissez
            l&apos;expertise, la réactivité et une relation de confiance bâtie
            sur le professionnalisme et l&apos;éthique.
          </p>
          <div className="w-full my-5 flex  justify-center">
            <button disabled className="btn btn-primary">
              En savoir plus sur HD Conseils
            </button>
          </div>
        </div>
        <div
          className="hero min-h-1/2 my-10"
          style={{
            backgroundImage: 'url("/competence-bg.jpg")',
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content flex-col text-white">
            <div className="w-full text-center">
              <div className="border-b-2 border-primary pb-1  mt-5">
                <span className="text-2xl">Competences</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="card glass text-neutral-content w-96 m-2">
                <div className="card-body items-center text-center">
                  <h2 className="card-title p-3  border-white flex flex-row">
                    <FaBuilding /> Competence 1
                  </h2>
                  <p className="flex flex-col">
                    <span className="flex flex-row justify-between text-sm my-1">
                      <FaCheck className="text-primary mx-2 h-5 w-5" />{' '}
                      Something about this competence 1
                    </span>
                    <span className="flex flex-row justify-between text-sm my-1">
                      <FaCheck className="text-primary mx-2 h-5 w-5" />{' '}
                      Something about this competence 2
                    </span>
                    <span className="flex flex-row justify-between text-sm my-1">
                      <FaCheck className="text-primary mx-2 h-5 w-5" />{' '}
                      Something about this competence 3
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <button className="btn btn-primary">
                      Contacter Maitre Hamidou
                    </button>
                  </div>
                </div>
              </div>

              <div className="card glass text-neutral-content w-96 m-2">
                <div className="card-body items-center text-center">
                  <h2 className="card-title p-3  border-white flex flex-row">
                    <FaBuilding /> Competence 2
                  </h2>
                  <p className="flex flex-col">
                    <span className="flex flex-row justify-between text-sm my-1">
                      <FaCheck className="text-primary mx-2 h-5 w-5" />{' '}
                      Something about this competence 1
                    </span>
                    <span className="flex flex-row justify-between text-sm my-1">
                      <FaCheck className="text-primary mx-2 h-5 w-5" />{' '}
                      Something about this competence 2
                    </span>
                    <span className="flex flex-row justify-between text-sm my-1">
                      <FaCheck className="text-primary mx-2 h-5 w-5" />{' '}
                      Something about this competence 3
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <button className="btn btn-primary">
                      Contacter Maitre Hamidou
                    </button>
                  </div>
                </div>
              </div>
              <div className="card glass text-neutral-content w-96 m-2">
                <div className="card-body items-center text-center">
                  <h2 className="card-title p-3  border-white flex flex-row">
                    <FaBuilding /> Competence 3
                  </h2>
                  <p className="flex flex-col">
                    <span className="flex flex-row justify-between text-sm my-1">
                      <FaCheck className="text-primary mx-2 h-5 w-5" />{' '}
                      Something about this competence 1
                    </span>
                    <span className="flex flex-row justify-between text-sm my-1">
                      <FaCheck className="text-primary mx-2 h-5 w-5" />{' '}
                      Something about this competence 2
                    </span>
                    <span className="flex flex-row justify-between text-sm my-1">
                      <FaCheck className="text-primary mx-2 h-5 w-5" />{' '}
                      Something about this competence 3
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <button className="btn btn-primary">
                      Contacter Maitre Hamidou
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero bg-secondary min-h-1/2 my-10 p-10">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Contact</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="flex flex-col w-full max-w-sm shrink-0">
              <span className="flex flex-row text-lg items-center">
                <FaHouse className="m-2" /> Address
              </span>
              <span className="flex flex-row text-lg items-center">
                <FaMapPin className="m-2" /> Location
              </span>
              <span className="flex flex-row text-lg items-center">
                <FaPhone className="m-2" /> Phone
              </span>
            </div>
          </div>
        </div>
      </AnimatedLayout>
    )
}