import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scroll-menu";
import "./App.css";
import SearchBar from "./Components/SearchBar"; 
import foodie from "./img/food.jpg"
// list of items
const list = [
  { name: "Ana Yemekler" },
  { name: "Aperatifler" },
  { name: "Soguk Icecekler" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
];

const foodData = {
  "Ana Yemekler": [
    { name: "Dish 1", description: "Description for Dish 1" },
    { name: "Dish 2", description: "Description for Dish 2" },
   
  ],
  "Aperatifler": [
    { name: "Appetizer 1", description: "Description for Appetizer 1" },
    { name: "Appetizer 2", description: "Description for Appetizer 2" },
    
  ],
  "Soguk Icecekler": [
    { name: "Cold Drink 1", description: "Description for Cold Drink 1" },
    { name: "Cold Drink 2", description: "Description for Cold Drink 2" },
   
  ],
 
};


// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>
   <h3 className="font-bold">{text}</h3> 
    </div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem  text={name} key={name} selected={selected} />;
  });


export const FoodList = ({ category, foodData }) => {
  const foods = foodData[category] || [];
 
  return (
    <div className="shadowed mt-4">
      <div className="flex  text-center md:text-left">
   <h2 className="flex font-bold  justify-start p-3">{category}</h2>
   </div>

    <div className="mx-auto  py-2 px-4 sm:px-6 w-full max-w-7xl bg-white">
    
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2">
    {foods.map((food, index) => (
        <li key={index} className="col-span-1 group">
          <a href='' className="flex sm:justify-center space-x-3">
  
            {/* :PICTURE */}
            <div className="flex-shrink-0 relative w-1/2 sm:w-2/5 h-25 sm:h-auto sm:min-h-full rounded-sm overflow-hidden filter brightness-95 group-hover:brightness-100">
              <img src={foodie} alt='' className="w-32 h-32 object-cover object-center" />
            </div>
  
  
            {/* :Food DETAILS */}
            <div className="flex flex-col ">
               {/* :Food Name */}
              <h3 className="text-lg text-gray-700 font-bold">{food.name}</h3>
              {/* ::Price */}
              <p className="mt-1 mb-10 text-base text-gray-500 font-medium">100 tl</p>
           
             
            </div>
  
          </a>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </li>
        ))}
    </ul>
    
  </div>
    </div>
  );
};



const selected = "item1";

class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);

    this.state = { selected: "Ana Yemekler" };
  }

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <header className="p-2 text-lg font-bold">
          Restaurant Name
        </header>
       <main>
       <SearchBar items={this.menuItems} />
        <ScrollMenu 
          data={menu}
          selected={selected}
          onSelect={this.onSelect}
        />
         <FoodList category={selected} foodData={foodData} />
       </main>
        
      
      </div>
    );
  }
}

export default App;
