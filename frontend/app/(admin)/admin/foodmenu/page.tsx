import { Appetizers } from "../_components/Appetizers";
import { Category } from "../_components/Category";

export default function Page() {
  return (
    <div className="flex w-full">
      <div className="w-full h-full bg-gray-500 pl-6 pr-10 pt-6">
        <div className="flex justify-end pb-6">
          <img
            className=" w-8 h-8 rounded-4xl "
            src="/Avatar Image.png"
            alt=""
          />
        </div>
        <Category />
        <Appetizers />
      </div>
    </div>
  );
}
