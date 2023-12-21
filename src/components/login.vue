<template>
  <div class="w-full h-auto">
    <div class="container mx-auto mt-8 " >
      <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow p-6 dark:bg-gray-800 dark:border-gray-700">
        <h2 class="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">账号登录</h2>
        <form class="max-w-sm mx-auto">
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">用户名</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">密码</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">记住我</label>
          </div>
          <div class="flex flex-col ">
            <a href="/success" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 sm:w-auto mt-2 mb-3 mx-8 px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">登录</a>
            <div class="flex space-x-2">
              <a href="" class="text-blue-500  font-medium rounded-lg text-sm  sm:w-auto ml-24 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">忘记密码？|</a>
              <a href="/register" class="text-blue-500  font-medium rounded-lg text-sm  sm:w-auto ml-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">注册</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>
<script setup>
</script>