<template>
  <div class="navbar">
    <div v-if="navList.includes(currentPage)">
      <span v-for="(nav_text, index) in navList" :key="index">
        <router-link
          v-if="
            index <= navList.indexOf(currentPage) &&
            index <= navList.indexOf(currentPage) - 1
          "
          :to="navRoutes[index]"
          >{{ nav_text }}</router-link
        >
        <span
          v-else-if="index <= navList.indexOf(currentPage)"
          id="current_nav"
          >{{ nav_text }}</span
        >
        <span v-if="index < navList.indexOf(currentPage)"> / </span>
      </span>
    </div>
    <!-- Temporary -->
    <div v-else-if="navList_branch2.includes(currentPage)">
      <span id="current_nav">{{ currentPage }}</span>
    </div>
    <div v-else-if="currentPage === 'Login'">
      <span id="current_nav">{{ currentPage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    currentPage: String,
  },
  data() {
    return {
      navList: [
        "Home",
        "Créditos grupales",
        "Inspeccionar",
        "Control de cambios",
      ],
      navRoutes: [
        "/home",
        "/home/creditosGrupales",
        "/home/creditosGrupales/inspeccionar",
        "/home/creditosGrupales/inspeccionar/control_de_cambios",
      ],
      navList_branch2: ["Listado de softwares"],
    };
  },
};
</script>

<style scoped>
/* navbar */
.navbar {
  display: flex;
  margin: 2.6rem 10rem;
  align-self: flex-start;
}
* {
  color: rgb(233, 233, 233);
}

#current_nav {
  color: rgb(168, 168, 168);
}
</style>