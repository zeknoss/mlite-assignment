<template>
    <VueDraggable v-model="store.layers" tag="ul" class="app-canvas">
        <CanvasLayer
            v-for="layer of store.layers"
            :key="layer.id"
            :edit-active="layer.id === activeId"
            :layer="layer"
            @toggle-edit="activeId = $event"
        />
    </VueDraggable>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';
import CanvasLayer from './AppCanvas/CanvasLayer.vue';
import { VueDraggable } from 'vue-draggable-plus';

const activeId = ref('');

const store = useAppStore();
</script>
