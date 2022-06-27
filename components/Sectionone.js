import Image from "next/image";
import Link from "next/link";

const SectionOne = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {Slide()}
      </div>
    </section>
  );
};

export default SectionOne;

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpeg"} height={560} width={600} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col ml-2">
        <div className="cat">
          <Link href={"/"}>
            <a className=" text-orange-600 hover:text-orange-800">
              Business,Travel
            </a>
          </Link>
          <Link href={"/"}>
            <a className=" text-gray-800 hover:text-gray-600">
              {" "}
              - July 3, 2022
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-4xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          facere alias numquam enim et eos iusto excepturi amet, rem reiciendis
          repellendus, optio asperiores quas repellat mollitia est! Expedita,
          exercitationem sint eius alias molestias numquam accusamus adipisci
          nesciunt eveniet laboriosam minima!
        </p>
        <h1>Author</h1>
      </div>
    </div>
  );
}
