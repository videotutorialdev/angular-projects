import { MatchValidator } from './match.validator';

export class MatchPasswordValidator {
  public static matchPassword(message?: string) {
    return MatchValidator.match(
      'password',
      message || "Confirm password doesn't match with password"
    );
  }
}
