import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { CanvasLayer, GroupLayer, ImageLayer, TextLayer } from '@/types/CanvasLayer';

export const useAppStore = defineStore('app', () => {
    const layers = ref<CanvasLayer[]>([]);

    const addLayer = (layer: TextLayer|ImageLayer|GroupLayer) => {
        layers.value.push(layer);
    }

    return { layers, addLayer };
});
