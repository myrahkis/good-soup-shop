/* eslint-disable react/prop-types */
function MenuItem({ soup }) {
  const { strMeal: soupName, strArea: country, strMealThumb: picture } = soup;

  return (
    <li className="max-w-72 text-center text-base text-dark-text-color">
      <img
        src={picture}
        alt={`${soup.strMeal} pic`}
        className="mb-1 h-[17rem] w-[17rem] rounded-2xl border border-emphasis-color"
      />
      <div>
        <h4 className="font-semibold uppercase">{soupName}</h4>
        <p>Cuisine: {country}</p>
      </div>
    </li>
  );
}

export default MenuItem;
