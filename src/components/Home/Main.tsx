import { motion } from "framer-motion";
import img1 from "../../images/hotel-receptionist-giving-key-to-guest.png";
import img2 from "../../images/stella-he-cC-OMDTczoA-unsplash.jpg";
import img3 from "../../images/nik-lanus-YMOHw3F1Hdk-unsplash.jpg";

import { HoverImg } from "../HoverImg";
import { RekProcessStep } from "../RekProcessStep";

export const Main = () => {
  return (
    <>
      <main className="pt-20 max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-6xl flex justify-center ">Våra tjänster</h1>
          <div className="block w-[100px] h-[2px] bg-yellow-400 mx-auto mt-[10px] mb-[10px]"></div>
          <div className="flex gap-5 text-stone-50">
            <HoverImg img={img1}>Reception</HoverImg>
            <HoverImg img={img2}>Kök & Matsal</HoverImg>
            <HoverImg img={img3}>Hottel städ</HoverImg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <motion.button className="rounded-lg bg-yellow-400 h-10 w-32"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >Ansök idag!</motion.button>
        </div>
        <p >
          Vi på Rapidstaff värdesätter kontinuerlig utveckling och erbjuder
          möjligheter för både personlig och professionell tillväxt. Genom
          utbildningar, workshops och mentorskap kan du utveckla dina
          färdigheter och avancera inom företaget.
        </p>
        <div>

          <h3 className="text-2xl">Så här kan en rekryterings process se ut hos Rapidstaff</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 place-items-center">
          <RekProcessStep title="Steg 1">
            Arbetssökande tar kontakt med oss och lägger fram sina önskemål
            kring område, samt bifogar sina referenser.
          </RekProcessStep>
          <RekProcessStep title="Steg 2">
            Vi matchar sedan kandidaten med rätt företag, så att deras
            kvalifikationer överensstämmer med vad företaget efterfrågar.
          </RekProcessStep>
          <RekProcessStep title="Steg 3">
            När vi har matchat er i vårt system så kontaktar vi er för att gå
            igenom Jobb beskrivning, samt avtal.
          </RekProcessStep>
          <RekProcessStep title="Steg 4">
            Vi har nu kommit till sista steget i processen, och det återstår
            endast att skriva avtal med respektive part.
          </RekProcessStep>
        </div>
        <p className="flex justify-center text-2xl p-10">Därefter välkomnar vi er till Rapidstaff!</p>
      </main>
    </>
  );
};
