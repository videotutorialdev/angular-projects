import { MaxLengthValidator } from "./sync/max-length.validator";
import { MinLengthValidator } from "./sync/min-length.validator";
import { RequiredValidator } from "./sync/required.validator";
export class Validators {
    public static maxLength = MaxLengthValidator.maxLength;
    public static minLength = MinLengthValidator.minLength;
    public static required = RequiredValidator.required;
}