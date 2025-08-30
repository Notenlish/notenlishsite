import Image from "next/image";

export default function BuyMeACoffee() {
  return (
    <a
      href="https://www.buymeacoffee.com/notenlish"
      target="_blank"
      rel="noopener noreferrer"
        className="mt-4 w-fit bg-[#FFDD00] text-black text-xl font-poppins px-4 py-3 rounded-lg shadow flex items-center flex-row gap-2 hover:opacity-90"
    >
      <Image alt="Coffe Cup" width={24} height={24} src="/coffee.svg"></Image>{" "}
      Buy me a coffee
    </a>
  );
}
