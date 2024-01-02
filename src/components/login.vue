<template>
  <div class="w-full h-screen bg-sky-200">
    <div class="flex items-center justify-center">
      <div class="container mx-auto mt-20" >
        <div class="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow p-10 dark:bg-gray-800 dark:border-gray-700">
          <h2 class="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">账号登录</h2>
          <form class="max-w-lg mx-auto w-auto">
            <div class="mb-5">
              <label for="email" class="flex items-center space-x-4 text-sm font-medium text-gray-900 dark:text-white ">
                <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                  <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                </svg>
                用户名
              </label>
              <input type="email" id="email" v-model="data.userNum" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
            </div>
            <div class="mb-5">
              <label for="password" class="flex items-center space-x-4  mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z"/>
                </svg>
                密码
              </label>
              <input type="password" v-model="data.password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
              </div>
              <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">记住我</label>
            </div>
            <div class="flex flex-col ">
              <a @click="loginUser" class="text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 sm:w-auto mt-2 mb-3 mx-8 px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">登录</a>
              <div class="flex space-x-2 ml-24">
                <a href="" class="text-blue-500  font-medium rounded-lg text-sm  sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">忘记密码? |</a>
                <a href="/register" class="text-blue-500  font-medium rounded-lg text-sm  sm:w-auto  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">注册 |</a>
                <a href="" class="text-blue-500  font-medium rounded-lg text-sm  sm:w-auto  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">修改密码</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="mt-40 flex items-center justify-center">
      <div class="text-center">
        ICP备案
        <br>
        公安备案
        <br>
        Copyright (C) 2023 xxx Group All Right Services.
      </div>
    </div>
</div>
</template>
<script setup>
import axios from 'axios';
import getCurrentTimestamp from '../public/methods.js';
import {useRouter} from "vue-router";

const data = {
  userNum: '',
  password: ''
}
const router = useRouter()

function loginUser(){
    axios({
    url: "api/user/login",
    method: "post",
    data: {
      "userNum": data.userNum,
      "password": data.password
    },
    headers: {
      'content-type': 'application/json;charset=utf-8',
      'Timestamp':getCurrentTimestamp()
    },
    }).then((res) => {
      if (res.data.code === 200) {
        //登录成功，跳转页面+消息提示+存储登录用户的数据
        router.push("/success")
      } else {
      //登录失败，消息提示
        alert("用户名或密码错误！")
    }
    
  });

}

</script>