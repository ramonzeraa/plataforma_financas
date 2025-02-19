<template>
  <div>
    <button @click="fetchData">Testar Back-end</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("/api/"); // Requisição GET para o back-end
        this.message = response.data.message;
      } catch (error) {
        this.message = "Erro ao conectar ao back-end.";
        console.error(error); // Exibe o erro no console
      }
    },
  },
};
</script>
