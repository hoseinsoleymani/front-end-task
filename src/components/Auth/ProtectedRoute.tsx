import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({ path, exact, children }) => {
  const auth = useSelector((store: RootState) => store.authenticated);

  return auth ? (
    <Route path={path}>
      {children}
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};
