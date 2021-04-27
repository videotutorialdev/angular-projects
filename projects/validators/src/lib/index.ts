import { ActualLengthValidator } from "./sync/actual-length.validator";
import { EmailValidator } from "./sync/email.validator";
import { MatchPasswordValidator } from "./sync/match-password.validator";
import { MatchValidator } from "./sync/match.validator";
import { MaxLengthValidator } from "./sync/max-length.validator";
import { MaxValidator } from "./sync/max.validator";
import { MinLengthValidator } from "./sync/min-length.validator";
import { MinValidator } from "./sync/min.validator";
import { PatternValidator } from "./sync/pattern.validator";
import { RequiredValidator } from "./sync/required.validator";
export class Validators {
    public static actualLength = ActualLengthValidator.actualLength
    public static email = EmailValidator.email;
    public static match = MatchValidator.match;
    public static matchPassword = MatchPasswordValidator.matchPassword;
    public static max = MaxValidator.max;
    public static maxLength = MaxLengthValidator.maxLength;
    public static min = MinValidator.min;
    public static minLength = MinLengthValidator.minLength;
    public static pattern = PatternValidator.pattern;
    public static required = RequiredValidator.required;
}