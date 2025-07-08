export interface GameReviewMeta {
    title: string;
    slug: string;
    date: string;
    image?: string;
    rate: number;
}

export interface GameReview extends GameReviewMeta {
    content: string;
}