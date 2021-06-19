import { shallowMount } from "@vue/test-utils";
import CreditosGrupales from "../../src/views/CreditosGrupales.vue";
import Inspeccionar from "../../src/views/Inspeccionar.vue";
import ControlDeCambios from "../../src/views/ControlDeCambios.vue";
import ListaSoftwares from "../../src/views/ListaSoftwares.vue";

const CreditosGrupales_componente = shallowMount(CreditosGrupales, {
  props: { setCurrentPage: String },
});
const Inspeccionar_componente = shallowMount(Inspeccionar, {
  props: { setCurrentPage: Function },
});
const ControlDeCambios_componente = shallowMount(ControlDeCambios, {
  props: { setCurrentPage: String },
});
const ListaSoftwares_componente = shallowMount(ListaSoftwares, {
  props: { setCurrentPage: String },
});

const Vistas = {
  CreditosGrupales_componente,
  Inspeccionar_componente,
  ControlDeCambios_componente,
  ListaSoftwares_componente
};

describe("Vistas Generales tienen una table de items", () => {
  for (var wrapper_key of Object.keys(Vistas)) {
    test(`${wrapper_key} tiene <table> con class="items"`, () => {
      expect(Vistas[wrapper_key].find("table").classes()).toContain("items");
    });
  }
});
