<template>
  <v-container fluid>
    <h2 class="m-2 font-bold">Jhon Doe</h2>
    <v-row class="">
      <v-col v-for="n in 12" :key="n" cols="12" sm="4">
        <v-card class="pa-3" @click="redirectTo('/user-details/5')">
          <div class="pa-3">
            <v-row class="mb-2">
              <v-avatar image="../assets/avatar.png" size="100"></v-avatar>
              <v-col class="mx-3">
                <div>
                  <h3>Jhon Doe</h3>
                  <p>Genel Koordinatör</p>
                  <b>+90 530 274 22 22</b>
                </div>
              </v-col>
            </v-row>
            <v-card-text class="p-0">
              <v-row>
                <v-col cols="1" class="flex items-center">
                  <div class="">
                    <icons.IconMapPinHeart size="18" stroke-width="2" />
                  </div> 
                </v-col>
                <v-col cols="11" class=" font-bold">Location</v-col>
                <v-col cols="12" class="text-md text-[#5C6672] py-0">Timko sokak no:2 Yeni Mahalle / Ankara  </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" class="flex items-center">
                  <div class="">
                    <icons.IconBuildingSkyscraper size="18" stroke-width="2" />
                  </div> 
                </v-col>
                <v-col cols="11" class=" font-bold">Company</v-col>
                <v-col cols="12" class="text-lg text-[#5C6672] py-0">asdasdasdasdsasaad</v-col>
              </v-row>
              <v-row>
                <v-col cols="1" class="flex items-center">
                  <div class="">
                    <icons.IconWorldShare size="18" stroke-width="2" />
                  </div> 
                </v-col>
                <v-col cols="11" class=" font-bold">Website</v-col>
                <v-col cols="12" class="text-lg text-[#5C6672] py-0">n2mobil.com.tr</v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id

</script>
