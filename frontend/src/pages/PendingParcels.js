import ParcelsList from "../components/ParecelsList";

const PendingParcels = () => {
  return (
    <section className="section">
      <h2 className="section-title">
        All Pending Parcels, Start Hunting Some!
      </h2>
      <ParcelsList parcelstype="bikerparcels" />
    </section>
  );
};

export default PendingParcels;
