<template>
    <ul class="app-canvas" ref="sortableEl">
        <CanvasLayer
            v-for="layer of store.layers"
            :key="layer.id"
            :edit-active="layer.id === activeId"
            :layer="layer"
            @toggle-edit="activeId = $event"
        />
    </ul>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';
import CanvasLayer from './AppCanvas/CanvasLayer.vue';
import { useDraggable } from 'vue-draggable-plus';

const activeId = ref('');

const store = useAppStore();

const sortableEl = ref<HTMLElement | null>(null);
useDraggable(sortableEl, store.layers, {
    animation: 150,
    onUpdate() {
        store.$patch({ layers: store.layers });
    },
});
</script>
