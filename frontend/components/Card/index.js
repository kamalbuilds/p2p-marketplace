import { Button } from "../Button";
import { useState } from "react";
import { useCashApp } from "../../hooks/cashapp";
// import { useCashApp } from ""../"
/* eslint-disable @next/next/no-img-element */

const Card = ({ url, productName, price, onClick }) => {
  const { doTransaction } = useCashApp();

  // Reciever would be merchant's address
  const [receiver, setReceiver] = useState(
    "J34HqUvYCxALnbPrFRXxVXx1T8GSG8yuxf3vdkx7U8Mx"
  );
  const [transactionPurpose, setTransactionPurpose] = useState("");
  const onPay = async () => {
    await doTransaction({ amount: price, receiver, transactionPurpose });
  };

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
          <p className="mb-4 text-base text-gray-700">{price} SOL</p>
          <Button onClick={onPay} className="w-full">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
