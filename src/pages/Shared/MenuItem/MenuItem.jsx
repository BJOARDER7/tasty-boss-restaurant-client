

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex space-x-2 mx-4">
            <img className="w-[96px] md:w-[120px]" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
            <div className="px-4">
                <h3 className="uppercase">{name} -------------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-500">${price}</p>
        </div>
    );
};

export default MenuItem;