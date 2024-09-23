import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import drinksImg from "../../../assets/menu/salad-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import useMenu from "../../../hooks/useMenu";


const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad'); 
  const drinks = menu.filter(item => item.category === 'drinks'); 

  return (
    <div>
      <Helmet>
        <title>Tasty Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitle subHeading="Don't miss" heading="Today's Offered"></SectionTitle>
      <MenuCategory items={dessert} title="dessert" coverImg={dessertImg}></MenuCategory>
      <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
      <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>
      <MenuCategory items={drinks} title="drinks" coverImg={drinksImg}></MenuCategory>
   
    </div>
  );
};

export default Menu;
