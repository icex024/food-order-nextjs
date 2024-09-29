import { NavbarCustomer } from "./NavbarCustomer";

describe(NavbarCustomer, () => {
  it("probni test", () => {
    const { getByTestId } = render(
      <NavbarCustomer key={"zju-prika-testove-pisem"} />
    );
    const labelValue = getByTestId("customer-navbar-restaurants").textContent;
    expect(labelValue).toEqual("Restaurants");
  });
});
