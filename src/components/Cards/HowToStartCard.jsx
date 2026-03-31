export default function HowToStartCard({
  cardNumber = 0,
  cardImage,
  cardTitle = "Xsmall Card",
  cardDescription = "A card component has a figure, a body part, and inside body there are title and actions parts",
}) {
  return (
    <div className="card w-full min-h-95 bg-base-100 card-md gap-4 shadow-sm">
      <div className="card-body items-center text-center">
        {/* Badge*/}
        <div className="mb-3 w-full flex justify-end">
          <div className="bg-main-linear grid place-items-center rounded-full w-10 h-10">
            <p className="font-bold text-sm text-white">{cardNumber}</p>
          </div>
        </div>

        {/* Avatar*/}
        <div className="w-25 h-25 rounded-full bg-purple/10 grid place-items-center">
          <img src={cardImage} alt="avatar" className="w-11.25 h-auto" />
        </div>

        {/* Card Title*/}
        <h3 className="card-title font-bold text-2xl justify-center">
          {cardTitle}
        </h3>

        {/* Card Description*/}
        <p>{cardDescription}</p>
      </div>
    </div>
  );
}
