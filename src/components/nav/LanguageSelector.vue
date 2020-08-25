<template>
    <div class="language-selector">
        <select id="lang" v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.locale">{{ lang.name }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'LanguageSelector',
        data () {
            return {
                langs: [
                    { name: 'français', locale : 'fr' },
                    { name: 'english', locale : 'en' },
                    //{ name: 'español', locale : 'es' }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/style/constants";

    #lang {
        box-shadow: inset 1px 1px 4px rgba($main-dark, 0.5);
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        padding: 5px;
        outline: none;
        cursor: pointer;
        font-size: 1.1em;
        border-radius: 5px;
        background-color: $main-yellow;
        text-transform: capitalize;
    }
</style>
