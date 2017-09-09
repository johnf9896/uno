import {ActionCard} from "./ActionCard";
import {Color} from "./Color";
import {CardType} from "./Card";

export class SkipCard extends ActionCard {
    readonly type = CardType.Skip;

    constructor(public readonly color: Color) {
        super("S", color);
    }
}