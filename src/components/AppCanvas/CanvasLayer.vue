<template>
    <component
        :is="comp"
        :layer="layer as any"
        :edic-active="editActive"
    />
</template>

<script lang="ts" setup>
import { CanvasLayerType, type CanvasLayer } from '@/types/CanvasLayer';
import { computed, type PropType } from 'vue';
import ImageLayer from './CanvasLayer/ImageLayer.vue';
import TextLayer from './CanvasLayer/TextLayer.vue';

const props = defineProps({
    layer: {
        required: true,
        type: Object as PropType<CanvasLayer>
    },
    editActive: {
        type: Boolean,
        default: false,
    }
});

const comp = computed(() => {
    switch (props.layer.type) {
        case CanvasLayerType.IMAGE:
            return ImageLayer;
        case CanvasLayerType.TEXT:
        default:
            return TextLayer;
    }
});
</script>
