import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
   const [menu] = useMenu();
   const popularItems = menu.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-8">
            <SectionTitle
            subHeading={"Popular Item"}
            heading={"From our menu"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    popularItems.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            
        </section>
    );
};

export default PopularMenu;