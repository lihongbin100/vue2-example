<template>
  <v-app>
    <router-view name="navigation"></router-view>
    <v-content>
      <router-view></router-view>
    </v-content>    
    <v-footer height="auto" class="grey darken-3">
      <v-layout row wrap justify-center>      
        <v-flex xs12 py-3 text-xs-center white--text>
          &copy;2018 — <strong>Victor Aurélio</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>
