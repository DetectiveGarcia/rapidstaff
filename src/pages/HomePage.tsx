import { Main } from "../components/Home/Main";
import { useState } from "react";
import Header from "../components/Home/Header";
import Section from "../components/Section";
import img from "../images/volodymyr-hryshchenko-V5vqWC9gyEU-unsplash.jpg";
import ContactModal from "../components/Modal/ContactModal";

const HomePage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = (): void => {
    setShowModal(false);
  };
  return (
    <>
      <Header />
      <Section>
        <p>
          Hos Rapidstaff sätter vi människan i fokus. Vi värdesätter personalens
          välmående och arrangerar regelbundna hälsoträffar för att säkerställa
          att våra konsulter mår bra när de är på jobbet.
        </p>
        <br />
        <p>
          Vi är dedikerade till att matcha rätt person med rätt position för att
          skapa hållbara och framgångsrika arbetsrelationer. Detta ser vi som
          väldigt viktigt och det är ett mål vi alltid strävar efter att uppnå.
          Vi fokuserar på att anställa personer som har energi och drivkraft.
          Oavsett om du söker personal för ett kortsiktigt projekt eller
          långsiktiga behov, är vi här för att hjälpa dig att hitta de bästa
          talangerna på marknaden. Låt oss tillsammans bygga ett starkt och
          kompetent arbetsstyrka som driver ditt företag framåt.
        </p>
      </Section>
      <Main />
      <Section {...{ img }}>
        <div className="flex flex-col items-center gap-5 text-stone-50 ">
          <p className="text-6xl">
            Undrar ni över nåt mer? Då är ni välkomna att kontakta oss på
            telefon eller via mail.
          </p>
          <div className="block w-[100px] h-[2px] bg-yellow-400 mx-auto mt-[10px] mb-[10px]"></div>
          <button onClick={() => setShowModal(true) } className="bg-yellow-500 p-3 px-5 rounded">Kontakta oss</button>
        </div>
      </Section>
      {showModal && (
        <ContactModal {...{ showModal, handleCloseModal }}>
          <br />
          <h5 className="text-2xl text-center">
            Tack för att du kontaktar oss! Vänligen lämna ditt telefonnummer i
            meddelandet så att vi kan nå dig för ytterligare information.
          </h5>
          <br />
          <p className="text-lg text-center">Vi söker dig som letar efter arbetskraft.</p>
          <br />
          <div className="flex justify-center items-center  ">
            <div className="max-w-lg w-full flex flex-col justify-around  gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-light">
                  Förnamn och efternamn
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray-300 p-2 rounded text-black"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-light">
                  Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="border border-gray-300 p-2 rounded text-black"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-light">
                  Meddelande
                </label>
                <textarea name="" id="" className="rounded text-black p-2" rows={7} ></textarea>
              </div>
    
              <button className=" w-full mx-auto rounded text-xl h-10 bg-yellow-500 text-black">
                Skicka
              </button>
            </div>
          </div>
        </ContactModal>
      )}
    </>
  );
};

export default HomePage;
