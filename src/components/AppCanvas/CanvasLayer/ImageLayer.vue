<template>
    <li class="canvas-layer image-layer">
        <template v-if="!editActive">
            <div class="layer-img" @click="$emit('toggleEdit', layer.id)">
                <img :src="source" />
            </div>

            <LayerToolbar :layer="layer" @change="$emit('toggleEdit', '')" />
        </template>

        <template v-else>
            <h3>Choose a picture</h3>
            <div class="layer-choices">
                <div
                    v-for="(preset, index) of presets" :key="index"
                    :style="{'--bg': 'url(' + preset + ')'}"
                    class="choice-item"
                    :class="{active: preset === layer.src}"
                    @click="save(preset)"
                />
            </div>
        </template>
    </li>
</template>

<script lang="ts" setup>
import type { ImageLayer } from '@/types/CanvasLayer';
import { computed, type PropType } from 'vue';
import LayerToolbar from './LayerToolbar.vue';
import { useAppStore } from '@/stores/app';

const props = defineProps({
    layer: {
        type: Object as PropType<ImageLayer>,
        required: true,
    },
    editActive: {
        type: Boolean,
        default: false,
    }
});
const emit = defineEmits(['toggleEdit']);

const presets = [
    'https://images.unsplash.com/photo-1736210811075-7509d5023a4a?w=640',
    'https://images.unsplash.com/photo-1737069222398-febfd663da1e?w=640',
    'https://images.unsplash.com/photo-1737044280473-06976eb5fda5?w=640',
    'https://images.unsplash.com/photo-1735040736883-9e0bc7e6f1ba?w=640',
    'https://images.unsplash.com/photo-1735185391728-a2bf4db5e9f9?w=640',
    'https://images.unsplash.com/photo-1735669356374-8ea7506cd1d2?w=640',
    'https://images.unsplash.com/photo-1735657061792-9a8221a7144b?w=640',
    'https://api.burakgurbuz.com/assets/696bf045-e04d-4b6a-acb3-3e56645998c6?width=640',
    'https://api.burakgurbuz.com/assets/0a7d97c6-9583-4878-9ac1-59b76113744b?width=640',
];

const source = computed(() => props.layer.src.length > 0 ? props.layer.src : 'https://placehold.co/640x150?text=Choose Image');

const store = useAppStore();

const save = (src: string) => {
    store.updateLayer(props.layer.id, src);
    emit('toggleEdit', '');
};
</script>
