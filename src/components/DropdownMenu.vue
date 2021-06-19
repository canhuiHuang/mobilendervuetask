<template>
  <nav role="navigation" class="navigation">
    <div
      v-if="user_name !== ''"
      :class="showInfo ? 'user show-info' : 'user'"
      @click="toggle_showInfo()"
    >
      <div class="user2" href="#">
        <h2 class="user-name">{{ user_name }}</h2>
        <img v-if="avatar_url !== ''" :src="avatar_url" alt="avatar" /><i
          class="fas fa-chevron-down"
        ></i>
      </div>
      <ul class="dropdown">
        <li><a href="#">Perfil</a></li>
        <li class="line">
          <div class="horizontal-line"></div>
        </li>
        <li>
          <a href="#"><i class="fas fa-cog"></i>Configuración</a>
        </li>
        <li>
          <button @click="logout()" href="#">
            <i class="fas fa-sign-out-alt"></i>Log out
          </button>
        </li>
      </ul>
    </div>
    <div
      v-else
      :class="showInfo ? 'user show-info' : 'user'"
      @click="toggle_showInfo()"
    >
      <a class="user2 login" href="/#/login">
        <h2 class="user-login">Login</h2>
        <i class="fas fa-sign-in-alt"></i>
      </a>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "DropDownMenu",
  props: {
    user_token: String,
  },
  data() {
    return {
      showInfo: false,
      isAuthenticated: false,
      user_name: "",
      avatar_url: "",
      localStorage: localStorage,
    };
  },
  methods: {
    toggle_showInfo() {
      this.showInfo = !this.showInfo;
    },
    setUserInfo(fullName, avatar) {
      this.user_name = fullName;
      this.avatar_url = avatar;
    },
    get_User_assest(setUserInfo = this.setUserInfo) {
      // Get user assest
      axios
        .get(`https://reqres.in/api/users/${localStorage.id}`)
        .then((response) => {
          const { first_name, last_name, avatar } = response.data.data;

          setUserInfo(first_name + " " + last_name, avatar);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    logout() {
      localStorage.removeItem("email");
      localStorage.removeItem("id");
      this.user_name = "";
      this.avatar_url = "";

      window.location.reload();
    },
  },
  created() {
    if (localStorage.email) {
      this.get_User_assest();
    }
  },
};
</script>



<style scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
a {
  text-decoration: none;
}
.user2 i {
  padding-left: 1.2rem;
  padding-right: 1rem;
}
.user2.login i,
.user-login {
  color: #cfcfcf;
  transition: all ease-in 0.1s;
}
.user2.login:hover i,
.user2.login:hover .user-login {
  color: #f5f5f5;
}
.user2.login i {
  font-size: 1.3rem;
  margin-right: 1rem;
  padding-left: 0.5rem;
}
.user-login {
  padding-right: 0.65rem;
}

.dropdown .horizontal-line {
  margin: 0;
  width: 95%;
  height: 1px;
  background-color: rgba(114, 111, 111, 0.55);
}
.navigation img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

li {
  display: block;
  transition-duration: 0.5s;
}

li:hover {
  cursor: pointer;
}

ul {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  display: none;
}
.user {
  cursor: pointer;
}

.user.show-info > ul {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li {
  clear: both;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
  border-radius: 0 0 6px 6px;
}
ul li:hover {
  background-color: rgba(134, 134, 145, 0.2);
}
ul li i {
  margin-right: 0.6rem;
}
ul li a {
  text-decoration: none;
}
ul li.line {
  justify-content: center;
  margin: 0;
  padding: 0;
}
.dropdown {
  width: 300px;
  background-color: rgba(23, 26, 36, 0.95);
  border-radius: 8px;
}
.dropdown li {
  padding: 1.5rem;
}

.user2 {
  display: flex;
  width: 300px;
  background-color: rgb(23, 26, 36);
  align-items: center;
  justify-content: flex-end;
}
.user-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0rem 1.4rem;
  font-size: 1.1rem;
  font-weight: 500;
}
</style>