import NestedDropdown from './components/NestedDropdown';
const dropdownData = [
  {
    id: 1,
    name: "Item 1 >>",
    children: [
      { id: 2, name: "Subitem 1.1" },
      { id: 3, name: "Subitem 1.2 >>",
        children:[
              
          { id: 12, name: "Sub-subitem 3.1.1" },
          { id: 13, name: "Sub-subitem 3.1.2"}
            ]
       },
    ],
  },
  
];

function App() {
  return (
   <div>
    <NestedDropdown data={dropdownData}/>
   </div>
  );
}

export default App;
