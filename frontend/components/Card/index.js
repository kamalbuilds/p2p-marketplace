import { Button } from "../Button";

/* eslint-disable @next/next/no-img-element */
const Card = ({ url, productName, price, onClick }) => {
  return (
    <div className="flex justify-center">
      <div className=" max-w-sm rounded-lg bg-white shadow-lg">
        <a href="#!">
          <img className="aspect-video rounded-t-lg" src={url} alt="" />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium text-gray-900">
            {productName}
          </h5>
          <p className="mb-4 text-base text-gray-700">${price}</p>

          <Button onClick={onClick} className="w-full">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
