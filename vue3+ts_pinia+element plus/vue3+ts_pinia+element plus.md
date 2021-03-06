项目目录

- dist - 打包上线文件

- serve - 服务端

- web - 前端源码

# 搭建前端项目环境

## 创建项目

```
# npm 7+, 需要额外的双横线：
npm init @vitejs/app peoject_name -- --template
```

![image-20220317103307358](vue3+ts_pinia+element plus.assets/image-20220317103307358.png)

## 约束代码风格

### Eslint 支持

```bash
npm i eslint -D 
npm i eslint-plugin-vue -D 
npm i @typescript-eslint/eslint-plugin -D 
npm i eslint-plugin-prettier -D 
npm i @typescript-eslint/parser -D 
```

### .eslinttrc.js 配置

[配置详解](https://eslint.bootcss.com/docs/user-guide/configuring)

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier 的缩写
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-var': 'error',
    'prettier/prettier': 'error',
    // 禁止出现console
    'no-console': 'warn',
    // 禁用debugger
    'no-debugger': 'warn',
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'warn',
    // 禁止出现空语句块
    'no-empty': 'warn',
    // 禁止不必要的括号
    'no-extra-parens': 'off',
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'warn',
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'warn',
    // 强制所有控制语句使用一致的括号风格
    curly: 'warn',
    // 要求 switch 语句中有 default 分支
    'default-case': 'warn',
    // 强制尽可能地使用点号
    'dot-notation': 'warn',
    // 要求使用 === 和 !==
    eqeqeq: 'warn',
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'warn',
    // 禁止出现空函数
    'no-empty-function': 'warn',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'warn',
    // 禁止使用多个空格
    'no-multi-spaces': 'warn',
    // 禁止多次声明同一变量
    'no-redeclare': 'warn',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'warn',
    // 禁用不必要的 return await
    'no-return-await': 'warn',
    // 禁止自我赋值
    'no-self-assign': 'warn',
    // 禁止自身比较
    'no-self-compare': 'warn',
    // 禁止不必要的 catch 子句
    'no-useless-catch': 'warn',
    // 禁止多余的 return 语句
    'no-useless-return': 'warn',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'off',
    // 允许delete变量
    'no-delete-var': 'off',
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': 'warn',
    // 强制在代码块中使用一致的大括号风格
    'brace-style': 'warn',
    // 强制使用骆驼拼写法命名约定
    camelcase: 'warn',
    // 强制使用一致的缩进
    indent: 'off',
    // 强制在 JSX 属性中一致地使用双引号或单引号
    // 'jsx-quotes': 'warn',
    // 强制可嵌套的块的最大深度4
    'max-depth': 'warn',
    // 强制最大行数 300
    // "max-lines": ["warn", { "max": 1200 }],
    // 强制函数最大代码行数 50
    // 'max-lines-per-function': ['warn', { max: 70 }],
    // 强制函数块最多允许的的语句数量20
    'max-statements': ['warn', 100],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': ['warn', 3],
    // 强制函数定义中最多允许的参数数量
    'max-params': ['warn', 3],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['warn', { max: 1 }],
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 'warn',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'warn',
    // 禁止出现多行空行
    'no-multiple-empty-lines': 'warn',
    // 禁止出现;
    semi: ['warn', 'never'],
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'warn',
    // 强制在 function的左括号之前使用一致的空格
    // 'space-before-function-paren': ['warn', 'never'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': 'warn',
    // 要求操作符周围有空格
    'space-infix-ops': 'warn',
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 'warn',
    // 强制在注释中 // 或 /* 使用一致的空格
    // "spaced-comment": "warn",
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': 'warn',
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'warn',
    'no-useless-escape': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-prototype-builtins': 'warn',
    'no-fallthrough': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-case-declarations': 'warn',
    'no-async-promise-executor': 'warn',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
```

### .eslintignore

```
# eslint 忽略检查 
node_modules
dist
```

### prettire 支持

```
npm i prettier -D
```

### 解决 eslint 和 prettier 冲突

解决 `ESLint` 中的样式规范和 `prettier` 中样式规范的`冲突`，以 `prettier` 的样式规范`为准`，使 ESLint 中的样式规范自动失效

```
npm i eslint-config-prettier -D
```

### package.json 设置

```json
{
  "script": {
    "lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx",
    "prettier": "prettier --write ."
  }
}
```

# 配置路径别名

`vite.confige.vue`

```
  // 定义路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl":".",
    "paths":{
      "@/*":["src/*"]
    }
  },
}
```



# css 预处理

全局使用 scss 变量

scss 安装

```
npm install -D sass-loader node-sass sass
```

创建 `src/assets/style/main.scss` 

```
$text-color: red;
```

在vite配置文件`vite.config.ts`全局引入

```ts
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./assets/style/main.scss";',
      },
    },
  },
