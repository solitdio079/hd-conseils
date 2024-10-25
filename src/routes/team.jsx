import { FaScaleUnbalanced } from 'react-icons/fa6'
import AnimatedLayout from '../../animation/AnimatedLayout'
export default function Team() {
  return (
    <AnimatedLayout>
      <div className="flex flex-col justify-center my-5">
        <div className="flex flex-col lg:flex-row justify-center my-5 items-center">
          <figure>
            <img src="/team1.jpg" width={350} />
          </figure>
          <div className="card glass card-bordered text-black w-96 mx-2 shadow-xl">
            <div className="card-body items-center">
              <h2 className="card-title">
                <FaScaleUnbalanced className="h-5 w-5 m-2" />
                Me Hamidou Daou
              </h2>
              <p>Avocat au barreau du Mali</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col lg:flex-row my-3 items-center">
            <figure>
              <img src="/team2.jpg" width={150} />
            </figure>
            <div className="card glass card-bordered text-black w-96 mx-2 shadow-xl">
              <div className="card-body items-center">
                <h2 className="card-title">
                  {' '}
                  <FaScaleUnbalanced className="h-5 w-5 m-2" />
                  Abdramane Niambele
                </h2>
                <p>Juriste Collaborateur</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-3 items-center">
            <figure>
              <img src="/team3.jpg" width={150} />
            </figure>
            <div className="card glass card-bordered text-black w-96 mx-2 shadow-xl">
              <div className="card-body items-center">
                <h2 className="card-title">
                  {' '}
                  <FaScaleUnbalanced className="h-5 w-5 m-2" />
                  Oumar Kampo
                </h2>
                <p>Juriste Collaborateur</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-3 items-center">
            <figure>
              <img src="/team3.jpg" width={150} />
            </figure>
            <div className="card glass card-bordered text-black w-96 mx-2 shadow-xl">
              <div className="card-body items-center">
                <h2 className="card-title">
                  {' '}
                  <FaScaleUnbalanced className="h-5 w-5 m-2" />
                  Alou Camara
                </h2>
                <p>Juriste Collaborateur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  )
}
