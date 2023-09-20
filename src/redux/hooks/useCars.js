import { useSelector } from "react-redux";
import { selectCars, selectIsLoading, selectFavs } from "../cars/selectors";

export function useCars() {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const favs = useSelector(selectFavs);

  return {
    cars,
    isLoading,
    favs,
  };
}
