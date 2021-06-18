<template>
  <div class="contenido">
    <div class="topbar">
      <h1 class="title">
        <i class="fas fa-home main-color main-color-border"></i>
        Home
      </h1>
      <router-link to="/home/creditosGrupales/"
        ><span>Buscar Créditos Grupales</span>
        <i class="fas fa-arrow-right main-color forward-btn"></i>
      </router-link>
    </div>
    <div class="horizontal-line"></div>
    <router-link to="/home/creditosGrupales/" class="router-card"
      ><h2>Buscar créditos grupales</h2></router-link
    >
    <router-link to="/home/listado_de_softwares" class="router-card"
      ><h2>
        <i class="fas fa-clipboard-list main-color main-color-border"></i
        >Listado de softwares
      </h2></router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props: {
    setCurrentPage: Function,
  },
  created() {
    this.setCurrentPage("Home");
  },
}
</script>


<style scoped>
a {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}
a span {
  margin-right: 1.2rem;
}

.router-card {
  border: 4px solid rgba(159, 252, 201, 0.7);
  border-radius: 6px;
  margin: 2.3rem 7rem;
  padding: 1.2rem 2.5rem;
  padding-bottom: 4rem;
  text-align: start;
  background-color: rgb(44, 47, 43);
  transition: all ease-in 0.1s;
  width: 40%;
}
.router-card:hover {
  border-color: rgba(159, 252, 201, 0.85);
  background-color: rgb(34, 36, 34);
}
.router-card i {
  margin-right: 1rem;
}
</style>
