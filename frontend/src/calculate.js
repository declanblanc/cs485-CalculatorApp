/**
 * calculate(expression)
 * Takes an expression string (e.g. "3 + 5 × 2 ÷ 4")
 * and returns the result as a string.
 */
export function calculate(expression) {
  try {
    // Replace display symbols with JS operators
    let expr = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/,/g, '');

    // Handle % as /100 (e.g. "25%" → "(25/100)", "50+10%" → "50+(10/100)")
    expr = expr.replace(/(-?\d*\.?\d+)%/g, '($1/100)');

    // Handle trailing operator — strip it so eval doesn't fail
    expr = expr.trim().replace(/[+\-*/.]+$/, '').trim();

    if (!expr) return 'Error';

    // Safe numeric expression check — only allow digits, operators, dots, spaces, parens
    if (!/^[\d+\-*/().% ]+$/.test(expr)) return 'Error';

    // eslint-disable-next-line no-new-func
    const result = Function('"use strict"; return (' + expr + ')')();

    if (!isFinite(result)) return 'Error';

    // Return clean number string — up to 10 significant digits
    return parseFloat(result.toPrecision(10)).toString();
  } catch {
    return 'Error';
  }
}
