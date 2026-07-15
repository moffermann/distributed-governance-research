// E4 v1.15 — the render adapter (mechanical embargo). Official E4 evidence/scenarios/frontier text routes through
// here (renderReport / safeLog). It (a) validates against the closed schema, and (b) rejects the TESTED CLASSES of
// institution-performance multiplier notation (see the NOTE on assertNoEmbargoedTokens and the test suite) — NOT a
// proof against every conceivable obfuscation, and it does not by itself route every repository artifact.
// m_hat is a SIGNED FRACTION of the REFERENCE/normalizer (parity at 0), never a ratio-with-parity-1 and never suffixed with 'x'.
// v1.15 note: this executable output INTENTIONALLY reports percentages/points only. The manuscript separately states
// the caveated DIRECTIONAL contrast (e.g. "~98% vs ~44%") that the v1.15 claim-and-estimand contract
// permits in prose; the code-level embargo stays as a belt-and-suspenders against a *calibrated multiplier* reading.
import { EMBARGO_TOKENS } from './contract.mjs';
import { validateOutput } from './schema.mjs';

// Normalize away zero-width chars and map Unicode confusables to ASCII so a Cyrillic 'х', the multiplication/cross
// signs (× ✕ ✖ ⨯), a non-breaking hyphen, a division slash, etc. cannot smuggle a multiplier/ratio past the filter
// (rev-repro M2 + Codex v8 broader bypasses).
const ZERO_WIDTH = /[​‌‍⁠﻿­]/g; // ZWSP/ZWNJ/ZWJ/word-joiner(U+2060)/BOM/soft-hyphen(U+00AD)
const HTML_MULT  = /&times;|&#0*215;|&#x0*d7;/gi;   // HTML-entity multiplication sign → x
const CONF_X = /[×✕✖⨯хХｘＸ]/g;               // → x
const CONF_HYPHEN = /[‐‑‒–—]/g; // various hyphens/dashes → '-'
const CONF_SLASH = /[⁄∕／]/g;   // fraction/division/fullwidth slash → '/'
const NUMWORD = 'one|two|three|four|five|six|seven|eight|nine|ten|twenty|thirty|forty|fifty|hundred|thousand|many|several';
const MULT_SUFFIX = /\d\s*x/i;                 // a number followed by x (after normalization)
const NUM_FOLD    = new RegExp(`(\\d(\\.\\d+)?|\\b(${NUMWORD}))[\\s-]*(fold|times)\\b`, 'i');   // "2.2-fold","two times","fourfold"
const WORD_MULT   = /\b(twice|thrice|double|triple|quadruple)\b/i;   // bare word multipliers
const RATIO_TOKEN = /\b[dc]\s*\/\s*[cd]\b/i;   // D/C or C/D, any case
const RATIO_PHRASE = /\b(value|performance|institution\w*)\s+ratio\b|\bratio\s*\(?~?\s*\d/i;  // "value ratio (~2.7)" semantic multiplier (Adversarial R1 #4/#5)

// NOTE: this rejects the TESTED token classes (ASCII/Unicode/confusable/HTML-entity 'x' after a number;
// numeric or number-word N-fold / N-times; bare twice/double/triple/quadruple; D/C or C/D any case; zero-width
// splits). It is not a proof against every conceivable obfuscation — see the test suite for the covered classes.
export function assertNoEmbargoedTokens(text) {
  const norm = text.replace(ZERO_WIDTH, '').replace(HTML_MULT, 'x').replace(CONF_X, 'x').replace(CONF_HYPHEN, '-').replace(CONF_SLASH, '/');
  const hits = [];
  if (MULT_SUFFIX.test(norm)) hits.push('multiplier-suffix (number+x, incl. Unicode/HTML confusables)');
  if (NUM_FOLD.test(norm)) hits.push('N-fold / N-times multiplier phrasing (numeric or word)');
  if (WORD_MULT.test(norm)) hits.push('word multiplier (twice/thrice/double/triple/quadruple)');
  if (RATIO_TOKEN.test(norm)) hits.push('institution ratio (D/C or C/D, any case)');
  if (RATIO_PHRASE.test(norm)) hits.push('semantic performance-ratio phrasing (value/performance ratio, ratio(~N))');
  for (const tok of EMBARGO_TOKENS) if (text.includes(tok)) hits.push(`token '${tok}'`);
  if (hits.length) throw new Error(`[embargo] rendered text contains forbidden performance notation: ${hits.join(', ')}`);
  return true;
}

// A print helper that routes every line through the embargo before emitting (for scenarios/frontier that print directly).
export function safeLog(...lines) { const t = lines.join(' '); assertNoEmbargoedTokens(t); console.log(t); }

export function renderReport(out) {
  const errs = validateOutput(out);
  if (errs.length) throw new Error(`[embargo] output failed closed schema: ${errs.join('; ')}`);
  const pct = (x) => (100 * x).toFixed(1) + '%';                 // signed fraction of the reference, NOT a multiplier
  const mag = out.m_Ralpha
    ? Object.entries(out.m_Ralpha).map(([al, iv]) => `  α=${al}: [${pct(iv[0])}, ${pct(iv[1])}] of the reference`).join('\n')
    : '  (magnitude layer not computed)';
  const sh = (x) => (100 * x).toFixed(0) + '%';
  const text = [
    `E4 evidence — contract ${out.contract_version} — θ:${out.theta_id}`,
    `  m̂ (signed fraction of the full-information reference, parity at 0): ${pct(out.m_hat)}  CI=[${pct(out.ci[0])}, ${pct(out.ci[1])}]`,
    `  sign backbone over D_F: Core v0 wins ${sh(out.df_dist_share)} of sampled θ-points · central ${sh(out.df_cent_share)} · parity ${sh(out.df_par_share)}  (a COUNT of resolved points, not a probability)`,
    `  magnitude over R_α (declared sensitivity boxes; a value >100% means the losing arm destroys value, so the gap exceeds the reference):`,
    mag,
    `  status → sign:${out.sign_status}  materiality:${out.materiality_status}  degeneracy:${out.degeneracy_status}  numerical:${out.numerical_status}`,
    `  π_deg (degenerate-world share): ${pct(out.pi_deg)}`,
  ].join('\n');
  assertNoEmbargoedTokens(text);
  return text;
}
