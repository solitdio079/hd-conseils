import AnimatedLayout from "../../animation/AnimatedLayout";
import {FaPhone, FaHouse,FaMapPin} from 'react-icons/fa6'
export default function Honoraries() {
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
              <div className="card glass text-neutral-content w-96"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center m-5">
          <div className="flex flex-col lg:w-3/5">
            <div className="p-5 m-5">
              <p className="text-primary">Honoraires</p>
              <p className="mt-4 text-sm">
                Les honoraires de ME Hamidou Daou sont fixés en toute
                transparence avec le client après acceptation du devis,
                conformément aux règles déontologiques de la profession
                d&apos;Avocat. Après étude préliminaire du dossier, ME Hamidou
                Daou sera en capacité de proposer plusieurs options de
                facturation au client dont les modalités sont convenues dans une
                convention d&apos;honoraires.
              </p>
              
             
            </div>
          </div>
          <div className="flex flex-col lg:w-2/5">
            <div className="card glass w-96 my-3">
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  {' '}
                  <FaPhone className="text-primary text-3xl" />{' '}
                </h2>
                <p className="text-2xl"> Votre avocat</p>
                <p className="flex items-center">
                  {' '}
                  <FaHouse className="m-2 text-primary" /> ME Hamidou Daou
                </p>
                <p className="flex items-center">
                  {' '}
                  <FaMapPin className="m-2 text-primary" /> Sebenicoro, Rue 534,
                  Bamako
                </p>
                <h2 className="card-title text-3xl">+223 70 00 00 00</h2>
                <p>Du Lundi au Vendredi de 9h à 12h30 et de 14h à 19h30</p>

                <div className="card-actions justify-end mt-5">
                  <button className="btn btn-primary">
                    Contactez ME Hamidou Daou
                  </button>
                </div>
              </div>
                    </div>
                    { /*
            <div className="card glass w-96">
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  {' '}
                  <FaCheck className="text-primary text-3xl" />{' '}
                </h2>
                <p className="text-2xl"> Competences</p>
                <p className="flex items-center">
                  {' '}
                  <FaCheck className="m-2 text-primary" /> Competence 1
                </p>
                <p className="flex items-center">
                  {' '}
                  <FaCheck className="m-2 text-primary" /> Competence 2
                </p>

                <p className="flex items-center">
                  {' '}
                  <FaCheck className="m-2 text-primary" /> Competence 3
                </p>

                <div className="card-actions justify-end mt-5">
                  <button className="btn btn-primary">
                    Contactez ME Hamidou Daou
                  </button>
                </div>
              </div>
            </div> */ }
          </div>
        </div>
      </AnimatedLayout>
    )
}