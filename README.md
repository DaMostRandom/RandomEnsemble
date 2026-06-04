# Random Ænsemble α

Physics-constrained **functional & predictive** medical imaging — a research demo.

Anatomy viewers show what a scan *looks like*. Random Ænsemble shows how it **works**
(function from the deformation field), where a patient **sits** among all patients (physics
manifold), and where they're **heading** (continuous twin).

**Live:** open `index.html` (lands on the 3D gallery). Pure static Three.js — no build step,
no framework. Data is from public research datasets (ACDC cardiac MRI, OSIC lung CT).

Highlights: det(J) → EF (r=0.918, no segmentation net), regional strain localizing infarct
without labels, a 4D digital twin, and an honest benchmark ledger (including what we ruled out).

*Research code is kept private; this repo is the shareable demo only.*
