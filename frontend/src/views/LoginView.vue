<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-6 col-md-9 col-sm-9">
        <div class="card bg-light p-5 shadow-mt-5">
          <h3>Login</h3>
          <hr>

          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="text_user" class="form-label">Usuario</label>
              <input type="text" name="text_user" class="form-control" placeholder="Usuario" required>
            </div>

            <div class="mb-3">
              <label for="text_password" class="form-label">Senha</label>
              <input type="password" name="text_password" class="form-control" placeholder="Senha" required>
            </div>

            <div>
              <input type="submit" value="Entrar" class="btn btn-secondary w-100">
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import http from '@/services/http.js'
import { reactive } from 'vue';

const user = reactive({
  username:'',
  password:''
})

async function login() {
  try {
    const {data} = await http.post('/auth', user)
    console.log(data)
  } catch (error) {
    console.log(error?.response?.data);
  }
}

</script>

<style>

</style>