import { useSelector, TypedUseSelectorHook } from "react-redux";
import { State } from "@interfaces";

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;