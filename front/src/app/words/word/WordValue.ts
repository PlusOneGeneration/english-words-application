export class WordValue {
    _id?:string;
    text: String;
    completed: Boolean;
    priority: Number;
    images: [String];
    translation: any = {};
    translations: [{}];
    sentences: any;
    tags: any = [];
}