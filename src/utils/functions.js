export const getImageUrl = imageParameter => {
  return new URL(`../assets/images/${imageParameter}`, import.meta.url).href
}

