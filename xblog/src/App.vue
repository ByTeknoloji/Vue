<template>
  <v-app>
      <v-layout>
        <v-navigation-drawer class="h-screen position-fixed left-0 overflow-y-auto"
          >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              subtitle="enes.kurt@n2mobil.com.tr"
              title="Enes KURT"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            
            <v-list-item prepend-icon="mdi-account" title="Users" @click="redirectTo('/users')"></v-list-item>
            <v-list-item v-if="$route.path !== '/users'" prepend-icon="mdi-check" title="Todos" @click="redirectTo('/todos')"></v-list-item>
            <v-list-item v-if="$route.path !== '/users'" prepend-icon="mdi-account-multiple" title="Albums" value="shared"></v-list-item>
            <v-list-item v-if="$route.path !== '/users'" prepend-icon="mdi-star" title="Starred" value="Posts"></v-list-item>
          </v-list>
        <div class="flex justify-center fixed bottom-0 left-1/2 transform -translate-x-1/2 pa-3"><img src="../src/assets/logo.png" class="logo"></div>
        </v-navigation-drawer>
        <v-main>
            <router-view />
        </v-main>
      </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const redirectTo = (path: string) => {
  router.push(path)
}
</script>

<style scoped>
.logo{
  height:auto;
}
</style>


