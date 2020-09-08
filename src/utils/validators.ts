interface Rule {
    type: "required" | "length";
}

interface Require extends Rule {
    type: "required";
}

interface Length extends Rule {
    type: "length";
    options: MinMaxOptions;
}

interface MinMaxOptions {
    min: number;
    max: number;
}

export function required(): Require {
    return { type: "required" };
}

export function length(options: MinMaxOptions): Length {
    return { type: "length", options };
}

type Validator = Require | Length;

// valid => 検証の結果を返す(真偽値)
// もしfalseの場合、messageを返す
export interface Status {
    valid: boolean;
    message?: string;
}

// 検証の結果を返す
export function validate(value: string, validators:Validator[]):Status {
    for (const validator of validators) {
        if(validator.type === "required" && (!value || !value.length)){
            return {
                valid: false,
                message: "項目の内容は必須です。"
            }
        }

        if(validator.type === "length" && (value.length < validator.options.min || value.length > validator.options.max)){
            return {
                valid: false,
                message: `期待値の幅内ではありません、min:${validator.options.min},max: ${validator.options.max}`
            }
        }
    }
    return {valid: false}
}