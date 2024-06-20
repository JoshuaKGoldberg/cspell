// Exclude Expressions
// cSpell:ignore anrvtbf
export const regExMatchUrls = /(?:https?|ftp):\/\/[^\s"]+/gi;
export const regExHRef = /\bhref\s*=\s*".*?"/gi;
export const regExMatchCommonHexFormats =
    /(?:#[0-9a-f]{3,8})|(?:0x[0-9a-f]+)|(?:\\u[0-9a-f]{4})|(?:\\x\{[0-9a-f]{4}\})/gi;
export const regExCommitHash = /\b(?![a-f]+\b)(?:0x)?[0-9a-f]{7,}\b/gi; // Match Commit Hashes that contain at least one digit.
export const regExCommitHashLink = /\[[0-9a-f]{7,}\]/gi; // Match Commit Hash Markdown link: [abcdef0].
export const regExCStyleHexValue = /\b0x[0-9a-f]+\b/gi;
export const regExCSSHexValue = /#[0-9a-f]{3,8}\b/gi;
export const regExUUID = /\b[0-9a-fx]{8}-[0-9a-fx]{4}-[0-9a-fx]{4}-[0-9a-fx]{4}-[0-9a-fx]{12}\b/gi; // x - represents placeholder values
export const regExUnicodeRef = /\bU\+[0-9a-f]{4,5}(?:-[0-9a-f]{4,5})?/gi;
export const regExSpellingGuardBlock =
    /(\bc?spell(?:-?checker)?::?)\s*disable(?!-line|-next)\b(?!-)[\s\S]*?((?:\1\s*enable\b)|$)/gi;
export const regExSpellingGuardNext = /\bc?spell(?:-?checker)?::?\s*disable-next\b.*\s\s?.*/gi;
export const regExSpellingGuardLine = /^.*\bc?spell(?:-?checker)?::?\s*disable-line\b.*/gim;
export const regExIgnoreSpellingDirectives = /\bc?spell(?:-?checker)?::?\s*ignoreRegExp.*/gim;
export const regExPublicKey = /-{5}BEGIN\s+((?:RSA\s+)?PUBLIC\s+KEY)[\w=+\-/=\\\s]+?END\s+\1-{5}/g;
export const regExCert = /-{5}BEGIN\s+(CERTIFICATE|(?:RSA\s+)?(?:PRIVATE|PUBLIC)\s+KEY)[\w=+\-/=\\\s]+?END\s+\1-{5}/g;
export const regExSshRSA = /ssh-rsa\s+[a-z0-9/+]{28,}={0,3}(?![a-z0-9/+=])/gi;
export const regExEscapeCharacters = /\\(?:[anrvtbf]|[xu][a-f0-9]+)/gi;
export const regExBase64 =
    /(?<![A-Za-z0-9/+])(?:[A-Za-z0-9/+]{40,})(?:\s^\s*[A-Za-z0-9/+]{40,})*(?:\s^\s*[A-Za-z0-9/+]+=*)?(?![A-Za-z0-9/+=])/gm;

/**
 * Detect a string of characters that look like a Base64 string.
 *
 * It must be:
 * - at least 40 characters
 * - contain at least 1 of [0-9+=]
 * - end at the end of the line or with [,"'\]
 */
export const regExBase64SingleLine =
    /(?<![A-Za-z0-9/+])(?=[^/]|[/][A-Za-z0-9/+]+?[=+])(?![A-Za-z/]+(?![A-Za-z0-9/+=]))(?=[A-Za-z0-9/+=]*?(?:[A-Z]{2}|[0-9]{2}))(?:[A-Za-z0-9/+]{4}){10,}(?:[A-Za-z0-9/+]{3}={1}|[A-Za-z0-9/+]{2}={2}|[A-Za-z0-9/+]{1}={3})?(?![A-Za-z0-9/+=])(?=$|[:.,"'\\)])/gm;

export const regExBase64MultiLine =
    /(?<![A-Za-z0-9/+])["']?(?:[A-Za-z0-9/+]{40,})["']?(?:\s^\s*["']?[A-Za-z0-9/+]{40,}["']?)+(?:\s^\s*["']?[A-Za-z0-9/+]+={0,3}["']?)?(?![A-Za-z0-9/+=])/gm;

// cspell:ignore aeiou
// The following is an attempt at detecting random strings.
// export const regExRandomString =
//     /\b(?=\w*(?:[A-Z]{2}|[A-Z][a-z][A-Z]|\d\w\d))(?=(?:\w*[A-Z]){2})(?=(?:\w*[a-z]){2})(?=\w*[^aeiouAEIOU\W]{4})[\w]{10,}\b/g;

// Include Expressions
export const regExPhpHereDoc = /<<<['"]?(\w+)['"]?[\s\S]+?^\1;/gm;
export const regExString = /(?:(['"]).*?(?<![^\\]\\(\\\\)*)\1)|(?:`[\s\S]*?(?<![^\\]\\(\\\\)*)`)/g;

// Note: the C Style Comments incorrectly considers '/*' and '//' inside of strings as comments.
export const regExCStyleComments = /(?<!\w:)(?:\/\/.*)|(?:\/\*[\s\S]*?\*\/)/g;
export const rexExPythonStyleComments = /#.*|(?:('''|""")[\s\S]+?\1)/gm;

export const regExEmail = /<?\b[\w.\-+]{1,128}@\w{1,63}(\.\w{1,63}){1,4}\b>?/gi;

export const regExRepeatedChar = /^(\w)\1{3,}$/i;

export const regExSha = /\bsha\d+-[a-z0-9+/]{25,}={0,3}/gi;

/**
 * Detect common hash strings like:
 * - `sha1`, `sha256`, `sha512`
 * - `md5`
 * - `base64` - used in email
 * - `crypt`, `bcrypt`, `script`
 * - `token`
 * - `assertion` - use with jwt
 */
export const regExHashStrings =
    /(?:\b(?:sha\d+|md5|base64|crypt|bcrypt|scrypt|security-token|assertion)[-,:$=]|#code[/])[-\w/+%.]{25,}={0,3}(?:(['"])\s*\+?\s*\1?[-\w/+%.]+={0,3})*(?![-\w/+=%.])/gi;
