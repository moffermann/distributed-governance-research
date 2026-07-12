// E4 v1.14 — minimal closed-schema validator (no external deps). Enforces additionalProperties:false, required
// fields, and enums from the contract's OUTPUT_SCHEMA. The schema deliberately has NO field able to carry D/C or a
// ratio-with-parity-1; this validator guarantees no extra field sneaks one in.
import { OUTPUT_SCHEMA } from './contract.mjs';

export function validateOutput(obj) {
  const S = OUTPUT_SCHEMA, errs = [];
  if (typeof obj !== 'object' || obj === null) return ['output is not an object'];
  for (const k of Object.keys(obj)) {
    if (!(k in S.properties)) errs.push(`forbidden extra field: ${k}`); // additionalProperties:false
  }
  for (const k of S.required) if (!(k in obj)) errs.push(`missing required field: ${k}`);
  for (const [k, spec] of Object.entries(S.properties)) {
    if (!(k in obj)) continue;
    const v = obj[k];
    if (spec.enum && !spec.enum.includes(v)) errs.push(`${k}=${JSON.stringify(v)} not in enum ${JSON.stringify(spec.enum)}`);
    if (spec.type === 'number' && typeof v !== 'number') errs.push(`${k} must be number`);
    if (spec.type === 'string' && typeof v !== 'string') errs.push(`${k} must be string`);
    if (spec.type === 'array') {
      if (!Array.isArray(v)) errs.push(`${k} must be array`);
      else if (spec.minItems && v.length < spec.minItems) errs.push(`${k} too short`);
      else if (spec.maxItems && v.length > spec.maxItems) errs.push(`${k} too long`);
    }
    if (spec.minimum !== undefined && v < spec.minimum) errs.push(`${k} below minimum`);
    if (spec.maximum !== undefined && v > spec.maximum) errs.push(`${k} above maximum`);
  }
  return errs;
}
