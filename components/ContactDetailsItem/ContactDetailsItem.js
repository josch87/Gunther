import Image from "next/image";

export default function ContactDetailsItem({ icon, value, type }) {
  return (
    <li>
      <div>
        <Image src={icon} alt="" width={20} height={20} />
      </div>
      <div>
        <div>{value}</div>
        <div>{type}</div>
      </div>
    </li>
  );
}
