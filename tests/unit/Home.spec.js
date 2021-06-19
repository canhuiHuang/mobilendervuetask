import { shallowMount } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";

describe("Home Component", () => {
  test("Tiene rutas para creditosGrupales & listaSoftwares.", async () => {
    const wrapper = shallowMount(Home, {
      props: { setCurrentPage: Function },
    });
    const routerElements = wrapper.findAll("router-link");

    let has_creditosGrupales = false,
      has_listaSoftwares = false;
    routerElements.forEach((elem) => {
      if (
        elem.attributes().to === "/home/creditosGrupales/" ||
        elem.attributes().to === "/home/creditosGrupales"
      )
        has_creditosGrupales = true;
      else if (
        elem.attributes().to === "/home/listado_de_softwares" ||
        elem.attributes().to === "/home/listado_de_softwares/"
      )
        has_listaSoftwares = true;
    });
    expect(has_creditosGrupales && has_listaSoftwares).toBe(true);
  });
});

