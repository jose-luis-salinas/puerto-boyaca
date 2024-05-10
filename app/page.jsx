import React from "react";
import Image from "next/image";
import Link from "next/link";

import Beach from "@/app/resources/icons/beach.svg";
import Wallet from "@/app/resources/icons/wallet.svg";
import Suitcase from "@/app/resources/icons/suitcase.svg";

import "@/app/resources/css/Home.css";

export default function page() {
  return (
    <div className="content-home">
      <div className="welcome">
        <Image src={"/resources/imgs/bg1.jpg"} width={2160} height={1080} />
        <Image
          className="banner position-absolute"
          src={"/resources/imgs/banner.webp"}
          width={1920}
          height={480}
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col quick-info">
            <div className="row">
              <div className="row info col-lg-4">
                <div className="col-sm-4 icon">
                  <Image src={Beach} width={100} height={100} />
                </div>

                <div className="col info-text">
                  <div className="h-100 flex flex-column">
                    <h5>Destinos top</h5>

                    <p>Conoce lugares fantasticos</p>
                  </div>
                </div>
              </div>

              <div className="row info col-lg-4">
                <div className="col-sm-4 icon">
                  <Image src={Wallet} width={100} height={100} />
                </div>

                <div className="col info-text">
                  <div className="h-100 flex flex-column">
                    <h5>Los mejores precios</h5>

                    <p>Invierte poco, disfruta más</p>
                  </div>
                </div>
              </div>

              <div className="row info col-lg-4">
                <div className="col-sm-4 icon">
                  <Image src={Suitcase} width={100} height={100} />
                </div>

                <div className="col info-text">
                  <div className="h-100 flex flex-column">
                    <h5>Servicios increibles</h5>

                    <p>Obten los mejores servicios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="container py-5" id="lugares">
        <h6 className="text-center">LUGARES SIMPLEMENTE INCREIBLES</h6>
        <h1 className="text-center my-5">Destinos Populares</h1>

        <div className="content-places row row-cols-3 align-items-center justify-content-center">
          <div className="col place">
            <div className="place-image rounded">
              <Image
                src={"/resources/imgs/puerto-romero.jpg"}
                width={1200}
                height={630}
              />
            </div>

            <div className="place-info py-4">
              <h3>Cascada Puerto Romero</h3>
            </div>
          </div>

          <div className="col place">
            <div className="place-image rounded">
              <Image
                src={"/resources/imgs/la-cristalina.png"}
                width={800}
                height={534}
              />
            </div>

            <div className="place-info py-4">
              <h3>Cañon de la Cristalina</h3>
            </div>
          </div>

          <div className="col place">
            <div className="place-image rounded">
              <Image
                src={"/resources/imgs/charco-azul.png"}
                width={1536}
                height={1536}
              />
            </div>

            <div className="place-info py-4">
              <h3>Charco Azul</h3>
            </div>
          </div>

          <div className="col place">
            <div className="place-image rounded">
              <Image
                src={"/resources/imgs/cienaga-palagua.jpeg"}
                width={1600}
                height={896}
              />
            </div>

            <div className="place-info py-4">
              <h3>Ciénaga de Palagua</h3>
            </div>
          </div>

          <div className="col place">
            <div className="place-image rounded">
              <Image
                src={"/resources/imgs/quebrada-la-cristalina.png"}
                width={801}
                height={601}
              />
            </div>

            <div className="place-info py-4">
              <h3>Quebrada La Cristalina</h3>
            </div>
          </div>

          <div className="col place">
            <div className="place-image rounded">
              <Image
                src={"/resources/imgs/los-laureles.jpeg"}
                width={638}
                height={426}
              />
            </div>

            <div className="place-info py-4">
              <h3>Hacienda Los Laureles</h3>
            </div>
          </div>
        </div>
      </div>

      <div
        className="content-map position-relative container-fluid px-0 py-5"
        id="mapa"
      >
        <div className="position-relative z-1">
          <h6 className="text-center text-white">ECOTURISMO PUERTO BOYACÁ</h6>
          <h1 className="text-center text-white my-5">
            Interactua con los lugares
          </h1>

          <div className="content-google-maps container position-relative">
            <div className="row gap-4">
              <div className="col">
                <iframe
                  className="rounded"
                  src="https://www.google.com/maps/d/u/0/embed?mid=1VFi0_h5DdrQN9e86Lqm4t2QMjcVj8vE&usp=sharing"
                  frameBorder="0"
                ></iframe>
              </div>

              <div className="col">
                <h1 className="text-white">Puerto Boyacá</h1>

                <p className="text-white">
                  Sumérgete en la belleza y diversidad de esta encantadora
                  ciudad colombiana mientras exploras sus numerosos atractivos.
                  Desde sus pintorescas calles hasta sus impresionantes paisajes
                  naturales, cada rincón de Puerto Boyacá te espera con una
                  historia que contar y una experiencia única por descubrir.
                  ¡Desplázate por el mapa, haz clic en los puntos de interés y
                  déjate sorprender por todo lo que esta joya del departamento
                  de Boyacá tiene para ofrecerte! ¡La aventura comienza aquí!
                </p>

                <Link
                  className="btn text-white p-2 my-5"
                  target="_blank"
                  href={
                    "https://www.google.com/maps/d/u/0/edit?mid=1VFi0_h5DdrQN9e86Lqm4t2QMjcVj8vE&usp=sharing"
                  }
                >
                  ¡Quiero conocer Puerto Boyacá!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-contact container p-5" id="contacto">
        <h6 className="text-center">ECOTURISMO PUERTO BOYACÁ</h6>
        <h1 className="text-center my-5">Contactanos</h1>

        <div className="row">
          <div className="col">
            <h5>¿Quieres recibir nuestras últimas ofertas?</h5>
            <p>
              Suscribete a nuestro boletín mensual y no te pierdas nuestras
              últimas actualizaciones
            </p>
          </div>

          <div className="col d-flex align-items-center">
          <div className="input-group">
              <input type="text" className="form-control" placeholder="Correo electronico" aria-label="Correo electronico" aria-describedby="button-addon2" />
              <button className="btn btn-outline-primary" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
