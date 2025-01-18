<template>
    <ul class="app-canvas" ref="leSortable">
        <CanvasLayer
            v-for="layer of layers"
            :key="layer.id"
            :edit-active="layer.id === activeId"
            :layer="layer"
            @toggle-edit="activeId = $event"
        />
    </ul>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { computed, ref } from 'vue';
import CanvasLayer from './AppCanvas/CanvasLayer.vue';

const store = useAppStore();
const layers = computed(() => store.layers.filter(l => l.parent_id === null));

const leSortable = ref<HTMLElement | null>(null);

const activeId = ref('');
</script>
