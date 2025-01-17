<template>
    <ul class="layers">
        <CanvasLayer v-for="(layer, index) of layers" :key="index" :layer="layer" />
    </ul>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { computed } from 'vue';
import CanvasLayer from './AppCanvas/CanvasLayer.vue';

const store = useAppStore();
const layers = computed(() => store.layers.filter(l => l.parent_id === null));
</script>
