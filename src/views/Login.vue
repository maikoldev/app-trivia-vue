<template>
  <b-card>
    <img alt="Vue logo" src="../assets/logo.png" class="d-block mx-auto" />
    <p>Please, introduce your name to continue:</p>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Fullname:" label-for="name">
        <b-form-input id="name" v-model="form.name" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="info" block>
        Let's go
      </b-button>
    </b-form>
  </b-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["setUser"]),
    onSubmit() {
      let user = { ...this.form };
      this.setUser(user);
      this.$router.push({ name: "Quiz" });
    },
  },
};
</script>
