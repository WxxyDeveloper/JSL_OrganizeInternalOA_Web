<template>
  <div class="w-auto h-auto bg-sky-200">
    <div class="flex items-center justify-center">
      <div class="container w-full max-w-md mx-auto mt-8 " >
        <div class=" mx-auto bg-white border border-gray-200 rounded-lg shadow p-8 dark:bg-gray-800 dark:border-gray-700">
          <h2 class="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">用户注册</h2>
          <form class="flex flex-col space-y-5 max-w-sm w-96">
            <div class="mb-5">
              <label for="truename" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">真实姓名</label>
              <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
            </div>
            <div class="mb-5">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">密码</label>
              <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div class="mb-5">
              <label for="sex" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">性别</label>
              <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div class="mb-5">
              <label for="datebirth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">出生日期</label>
              <input type="date" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div class="mb-5">
              <label for="work" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">单位</label>
              <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div class="mb-5">
              <label for="speciality" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">所学专业</label>
              <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div class="mb-5">
              <label for="home" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">家乡</label>
              <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <a href="" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 sm:w-auto mb-1 mx-8 px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">立即注册</a>
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
</script>