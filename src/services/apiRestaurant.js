const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Soup";

export async function getMenu() {
  const res = await fetch(API_URL);

  if (!res.ok) throw new Error("Не получилось с апи(((");

  const { meals } = await res.json();

  return meals;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) throw new Error("Не получилось найти заказ");

  const data = await res.json();

  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();

    return data;
  } catch {
    throw Error("ошибка в создании заказа");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch {
    throw Error("Не получилось обновить заказ.");
  }
}
