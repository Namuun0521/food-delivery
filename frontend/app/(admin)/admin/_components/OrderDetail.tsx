type OrderDetailProps = {
  number: number;
  Consumer: string;
  food: number;
  date: string;
  total: number;
  address: string;
  state: string;
};
export const OrderDetail = (props: OrderDetailProps) => {
  return (
    <div className="flex justify-center items-center h-13 border border-gray-400">
      <div className="w-12">
        <input
          type="checkbox"
          // value={setting}
          // checked={this.settings[setting]}
          // onChange={this.onChangeAction.bind(this)}
        />
      </div>
      <div className="w-14">{props.number}</div>
      <div className="w-53.25">{props.Consumer}</div>
      <div className="w-40">{props.food}</div>
      <div className="w-40">{props.date}</div>
      <div className="w-40">{props.total}</div>
      <div className="w-53.25">{props.address}</div>
      <div className="w-40">{props.state}</div>
    </div>
  );
};
