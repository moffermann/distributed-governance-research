// E4 v1.14 — the SOLE render adapter (mechanical embargo). Every official artifact must render through here.
// It (a) validates against the closed schema, and (b) rejects any institution-performance multiplier notation:
// ASCII 'x'/'X' as a multiplier suffix on a number, the Unicode multiplication sign, and bare 'D/C'/'C/D' ratios.
// m_hat is a SIGNED FRACTION of the oracle (parity at 0), never a ratio-with-parity-1 and never suffixed with 'x'.
import { EMBARGO_TOKENS } from './contract.mjs';
import { validateOutput } from './schema.mjs';

// Normalize away zero-width chars and map Unicode confusables to ASCII so a Cyrillic 'х', the multiplication/cross
// signs (× ✕ ✖ ⨯), a non-breaking hyphen, a division slash, etc. cannot smuggle a multiplier/ratio past the filter
// (rev-repro M2 + Codex v8 broader bypasses).
const ZERO_WIDTH = /[​‌‍﻿]/g;
const CONF_X = /[×✕✖⨯хХｘＸ]/g;               // → x
const CONF_HYPHEN = /[‐‑‒–—]/g; // various hyphens/dashes → '-'
const CONF_SLASH = /[⁄∕／]/g;   // fraction/division/fullwidth slash → '/'
const MULT_SUFFIX = /\d\s*x/i;                 // a number followed by x (after normalization)
const FOLD_TIMES  = /\d(\.\d+)?\s*-?\s*(fold|times)\b/i;              // "2.2-fold", "2.2 times"
const WORD_MULT   = /\b(twice|double|triple|quadruple|[a-z]+-fold)\b/i; // "twice", "double", "two-fold"
const RATIO_TOKEN = /\b[dc]\s*\/\s*[cd]\b/i;   // D/C or C/D, any case

export function assertNoEmbargoedTokens(text) {
  const norm = text.replace(ZERO_WIDTH, '').replace(CONF_X, 'x').replace(CONF_HYPHEN, '-').replace(CONF_SLASH, '/');
  const hits = [];
  if (MULT_SUFFIX.test(norm)) hits.push('multiplier-suffix (number+x, incl. Unicode confusables)');
  if (FOLD_TIMES.test(norm)) hits.push('numeric fold/times multiplier phrasing');
  if (WORD_MULT.test(norm)) hits.push('word multiplier (twice/double/triple/N-fold)');
  if (RATIO_TOKEN.test(norm)) hits.push('institution ratio (D/C or C/D, any case)');
  for (const tok of EMBARGO_TOKENS) if (text.includes(tok)) hits.push(`token '${tok}'`);
  if (hits.length) throw new Error(`[embargo] rendered text contains forbidden performance notation: ${hits.join(', ')}`);
  return true;
}

// A print helper that routes every line through the embargo before emitting (for scenarios/frontier that print directly).
export function safeLog(...lines) { const t = lines.join(' '); assertNoEmbargoedTokens(t); console.log(t); }

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
    `  sign backbone over D_F: Core v0 wins ${sh(out.df_dist_share)} of sampled θ-points · central ${sh(out.df_cent_share)} · parity ${sh(out.df_par_share)}  (a COUNT of resolved points, not a probability)`,
    `  magnitude over R_α (declared sensitivity boxes; a value >100% means the losing arm destroys value, so the gap exceeds the oracle):`,
    mag,
    `  status → sign:${out.sign_status}  materiality:${out.materiality_status}  degeneracy:${out.degeneracy_status}  numerical:${out.numerical_status}`,
    `  π_deg (degenerate-world share): ${pct(out.pi_deg)}`,
  ].join('\n');
  assertNoEmbargoedTokens(text);
  return text;
}
