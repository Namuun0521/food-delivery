"use client";
export const Footer = () => {
  return (
    <div className=" bg-black  px-22 py-25">
      <div className="flex bg-black text-white justify-between px-25 py-25">
        <div>
          <img
            alt="logo"
            src="/Logo Container (1).png"
            className="w-22 h-[93.7px] "
          />
        </div>
        <div className="flex gap-14">
          <div>
            <div className="text-gray-500">NOMNOM</div>
            <div>Home </div>
            <div>Contact us</div>
            <div>Delivery zossne</div>
          </div>
          <div>
            <div className="text-gray-500">MENU</div>
            <div>Appetizers</div>
            <div>Salads</div>
            <div>Pizzas</div>
            <div>Main dishes</div>
            <div>Desserts</div>
          </div>
          <div>
            <div className="text-black">.</div>
            <div>Side dish </div>
            <div>Brunch</div>
            <div>Desserts</div>
            <div>Beverages</div>
            <div>Fish & Sea foods</div>
          </div>
        </div>
        <div>
          <div>FOLLOW US</div>
          <div className="flex">
            <img alt="logo" src="/Instagram.png" className="w-7 h-7 " />
            <img alt="logo" src="/Facebook.png" className="w-7 h-7 " />
          </div>
        </div>
      </div>
      <div className="flex text-gray-500 gap-12 border-t py-8">
        <div>Copy right 2024 © Nomnom LLC</div>
        <div>Privacy policy </div>
        <div>Terms and conditoin</div>
        <div>Cookie policy</div>
      </div>
    </div>
  );
};
