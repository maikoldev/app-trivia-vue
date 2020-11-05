<template>
  <div id="app">
    <Navbar />
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 offset-md-3 col-md-6">
            <transition
              name="custom-transition"
              enter-active-class="animate__animated animate__flipInY"
            >
              <router-view />
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@import "~animate.css";
</style>
