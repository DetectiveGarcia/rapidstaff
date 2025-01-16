import img1 from "../../images/tim-marshall-cAtzHUz7Z8g-unsplash.jpg";

const Header = () => {
  return (
    <>
      <header style={{ backgroundImage: `url(${img1})`}} className="h-screen bg-center flex justify-center">
        <div className="text-stone-50 flex flex-col justify-center items-center text-center">
          <p>VÄLKOMMEN TILL RAPIDSTAFF</p>
          <div>
            <p>Din snabba lösning för välmående personal</p>
            <div className="inline-block">
                <p className="headerParagraphAnimation">Joina vårt team idag!</p>
            </div>
          </div>
          <button className="border">Kontakta oss</button>
        </div>
      </header>
    </>
  );
};

export default Header;
