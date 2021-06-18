<template>
  <tr
    v-if="!labelMode && (link === '' || link === undefined)"
    class="item is-not-router"
  >
    <td
      v-for="(obj, index) in data"
      :style="{ width: +(fractions[index] / total_fractions) * 100 + '%' }"
      :key="index"
    >
      <div :class="obj.classes" @click="obj.action" v-if="obj.type === 'text'">
        {{ obj.content }}
      </div>
      <i
        @click="obj.action"
        v-else-if="obj.type === 'icon'"
        :class="obj.content + ' ' + obj.classes"
      >
      </i>
      <img
        @click="obj.action"
        v-else-if="obj.type === 'imgUrl'"
        :src="obj.src"
        :alt="obj.label"
        :class="obj.classes"
      />
      <a
        @click="obj.action"
        v-else-if="obj.type === 'file'"
        :class="obj.classes"
        :href="download_example_file_url()"
        :download="obj.content"
        >{{ obj.content }}</a
      >
    </td>
  </tr>
  <tr v-else-if="!labelMode && link !== ''" class="item is-router">
    <td
      v-for="(obj, index) in data"
      :style="{ width: +(fractions[index] / total_fractions) * 100 + '%' }"
      :key="index"
    >
      <router-link :to="link" class="router-links">
        <div
          :class="obj.classes"
          @click="obj.action"
          v-if="obj.type === 'text'"
        >
          {{ obj.content }}
        </div>
        <i
          @click="obj.action"
          v-else-if="obj.type === 'icon'"
          :class="obj.content + ' ' + obj.classes"
        >
        </i>
        <img
          @click="obj.action"
          v-else-if="obj.type === 'imgUrl'"
          :src="obj.src"
          :alt="obj.label"
          :class="obj.classes"
        />
        <a
          @click="obj.action"
          v-else-if="obj.type === 'file'"
          :class="obj.classes"
          :href="download_example_file_url()"
          :download="obj.content"
          >{{ obj.content }}</a
        >
      </router-link>
    </td>
  </tr>
  <tr v-else-if="labelMode" class="labels">
    <th
      v-for="(obj, index) in data"
      :style="{ width: +(fractions[index] / total_fractions) * 100 + '%' }"
      :class="obj.classes"
      :key="index"
    >
      {{ obj.label }}
    </th>
  </tr>
</template>

<script>
export default {
  name: "RowItem",
  props: {
    data: Array,
    fractions: Array,
    labelMode: Boolean,
    link: String,
  },
  data() {
    return {
      total_fractions: Number,
      labelMode_case: false,
      link_data: "",
    };
  },
  methods: {
    download_example_file_url: function () {
      const xmltext = "<sometag>Details...</sometag>";
      const bb = new Blob([xmltext], { type: "text/plain" });

      return window.URL.createObjectURL(bb);
    },
  },
  created() {
    // Init
    this.labelMode_case = this.labelMode;
    this.link_data = this.link;

    let sum = 0;
    this.fractions.forEach((fraction) => {
      sum += fraction;
    });
    this.total_fractions = sum;
  },
};
</script>

<style scoped>
.is-router {
  transition: all ease 0.1s;
}
.is-router:hover {
  background-color: rgb(29, 32, 44);
}
.router-links {
  text-decoration: none;
}

.link {
  width: 100%;
  cursor: pointer;
}
th {
  padding: 0.4rem 2.3rem;
  text-align: start;
  font-size: 0.7rem;
  width: 100%;
}
.is-not-router td > *,
.is-not-router th > *,
.is-router td > a > *,
.is-router th > a > * {
  padding: 0.4rem 2.3rem;
  text-align: left;
  display: flex;
  justify-content: flex-start;
}
.is-not-router td > div,
.is-not-router th > div,
.is-router td > a > div,
.is-router td > a > div {
  padding: 1.3rem 2.3rem;
}

th > * {
  padding: 0rem 2.3rem;
}
.item {
  background-color: rgb(23, 26, 36);
  width: 100%;
}
tr {
  margin: 2rem;
}

img.round-img {
  border-radius: 50%;
}
img {
  height: 55px;
  width: 100%;
  object-fit: cover;
  padding: 0;
  margin: 0.2rem 0rem;
}
.is-router td > a > i,
.is-not-router td > i {
  font-size: 1rem;
}
/* Fonts related */
td .big_font {
  font-size: 1rem;
}

/* Alignments */
.no_left_padding {
  padding-left: 0 !important;
}
.no_right_padding {
  padding-right: 0 !important;
}

.to_left,
.text_start {
  text-align: start;
  justify-content: flex-start !important;
}
.to_right,
.text_end {
  text-align: end;
  justify-content: flex-end !important;
}
.to_center,
.text_center {
  text-align: center;
  justify-content: center !important;
}

/* Colors */
.item .text_color_green {
  color: rgb(159, 252, 201);
}
.item .text_color_yellow {
  color: rgb(255, 208, 0);
}
.item .text_color_red {
  color: rgb(167, 46, 46);
}
.bright_font {
  color: white;
  font-weight: 600;
}

/* numberBox */
td .numberBox {
  border-radius: 4px;
  border: 2px solid rgb(159, 252, 201);
  color: white;
  font-size: 1.3rem;
  padding: 0rem !important;
  align-self: center !important;
  text-align: center !important;
  justify-content: center !important;
  margin: 0rem 2.3rem;
  width: 38px;
  height: 38px;
  line-height: 34px;
  vertical-align: middle;
  background-color: rgb(44, 47, 43);
  cursor: default;
}
</style>