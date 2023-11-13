export async function availFlight(newOrder) {
  try {
    const res = await fetch(``, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
    const { data } = await res.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
}
