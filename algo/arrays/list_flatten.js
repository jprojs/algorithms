function listFlatten(array) {
  return array.reduce(
    function arrayReducer(flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
