<script setup>
import Facebook from "../assets/img/iconsRedes/icons8-facebook.png";

import Instagram from "../assets/img/iconsRedes/icons8-instagram.png";
import Whatsapp from "../assets/img/iconsRedes/icons8-whatsapp.png";
</script>
<template>
  <div id="quienes_somos" class="my-2 mt-9">
    <div class="my-10">
      <h1 class="text-3xl pt-10 font-sans subpixel-antialiased font-bold text-center">
        Sobre nosotros
      </h1>
    </div>
    <div class="flex flex-row">
      <div class="w-3/5 mx-10">
        <h1 class="text-3xl font-sans subpixel-antialiased font-bold">
          Quiénes somos
        </h1>
        <p>
          El Cuerpo Oficial Bomberos de la merced caldas es una Unidad
          Administrativa Especial del orden Distrital, adscrita a la Secretaría
          de Seguridad, Convivencia y Justicia con más de 127 años de historia
          que dan cuenta de la atención de las emergencias en la capital del
          país.
        </p>
        <div>
          <h1 class="text-2xl font-sans subpixel-antialiased font-bold mt-10">
            Canales Telefónicos:
          </h1>
          <p>
            Horario de Atención Telefónico: Lunes, Martes,
            Miércoles, Jueves y Viernes de 8:00 am a 4:00 pm jornada continua
            Teléfono: +57 601 3 822 500 Extensión: 40101 – 40102 Celular: +57
            316 473 95 99 WhatsApp: +57 317 404 37 09
          </p>
        </div>
        <h1 class="text-3xl font-sans subpixel-antialiased font-bold mt-10">
          Redes sociales
        </h1>
        <div class="flex flex-wrap">
          <img
            class="w-16 m-2 transition-transform transform-gpu hover:scale-105"
            :src="Facebook"
            alt=""
          />
          <img
            class="w-16 m-2 transition-transform transform-gpu hover:scale-105"
            :src="Instagram"
            alt=""
            srcset=""
          />
          <img
            class="w-16 m-2 transition-transform transform-gpu hover:scale-105"
            :src="Whatsapp"
            alt=""
          />
        </div>
      </div>
      <div class="w-2/5  flex justify-center items-center bg-slate-500 overflow-hidden mx-2 border-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.0281922165157!2d-75.54748233053884!3d5.399785834815107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e470569c1287c4b%3A0x4fbaae3713bce9a8!2sBomberos%20voluntarios%20La%20Merced!5e0!3m2!1ses!2sco!4v1712180217575!5m2!1ses!2sco"
          width="500"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>


