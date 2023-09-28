interface Card {
  children: React.ReactNode;
}

function Card({ children }: Card) {
  return <div className="bg-white p-6">{children}</div>;
}

export default Card;
