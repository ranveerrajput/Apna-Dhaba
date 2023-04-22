import { Provider } from "react-redux";
import Header from "../Header";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on renderig header", () => {
  //load the header first
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  //check if logo is present
  const logo = header.getAllByTestId("logo");
  //console.log(logo);
  expect(logo[0].src).toBe("http://localhost/dummy.png");

  //check the online status
});

test("Online status should be Green on rendering the status", () => {
  //load the header first
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  //check the status
  const onlineStatus = header.getByTestId("online-status");
  console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart should have o items on rendering the header", () => {
  //load the header first
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  //check if logo is present
  const cart = header.getByTestId("cart");
  // console.log(cart);
  expect(cart.innerHTML).toBe("Cart-0 Items");

  //check the online status
});
