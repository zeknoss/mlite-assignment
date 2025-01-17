<template>
    <nav class="toolbar">
        <button type="button" @click="addLayer(CanvasLayerType.TEXT)" v-tooltip.bottom-end="'Add a Text Block'">
            <MIcon>article</MIcon>
        </button>
        <button type="button" @click="addLayer(CanvasLayerType.IMAGE)" v-tooltip.bottom-end="'Add an Image Block'">
            <MIcon>image</MIcon>
        </button>
        <button type="button" @click="addLayer(CanvasLayerType.GROUP)" v-tooltip.bottom-end="'Add a Group Block'">
            <MIcon>view_column_2</MIcon>
        </button>
    </nav>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { CanvasLayerType, type CanvasLayer, type GroupLayer, type ImageLayer, type TextLayer } from '@/types/CanvasLayer';
import MIcon from './Generic/MIcon.vue';

const store = useAppStore();

const addLayer = (type: CanvasLayerType) => {
    const data: CanvasLayer = {
        type,
        parent_id: null,
        id: '',
    };
    switch (type) {
        case CanvasLayerType.GROUP:
            (data as GroupLayer).children = [];
            break;
        case CanvasLayerType.IMAGE:
            (data as ImageLayer).src = '';
            break;
        case CanvasLayerType.TEXT:
            (data as TextLayer).content = '';
            break;
    }
    store.addLayer(data);
};
</script>
