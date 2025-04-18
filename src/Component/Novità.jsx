const Novità = function () {
  return (
    <div>
      <h1 className="text-white ms-3 mb-4 ms-lg-4 border-bottom border-secondary pb-3">
        Novità
      </h1>

      <div className="container mt-4">
        <div className="scroll-wrapper">
          <div className="scroll-box font">
            <p className="text-secondary lh-1">NUOVA STAZIONE RADIO</p>
            <p className="text-white">
              Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill.
            </p>

            <img className="dimensione" src="src/assets/images/1a.png"></img>
          </div>
          <div className="scroll-box font">
            <p className="text-secondary lh-1">NUOVA STAZIONE RADIO</p>
            <p className="text-white">Ecco la nuova casa della musica latina</p>

            <img className="dimensione" src="src/assets/images/1b.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novità;
