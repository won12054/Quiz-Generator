import { Injectable } from "@angular/core";

export class Question {

    constructor(
        public _id?: number,
        public quizId?: number,
        public prompt?: string,
        public options?: string[],
        public answer?: number,
    ){}

    public toString(){
        return `Question
        ---------------------------
        quizId        : ${this.quizId}
        prompt        : ${this.prompt}
        options       : ${this.options?.join(",")}
        answer        : ${this.answer}
        ---------------------------
        `;
    }
}