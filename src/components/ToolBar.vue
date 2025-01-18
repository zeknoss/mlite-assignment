<template>
    <header class="toolbar">
        <span class="logo"><MIcon>tile_medium</MIcon> <small>MailerUltraLite</small></span>
        <nav>
            <MBtn @click="addLayer(CanvasLayerType.TEXT)" v-tooltip.bottom-end="'Add a Text Block'">
                <MIcon>article</MIcon>
            </MBtn>
            <MBtn @click="addLayer(CanvasLayerType.IMAGE)" v-tooltip.bottom-end="'Add an Image Block'">
                <MIcon>image</MIcon>
            </MBtn>
            <MBtn @click="addLayer(CanvasLayerType.GROUP)" v-tooltip.bottom-end="'Add a Group Block'">
                <MIcon>view_column_2</MIcon>
            </MBtn>
            <MBtn @click="dump" v-tooltip.bottom-end="'Export JSON'">
                <MIcon>download</MIcon>
            </MBtn>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { CanvasLayerType, type CanvasLayer, type GroupLayer, type ImageLayer, type TextLayer } from '@/types/CanvasLayer';
import MIcon from './Generic/MIcon.vue';
import MBtn from './Generic/MBtn.vue';

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

const dump = () => {
    console.log('wip');
};
</script>
