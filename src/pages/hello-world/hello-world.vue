<style lang="scss" src="./hello-world.scss"></style>
<script lang="ts" src="./hello-world.ts"></script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-list>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Create Idea</h1>
            <ion-note>Run Idea by Brandy</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end">5 Days</ion-badge>
        </ion-item>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="$router.push({ name: 'new-item' })">
            <ion-icon name="add" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
