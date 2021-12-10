import { mount } from "enzyme";
import StartView from "../components/Startview";
import { BrowserRouter } from "react-router-dom";
import { wrap } from "module";

const product = [
  {
    id: 1,
    name: "Bahama Mama Bronzer",
    price: 149,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, illo eum ducimus, sunt deserunt qui esse facilis dolore perferendis autem necessitatibus aspernatur cumque molestiae distinctio numquam quaerat, velit dolores corporis?",
    image: "",
  },
];

describe("Test for Serch on product", () => {
  test('Search "Bahama", should render 1 product', () => {
    const wrapper = mount(
      <BrowserRouter>
        <StartView products={product} />
      </BrowserRouter>
    );
    const searchText = "Bahama";
    const searchField = wrapper.find('[data-test="searchProduct"]');

    searchField.simulate("change", { target: { value: searchText } });
    expect(wrapper.find('[data-test="resultProduct"]').length).toBe(1);
  });
  test('Search "Mascara", should render 0 products', () => {
    const wrapper = mount(
      <BrowserRouter>
        <StartView products={product} />
      </BrowserRouter>
    );
    const searchText = "Mascara";
    const searchField = wrapper.find('[data-test="searchProduct"]');

    searchField.simulate("change", { target: { value: searchText } });
    expect(wrapper.find('[data-test="resultProduct"]').length).toBe(0);
  });
  test('Search "bAhAmA", should render 1 product. (Case Insensitive Search)', () => {
    const wrapper = mount(
      <BrowserRouter>
        <StartView products={product} />
      </BrowserRouter>
    );
    const searchText = "bAhAmA";
    const searchField = wrapper.find('[data-test="searchProduct"]');

    searchField.simulate("change", { target: { value: searchText } });
    expect(wrapper.find('[data-test="resultProduct"]').length).toBe(1);
  });
});
