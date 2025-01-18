import { ref } from 'vue';
import { defineStore } from 'pinia';
import { CanvasLayerType, type CanvasLayer, type ImageLayer, type TextLayer } from '@/types/CanvasLayer';

export const useAppStore = defineStore('app', () => {
    const layers = ref<CanvasLayer[]>([]);

    /**
     * Add a new layer to store
     * @param layer TextLayer|ImageLayer
     */
    const addLayer = (layer: TextLayer|ImageLayer) => {
        layer.id = crypto.randomUUID();
        layers.value.push(layer);
    }

    /**
     * Update a layer's data
     * @param id string
     * @param data string
     */
    const updateLayer = (id: string, data: string) => {
        const f = layers.value.find(l => l.id === id);
        if (f) {
            switch (f.type) {
                case CanvasLayerType.IMAGE:
                    (f as ImageLayer).src = data;
                    break;
                case CanvasLayerType.TEXT:
                    (f as TextLayer).content = data;
                    break;
            }
        }
    };

    /**
     * Delet a layer by id
     * @param id string
     */
    const deleteLayer = (id: string) => {
        layers.value = layers.value.filter(l => l.id !== id);
    };

    return { layers, addLayer, updateLayer, deleteLayer };
});
