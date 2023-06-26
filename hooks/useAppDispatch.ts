import { useDispatch } from "react-redux";
import { AppDispatch } from "@interfaces";

export const useAppDispatch: () => AppDispatch = useDispatch;