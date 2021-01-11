const checkFavorite = (arr, query) => {
  const result = arr.find(item => item.id === query);
  if (result && result.id === query) {
    return true
  } else {
    return false
  }
}

export default checkFavorite;