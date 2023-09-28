import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image
        src="/logo.svg"
        width={240}
        height={57}
        alt="Social Brohthers Logo"
      />
    </div>
  );
}

export default Logo;
