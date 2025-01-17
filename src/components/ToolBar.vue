<template>
    <aside>
        <nav>
            <button type="button" @click="addLayer">+</button>
        </nav>
    </aside>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { CanvasLayerType, type TextLayer } from '@/types/CanvasLayer';

const store = useAppStore();

const addLayer = () => {
    const p = prompt('Please enter a text');
    if (p) {
        store.addLayer(<TextLayer>{
            type: CanvasLayerType.TEXT,
            content: p,
            parent_id: null
        });
    }
};
</script>
