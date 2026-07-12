// E4 v1.14 — the SOLE render adapter (mechanical embargo). Every official artifact must render through here.
// It (a) validates against the closed schema, and (b) rejects any institution-performance multiplier notation:
// ASCII 'x'/'X' as a multiplier suffix on a number, the Unicode multiplication sign, and bare 'D/C'/'C/D' ratios.
// m_hat is a SIGNED FRACTION of the oracle (parity at 0), never a ratio-with-parity-1 and never suffixed with 'x'.
import { EMBARGO_TOKENS } from './contract.mjs';
import { validateOutput } from './schema.mjs';

// reject "2.2x", "2.2X", "×", "D/C", "C/D" appearing in rendered performance text
const MULT_SUFFIX = /\d\s*[xX×]\b/;              // a number immediately followed by x/X/× (multiplier notation)
const RATIO_TOKEN = /\b[DC]\s*\/\s*[CD]\b/;      // D/C or C/D

export function assertNoEmbargoedTokens(text) {
  const hits = [];
  if (MULT_SUFFIX.test(text)) hits.push('multiplier-suffix (number+x/×)');
  if (RATIO_TOKEN.test(text)) hits.push('institution ratio (D/C or C/D)');
  for (const tok of EMBARGO_TOKENS) if (text.includes(tok)) hits.push(`token '${tok}'`);
  if (hits.length) throw new Error(`[embargo] rendered text contains forbidden performance notation: ${hits.join(', ')}`);
  return true;
}

export function renderReport(out) {
  const errs = validateOutput(out);
  if (errs.length) throw new Error(`[embargo] output failed closed schema: ${errs.join('; ')}`);
  const pct = (x) => (100 * x).toFixed(1) + '%';                 // signed fraction of oracle, NOT a multiplier
  const mag = out.m_Ralpha
    ? Object.entries(out.m_Ralpha).map(([al, iv]) => `  α=${al}: [${pct(iv[0])}, ${pct(iv[1])}] of oracle`).join('\n')
    : '  (magnitude layer not computed)';
  const sh = (x) => (100 * x).toFixed(0) + '%';
  const text = [
    `E4 evidence — contract ${out.contract_version} — θ:${out.theta_id}`,
    `  m̂ (signed fraction of full-information oracle, parity at 0): ${pct(out.m_hat)}  CI=[${pct(out.ci[0])}, ${pct(out.ci[1])}]`,
    `  sign backbone over D_F (measure-free): Core v0 wins ${sh(out.df_dist_share)} of corners · central ${sh(out.df_cent_share)} · parity ${sh(out.df_par_share)}`,
    `  magnitude over R_α (measured):`,
    mag,
    `  status → sign:${out.sign_status}  materiality:${out.materiality_status}  degeneracy:${out.degeneracy_status}  numerical:${out.numerical_status}`,
    `  π_deg (degenerate-world share): ${pct(out.pi_deg)}`,
  ].join('\n');
  assertNoEmbargoedTokens(text);
  return text;
}
