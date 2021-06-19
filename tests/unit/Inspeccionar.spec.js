import { shallowMount } from "@vue/test-utils";
import Inspeccionar from "../../src/views/Inspeccionar.vue";

const $t = () => {};

describe("Inspeccionar Component", () => {
  const wrapper = shallowMount(Inspeccionar, {
    props: { setCurrentPage: Function },
    mocks: { $t },
  });

  const searchbar = wrapper.find(".searchbar input");

  test("Tiene barra de busqueda", () => {
    expect(searchbar.exists()).toBe(true);
  });
});
