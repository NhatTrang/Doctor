<template>
  <div>
    <a-row>
      <a-col :span="12">
        <img
          src="@/assets/images/login/banner.png"
          style="
            height: 100vh;
            width: 100%;
            object-fit: cover;
            object-position: center;
          "
        />
      </a-col>
      <a-col :span="12">
        <form-login />
      </a-col>
    </a-row>
  </div>
</template>
<script setup>
import FormLogin from "../components/form-login.vue";

</script>

