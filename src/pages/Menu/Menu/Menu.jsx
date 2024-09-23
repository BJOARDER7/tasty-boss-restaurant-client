import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import useMenu from "../../../hooks/useMenu";


const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad'); 

  return (
    <div>
      <Helmet>
        <title>Tasty Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitle subHeading="Don't miss" heading="Today's Offered"></SectionTitle>
      <MenuCategory items={dessert} title="Dessert" coverImg={dessertImg}></MenuCategory>
      <MenuCategory items={soup} title="Soup" coverImg={soupImg}></MenuCategory>
      <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="Salad" coverImg={saladImg}></MenuCategory>
   
    </div>
  );
};

export default Menu;
