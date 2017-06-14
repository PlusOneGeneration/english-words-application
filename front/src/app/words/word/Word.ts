import {WordValue} from "./WordValue";

export class Word {

    data: WordValue;

    constructor(data: WordValue) {
        this.data = data;
    }

    getText() {
        return this.data.text;
    }

    getBackground() {
        return this.data.images[0];
    };

    getImagesPreview() {
        return this.data.images.slice(0, 3);
    }

    getImages() {
        return this.data.images;
    }

    getTranslation() {
        return this.data.translation.translation;
    }

    getTranslations() {
        return this.data.translations;
    }

    getSynonyms(translation) {
        return translation.translation;
    }

    getSynonymsOnEnglish(translation) {
        return translation.synonyms;
    }


    getSentenceInEnglish(sentence) {
        return sentence.sentence;
    }

    getSentences() {
        return this.data.sentences;
    }

    getSentenceTranslation(sentence) {
        return sentence.translation;
    }
}
