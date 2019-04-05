export default class BackgroundImageStyleGenerator {
    constructor() {}
    protected styleParams:string = 'center center / cover no-repeat';

    public getBackgroundStyleWithUrl(url:string):string {
        return `url(${url}) ${this.styleParams}`;
    }

}