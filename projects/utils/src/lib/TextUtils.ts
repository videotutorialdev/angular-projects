export class TextUtils {
  private static instance: TextUtils;

  public static Builder(): TextUtils {
    if (!this.instance) {
      this.instance = new TextUtils();
    }

    return this.instance;
  }

  public generateRandomString(length = 4, customString?: string): string {
    const uint8Array = new Uint8Array(1);
    const abjad = 'abcdefghijklmnopqrstuvwxyz';
    const num = '1234567890';
    const str = customString || abjad + abjad.toUpperCase() + num;
    let result = '';
    while (result.length < length) {
      window.crypto.getRandomValues(uint8Array);
      result += str.charAt(uint8Array[0] % str.length);
    }
    return result;
  }
}
