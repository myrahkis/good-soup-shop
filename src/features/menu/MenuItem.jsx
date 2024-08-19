/* eslint-disable react/prop-types */
function MenuItem({ soup }) {
  const { strMeal: soupName, strArea: country, strMealThumb: picture } = soup;

  return (
    <li>
      <img src={picture} alt={`${soup.strMeal} pic`} />
      <h4>{soupName}</h4>
      <p>{country}</p>
    </li>
  );
}

export default MenuItem;
