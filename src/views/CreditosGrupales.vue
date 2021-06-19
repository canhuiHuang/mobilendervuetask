<template>
  <div class="contenido">
    <div class="topbar">
      <h1 class="title">Buscar créditos grupales</h1>
      <router-link to="/home/creditosGrupales/inspeccionar"
        ><button class="btn" @click="onClick()">
          <i class="fas fa-plus main-color"></i>INSPECCIONAR
        </button></router-link
      >
    </div>
    <div class="horizontal-line"></div>
    <table class="items">
      <RowItem
        :data="creditos_grupales[0]"
        :fractions="[1, 1, 2, 1, 1, 1, 1, 1]"
        :labelMode="true"
      />
      <RowItem
        v-for="(grupo, index) in creditos_grupales"
        :data="grupo"
        :fractions="[1, 1, 2, 1, 1, 1, 1, 1]"
        :key="index"
      />
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import RowItem from "../components/RowItem.vue";
export default {
  name: "CreditosGrupales",
  props: {
    setCurrentPage: Function,
  },
  components: {
    RowItem,
  },
  data() {
    return {
      creditos_grupales: [],
    };
  },
  methods: {
    onClick() {
      this.setCurrentPage("Inspeccionar");
    },
    get_status_color(estatus) {
      if (estatus === "Finalizado") {
        return "text_color_green";
      } else if (estatus === "En proceso") {
        return "text_color_yellow";
      } else if (estatus === "Rechazado") {
        return "text_color_red";
      }
    },
    fetchData() {
      return axios
        .get(
          "https://my-json-server.typicode.com/canhuiHuang/mobilendervuetask/creditos_grupales"
        )
        .then((res) => {
          const data = res.data;
          /* Set up the array of item rows to display them */
          data.forEach((creditos_grupal) => {
            const {
              archivo_name,
              expediccion,
              calidad_de_informacion,
              estatus,
              finalizacion,
              usuario,
            } = creditos_grupal;

            const row = [];

            // Archivo
            row.push({
              type: "file",
              content: archivo_name,
              src: "",
              action: null,
              classes: "big_font",
              label: "Archivo",
            });

            // Expedicion
            row.push({
              type: "text",
              content: expediccion,
              src: "",
              classes: "text_center",
              action: null,
              label: "Expedición",
            });

            // % Calidad de información
            row.push({
              type: "text",
              content: calidad_de_informacion + "%",
              src: "",
              classes: `text_center no_left_padding no_right_padding`,
              action: null,
              label: "% Calidad de información",
            });

            // Estatus
            row.push({
              type: "text",
              content: estatus,
              src: "",
              classes: `${this.get_status_color(estatus)}`,
              action: null,
              label: "Estatus",
            });

            // Finalización
            row.push({
              type: "text",
              content: finalizacion,
              src: "",
              classes: `text_center`,
              action: null,
              label: "Finalización",
            });

            // Usuario
            row.push({
              type: "text",
              content: "@" + usuario,
              src: "",
              classes: "",
              action: null,
              label: "Usuario",
            });

            // Acciones
            row.push({
              type: "icon",
              content: "fas fa-file-download",
              src: "",
              classes: "text_center",
              action: null,
              label: "Acciones",
            });

            // Icon_button
            row.push({
              type: "icon",
              content: "fas fa-chevron-right",
              src: "",
              classes: "to_right",
              action: null,
              label: "",
            });

            this.creditos_grupales.push(row);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    this.setCurrentPage("Créditos grupales");
    this.fetchData();
  },
};
</script>

<style>
* {
  /* background: rgb(211, 211, 211); */
}

.topbar {
  display: flex;
  justify-content: space-between;
}

.expedicion,
.calidad_de_informacion,
.finalizacion,
.acciones,
.arrow {
  text-align: center !important;
}
.arrow {
  padding-right: 1.7rem !important;
}
</style>
