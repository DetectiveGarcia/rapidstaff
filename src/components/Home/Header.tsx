import img1 from "../../images/tim-marshall-cAtzHUz7Z8g-unsplash.jpg";

const Header = () => {
  return (
    <>
      <header style={{ backgroundImage: `url(${img1})`}} className="h-screen bg-center flex justify-center bg-cover ">
        <div className="text-stone-50 flex flex-col justify-center items-center text-center gap-16">
          <p className="text-xl">VÄLKOMMEN TILL RAPIDSTAFF</p>
          <div>
            <p className="text-dynamic font-bold">Din snabba lösning för välmående personal</p>
            <div className="inline-block">
                <p className="headerParagraphAnimation text-2xl">Joina vårt team idag!</p>
            </div>
          </div>
          <button className="border w-40 h-12 rounded-lg">Kontakta oss</button>
        </div>
      </header>
    </>
  );
};

export default Header;
