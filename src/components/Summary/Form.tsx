"use client";

import Image from "next/image";
import { useState } from "react";

const Form = () => {
  const [eMoney, setEMoney] = useState(true);
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  return (
    <form className="flex flex-col bg-gray-100 rounded-lg p-4 m-4 inner-shadow border lg:w-[750px]" >
      <h1 className="text-2xl tracking-wider">CHECKOUT</h1>
      <h2 className="text-orange-400 mt-4">BILLING DETAILS</h2>
      <label className="text-sm mb-1 mt-4" htmlFor="">
        Name
      </label>
      <input className="border rounded-lg p-3" type="text" />
      <label className="text-sm mb-1 mt-4" htmlFor="">
        Email
      </label>
      <input className="border rounded-lg p-3" type="text" />
      <label className="text-sm mb-1 mt-4" htmlFor="">
        Phone Number
      </label>
      <input className="border rounded-lg p-3" type="text" />
      <h2 className="text-orange-400 mt-4">SHIPPING INFO</h2>
      <label className="text-sm mb-1 mt-4" htmlFor="">
        Your address
      </label>
      <input className="border rounded-lg p-3" type="text" />
      <label className="text-sm mb-1 mt-4" htmlFor="">
        ZIP Code
      </label>
      <input className="border rounded-lg p-3" type="text" />
      <label className="text-sm mb-1 mt-4" htmlFor="">
        City
      </label>
      <input className="border rounded-lg p-3" type="text" />
      <label className="text-sm mb-1 mt-4" htmlFor="">
        Country
      </label>
      <input className="border rounded-lg p-3" type="text" />
      <h2 className="text-orange-400 mt-4">PAYMENT DETAILS</h2>
      <label className="text-sm mb-1 mt-4" htmlFor="">
        Payment Method
      </label>
      <div className="flex flex-col space-y-4">
        <div
          className={
            eMoney
              ? "flex items-center border-orange-400 p-3 rounded-lg border bg-white"
              : "flex items-center border-gray-400 p-3 rounded-lg border bg-white"
          }
          onClick={() => {
            setEMoney(true);
            setCashOnDelivery(false);
          }}
        >
          <input className="mr-4" type="checkbox" checked={eMoney} />
          <p>e-Money</p>
        </div>
        <div
          className={
            cashOnDelivery
              ? "flex items-center border-orange-400 p-3 rounded-lg border bg-white "
              : "flex items-center border-gray-400 p-3 rounded-lg border bg-white"
          }
          onClick={() => {
            setCashOnDelivery(true);
            setEMoney(false);
          }}
        >
          <input className="mr-4" type="checkbox" checked={cashOnDelivery} />
          <p>Cash on Delivery</p>
        </div>
      </div>

      {eMoney && (
        <>
          <label className="text-sm mb-1 mt-4" htmlFor="">
            e-Money Number
          </label>
          <input className="border rounded-lg p-3" type="text" />
          <label className="text-sm mb-1 mt-4" htmlFor="">
            e-Money PIN
          </label>
          <input className="border rounded-lg p-3" type="text" />
        </>
      )}
      {cashOnDelivery && (
        <>
          <div className="flex items-center space-x-4 my-4">
            <Image src={"/cash.svg"} alt="cash" width={50} height={50} />
            <p className="text-gray-400 text-sm">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be can
            </p>
          </div>
        </>
      )}
    </form>
  );
};

export default Form;
