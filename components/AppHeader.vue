<script lang="ts" setup>
let hamburgerState = ref<boolean>(false)

const hamburgerStateSwitch = computed(() => {
    hamburgerState.value = !hamburgerState.value
})

onMounted(() => {
    hamburgerClosureHandler();
})

function hamburgerClosureHandler() {
    const headerHook = document.querySelector('.header');
    const hamburgerHook = document.querySelector('.mobile-menu');
    document.addEventListener('click', (event) => {
        let eventTarget = event.target as Node | null
        if (!headerHook?.contains(eventTarget)) {
            hamburgerState.value = false;
        }
    })
}

</script>


<template>
    <nav>
        <section class="header">
            <div class="header__logo">
                <img src="/public/images/jo_logo.svg">
                <p>Avila Reese</p>
            </div>
            <div class="header__links">
                <a href="#skills" target="_blank">Skills</a>
                <a href="#experience" target="_blank">Experience</a>
                <a href="#about" target="_blank">About</a>
                <a href="#projects" target="_blank">Projects</a>
                <a href="#contacts" target="_blank">Contact</a>
            </div>
            <div class="header__resume">
                <AppButton :pic="true" :label="'Resume'" :color="'black'" />
            </div>
            <div class="header__hamburger" v-on:click="hamburgerStateSwitch">
                <div class="span__container" :class="{ active: hamburgerState }">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
        <section class="mobile-menu" :class="{ active: hamburgerState }">
            <div class="mobile-menu__links">
                <a href="#skills" target="_blank">Skills</a>
                <a href="#experience" target="_blank">Experience</a>
                <a href="#about" target="_blank">About</a>
                <a href="#projects" target="_blank">Projects</a>
                <a href="#contacts" target="_blank">Contact</a>
                <AppButton :pic="true" :label="'Resume'" :color="'black'" />
            </div>
        </section>
    </nav>
</template>



<style lang="scss" scoped>
@use "/assets/scss/header"
</style>