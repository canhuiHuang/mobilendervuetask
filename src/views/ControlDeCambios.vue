<template>
  <div class="contenido">
    <div class="topbar">
      <router-link to="/home/creditosGrupales/inspeccionar" class="back-btn"
        ><i class="fas fa-arrow-left main-color"></i
      ></router-link>
      <h1 class="title">
        <i class="fas fa-search main-color main-color-border"></i>
        Control de cambios
      </h1>
    </div>
    <div class="horizontal-line"></div>
    <table class="items">
      <RowItem
        :data="lista_de_cambios[0]"
        :fractions="[1, 1, 3, 10]"
        :labelMode="true"
      />
      <RowItem
        v-for="(cambios, index) in lista_de_cambios"
        :data="cambios"
        :fractions="[1, 1, 3, 10]"
        :key="index"
      />
    </table>
  </div>
</template>

<script>
import axios from "axios";
import RowItem from "../components/RowItem.vue";
export default {
  name: "Inspeccionar",
  props: {
    setCurrentPage: Function,
  },
  components: {
    RowItem,
  },
  data() {
    return {
      lista_de_cambios: [],
    };
  },
  methods: {
    // Fake backend local data.
    fetchData() {
      return (
        axios
          // Fake backend local data. Run this for dev fake-backend.
          //.get("http://localhost:5000/creditos_grupales");

          // Online fake backend
          .get(
            "https://my-json-server.typicode.com/canhuiHuang/mobilendervuetask/creditos_grupales"
          )
          .then((res) => {
            const creditos_grupales = res.data;

            /* Set up the data array to display them */
            creditos_grupales.forEach((creditos_grupal, index) => {
              const { finalizacion, archivo_name, cambios } = creditos_grupal;

              const row = [];
              // numberBox
              row.push({
                type: "text",
                content: (index + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                }),
                src: "",
                action: null,
                classes: "numberBox",
                label: "",
              });

              // Fecha
              row.push({
                type: "text",
                content: finalizacion,
                src: "",
                classes: "",
                action: null,
                label: "Fecha",
              });

              // Archivo
              row.push({
                type: "file",
                content: archivo_name,
                src: "",
                classes: "big_font",
                action: null,
                label: "Archivo",
              });

              // Cambios
              row.push({
                type: "text",
                content: cambios,
                src: "",
                classes: "",
                action: null,
                label: "Cambios",
              });

              this.lista_de_cambios.push(row);
            });
          })
          .catch((err) => {
            console.log(err);
          })
      );
    },
  },
  created() {
    this.setCurrentPage("Control de cambios");
    this.fetchData();
  },
};
</script>