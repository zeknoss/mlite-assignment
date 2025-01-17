<template>
    <div>
        <img :src="source" />
    </div>
</template>

<script lang="ts" setup>
import type { ImageLayer } from '@/types/CanvasLayer';
import { computed, type PropType } from 'vue';

const props = defineProps({
    layer: {
        type: Object as PropType<ImageLayer>,
        required: true,
    }
});

const source = computed(() => props.layer.src.length > 0 ? props.layer.src : 'https://placehold.co/640x150?text=Choose Image');
</script>
