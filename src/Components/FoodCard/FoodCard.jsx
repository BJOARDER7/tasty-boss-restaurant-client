const FoodCard = ({item}) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="food"
        />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white px-4 mt-4 mr-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
