import starsImage from "@/assets/stars.jpg";

export default function Stars() {
  return (
    <div>
      <h2>
        Assim estava o céu na noite em que nos beijamos pela primeira vez:
      </h2>
      <img src={starsImage.src} alt="" />
    </div>
  );
}
