<template>
  <header>
    <h1 class="icon">
      <router-link to="/"
        >Integra<span class="green-text">Software</span></router-link
      >
    </h1>
    <DropdownMenu />
  </header>
  <Navbar :currentPage="currentPage" class="navbar" />
  <router-view :setCurrentPage="setCurrentPage" />
</template>


<script>
import Navbar from "./components/Navbar.vue";
import DropdownMenu from "./components/DropdownMenu.vue";
export default {
  name: "App",
  components: {
    Navbar,
    DropdownMenu,
  },
  data() {
    return {
      currentPage: "Control de cambios",
    };
  },
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
};
</script>




<style>
/* reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  color: unset;
}
/**/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f3f3;
  background: rgb(8, 10, 18);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.green-text {
  color: rgb(159, 252, 201);
}
.main-color {
  color: rgb(159, 252, 201);
}
.main-color-border {
  border-color: rgb(159, 252, 201);
}
/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: 100%;
  padding: 0.9rem 10rem;
  background-color: rgb(23, 26, 36);
}
/* User-dropdown*/
/* .user-dropdown > * {
  margin: 0 0.5rem;
} */
/* .user-dropdown .fas.fa-chevron-down {
  font-size: 1rem;
  color: #cfcfcf;
} */
/* */
.contenido {
  padding: 2.6rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0rem;
}
/* Utils */
.btn {
  color: #f3f3f3;
  background-color: transparent;
  border: 2px solid rgb(159, 252, 201);
  border-radius: 5px;
  padding: 0.5rem 1.6rem;
  cursor: pointer;
  transition: all ease 0.1s;
}
.btn a {
  text-decoration: none;
}
.btn:hover {
  opacity: 0.9;
}
.btn > i {
  margin-right: 0.6rem;
}
.horizontal-line {
  background: rgb(23, 26, 36);
  height: 3px;
  width: 100%;
  border-radius: 3px;
  margin: 1.7rem 0;
}
.back-btn,
.forward-btn {
  background: rgb(236, 236, 236);
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 1.5rem;
  border-radius: 50%;
  transition: ease-in 0.1s all;
}
.back-btn:hover,
.forward-btn:hover {
  background: rgb(185, 185, 185);
}
.back-btn {
  left: 0px;
  margin-left: 6rem;
  position: absolute;
  transform: translateY(-10px);
}
.forward-btn {
}
h1.title {
  font-size: 1.8rem;
}
table {
  border-spacing: 0 0.9rem;
  font-size: 0.8rem;
  color: #cfcfcf;
}
td:first-child {
  -moz-border-radius: 6px 0 0 6px;
  -webkit-border-radius: 6px 0 0 6px;
}
td:last-child {
  -moz-border-radius: 0 6px 6px 0;
  -webkit-border-radius: 0 6px 6px 0;
}
.items {
  width: 100%;
}
.icon a {
  text-decoration: none;
}
</style>
