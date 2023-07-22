<template>
  <div>
    <div class="login-logo">
      <img
        src="@/assets/images/login/icon-min.png"
        alt="logo"
        style="height: 106px; width: 106px"
      />
      <h4 class="font-size-16">LỊCH KHÁM SỨC KHỎE</h4>
    </div>
    <h1 class="title-login">ĐĂNG NHẬP HỆ THỐNG</h1>
    <!-- form-login -->
    <div class="form-input">
      <div>
        <a-input
          v-model:value="entry.username"
          placeholder="Nhập tên tài khoản"
        />
      </div>
      <div>
        <a-input-password
          v-model:value="entry.password"
          placeholder="Nhập mật khẩu"
        />
      </div>
    </div>
    <div class="d-flex">
      <div>
        <a-button class="login-button">Trang chủ</a-button>
      </div>
      <div>
        <a-button class="login-button" type="primary" @click.prevent="tryLogin"
          >Đăng nhập</a-button
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useAuthStore } from "../store/auth.js";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();

const entry = reactive({
  username: "",
  password: "",
});
const validatorForm = () => {
  console.log(entry);
  let errorForm = {
    username: "Tài khoản",
    password: "Mật khẩu",
  };
  for (let key in errorForm) {
    if (entry[key].length < 1) {
      Swal.fire({
        title: errorForm[key] + ` không được trống`,
        icon: "error",
        confirmButtonColor: "#44b97c",
      });
      return false;
    }
  }
  return true;
};
const setToken = (token, refresh_token) => {
  localStorage.setItem("doctor_token", token);
  localStorage.setItem("doctor_refresh_token", refresh_token);
};
const tryLogin = async () => {
  if (!validatorForm()) return;
  let response = await authStore.Login(entry);
  if (response.code == 200) {
    setToken(response.data.token, response.data.refresh_token);
    router.push({ name: "user.home" });
  } else {
    Swal.fire(response.message);
  }
};
</script>
<style lang="scss" scoped>
.login-logo {
  font-family: "UTM Aptima";
  margin-top: 44px;
  text-align: center;
  margin: 80px 0 50px 0;

  img {
    width: 106px;
    height: 106px;
  }
}
.title-login {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 44px;
  color: #30a5d0;
  margin-top: 30px;
  text-align: center;
  margin-bottom: 45px;
}
.form-input {
  width: 400px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 19px;
  margin-bottom: 35px;
}
.d-flex {
  width: 400px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  gap: 19px;
  margin-bottom: 35px;

  .login-button {
    width: 192px;
    border-radius: 7px;
  }
}
</style>
