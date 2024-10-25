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
                    <a target="_blank" href="https://wa.me/905364613555" className="btn btn-primary">
                      <FaWhatsapp className="h-5 w-5"/> Contacter Maitre Hamidou
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 m-5">
          <p className="text-primary">
            ME Hamidou Daou, Avocat au Bureau de Bamako
          </p>
          <div className="border-b-2 border-primary pb-1  mt-5">
            <span className="text-2xl">
              Bienvenue sur le site du cabinet de HD Conseils
            </span>
          </div>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            elementum ullamcorper libero, et pharetra erat. Nunc congue mattis
            placerat. Etiam felis ante, cursus nec arcu non, varius molestie
            velit. Duis aliquam et ligula nec efficitur. Integer tincidunt enim
            vel ante sodales fringilla. Aenean egestas maximus magna vel
            volutpat. Integer gravida lacinia nunc et tempor. Vivamus eget
            tortor lectus. Nullam pulvinar bibendum blandit. Proin eu sagittis
            nunc. Proin vitae leo vehicula ex convallis aliquam. Aenean faucibus
            tortor at risus laoreet, ac mollis libero aliquam. Integer ac libero
            quis metus pellentesque efficitur porta a ex. Ut cursus, mauris a
            maximus consequat, nisl erat rutrum turpis, a posuere leo lectus
            vitae est.
          </p>
          <p className="mt-2 text-sm">
            Suspendisse vitae tempor erat. Suspendisse dignissim odio leo, sed
            finibus nisi vestibulum ac. In in quam pharetra elit posuere
            sollicitudin eget ac leo. Aliquam vitae semper libero, non convallis
            eros. Suspendisse egestas sem vel ligula cursus elementum. Curabitur
            ornare ante magna, eu ullamcorper odio mollis a. Ut ullamcorper
            suscipit arcu. Sed aliquam libero quis tempor iaculis. Etiam
            scelerisque enim sed luctus posuere. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Etiam purus neque, faucibus et dui a, maximus rutrum tortor.{' '}
          </p>{' '}
          <p className="mt-2 text-sm">
            Donec quis ultricies felis. Duis eget viverra urna. Mauris molestie
            sem a quam tristique, lobortis efficitur risus posuere. Sed congue
            vitae eros eget placerat. Sed porta porta augue nec tristique.
            Aliquam viverra sodales elit. Cras libero massa, vestibulum sed
            suscipit eget, pretium nec lorem. Donec id neque metus. Morbi
            rutrum, velit eget laoreet rutrum, dui elit sodales enim, id
            tristique ante ligula id sem. Vivamus porttitor consectetur dui,
            fermentum interdum turpis mattis ac.
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