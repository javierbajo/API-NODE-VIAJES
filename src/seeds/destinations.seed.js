
mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Destination = require("../api/models/destination.model.js");



const arrayDestinations = [
  {
    "lugar": "París, Francia",
    "fecha": "Desde el 9 al 17 de Octubre 2023",
    "precio": 1500,
    "descripcion": "¿Te imaginas paseando por las icónicas calles de París, explorando sus monumentos históricos, deleitándote con su deliciosa gastronomía y sumergiéndote en su fascinante cultura? ¡Es hora de que tu sueño se haga realidad! Nuestro paquete turístico a París ha sido meticulosamente diseñado para ofrecerte una experiencia inolvidable, llena de momentos mágicos y recuerdos imborrables.",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
            "nombre": "Elegance Palace",
            "categoria": "5 estrellas",
            "ubicacion": "Centro histórico de París"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Nueva York, Estados Unidos",
    "fecha": "Desde el 14 al 22 de Agosto 2023",
    "precio": 2500,
    "descripcion": "¡Bienvenido a la ciudad que nunca duerme! Nuestro paquete turístico te invita a sumergirte en la energía inigualable de Nueva York, donde cada rincón es una experiencia única. Descubre los icónicos rascacielos de Manhattan que dominan el horizonte, vive el bullicio de Times Square, saborea la deliciosa fusión de sabores internacionales en sus restaurantes y déjate cautivar por el arte y la cultura en sus famosos museos y teatros de Broadway. Nueva York es un crisol de culturas y una metrópolis que nunca deja de sorprender. ¡Prepárate para una aventura inolvidable en la Gran Manzana!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
          "nombre": "Central Park View",
          "categoria": "5 estrellas",
          "ubicacion": "Central Park, Manhattan"
        },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Tokio, Japón",
    "fecha": "Desde el 12 al 19 de Febrero 2024",
    "precio": 3500,
    "descripcion": "¡Bienvenido a la fascinante metrópolis de Tokio! Nuestro paquete turístico te llevará a descubrir la perfecta combinación de tradición y modernidad en esta vibrante ciudad japonesa. Sumérgete en la cultura milenaria del país del sol naciente mientras te maravillas con los impresionantes templos y jardines zen. A la vez, déjate envolver por la alta tecnología y la moda futurista de los distritos de Akihabara y Shibuya. Deléitate con la deliciosa gastronomía japonesa, desde el sushi tradicional hasta los sabores únicos de los izakayas locales. ¡Tokio es un paraíso para los amantes de la cultura y la aventura! Prepárate para vivir momentos inolvidables en esta ciudad llena de contrastes y sorpresas.",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Tokyo Tower View",
            "categoria": "5 estrellas",
            "ubicacion": "Torre de Tokio, Tokio"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Londres, Reino Unido",
    "fecha": "Desde el 2 al 8 de Octubre 2023",
    "precio": 1600,
    "descripcion": "¡Bienvenido a la majestuosa ciudad de Londres! Nuestro paquete turístico te llevará a explorar la rica historia y la emocionante modernidad de la capital británica. Descubre los emblemáticos monumentos de la ciudad, desde el imponente Palacio de Buckingham hasta la icónica Torre de Londres. Pasea por las elegantes calles de Covent Garden y admira las luces nocturnas del Puente de la Torre. Sumérgete en el ambiente cultural de los famosos museos y teatros de West End. Disfruta de la deliciosa cocina británica en acogedores pubs y restaurantes. Londres es una ciudad llena de encanto y diversidad que te cautivará en cada esquina. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que combina tradición y modernidad a la perfección!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Covent Garden Boutique",
            "categoria": "5 estrellas",
            "ubicacion": "Covent Garden, Londres"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Roma, Italia",
    "fecha": "Desde el 24 al 31 de Agosto 2023",
    "precio": 1400,
    "descripcion": "¡Bienvenido a la Ciudad Eterna! Nuestro paquete turístico te llevará a descubrir los tesoros históricos y culturales de Roma, una ciudad que respira historia en cada callejón. Maravíllate con los majestuosos monumentos romanos, como el Coliseo y el Panteón, que atestiguan la grandeza del pasado imperial. Admira las obras maestras del arte en los museos del Vaticano y explora la majestuosidad de la Basílica de San Pedro. Deléitate con la deliciosa gastronomía italiana, desde auténticas pizzas hasta exquisitos platos de pasta. Roma es un tesoro de emociones y experiencias que te llevará en un viaje en el tiempo. ¡Prepárate para sumergirte en la magia de esta ciudad única en el mundo!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Vatican View Hotel",
            "categoria": "5 estrellas",
            "ubicacion": "Vaticano, Roma"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Barcelona, España",
    "fecha": "Desde el 11 al 18 de Marzo 2024",
    "precio": 1100,
    "descripcion": "¡Bienvenido a la vibrante ciudad de Barcelona! Nuestro paquete turístico te invita a descubrir la combinación única de historia, arte y estilo de vida mediterráneo que ofrece esta maravillosa ciudad. Recorre las icónicas obras del arquitecto Gaudí, como la Sagrada Familia y el Parque Güell, que te dejarán sin aliento con su belleza y originalidad. Sumérgete en la animada cultura catalana paseando por las animadas Ramblas y el encantador Barrio Gótico. Disfruta de la deliciosa gastronomía española, desde las tapas tradicionales hasta la paella en restaurantes locales. Barcelona te ofrece una experiencia única que combina la historia con la modernidad, el mar y la montaña. ¡Prepárate para enamorarte de esta ciudad llena de color y encanto!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Beachfront Paradise",
            "categoria": "5 estrellas",
            "ubicacion": "Frente al mar, Barcelona"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Sídney, Australia",
    "fecha": "Desde el 10 al 17 de Junio 2024",
    "precio": 2900,
    "descripcion": "¡Bienvenido a la espectacular ciudad de Sídney! Nuestro paquete turístico te llevará a descubrir la belleza natural y el encanto urbano de esta icónica ciudad australiana. Contempla la famosa Ópera de Sídney y el majestuoso Puente del Puerto, dos de los símbolos más emblemáticos de la ciudad. Explora las hermosas playas de arena dorada, como Bondi Beach, donde podrás relajarte y disfrutar del sol y el mar. Sumérgete en la fascinante cultura aborigen australiana en el Museo de Arte Contemporáneo. Disfruta de la deliciosa gastronomía local, desde el marisco fresco hasta las especialidades internacionales en los restaurantes de clase mundial. Sídney es una ciudad moderna y vibrante que te cautivará con su energía y paisajes asombrosos. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad costera única!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Beachfront Retreat",
            "categoria": "5 estrellas",
            "ubicacion": "Frente a la playa de Bondi, Sídney"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Río de Janeiro, Brasil",
    "fecha": "Desde el 22 al 30 de Enero 2024",
    "precio": 1600,
    "descripcion": "¡Bienvenido a la maravillosa ciudad de Río de Janeiro! Nuestro paquete turístico te invita a descubrir la belleza natural y el espíritu festivo de esta icónica ciudad brasileña. Contempla las impresionantes vistas desde el Cristo Redentor en la cima del Corcovado y visita el emblemático Pan de Azúcar para disfrutar de panorámicas espectaculares. Relájate en las famosas playas de Copacabana e Ipanema, donde podrás sumergirte en el ambiente carioca y disfrutar del sol y el mar. Disfruta de la animada música y danza en las calles y experimenta la samba en los tradicionales bares. Siente la pasión del Carnaval en cada rincón de la ciudad. Río de Janeiro es una ciudad que combina naturaleza, cultura y alegría de vivir. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad vibrante y llena de color!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
            "nombre": "Copacabana Beach Resort",
            "categoria": "4 estrellas",
            "ubicacion": "Frente a la playa de Copacabana, Río de Janeiro"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Ciudad del Cabo, Sudáfrica",
    "fecha": "Desde el 16 al 25 de Octubre 2023",
    "precio": 2000,
    "descripcion": "¡Bienvenido a la deslumbrante Ciudad del Cabo! Nuestro paquete turístico te llevará a descubrir la belleza natural y la rica diversidad cultural de esta fascinante ciudad sudafricana. Contempla la majestuosidad de la Montaña de la Mesa, un icono natural que domina el horizonte, y disfruta de las impresionantes vistas desde su cima. Explora la Península del Cabo, donde el océano y la tierra se encuentran en un espectáculo de acantilados y playas vírgenes. Sumérgete en la historia de Robben Island, una antigua prisión que hoy es Patrimonio de la Humanidad. Descubre la animada escena artística y gastronómica en los coloridos barrios de Woodstock y Bo-Kaap. Ciudad del Cabo es un destino único que combina naturaleza, aventura y cultura. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad cautivadora y llena de contrastes!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Oceanfront Retreat",
            "categoria": "5 estrellas",
            "ubicacion": "Frente al mar, Ciudad del Cabo"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Vancouver, Canadá",
    "fecha": "Desde el 8 al 17 de Abril 2024",
    "precio": 2700,
    "descripcion": "¡Bienvenido a la espectacular ciudad de Vancouver! Nuestro paquete turístico te invita a descubrir la impresionante belleza natural y la emocionante vida urbana que ofrece esta ciudad canadiense. Disfruta de las magníficas vistas de las Montañas Rocosas y el océano Pacífico que rodean la ciudad. Explora el famoso Parque Stanley, un oasis de vegetación en medio de la urbe, perfecto para relajarse y hacer senderismo. Descubre la animada escena cultural en el barrio de Gastown, donde la historia se mezcla con la modernidad. Deléitate con la variada gastronomía local, desde los famosos mariscos hasta las deliciosas comidas internacionales. Vancouver es una ciudad vibrante y llena de actividades para todos los gustos. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que combina naturaleza y cosmopolitismo con un encanto único!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
            "nombre": "Mountain View Lodge",
            "categoria": "4 estrellas",
            "ubicacion": "Frente a las Montañas Rocosas, Vancouver"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Estambul, Turquía",
    "fecha": "Desde el 14 al 24 de Agosto 2023",
    "precio": 1500,
    "descripcion": "¡Bienvenido a la mágica ciudad de Estambul! Nuestro paquete turístico te llevará a descubrir la fascinante historia y la rica cultura de esta ciudad transcontinental. Admira la majestuosidad de la antigua Basílica de Santa Sofía y la esplendorosa Mezquita Azul, símbolos icónicos de la ciudad. Pasea por el Gran Bazar, donde podrás sumergirte en la tradición de los mercados orientales y encontrar tesoros únicos. Descubre la mística atmósfera del Palacio Topkapi y el encanto del Palacio de Dolmabahçe. Saborea los deliciosos manjares turcos, como el kebab y los baklavas, en los auténticos restaurantes locales. Estambul es una ciudad que une Europa y Asia, con una mezcla única de culturas y tradiciones. ¡Prepárate para vivir una experiencia inolvidable en esta encantadora ciudad que te cautivará con su belleza y diversidad!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Bosphorus View Resort",
            "categoria": "5 estrellas",
            "ubicacion": "Frente al Bósforo, Estambul"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Buenos Aires, Argentina",
    "fecha": "Desde el 4 al 14 de Diciembre 2023",
    "precio": 1700,
    "descripcion": "¡Bienvenido a la apasionante ciudad de Buenos Aires! Nuestro paquete turístico te invita a descubrir la esencia del tango, la rica cultura y la vibrante vida urbana de la capital argentina. Sumérgete en la elegancia y el encanto del barrio de La Boca, con sus casas de colores y su famoso estadio de fútbol. Recorre las amplias avenidas de la ciudad y maravíllate con la arquitectura europea de la Plaza de Mayo y el Obelisco. Disfruta de una cena y espectáculo de tango en uno de los tradicionales locales de San Telmo. Saborea los deliciosos sabores de la gastronomía argentina, desde el asado hasta los exquisitos vinos. Buenos Aires es una ciudad que late al ritmo del tango y te invita a disfrutar de su pasión y cultura. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad llena de vida y emociones!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Recoleta Boutique",
            "categoria": "5 estrellas",
            "ubicacion": "Barrio de Recoleta, Buenos Aires"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Bangkok, Tailandia",
    "fecha": "Desde el 16 al 25 de Noviembre 2023",
    "precio": 1700,
    "descripcion": "¡Bienvenido a la fascinante ciudad de Bangkok! Nuestro paquete turístico te llevará a descubrir la vibrante cultura, los templos exquisitos y la deliciosa gastronomía de la capital tailandesa. Maravíllate con el esplendor del Gran Palacio, un complejo de templos impresionante que refleja la grandeza de la antigua monarquía. Explora los mercados locales y flotantes, donde podrás encontrar productos únicos y saborear auténticas delicias tailandesas. Disfruta del tranquilo ambiente de los templos budistas como el Wat Pho, con su icónico Buda Reclinado. Sumérgete en la animada vida nocturna de Bangkok, desde los bares en azoteas con vistas panorámicas hasta los coloridos espectáculos de cabaret. Bangkok es una ciudad que combina tradición con modernidad y te ofrece una experiencia única en el corazón de Tailandia. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su encanto y exotismo!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
            "nombre": "Golden Palace Hotel",
            "categoria": "4 estrellas",
            "ubicacion": "Centro de Bangkok"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Ámsterdam, Países Bajos",
    "fecha": "Desde el 12 al 22 de Marzo 2024",
    "precio": 1400,
    "descripcion": "¡Bienvenido a la encantadora ciudad de Ámsterdam! Nuestro paquete turístico te invita a descubrir los hermosos canales, la rica historia y la vibrante cultura de la capital de los Países Bajos. Recorre los icónicos canales en un paseo en barco y admira las pintorescas casas y puentes que adornan la ciudad. Visita el famoso Museo Van Gogh y maravíllate con las obras maestras de uno de los pintores más influyentes de la historia del arte. Explora la animada Plaza Dam y el Barrio Rojo, conocidos por su bullicio y atmósfera única. Disfruta de los sabores locales en los acogedores cafés y prueba los famosos quesos holandeses. Ámsterdam es una ciudad que combina encanto, cultura y una actitud relajada hacia la vida. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su belleza y autenticidad!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
            "nombre": "Canal View Hotel",
            "categoria": "4 estrellas",
            "ubicacion": "Frente a los canales de Ámsterdam"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Berlín, Alemania",
    "fecha": "Desde el 13 al 22 de Mayo 2024",
    "precio": 1500,
    "descripcion": "¡Bienvenido a la emocionante ciudad de Berlín! Nuestro paquete turístico te llevará a descubrir la historia, la cultura y el arte que hacen de esta ciudad alemana un destino fascinante. Explora los vestigios del Muro de Berlín y el Checkpoint Charlie, símbolos de la Guerra Fría y la división de la ciudad. Visita los famosos museos de la Isla de los Museos, donde encontrarás una impresionante colección de arte y objetos históricos. Maravíllate con la arquitectura moderna y la animada vida urbana de Alexanderplatz y Potsdamer Platz. Saborea las delicias culinarias alemanas, desde las salchichas hasta los pretzels, en los tradicionales biergartens y restaurantes locales. Berlín es una ciudad que combina historia con creatividad y te sorprenderá con su ambiente cosmopolita. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad vibrante y llena de contrastes!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Modern Art Resort",
            "categoria": "5 estrellas",
            "ubicacion": "Potsdamer Platz, Berlín"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Praga, República Checa",
    "fecha": "Desde el 15 al 23 de Enero 2024",
    "precio": 1300,
    "descripcion": "¡Bienvenido a la encantadora ciudad de Praga! Nuestro paquete turístico te invita a descubrir la rica historia, la arquitectura impresionante y la atmósfera romántica de la capital checa. Recorre el famoso Puente de Carlos, una joya gótica que cruza el río Moldava y te ofrece vistas panorámicas de la ciudad. Explora el Castillo de Praga, uno de los más grandes del mundo, y maravíllate con sus magníficas catedrales y palacios. Pasea por el Barrio Judío, donde encontrarás una fascinante historia y una vibrante escena artística. Disfruta de la deliciosa cerveza checa y los platos tradicionales en los acogedores restaurantes locales. Praga es una ciudad llena de encanto y magia que te transportará a la época medieval. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su belleza y romanticismo!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Riverside Romance",
            "categoria": "5 estrellas",
            "ubicacion": "A orillas del río Moldava, Praga"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Copenhague, Dinamarca",
    "fecha": "Desde el 6 al 13 de Noviembre 2023",
    "precio": 1600,
    "descripcion": "¡Bienvenido a la encantadora ciudad de Praga! Nuestro paquete turístico te invita a descubrir la rica historia, la arquitectura impresionante y la atmósfera romántica de la capital checa. Recorre el famoso Puente de Carlos, una joya gótica que cruza el río Moldava y te ofrece vistas panorámicas de la ciudad. Explora el Castillo de Praga, uno de los más grandes del mundo, y maravíllate con sus magníficas catedrales y palacios. Pasea por el Barrio Judío, donde encontrarás una fascinante historia y una vibrante escena artística. Disfruta de la deliciosa cerveza checa y los platos tradicionales en los acogedores restaurantes locales. Praga es una ciudad llena de encanto y magia que te transportará a la época medieval. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su belleza y romanticismo!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
            "nombre": "Scandinavian Design Hotel",
            "categoria": "4 estrellas",
            "ubicacion": "Centro de Copenhague"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Hong Kong, China",
    "fecha": "Desde el 20 al 29 de Agosto 2023",
    "precio": 1800,
    "descripcion": "¡Bienvenido a la emocionante ciudad de Hong Kong! Nuestro paquete turístico te invita a descubrir la vibrante metrópolis, la fusión de culturas y la impresionante arquitectura de esta ciudad asiática. Admira el icónico horizonte de rascacielos y cruza el famoso puerto de Victoria en el Star Ferry, una experiencia imperdible. Explora el animado distrito de Tsim Sha Tsui, conocido por su bulliciosa vida nocturna y sus tiendas de lujo. Descubre la rica cultura china y la herencia británica en los templos y edificios coloniales. Saborea la exquisita gastronomía de Hong Kong, desde los dim sum hasta los platos de mariscos frescos en los mercados locales. Hong Kong es una ciudad llena de energía y diversidad que te dejará asombrado. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que nunca duerme!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
            "nombre": "Skyline View Hotel",
            "categoria": "4 estrellas",
            "ubicacion": "Centro de Hong Kong"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Singapur, República de Singapur",
    "fecha": "Desde el 17 al 27 de Junio 2024",
    "precio": 1900,
    "descripcion": "¡Bienvenido a la asombrosa ciudad de Singapur! Nuestro paquete turístico te llevará a descubrir la modernidad, la riqueza cultural y la fusión de tradiciones en esta ciudad-estado del sudeste asiático. Maravíllate con la majestuosidad de los rascacielos en Marina Bay Sands y disfruta de la vista panorámica desde su famosa piscina en la azotea. Explora los coloridos barrios étnicos de Chinatown, Little India y Kampong Glam, cada uno con su propia identidad y encanto. Descubre los jardines botánicos de Singapur, Patrimonio de la Humanidad, y relájate en el Jardín de la Bahía con sus impresionantes estructuras futuristas. Saborea la deliciosa gastronomía de Singapur, que incluye platos chinos, malayos, indios y peranakanos. Singapur es una ciudad cosmopolita y multicultural que te dejará maravillado. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que combina lo mejor de Oriente y Occidente!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Gardens Oasis Resort",
            "categoria": "5 estrellas",
            "ubicacion": "Frente a los Jardines de la Bahía, Singapur"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Ciudad de México, México",
    "fecha": "Desde el 4 al 14 de Marzo 2024",
    "precio": 1200,
    "descripcion": "¡Bienvenido a la fascinante Ciudad de México! Nuestro paquete turístico te invita a descubrir la rica historia, la cultura vibrante y la gastronomía deliciosa de la capital mexicana. Admira los imponentes monumentos en la Plaza de la Constitución, conocida como Zócalo, y visita la majestuosa Catedral Metropolitana. Explora las antiguas pirámides de Teotihuacán y maravíllate con la grandeza de la civilización prehispánica. Sumérgete en el colorido barrio de Coyoacán, conocido por su ambiente bohemio y calles empedradas. Saborea la deliciosa comida mexicana, desde tacos hasta mole, en los tradicionales mercados y restaurantes locales. Ciudad de México es una metrópolis llena de vida y contrastes que te dejará asombrado. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que es un crisol de culturas y tradiciones!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Aztec Culture Resort",
            "categoria": "5 estrellas",
            "ubicacion": "Frente a las Pirámides de Teotihuacán"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Dubái, Emiratos Árabes Unidos",
    "fecha": "Desde el 15 al 25 de Enero 2024",
    "precio": 2200,
    "descripcion": "¡Bienvenido a la espectacular ciudad de Dubái! Nuestro paquete turístico te invita a descubrir la opulencia, la modernidad y el lujo de esta metrópolis en medio del desierto. Maravíllate con los icónicos rascacielos que adornan el horizonte, incluyendo el Burj Khalifa, el edificio más alto del mundo. Disfruta de emocionantes actividades, como un paseo en camello por las dunas del desierto y una cena bajo las estrellas en un campamento beduino. Visita el Burj Al Arab, uno de los hoteles más lujosos del mundo, y déjate sorprender por su diseño extravagante. Descubre los zocos tradicionales y los modernos centros comerciales, donde podrás encontrar desde especias hasta productos de alta gama. Saborea la deliciosa gastronomía de Dubái, que ofrece platos de todo el mundo preparados por chefs internacionales. Dubái es una ciudad de contrastes, donde lo antiguo se mezcla con lo moderno en un entorno de lujo y elegancia. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad de ensueño que nunca deja de sorprender!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Skyscraper View Hotel",
            "categoria": "4 estrellas",
            "ubicacion": "Centro de Dubái"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Auckland, Nueva Zelanda",
    "fecha": "Desde el 20 al 30 de Diciembre 2024",
    "precio": 2000,
    "descripcion": "¡Bienvenido a la impresionante ciudad de Auckland! Nuestro paquete turístico te llevará a descubrir la belleza natural, la cultura maorí y la aventura en esta vibrante ciudad de Nueva Zelanda. Explora la famosa Sky Tower y disfruta de las impresionantes vistas panorámicas de la ciudad y el puerto. Descubre la cultura maorí en el Museo de Auckland y sumérgete en la rica historia de la región. Maravíllate con la belleza de la región de Northland, conocida por sus playas, bosques y paisajes impresionantes. Disfruta de actividades al aire libre, como senderismo, kayak y avistamiento de ballenas. Saborea la deliciosa gastronomía de Auckland, que ofrece una combinación de sabores locales e internacionales. Auckland es una ciudad que ofrece una mezcla única de naturaleza, aventura y cultura. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su encanto y diversidad!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Harborfront View Hotel",
            "categoria": "5 estrellas",
            "ubicacion": "Frente al puerto de Auckland"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Estocolmo, Suecia",
    "fecha": "Desde el 6 al 13 de Mayo 2024",
    "precio": 1800,
    "descripcion": "¡Bienvenido a la hermosa ciudad de Estocolmo! Nuestro paquete turístico te invita a descubrir la elegancia, la historia y la cultura escandinava en la capital sueca. Explora la Ciudad Vieja (Gamla Stan) con sus calles adoquinadas y edificios de colores, y visita el Palacio Real, residencia oficial de la familia real sueca. Pasea por los hermosos parques y jardines, como el Parque Djurgården, y visita el impresionante Museo Vasa para ver el buque de guerra del siglo XVII, Vasa. Disfruta de un relajante paseo en barco por los canales y el archipiélago de Estocolmo. Saborea la deliciosa gastronomía sueca, que incluye platos como el salmón y las albóndigas suecas. Estocolmo es una ciudad llena de encanto y estilo escandinavo, con una combinación única de lo antiguo y lo moderno. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te enamorará con su belleza y elegancia!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Waterfront Charm Resort",
            "categoria": "5 estrellas",
            "ubicacion": "Frente al agua, Estocolmo"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Seúl, Corea del Sur",
    "fecha": "Desde el 14 al 24 de Noviembre 2023",
    "precio": 1700,
    "descripcion": "¡Bienvenido a la vibrante ciudad de Seúl! Nuestro paquete turístico te invita a descubrir la rica cultura, la tecnología moderna y la deliciosa gastronomía de la capital surcoreana. Explora los palacios históricos, como Gyeongbokgung y Changdeokgung, y sumérgete en la fascinante historia de la dinastía Joseon. Visita el colorido mercado de Gwangjang, donde podrás probar platos tradicionales coreanos y comprar souvenirs únicos. Maravíllate con la modernidad de Dongdaemun Design Plaza y disfruta de las compras en los famosos distritos comerciales de Myeongdong y Insadong. Descubre la belleza natural del Monte Namsan y el Río Han. Saborea la deliciosa comida coreana, como el bulgogi y el kimchi, en los restaurantes locales y puestos callejeros. Seúl es una ciudad de contrastes que combina lo antiguo con lo moderno, y te ofrecerá una experiencia única que nunca olvidarás. ¡Prepárate para vivir una emocionante aventura en esta metrópolis asiática que te deslumbrará con su energía y encanto!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
            "nombre": "Modern City Hotel",
            "categoria": "4 estrellas",
            "ubicacion": "Centro de Seúl"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Lisboa, Portugal",
    "fecha": "Desde el 4 al 11 de Diciembre 2023",
    "precio": 1500,
    "descripcion": "¡Bienvenido a la encantadora ciudad de Lisboa! Nuestro paquete turístico te invita a descubrir la historia, la cultura y la belleza de la capital portuguesa. Explora las estrechas calles empedradas del barrio de Alfama y admira las impresionantes vistas desde el Castillo de San Jorge. Pasea por la Plaza del Comercio y descubre la arquitectura manuelina en el Monasterio de los Jerónimos. Maravíllate con el icónico Puente 25 de Abril y disfruta de un paseo en el famoso tranvía 28 que recorre los puntos más destacados de la ciudad. Descubre la vida nocturna en el Barrio Alto y relájate en las playas cercanas de Cascais y Estoril. Saborea la deliciosa gastronomía portuguesa, que incluye platos como el bacalao y los pasteles de Belém. Lisboa es una ciudad llena de encanto, historia y vistas panorámicas que te enamorará desde el primer momento. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su atmósfera única y su carácter acogedor!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
            "nombre": "Historic City Center Hotel",
            "categoria": "4 estrellas",
            "ubicacion": "Centro de Lisboa"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Ho Chi Minh, Vietnam",
    "fecha": "Desde el 15 al 25 de Abril 2024",
    "precio": 1600,
    "descripcion": "¡Bienvenido a la emocionante ciudad de Ho Chi Minh! Nuestro paquete turístico te invita a descubrir la rica historia, la cultura vibrante y la deliciosa gastronomía del sur de Vietnam. Explora los fascinantes túneles de Cu Chi, utilizados durante la Guerra de Vietnam, y maravíllate con la arquitectura colonial francesa en la Oficina Central de Correos y la Catedral de Notre-Dame. Pasea por el animado Mercado Ben Thanh y saborea los sabores auténticos en los puestos callejeros de comida. Descubre los paisajes rurales y las aldeas tradicionales del delta del Mekong, donde podrás navegar en bote y conocer la vida local. Saborea la auténtica comida vietnamita, desde los pho hasta los rollitos de primavera, y disfruta de un café vietnamita en los cafés locales. Ho Chi Minh es una ciudad de contrastes, donde lo antiguo y lo moderno se mezclan en una experiencia única de la cultura vietnamita. ¡Prepárate para vivir una aventura inolvidable en esta ciudad llena de historia y encanto!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Riverfront View Resort",
            "categoria": "5 estrellas",
            "ubicacion": "Frente al río Saigón, Ho Chi Minh"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "San Petersburgo, Rusia",
    "fecha": "Desde el 13 al 20 de Mayo 2024",
    "precio": 1900,
    "descripcion": "¡Bienvenido a la majestuosa ciudad de San Petersburgo! Nuestro paquete turístico te invita a descubrir la rica historia, la arquitectura impresionante y el arte inigualable de la antigua capital rusa. Explora los espléndidos palacios, como el Palacio de Invierno y el Palacio de Catalina, y maravíllate con las obras maestras en el Museo del Hermitage, uno de los museos más grandes y prestigiosos del mundo. Pasea por las encantadoras calles adoquinadas del centro histórico y visita la Catedral de San Isaac y la Iglesia del Salvador sobre la Sangre Derramada. Disfruta de un relajante paseo en barco por los canales de la Venecia del Norte. Saborea la deliciosa gastronomía rusa, desde el borsch hasta el caviar, en los elegantes restaurantes y cafés locales. San Petersburgo es una ciudad llena de belleza y cultura, donde el pasado imperial se combina con una atmósfera moderna y artística. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su elegancia y esplendor!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
        {
            "nombre": "Imperial Palace Hotel",
            "categoria": "5 estrellas",
            "ubicacion": "Centro de San Petersburgo"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Budapest, Hungría",
    "fecha": "Desde el 20 al 29 de Febrero 2024",
    "precio": 1700,
    "descripcion": "¡Bienvenido a la fascinante ciudad de Budapest! Nuestro paquete turístico te invita a descubrir la historia, la arquitectura impresionante y los relajantes balnearios de la Perla del Danubio. Explora el majestuoso Parlamento Húngaro, el Castillo de Buda y la imponente Basílica de San Esteban. Maravíllate con las vistas panorámicas desde la Colina de Gellért y el Bastión de los Pescadores. Pasea por las elegantes avenidas y los encantadores callejones del centro de la ciudad. Disfruta de un relajante baño en los famosos balnearios termales, como Széchenyi y Gellért, y prueba la gastronomía húngara en los acogedores restaurantes locales. Budapest es una ciudad de contrastes, donde lo antiguo y lo moderno se mezclan en una experiencia única. ¡Prepárate para vivir una aventura inolvidable en esta ciudad que te enamorará con su encanto y su ambiente acogedor!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Riverfront View Resort",
            "categoria": "5 estrellas",
            "ubicacion": "Frente al Danubio, Budapest"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Marrakech, Marruecos",
    "fecha": "Desde el 5 al 15 de Febrero 2024",
    "precio": 1800,
    "descripcion": "¡Bienvenido a la cautivadora ciudad de Marrakech! Nuestro paquete turístico te invita a sumergirte en los colores, aromas y sabores de esta fascinante ciudad marroquí. Explora la emblemática Plaza Jemaa el-Fna y déjate llevar por la magia de los zocos, donde podrás comprar artesanías, especias y productos locales. Maravíllate con los exquisitos palacios y jardines, como el Palacio Bahía y los Jardines de Majorelle. Pasea por las estrechas callejuelas del Barrio de la Medina y visita la mezquita Koutoubia, un verdadero símbolo de Marrakech. Disfruta de un relajante baño en un auténtico hammam marroquí y prueba los deliciosos platos tradicionales, como el cuscús y el tagine. Marrakech es una ciudad llena de encanto, tradición y hospitalidad que te transportará a un mundo de magia oriental. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te atrapará con su belleza y autenticidad!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Oasis Garden Retreat",
            "categoria": "5 estrellas",
            "ubicacion": "Cerca de los Jardines de Majorelle, Marrakech"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
},

{
    "lugar": "Cusco, Perú",
    "fecha": "Desde el 18 al 28 de Marzo 2024",
    "precio": 1900,
    "descripcion": "¡Bienvenido a la mágica ciudad de Cusco! Nuestro paquete turístico te invita a explorar la asombrosa historia, la cultura ancestral y los impresionantes paisajes de los Andes peruanos. Descubre los antiguos restos incas en la famosa ciudadela de Machu Picchu, una de las siete maravillas del mundo moderno. Explora los encantadores callejones empedrados del centro histórico de Cusco y visita los sitios arqueológicos cercanos, como Sacsayhuamán y Q'enqo. Maravíllate con la belleza de los valles sagrados y los paisajes montañosos de la región. Disfruta de la deliciosa gastronomía peruana, desde el ceviche hasta el lomo saltado, en los acogedores restaurantes locales. Cusco es una ciudad llena de espiritualidad y misterio, donde las tradiciones incas se mezclan con la cultura contemporánea. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te envolverá con su encanto y su riqueza cultural!",
    "incluido":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "hotel":
          {
            "nombre": "Panoramic View Resort",
            "categoria": "5 estrellas",
            "ubicacion": "Cerca de la ciudadela de Machu Picchu"
          },
    "informacionAdicional": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "imagenes": ["https://res.cloudinary.com/dcazjgsgo/image/upload/v1684866979/fruteriaFotos/jat26dxe1blqu3dc9ye4.jpg"]
}

      // {
      //   fruitName: 'pera de conferencia',
      //   type: 'semidulce',
      //   priceKg: 1.50,
      //   origin: 'Holanda',
      // },


    ];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allDestinations = await Destination.find();
    if(allDestinations.length > 0){
        await Destination.collection.drop();
        console.log("Destinos borrados");
    }
})
.catch((error) => console.log("Error borrando destinos"))
.then(async() => {
    const destinationsMap = arrayDestinations.map(destination => new Destination(destination));
    await Destination.insertMany(destinationsMap);
    console.log("Destinos insertados");
})
.catch((error) => console.log(`Error insertando destinos: $:{error}`))
.finally(() => mongoose.disconnect());



