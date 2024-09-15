export type Card = {
    name: string;
    title: string;
    tags: string[];
    mediaType: 'image' | 'video';
    mediaUrl: string;
}