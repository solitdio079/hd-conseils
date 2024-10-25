import {
  FaHouse,
  FaMapPin,
  FaPhone,
} from 'react-icons/fa6'
export default function Contact() {
  return (
    <>
      <div
        className="hero min-h-4/5"
        style={{
          backgroundImage: 'url("/hero.jpg")',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md lg:max-w-lg"></div>
        </div>
      </div>
      <div className="p-5 m-5">
        <p className="text-primary">
          Contactez ME Hamidou Daou, Avocat au Bureau de Bamako
        </p>
      </div>
      <div className="hero bg-secondary min-h-1/2 my-10 p-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124593.26105408238!2d-8.07791462103944!3d12.61257852363767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51cd1227450a91%3A0x9e3c40e152506015!2sBamako%2C%20Mali!5e0!3m2!1sen!2str!4v1729846264483!5m2!1sen!2str"
          className="w-full h-400"
          style={{border:0} }
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  )
}
