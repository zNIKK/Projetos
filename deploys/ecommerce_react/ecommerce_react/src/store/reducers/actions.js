export function imgSelected(mainImg) {
  return { type: "imgSelected", mainImg };
}

export function showModal(modal) {
  return { type: "showModal", modal };
}

export function showCart() {
  return { type: "showCart" };
}

export function isEmpty(isempty) {
  return { type: "empty", isempty };
}

export function values(valueCount) {
  return { type: "values", valueCount };
}
