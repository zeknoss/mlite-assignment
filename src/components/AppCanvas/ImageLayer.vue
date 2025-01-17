<template>
    <div>
        <img :src="layer.src" />
    </div>
</template>

<script lang="ts" setup>
import type { ImageLayer } from '@/types/CanvasLayer';
import type { PropType } from 'vue';

defineProps({
    layer: {
        type: Object as PropType<ImageLayer>,
        required: true,
    }
});
</script>
