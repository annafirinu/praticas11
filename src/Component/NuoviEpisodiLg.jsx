const NuoviEpisodiLg = function (props) {
  return (
    <div className="col text-white p-1 d-none d-lg-block">
      <img src={props.link} className="img-fluid" />
      <p className="text-white">{props.text}</p>
    </div>
  );
};

export default NuoviEpisodiLg;
