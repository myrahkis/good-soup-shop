/* eslint-disable react/prop-types */
function MenuItem({ soup }) {
  const { strMeal: soupName, strArea: country, strMealThumb: picture } = soup;

  return (
    <li className="flex min-w-60 max-w-60 flex-col text-base text-dark-text-color">
      <img
        src={picture}
        alt={`${soup.strMeal} pic`}
        className="mb-3 h-[14rem] w-[14rem] self-center rounded-2xl duration-100 hover:translate-y-0.5 shadow-xl"
      />
      <div>
        <h4 className="font-semibold uppercase">{soupName}</h4>
        <p>Cuisine: {country}</p>
      </div>
      <div className="mt-2 flex w-full items-center justify-between">
        <p>$N</p>
        <button className="rounded-lg bg-main-color px-3 py-1 text-light-text-color hover:bg-secondary-color hover:text-dark-text-color">
          ADD
        </button>
      </div>
    </li>
  );
}

export default MenuItem;