```

> 注意易错点：
>
> scss路径
>
> `'@import "./assets/style/main.scss";',`

在`app.vue`中测试可用

不需要任何引入可以直接使用全局`scss`定义的变量

# 路由

```
npm i vue-router@4
```

创建路由文件`src\router\index.ts`

```typescript
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Hello',
    component: () => import('../components/HelloWorld.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

```

在main.js中引入

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
```

修改App.js

```vue
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
```



# axios 封装

```
npm i axios
// 进度条
npm i nprogress
```

创建

 `service/api`文件夹

`service/http.ts` 用于axios 的封装

```typescript
import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'

// 设置请求头和请求路径
axios.defaults.baseURL = ''
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charse=UFT-8'
axios.interceptors.request.use((config): AxiosRequestConfig<any> => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  return config
})
// 响应拦截
axios.interceptors.response.use((res) => {
  if (res.data.code === 1) {
    sessionStorage.setItem('token', '')
    // token 过期操作
  }
  return res
})

interface ResType<T> {
  code: number
  data?: Text
  msg: string
  err?: string
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
}

export default http
```

`api` : 项目中接口做统一管理，按照模块来划分

创建login登录模块

 `service/api/login/types.ts` 定义类型

```typescript
export interface ILoginParams {
  userName: string
  password: string | number
}
export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>
}
```

 `service/api/login/login.ts` 具体请求

```typescript
import http from '@/service/http'
import * as T from './types'

const loginApi: T.ILoginApi = {
  login(params) {
    return http.post('/login', params)
  },
}
```







# pinia 状态管理

安装

```
npm i pinia@next
```

在main.ts中引入

```ts
import { createPinia } from 'pinia'
const app = createApp(App)
app.use(createPinia())
```

新建`store/main.ts`

```ts
import { defineStore } from 'pinia'
export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: 'admin',
  }),
})
```

在组件中使用

```vue
<template>
  <div>
    {{ mainStore.name }}
  </div>
</template>
<script setup lang="ts">
import { useMainStore } from '@/store/main'
const mainStore = useMainStore()
</script>
```

## getter

Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能

`store/main.ts`\

```typescript
import { defineStore } from 'pinia'
export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: 'admin',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
})
```

在组件中使用

```vue
<template>
  <div>
    <p>用户名：{{ mainStore.name }}</p>
    <p>用户名长度:{{ mainStore.nameLength }}</p>
    <hr />
    <button @click="updataName">修改name</button>
  </div>
</template>
<script setup lang="ts">
import { useMainStore } from '@/store/main'
const mainStore = useMainStore()
const updataName = () => {
  mainStore.$patch({
    name: '8963',
  })
}
</script>
```

## action

这里与 `Vuex` 有极大的不同，`Pinia` 仅提供了一种方法来定义如何更改状态的规则，放弃 `mutations` 只依靠 `Actions`，这是一项重大的改变。

`Pinia` 让 `Actions` 更加的灵活：

- 可以通过组件或其他 `action` 调用
- 可以从其他 `store` 的 `action` 中调用
- 直接在 `store` 实例上调用
- 支持`同步`或`异步`
- 有任意数量的参数
- 可以包含有关如何更改状态的逻辑（也就是 vuex 的 mutations 的作用）
- 可以 `$patch` 方法直接更改状态属性

```typescript
import { defineStore } from 'pinia'
export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: 'admin',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      data = `123${data}456`
      this.name = data
    },
  },
})
```

在组件中使用

```vue
<template>
  <div>
    <p>用户名：{{ mainStore.name }}</p>
    <p>用户名长度:{{ mainStore.nameLength }}</p>
    <hr />
    <button @click="updataName">修改name</button>
  </div>
</template>
<script setup lang="ts">
import { useMainStore } from '@/store/main'
import { onMounted } from 'vue'
const mainStore = useMainStore()
const updataName = () => {
  mainStore.$patch({
    name: '8963',
  })
}
onMounted(() => {
  mainStore.insertPost('哇')
})
</script>
```



# 环境变量配置

`vite` 提供了两种模式：具有开发服务器的`开发模式`（development）和`生产模式`（production）

创建`.env.development`

```
NODE_ENV=development
VITE_APP_WEB_URL= 'YOUR WEB URL'
```

创建`.env.development`

```
NODE_ENV=production
VITE_APP_WEB_URL= 'YOUR WEB URL'
```

在项目中使用

```
console.log(import.meta.env.VITE_APP_WEB_URL)
```

打包区分开发环境和生产环境

```
"build:dev": "vite build --mode development",
"build:pro": "vite build --mode production",
```



## element Plus

安装

```
npm i element-plus --save
```

main.ts 引入

```javascript
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

app.use(ElementPlus)
```

# vite 常用基础配置

### 生产环境生成 .gz 文件

> 开启 `gzip` 可以极大的压缩静态资源，对页面加载的速度起到了显著的作用。
>
> 使用 `vite-plugin-compression` 可以 `gzip` 或 `brotli` 的方式来压缩资源，这一步需要服务器端的配合，`vite` 只能帮你打包出 `.gz` 文件。此插件使用简单，你甚至无需配置参数，引入即可。
>
> ```
> npm i vite-plugin-compression -D
> ```

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: '@import "@/assets/style/main.scss";'
      }
    }
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {}
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
```

# VueUse工具包

`VueUse`：[vueuse.org/](https://link.juejin.cn/?target=https%3A%2F%2Fvueuse.org%2F)`VueUse` 是一个基于 `Composition API` 的实用函数集合。
