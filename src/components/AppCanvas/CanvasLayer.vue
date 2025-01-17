<template>
    <component :is="comp" :layer="layer" />
</template>

<script lang="ts" setup>
import { CanvasLayerType, type CanvasLayer } from '@/types/CanvasLayer';
import { computed, type PropType } from 'vue';
import ImageLayer from './ImageLayer.vue';
import TextLayer from './TextLayer.vue';
import GroupLayer from './GroupLayer.vue';

const props = defineProps({
    layer: {
        required: true,
        type: Object as PropType<CanvasLayer>
    }
});

const comp = computed(() => {
    switch (props.layer.type) {
        case CanvasLayerType.IMAGE:
            return ImageLayer;
        case CanvasLayerType.TEXT:
            return TextLayer;
        case CanvasLayerType.GROUP:
        default:
            return GroupLayer;
    }
});
</script>
