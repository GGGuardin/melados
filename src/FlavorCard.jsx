export function FlavorCard({ name, imgsrc }) {
  return (
    <>
      <div className="fc border-2 rounded-3xl inline overflow-y-hidden" data-aos="fade-up" data-aos-duration={500}>
        <img src={imgsrc} //className="rounded-2xl"
        />
        <p className="mx-auto flavor-class">{name}</p>
      </div>
    </>
  );
}
