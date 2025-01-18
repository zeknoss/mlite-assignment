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
            <MBtn @click="dump" v-tooltip.bottom-end="'Export JSON'">
                <MIcon>download</MIcon>
            </MBtn>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { CanvasLayerType, type CanvasLayer, type ImageLayer, type TextLayer } from '@/types/CanvasLayer';
import MIcon from './Generic/MIcon.vue';
import MBtn from './Generic/MBtn.vue';

const store = useAppStore();

const addLayer = (type: CanvasLayerType) => {
    const data: Partial<CanvasLayer> = {
        type,
        id: '',
    };
    switch (type) {
        case CanvasLayerType.IMAGE:
            (data as ImageLayer).src = '';
            break;
        case CanvasLayerType.TEXT:
            (data as TextLayer).content = '';
            break;
    }
    store.addLayer(data as CanvasLayer);
};

const dump = () => console.log(JSON.parse(JSON.stringify(store.layers)));
</script>
