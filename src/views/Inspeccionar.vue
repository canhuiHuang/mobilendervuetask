<template>
  <div class="contenido">
    <div class="topbar">
      <router-link to="/home/creditosGrupales/" class="back-btn"
        ><i class="fas fa-arrow-left main-color"></i
      ></router-link>
      <h1 class="title">
        <i class="fas fa-search main-color main-color-border"></i>
        INSPECCIONAR
      </h1>
    </div>
    <div class="horizontal-line"></div>
    <div class="searchbar">
      <div class="search-icon"><i class="fas fa-search"></i></div>
      <input
        type="text"
        v-model="filter_value"
        name="search"
        class="search"
        placeholder="Nombre del Cliente, correo, ID..."
      />
      <div class="search-subtitle">
        {{
          `${filter_value.slice(0, 16)}${
            filter_value.length > 16 ? "..." : ""
          } (${filtered_clientsData.length} resultados)`
        }}
      </div>
    </div>
    <table class="items">
      <RowItem
        :labelMode="true"
        :data="clientsData[0]"
        :fractions="[1, 7, 14, 1]"
      />
      <RowItem
        v-for="(clientData, index) in filtered_clientsData"
        :key="index"
        :data="clientData"
        :fractions="[1, 1, 14, 1]"
        link="/home/creditosGrupales/inspeccionar/control_de_cambios"
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
      clientsData: [],
      filter_value: "",
    };
  },
  computed: {
    filtered_clientsData() {
      return this.clientsData.filter((data_row) => {
        let found = false;
        data_row.forEach((data_col) => {
          if (
            data_col.content
              .toLowerCase()
              .includes(this.filter_value.toLowerCase()) &&
            data_col.type !== "icon"
          ) {
            found = true;
          }
        });
        return found;
      });
    },
  },
  methods: {
    // Fetch users https://reqres.in/
    fetchData(page) {
      return axios
        .get(`https://reqres.in/api/users?page=${page}`)
        .then((res) => {
          const clients = res.data.data;

          /* Set up the data array to display them */
          clients.forEach((client) => {
            const { email, first_name, last_name, avatar } = client;

            const row = [];
            // Avatar
            row.push({
              type: "imgUrl",
              content: "",
              src: avatar,
              action: null,
              classes: "round-img",
              label: "Cliente",
            });

            // Name
            row.push({
              type: "text",
              content: first_name + " " + last_name,
              src: "",
              classes: "no_left_padding",
              action: null,
              label: "",
            });

            // Email
            row.push({
              type: "text",
              content: email,
              src: "",
              classes: "text_start",
              action: null,
              label: "Correo",
            });

            // Icon_button
            row.push({
              type: "icon",
              content: "fas fa-chevron-right",
              src: "",
              classes: "close_to_right_edge",
              action: null,
              label: "",
            });

            this.clientsData.push(row);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.setCurrentPage("Inspeccionar");

    this.fetchData(1);
    this.fetchData(2);
    console.log(this.clientsData);
  },
};
</script>

<style scoped>
* {
}

.searchbar,
.items {
  width: 80%;
  align-self: center;
}
.searchbar {
  color: rgba(209, 209, 209, 0.8);
}
.search-icon {
  position: absolute;
  padding: 0.9rem;
  padding-left: 1.3rem;
  color: rgba(209, 209, 209, 0.8);
  font-size: 1.2rem;
  cursor: initial;
}
.search {
  position: relative;
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid rgba(209, 209, 209, 0.8);
  width: 100%;

  color: rgba(209, 209, 209, 0.8);
  font-size: 1rem;
  padding: 0.9rem;
  padding-left: 3.5rem;
}
.search-subtitle {
  margin-top: 1rem;
  padding-left: 0.3rem;
  text-align: start;
}
input:focus {
  outline: none;
}
</style>