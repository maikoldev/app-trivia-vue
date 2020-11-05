<template>
  <b-card class="text-center">
    <h1 class="mb-5">Welcome to the <br />Trivia Challenge!</h1>
    <p class="h5 font-weight-normal mb-5">
      You will be presented with 10 True or False questions
    </p>
    <p class="h5 font-weight-normal mb-5">Can you score 100%?</p>
    <b-button variant="info" block @click="goTo">
      BEGIN
    </b-button>
  </b-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    goTo() {
      if (this.user) {
        this.$router.push({ name: "Quiz" });
      } else {
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>
