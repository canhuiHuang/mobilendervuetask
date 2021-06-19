<template>
  <div class="contenido">
    <div class="topbar">
      <h1 class="title">
        <i class="fas fa-clipboard-list main-color main-color-border"></i>
        Listado de softwares
      </h1>
      <button
        class="btn"
        @click="
          () => {
            show_add_input = !show_add_input;
          }
        "
      >
        <i class="fas fa-plus main-color"></i>AGREGAR NUEVO
      </button>
    </div>
    <div class="horizontal-line"></div>
    <form
      @submit="onSubmit"
      :class="`add_software_input ${show_add_input ? 'show' : ''}`"
    >
      <input
        id="add_input"
        v-model="new_software_name"
        type="text"
        placeholder="New software name"
      />
      <label for="submit"><i class="fas fa-plus"></i></label>
      <input id="submit" type="submit" value="submit" class="hidden" />
      <i
        class="fas fa-times close"
        @click="
          () => {
            show_add_input = false;
          }
        "
      ></i>
    </form>
    <table class="items">
      <RowItem
        v-for="(software, index) in listado_de_softwares"
        :key="index"
        :data="software"
        :fractions="[1, 3, 14, 1]"
        link="/home/creditosGrupales"
      />
    </table>
  </div>
</template>

<script>
import axios from "axios";
import RowItem from "../components/RowItem.vue";
export default {
  name: "ListaSoftwares",
  props: {
    setCurrentPage: {
      type: Function
    },
  },
  components: {
    RowItem,
  },
  data() {
    return {
      listado_de_softwares: [],
      new_software_name: "",
      show_add_input: false,
    };
  },
  methods: {
    // Fake backend data
    createRowfromDataset(software, id) {
      const { name, sponsor } = software;

      const row = [];
      // numberBox
      row.push({
        type: "text",
        content: (id + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
        src: "",
        action: null,
        classes: "numberBox",
        label: "",
      });

      // Name
      row.push({
        type: "text",
        content: name,
        src: "",
        classes: "no_left_padding big_font bright_font",
        action: null,
        label: "",
      });

      // Sponsor
      row.push({
        type: "text",
        content: sponsor,
        src: "",
        classes: "text_start",
        action: null,
        label: "",
      });

      // Icon_button
      row.push({
        type: "icon",
        content: "fas fa-chevron-right",
        src: "",
        classes: "",
        action: null,
        label: "",
      });

      return row;
    },
    fetchData() {
      return (
        axios
          // Fake backend local data. Run this for dev fake-backend.
          //.get("http://localhost:5000/listado_de_softwares");

          // Online fake backend
          .get(
            "https://my-json-server.typicode.com/canhuiHuang/mobilendervuetask/listado_de_softwares"
          )
          .then((res) => {
            const lista_de_softwares = res.data;

            /* Set up the data array to display them */
            lista_de_softwares.forEach((software, index) => {
              this.listado_de_softwares.push(
                this.createRowfromDataset(software, index)
              );
            });
          })
          .catch((err) => {
            console.log(err);
          })
      );
    },
    onSubmit(e) {
      e.preventDefault();
      const new_id = this.listado_de_softwares.length;
      const data = {
        id: new_id,
        name: this.new_software_name,
        sponsor: "Crédito Grupal",
      };
      const headers = {
        "Content-Type": "application/json",
      };
      if (this.new_software_name !== "") {
        axios
          .post(
            "https://my-json-server.typicode.com/canhuiHuang/vuetask/listado_de_softwares",
            data,
            {
              headers: headers,
            }
          )
          .then((response) => {
            // Mocks data being added to the database.
            this.listado_de_softwares.push(
              this.createRowfromDataset(response.data, response.data.id)
            );
            this.new_software_name = "";
          })
          .catch(function (error) {
            console.log(error, error.response);
          });
      }
    },
  },
  created() {
    this.setCurrentPage("Listado de softwares");

    this.fetchData();
  },
};
</script>

<style scoped>
.contenido {
  width: 75%;
}
.hidden {
  visibility: hidden;
  width: 10px;
}
form {
  align-self: flex-start;
  padding-left: 1rem;
  margin-bottom: 1rem;
  display: none;
}
form.show {
  display: block;
}
label i,
i.close {
  cursor: pointer;
  padding: 0.5rem;
  width: 35px;
  height: 35px;
  margin-left: 0.8rem;
  color: rgb(159, 252, 201);
  border-radius: 50%;
  border: 1px solid rgb(159, 252, 201);
  transition: all ease 0.1s;
}
i.close {
  margin-left: 0.2rem;
  border: 1px solid rgba(187, 94, 94, 0.9);
  color: rgba(187, 94, 94, 0.9);
}
i.close:hover {
  color: rgba(187, 94, 94, 1);
  border: 2px solid rgba(187, 94, 94, 1);
  background: rgba(41, 34, 34, 0.2);
}
label i:hover {
  background: rgba(23, 26, 36, 1);
  border: 2px solid rgb(144, 221, 179);
}
#add_input {
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: transparent;
  color: rgb(216, 216, 216);
  height: 35px;
  padding-left: 0.8rem;
}
</style>