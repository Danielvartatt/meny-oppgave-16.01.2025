import "./Menycard.css";
export default function MenyCard({
  data: { tittel, pris, ingredienser, kategori, allergener },
}) {
  return (
    <div className="container">
      <div className="object">
        <h2>{tittel}</h2>
        <h3>{kategori}</h3>
        <p>ingredienser: {ingredienser}</p>
        <p>allergener: {allergener}</p>
        <p>pris: {pris}</p>
      </div>
    </div>
  );
}
