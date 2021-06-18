<template>
  <div class="contenido">
    <div class="topbar">
      <h1 class="title">
        <i class="fas fa-sign-in-alt"></i>
        Login
      </h1>
    </div>
    <div class="horizontal-line"></div>
    <form @submit="onSubmit">
      <div class="email_input">
        <label for="email"> Email address </label>
        <input
          type="email"
          name="email"
          v-model="input_email"
          placeholder="Email address"
          autocomplete="on"
          required
        />
      </div>
      <div class="password_input">
        <label for="password"> Password </label>
        <input
          type="password"
          name="password"
          v-model="input_password"
          placeholder="Password"
          autocomplete="on"
          required
        />
      </div>
      <input type="submit" value="Login" class="btn btn-login" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ListaSoftwares",
  props: {
    setCurrentPage: Function,
  },
  data() {
    return {
      input_email: "",
      input_password: "",
    };
  },
  methods: {
    login(email, password, setCurrentPage = this.setCurrentPage) {
      axios
        .post("https://reqres.in/api/login", {
          email: email,
          password: password,
        })
        .then(function (response) {
          // Just storing email to keep to session, but it shouldn't be done this way, I think. Just for the sake of getting user's resources & keep logging in.
          localStorage.setItem("email", email);
          localStorage.setItem(
            "id",
            response.data.token[response.data.token.length - 1]
          );

          setCurrentPage("Home");
          window.location.href = "/home";
        })
        .catch(function (error) {
          console.log(error, error.response);
        });
    },
    logout() {
      localStorage.removeItem("email");
      localStorage.removeItem("id");
    },
    onSubmit(e) {
      e.preventDefault();
      this.login(this.input_email, this.input_password);
    },
  },
  created() {
    this.setCurrentPage("Login");
    if (localStorage.email) {
      this.setCurrentPage("Home");
      window.location.href = "/home";
    }
  },
};
</script>

<style scoped>
.contenido {
  width: 80%;
  justify-content: center;
  align-items: center;
}
.topbar {
  align-self: flex-start;
  padding-left: 1rem;
  cursor: default;
}
form {
  width: 50%;
  min-width: 300px;
  background-color: rgba(23, 26, 36, 0.8);
  padding: 1rem 5rem;
  padding-bottom: 3.5rem;
  border-radius: 10px;
  min-width: 600px;
  margin-top: 2rem;
}
form input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
}
.email_input input,
.password_input input {
  padding-left: 1rem;
  color: gray;
}
input:focus {
  outline: none;
  border: 1px solid rgb(159, 252, 201);
}
.email_input,
.password_input {
  text-align: start;
  margin: 3rem 0;
}
label {
  display: inline-block;
  padding-bottom: 1rem;
  font-size: 0.9rem;
  color: rgb(226, 226, 226);
}
.btn-login {
  background-color: rgb(64, 102, 81);
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.03rem;
  width: 70%;
  height: 50px;
}
</style>