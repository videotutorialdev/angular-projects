import { MinLengthValidator } from "./sync/min-length.validator";
import { RequiredValidator } from "./sync/required.validator";
export class Validators {
    public static minLength = MinLengthValidator.minLength;
    public static required = RequiredValidator.required;
}