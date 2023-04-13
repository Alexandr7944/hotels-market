import { MemoryRouter } from "react-router-dom";
import AppRouter from "../router/AppRouter";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";

const renderWithRouter = (initialRoute = '/') => {

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppRouter/>
      </MemoryRouter>
    </Provider>
  )
}

export default renderWithRouter;
