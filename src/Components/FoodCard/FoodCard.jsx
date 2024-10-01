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
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
