export enum CanvasLayerType {
    IMAGE = "IMAGE",
    TEXT = "TEXT",
    GROUP = "GROUP"
}

export interface CanvasLayer {
    id: string;
    type: CanvasLayerType;
    parent_id?: string|null;
}

export interface TextLayer extends CanvasLayer {
    content: string;
}

export interface ImageLayer extends CanvasLayer {
    src: string;
}

export interface GroupLayer extends CanvasLayer {
    children: CanvasLayer[];
}
