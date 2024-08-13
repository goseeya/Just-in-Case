export interface TranslatedText {
    [k: string]: string;
}

interface Config {
    username: string;
    data: {
        text: TranslatedText;
        purchaseAppPath: '';
    };
}

export interface JustInCaseContext {
    config: Config;
}
