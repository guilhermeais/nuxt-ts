<template>
    <div>
        <LoginTemplate/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    middleware: 'guest' // redireciona para o dashboard se já estiver com o token
})
</script>