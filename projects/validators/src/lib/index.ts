import { ActualLengthValidator } from "./sync/actual-length.validator";
import { MaxLengthValidator } from "./sync/max-length.validator";
import { MinLengthValidator } from "./sync/min-length.validator";
import { MinValidator } from "./sync/min.validator";
import { RequiredValidator } from "./sync/required.validator";
export class Validators {
    public static actualLength = ActualLengthValidator.actualLength
    public static maxLength = MaxLengthValidator.maxLength;
    public static min = MinValidator.min;
    public static minLength = MinLengthValidator.minLength;
    public static required = RequiredValidator.required;
}