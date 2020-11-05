<template>
  <div>
    <div v-if="!quizDone">
      <b-progress
        :value="progress"
        :max="100"
        :variant="progress > 70 ? 'success' : 'primary'"
        class="mb-3"
      />
      <template v-for="(quiz, key) of quizes">
        <b-card class="text-center" :key="key" v-if="key === answers.length">
          <b-card-title class="mb-5">{{ quiz.category }}</b-card-title>
          <b-card
            bg-variant="info"
            text-variant="white"
            class="text-center w-75 w-md-50 mx-auto mb-5"
          >
            {{ quiz.question }}
          </b-card>
          <div class="d-flex justify-content-around align-items-center">
            <b-button variant="success" @click="setAnswer(key, 'True')">
              TRUE
            </b-button>
            <p class="mb-0">{{ key + 1 }} of {{ quizes.length }}</p>
            <b-button variant="danger" @click="setAnswer(key, 'False')">
              FALSE
            </b-button>
          </div>
        </b-card>
      </template>
    </div>
    <div v-if="quizDone">
      <b-card class="text-center">
        <b-card-title>You scored</b-card-title>
        <p class="h5 font-weight-normal mb-4">
          {{ score }} / {{ quizes.length }}
        </p>
        <b-list-group class="text-left mb-4">
          <b-list-group-item
            v-for="(quiz, key) of quizes"
            :key="key"
            :variant="
              answers[key] === quiz.correct_answer ? 'success' : 'danger'
            "
          >
            {{ key + 1 }}: {{ quiz.question }}
          </b-list-group-item>
        </b-list-group>
        <b-button variant="info" block :to="{ name: 'Home' }">
          PLAY AGAIN?
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      answers: [],
      progress: 0,
      score: 0,
    };
  },
  computed: {
    ...mapState(["quizes"]),
    quizDone() {
      return (
        this.answers.length === this.quizes.length && this.quizes.length > 0
      );
    },
  },
  created() {
    this.getQuizes();
  },
  methods: {
    ...mapActions(["setQuizes"]),
    getQuizes() {
      axios
        .get(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        )
        .then((res) => {
          this.setQuizes(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setAnswer(key, answer) {
      this.answers.push(answer);
      this.progress = Math.round(
        (this.answers.length / this.quizes.length) * 100
      );

      if (this.quizes[key].correct_answer === answer) {
        this.score++;
      }
    },
  },
};
</script>
