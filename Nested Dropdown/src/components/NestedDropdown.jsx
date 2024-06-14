import Dropdown from "./Dropdown";

function NestedDropdown({ data }) {
  
  return (
    <div className="flex justify-center items-center mt-20 flex-col">
      {data?.map((item) => (
       <Dropdown item={item} key={item.id} />
      ))}
    </div>
  );
}

export default NestedDropdown;
