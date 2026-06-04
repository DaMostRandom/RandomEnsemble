window.VOXARA_DATA = {
  "generated": "2026-06-04 21:12 UTC",
  "stages": [
    {
      "id": "ingest",
      "name": "Ingestion",
      "short": "INGEST"
    },
    {
      "id": "fno",
      "name": "Encoder (Laplace/Conv3D)",
      "short": "ENCODE"
    },
    {
      "id": "register",
      "name": "Registration phi (ED\u2192ES)",
      "short": "REG \u03c6"
    },
    {
      "id": "clinical",
      "name": "Function det(J)/strain",
      "short": "FUNCTION"
    },
    {
      "id": "manifold",
      "name": "Delta_M Manifold",
      "short": "MANIFOLD"
    },
    {
      "id": "nca",
      "name": "Forecast (NCA)",
      "short": "FORECAST"
    },
    {
      "id": "siren",
      "name": "Recon/super-res [dead]",
      "short": "RECON\u2717"
    },
    {
      "id": "pinn",
      "name": "PINN (folded into REG)",
      "short": "PINN"
    }
  ],
  "datasets": [
    {
      "id": "echonet",
      "name": "EchoNet-Dynamic",
      "n": 10030,
      "modality": "echo 2D+t",
      "route": "Conv3D+BN -> z -> EF head",
      "stages": [
        {
          "id": "ingest",
          "name": "Ingestion",
          "short": "INGEST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "fno",
          "name": "Encoder (Laplace/Conv3D)",
          "short": "ENCODE",
          "status": "marginal",
          "target": {
            "metric": "EF r (Conv3D z)",
            "good": 0.88,
            "kill": 0.6,
            "baseline": 0.94,
            "cite": "Ouyang, Nature 2020",
            "higher_better": true,
            "unit": ""
          },
          "best_value": 0.7716,
          "history": [
            {
              "metric": "EF r (Conv3D z)",
              "value": 0.7716,
              "claim": "EchoNet",
              "note": "256-dim cardiac latent for manifold",
              "source": "echonet_encoder_results.json",
              "ts": null
            },
            {
              "metric": "EF r (Laplace-LNO)",
              "value": 0.6441,
              "claim": "learnable Laplace poles",
              "note": "R\u00b2=0.415 vs Conv3D 0.595, Ouyang 0.82; learnable s-plane",
              "source": null,
              "ts": "2026-06-03T03:40:53Z"
            },
            {
              "metric": "EF r (Laplace-LNO)",
              "value": 0.7107,
              "claim": "learnable Laplace poles",
              "note": "R\u00b2=0.505 vs Conv3D 0.595, Ouyang 0.82; learnable s-plane",
              "source": null,
              "ts": "2026-06-03T04:04:46Z"
            },
            {
              "metric": "EF r (Laplace-LNO)",
              "value": 0.6731,
              "claim": "learnable Laplace poles",
              "note": "R\u00b2=0.453 vs Conv3D 0.595, Ouyang 0.82; learnable s-plane",
              "source": null,
              "ts": "2026-06-03T04:27:20Z"
            },
            {
              "metric": "EF r (Laplace-LNO)",
              "value": 0.7003,
              "claim": "learnable Laplace poles",
              "note": "R\u00b2=0.490 vs Conv3D 0.595, Ouyang 0.82; learnable s-plane",
              "source": null,
              "ts": "2026-06-03T04:30:35Z"
            }
          ]
        },
        {
          "id": "register",
          "name": "Registration phi (ED\u2192ES)",
          "short": "REG \u03c6",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "clinical",
          "name": "Function det(J)/strain",
          "short": "FUNCTION",
          "status": "marginal",
          "target": {
            "metric": "EF r",
            "good": 0.88,
            "kill": 0.6,
            "baseline": 0.94,
            "cite": "Ouyang, Nature 2020",
            "higher_better": true,
            "unit": ""
          },
          "best_value": 0.7908,
          "history": [
            {
              "metric": "EF r",
              "value": 0.7716,
              "claim": "EchoNet",
              "note": "R2=0.5953 train-overfit; EDV r=0.8063, ESV r=0.881",
              "source": "echonet_encoder_results.json",
              "ts": null
            },
            {
              "metric": "EF r",
              "value": 0.7908,
              "claim": "Conv3D+aug",
              "note": "R\u00b2=0.625 (aug=True, dropout=0.5, wd=0.001); EDV r=0.8067, ESV r=0.8773",
              "source": null,
              "ts": "2026-06-03T04:49:08Z"
            },
            {
              "metric": "EF r",
              "value": 0.7901,
              "claim": "Conv3D+aug",
              "note": "R\u00b2=0.624 (aug=True, dropout=0.5, wd=0.001); EDV r=0.8195, ESV r=0.8904",
              "source": null,
              "ts": "2026-06-03T05:04:56Z"
            }
          ]
        },
        {
          "id": "manifold",
          "name": "Delta_M Manifold",
          "short": "MANIFOLD",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "nca",
          "name": "Forecast (NCA)",
          "short": "FORECAST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "siren",
          "name": "Recon/super-res [dead]",
          "short": "RECON\u2717",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "pinn",
          "name": "PINN (folded into REG)",
          "short": "PINN",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        }
      ]
    },
    {
      "id": "acdc",
      "name": "ACDC",
      "n": 149,
      "modality": "cine MRI 3D+t",
      "route": "FNO3d -> z -> FiLM-SIREN -> +PINN incompressibility -> EF",
      "stages": [
        {
          "id": "ingest",
          "name": "Ingestion",
          "short": "INGEST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "fno",
          "name": "Encoder (Laplace/Conv3D)",
          "short": "ENCODE",
          "status": "marginal",
          "target": {
            "metric": "biology AUC (5-class)",
            "good": 0.5,
            "kill": 0.3,
            "baseline": 0.95,
            "cite": "Bernard, IEEE TMI 2018",
            "higher_better": true,
            "unit": ""
          },
          "best_value": 0.4867,
          "history": [
            {
              "metric": "biology AUC (5-class)",
              "value": 0.4,
              "claim": "Claim 0 (rev)",
              "note": "FNO latent 0.4 vs BioMedCLIP 0.201 (chance 0.2)",
              "source": "fno_latent_results.json",
              "ts": null
            },
            {
              "metric": "biology AUC (5-class)",
              "value": 0.48,
              "claim": "Claim 0 (4D temporal FNO)",
              "note": "3D-FNO temporal modes, 5-fold; old 2D-FNO was 0.40",
              "source": null,
              "ts": "2026-06-02T23:47:59Z"
            },
            {
              "metric": "biology AUC (5-class)",
              "value": 0.4867,
              "claim": "Claim 0 (4D temporal FNO)",
              "note": "3D-FNO temporal modes, 5-fold; old 2D-FNO was 0.40",
              "source": null,
              "ts": "2026-06-03T00:11:30Z"
            }
          ]
        },
        {
          "id": "register",
          "name": "Registration phi (ED\u2192ES)",
          "short": "REG \u03c6",
          "status": "marginal",
          "target": {
            "metric": "registration Dice (myo, ES\u2192ED)",
            "good": 0.8,
            "kill": 0.6,
            "baseline": 0.8,
            "cite": "VoxelMorph, Balakrishnan 2019",
            "higher_better": true,
            "unit": ""
          },
          "best_value": 0.755,
          "history": [
            {
              "metric": "registration Dice (myo, warped ES->ED)",
              "value": 0.755,
              "claim": "Functional Lens v1",
              "note": "deformable SIREN phi ED->ES; warped-ES myo Dice 0.755 vs no-reg baseline 0.526 (+0.229), n=15; VoxelMorph-class 0.75-0.85",
              "source": null,
              "ts": "2026-06-03T21:55:43Z"
            }
          ]
        },
        {
          "id": "clinical",
          "name": "Function det(J)/strain",
          "short": "FUNCTION",
          "status": "pass",
          "target": {
            "metric": "EF r vs ground truth",
            "good": 0.85,
            "kill": 0.6,
            "baseline": 0.95,
            "cite": "Bernard, IEEE TMI 2018",
            "higher_better": true,
            "unit": ""
          },
          "best_value": 0.953,
          "history": [
            {
              "metric": "EF r vs ground truth",
              "value": 0.7085,
              "claim": "Claim 2",
              "note": "method=intensity, nnU-Net baseline r=0.95",
              "source": "field_params_results.json",
              "ts": null
            },
            {
              "metric": "EF r (det(J) from field)",
              "value": 0.9179,
              "claim": "Claim 2 v2 (det(J) registration)",
              "note": "det(J)-EF r=0.918 vs intensity 0.708; physics-grounded volumetric EF",
              "source": null,
              "ts": "2026-06-03T05:44:09Z"
            },
            {
              "metric": "MINF infarct AUC (regional strain, deadest wall)",
              "value": 0.897,
              "claim": "Functional Lens v1",
              "note": "regional radial strain from det(J) deformation field; min-sector strain MINF vs NOR AUC=0.897; heterogeneity MINF vs DCM AUC=0.885 (focal vs global); global strain vs EF r=0.805; no segmentation net, no strain labels",
              "source": null,
              "ts": "2026-06-03T20:07:39Z"
            },
            {
              "metric": "MINF infarct AUC (regional strain, deadest wall)",
              "value": 0.953,
              "claim": "Functional Lens v1 (native res)",
              "note": "NATIVE n=100: min-sector AUC 0.953 (48sq was 0.897), het AUC 0.940, strain-EF r=0.858, MINF-vs-DCM het 0.870",
              "source": null,
              "ts": "2026-06-04T01:54:05Z"
            }
          ]
        },
        {
          "id": "manifold",
          "name": "Delta_M Manifold",
          "short": "MANIFOLD",
          "status": "info",
          "target": null,
          "best_value": null,
          "history": [
            {
              "metric": "biology AUC (self-sup FNO-4D)",
              "value": 0.6315,
              "claim": "Claim 0 (honest self-sup)",
              "note": "InfoNCE latents, probe acc=0.293, AUC=0.632 vs BioMedCLIP 0.201",
              "source": null,
              "ts": "2026-06-03T02:54:36Z"
            },
            {
              "metric": "biology AUC (self-sup wno4d)",
              "value": 0.6234,
              "claim": "Claim 0 (wno4d self-sup)",
              "note": "InfoNCE, acc=0.333, AUC=0.623; FNO baseline AUC 0.632, BioMedCLIP 0.201",
              "source": null,
              "ts": "2026-06-03T02:59:38Z"
            },
            {
              "metric": "biology AUC (self-sup wno4d)",
              "value": 0.6442,
              "claim": "Claim 0 (wno4d self-sup)",
              "note": "InfoNCE, acc=0.360, AUC=0.644; FNO baseline AUC 0.632, BioMedCLIP 0.201",
              "source": null,
              "ts": "2026-06-03T03:01:36Z"
            },
            {
              "metric": "biology AUC (self-sup wno4d)",
              "value": 0.716,
              "claim": "Claim 0 (wno4d self-sup)",
              "note": "InfoNCE, acc=0.393, AUC=0.716; FNO baseline AUC 0.632, BioMedCLIP 0.201",
              "source": null,
              "ts": "2026-06-03T03:07:46Z"
            },
            {
              "metric": "biology AUC (self-sup wno4d)",
              "value": 0.6872,
              "claim": "Claim 0 (wno4d self-sup)",
              "note": "InfoNCE, acc=0.340, AUC=0.687; FNO baseline AUC 0.632, BioMedCLIP 0.201",
              "source": null,
              "ts": "2026-06-03T03:09:16Z"
            },
            {
              "metric": "biology AUC (self-sup wno4d)",
              "value": 0.6839,
              "claim": "Claim 0 (wno4d self-sup)",
              "note": "InfoNCE, acc=0.340, AUC=0.684; FNO baseline AUC 0.632, BioMedCLIP 0.201",
              "source": null,
              "ts": "2026-06-03T03:09:54Z"
            },
            {
              "metric": "biology AUC (self-sup wno4d)",
              "value": 0.7031,
              "claim": "Claim 0 (wno4d self-sup)",
              "note": "InfoNCE, acc=0.387, AUC=0.703; FNO baseline AUC 0.632, BioMedCLIP 0.201",
              "source": null,
              "ts": "2026-06-03T03:10:34Z"
            },
            {
              "metric": "biology AUC (self-sup wno4d)",
              "value": 0.7061,
              "claim": "Claim 0 (wno4d self-sup)",
              "note": "InfoNCE, acc=0.427, AUC=0.706; FNO baseline AUC 0.632, BioMedCLIP 0.201",
              "source": null,
              "ts": "2026-06-03T03:16:10Z"
            },
            {
              "metric": "biology AUC (self-sup wno4d)",
              "value": 0.6947,
              "claim": "Claim 0 (wno4d self-sup)",
              "note": "InfoNCE, acc=0.380, AUC=0.695; FNO baseline AUC 0.632, BioMedCLIP 0.201",
              "source": null,
              "ts": "2026-06-03T03:16:55Z"
            },
            {
              "metric": "biology AUC (self-sup wno4d)",
              "value": 0.7202,
              "claim": "Claim 0 (wno4d self-sup)",
              "note": "InfoNCE, acc=0.353, AUC=0.720; FNO baseline AUC 0.632, BioMedCLIP 0.201",
              "source": null,
              "ts": "2026-06-03T03:17:40Z"
            },
            {
              "metric": "biology AUC (physics features)",
              "value": 0.8579,
              "claim": "Stage 5 physics-feature galaxy",
              "note": "5-fold probe on 12 det(J)/strain features; acc=0.610 AUC=0.858 vs BioMedCLIP 0.201/0.50, Laplace-WNO 0.365/0.698. Scanner-invariant features.",
              "source": null,
              "ts": "2026-06-03T22:17:16Z"
            },
            {
              "metric": "biology AUC (physics features)",
              "value": 0.8845,
              "claim": "Stage 5 physics-feature galaxy",
              "note": "5-fold probe on 12 det(J)/strain features; acc=0.640 AUC=0.885 vs BioMedCLIP 0.201/0.50, Laplace-WNO 0.365/0.698. Scanner-invariant features.",
              "source": null,
              "ts": "2026-06-04T01:54:24Z"
            }
          ]
        },
        {
          "id": "nca",
          "name": "Forecast (NCA)",
          "short": "FORECAST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "siren",
          "name": "Recon/super-res [dead]",
          "short": "RECON\u2717",
          "status": "marginal",
          "target": {
            "metric": "Gate-1 PSNR vs trilinear (dB)",
            "good": 2.0,
            "kill": -1.0,
            "baseline": 0.0,
            "cite": "Sitzmann SIREN 2020",
            "higher_better": true,
            "unit": ""
          },
          "best_value": -0.3822,
          "history": [
            {
              "metric": "PSNR vs trilinear (dB)",
              "value": -3.208,
              "claim": "Claim 0",
              "note": "per-patient SIREN, 150/150 fail",
              "source": "superres_results.json",
              "ts": null
            },
            {
              "metric": "PSNR vs trilinear (dB)",
              "value": -1.646,
              "claim": "Claim 3",
              "note": "FNO z-slice population prior",
              "source": "fno_superres_results.json",
              "ts": null
            },
            {
              "metric": "PSNR vs trilinear (dB)",
              "value": -4.665,
              "claim": "temporal",
              "note": "FNO temporal stride=3",
              "source": "fno_temporal_results.json",
              "ts": null
            },
            {
              "metric": "PSNR vs trilinear (dB)",
              "value": -0.5503,
              "claim": "HyperSIREN recon (FiLM population prior)",
              "note": "4x super-res; HyperSIREN 14.9 vs trilinear 15.5 dB",
              "source": null,
              "ts": "2026-06-03T05:29:09Z"
            },
            {
              "metric": "PSNR vs trilinear (dB)",
              "value": -0.3822,
              "claim": "HyperSIREN recon (FiLM population prior)",
              "note": "4x super-res; HyperSIREN 15.5 vs trilinear 15.9 dB",
              "source": null,
              "ts": "2026-06-03T05:33:42Z"
            },
            {
              "metric": "Gate-0 PSNR (seen slices, dB)",
              "value": 32.6,
              "claim": "Gate 0",
              "note": "memorization OK; absolute, not vs-trilinear",
              "source": "summary.json",
              "ts": null
            }
          ]
        },
        {
          "id": "pinn",
          "name": "PINN (folded into REG)",
          "short": "PINN",
          "status": "todo",
          "target": {
            "metric": "PSNR delta vs no-physics (dB)",
            "good": 1.0,
            "kill": 0.0,
            "baseline": 0.0,
            "cite": "Raissi, JCP 2019",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        }
      ]
    },
    {
      "id": "oasis2",
      "name": "OASIS-2",
      "n": 373,
      "modality": "longitudinal T1w MRI",
      "route": "FNO3d -> z -> FiLM-SIREN -> NCA z(t)->z(t+1yr)",
      "stages": [
        {
          "id": "ingest",
          "name": "Ingestion",
          "short": "INGEST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "fno",
          "name": "Encoder (Laplace/Conv3D)",
          "short": "ENCODE",
          "status": "todo",
          "target": {
            "metric": "z PC1 vs CDR (r)",
            "good": 0.55,
            "kill": 0.3,
            "baseline": 0.92,
            "cite": "Marcus, OASIS 2007",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        },
        {
          "id": "register",
          "name": "Registration phi (ED\u2192ES)",
          "short": "REG \u03c6",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "clinical",
          "name": "Function det(J)/strain",
          "short": "FUNCTION",
          "status": "info",
          "target": null,
          "best_value": null,
          "history": [
            {
              "metric": "brain atrophy det(J) vs nWBV (r)",
              "value": 0.1049,
              "claim": "Stage 6 cross-organ det(J)",
              "note": "longitudinal det(J) atrophy; r vs nWBV=0.105, dementia AUC=0.501; same operator as cardiac EF",
              "source": null,
              "ts": "2026-06-04T12:17:17Z"
            }
          ]
        },
        {
          "id": "manifold",
          "name": "Delta_M Manifold",
          "short": "MANIFOLD",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "nca",
          "name": "Forecast (NCA)",
          "short": "FORECAST",
          "status": "todo",
          "target": {
            "metric": "brain-vol t+1yr (r)",
            "good": 0.7,
            "kill": 0.4,
            "baseline": 0.92,
            "cite": "Wang, Nat Methods 2019",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        },
        {
          "id": "siren",
          "name": "Recon/super-res [dead]",
          "short": "RECON\u2717",
          "status": "todo",
          "target": {
            "metric": "Gate-1 PSNR vs trilinear (dB)",
            "good": 2.0,
            "kill": -1.0,
            "baseline": 0.0,
            "cite": "Sitzmann SIREN 2020",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        },
        {
          "id": "pinn",
          "name": "PINN (folded into REG)",
          "short": "PINN",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        }
      ]
    },
    {
      "id": "lidc",
      "name": "LIDC-IDRI",
      "n": 1010,
      "modality": "lung nodule CT 3D",
      "route": "per-nodule SIREN + Eikonal -> SDF",
      "stages": [
        {
          "id": "ingest",
          "name": "Ingestion",
          "short": "INGEST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "fno",
          "name": "Encoder (Laplace/Conv3D)",
          "short": "ENCODE",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "register",
          "name": "Registration phi (ED\u2192ES)",
          "short": "REG \u03c6",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "clinical",
          "name": "Function det(J)/strain",
          "short": "FUNCTION",
          "status": "todo",
          "target": {
            "metric": "malignancy AUC",
            "good": 0.78,
            "kill": 0.65,
            "baseline": 0.93,
            "cite": "Armato, Med Phys 2011",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        },
        {
          "id": "manifold",
          "name": "Delta_M Manifold",
          "short": "MANIFOLD",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "nca",
          "name": "Forecast (NCA)",
          "short": "FORECAST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "siren",
          "name": "Recon/super-res [dead]",
          "short": "RECON\u2717",
          "status": "todo",
          "target": {
            "metric": "nodule Dice",
            "good": 0.85,
            "kill": 0.65,
            "baseline": 0.93,
            "cite": "Armato, Med Phys 2011",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        },
        {
          "id": "pinn",
          "name": "PINN (folded into REG)",
          "short": "PINN",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        }
      ]
    },
    {
      "id": "brats",
      "name": "BraTS-MEN-RT",
      "n": 500,
      "modality": "multimodal MRI 3D",
      "route": "FNO3d -> z + SIREN+Eikonal GTV + PINN Fisher-KPP",
      "stages": [
        {
          "id": "ingest",
          "name": "Ingestion",
          "short": "INGEST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "fno",
          "name": "Encoder (Laplace/Conv3D)",
          "short": "ENCODE",
          "status": "todo",
          "target": {
            "metric": "tumor volume r",
            "good": 0.8,
            "kill": 0.5,
            "baseline": 0.97,
            "cite": "Menze, IEEE TMI 2015",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        },
        {
          "id": "register",
          "name": "Registration phi (ED\u2192ES)",
          "short": "REG \u03c6",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "clinical",
          "name": "Function det(J)/strain",
          "short": "FUNCTION",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "manifold",
          "name": "Delta_M Manifold",
          "short": "MANIFOLD",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "nca",
          "name": "Forecast (NCA)",
          "short": "FORECAST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "siren",
          "name": "Recon/super-res [dead]",
          "short": "RECON\u2717",
          "status": "todo",
          "target": {
            "metric": "GTV Dice",
            "good": 0.82,
            "kill": 0.6,
            "baseline": 0.9,
            "cite": "nnU-Net, Nat Methods 2021",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        },
        {
          "id": "pinn",
          "name": "PINN (folded into REG)",
          "short": "PINN",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        }
      ]
    },
    {
      "id": "osic",
      "name": "OSIC",
      "n": 176,
      "modality": "lung fibrosis CT 3D",
      "route": "FNO3d (transfer) -> z -> FVC regression",
      "stages": [
        {
          "id": "ingest",
          "name": "Ingestion",
          "short": "INGEST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "fno",
          "name": "Encoder (Laplace/Conv3D)",
          "short": "ENCODE",
          "status": "todo",
          "target": {
            "metric": "z -> FVC r",
            "good": 0.72,
            "kill": 0.55,
            "baseline": 0.82,
            "cite": "OSIC Kaggle 2020",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        },
        {
          "id": "register",
          "name": "Registration phi (ED\u2192ES)",
          "short": "REG \u03c6",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "clinical",
          "name": "Function det(J)/strain",
          "short": "FUNCTION",
          "status": "todo",
          "target": {
            "metric": "fibrosis score r vs FVC decline",
            "good": 0.65,
            "kill": 0.5,
            "baseline": 0.82,
            "cite": "OSIC Kaggle 2020",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        },
        {
          "id": "manifold",
          "name": "Delta_M Manifold",
          "short": "MANIFOLD",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "nca",
          "name": "Forecast (NCA)",
          "short": "FORECAST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "siren",
          "name": "Recon/super-res [dead]",
          "short": "RECON\u2717",
          "status": "info",
          "target": null,
          "best_value": null,
          "history": [
            {
              "metric": "PSNR vs trilinear (dB)",
              "value": -0.889,
              "claim": "OSIC SR",
              "note": "64->224 lung CT, 3x",
              "source": "fno_osic_superres.json",
              "ts": null
            }
          ]
        },
        {
          "id": "pinn",
          "name": "PINN (folded into REG)",
          "short": "PINN",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        }
      ]
    },
    {
      "id": "aptos",
      "name": "APTOS-2019",
      "n": 3662,
      "modality": "fundus 2D",
      "route": "SIREN + Eikonal: 2D -> 3D surface",
      "stages": [
        {
          "id": "ingest",
          "name": "Ingestion",
          "short": "INGEST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "fno",
          "name": "Encoder (Laplace/Conv3D)",
          "short": "ENCODE",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "register",
          "name": "Registration phi (ED\u2192ES)",
          "short": "REG \u03c6",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "clinical",
          "name": "Function det(J)/strain",
          "short": "FUNCTION",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "manifold",
          "name": "Delta_M Manifold",
          "short": "MANIFOLD",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "nca",
          "name": "Forecast (NCA)",
          "short": "FORECAST",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        },
        {
          "id": "siren",
          "name": "Recon/super-res [dead]",
          "short": "RECON\u2717",
          "status": "todo",
          "target": {
            "metric": "DR grade kappa",
            "good": 0.85,
            "kill": 0.7,
            "baseline": 0.92,
            "cite": "APTOS Kaggle 2019",
            "higher_better": true,
            "unit": ""
          },
          "best_value": null,
          "history": []
        },
        {
          "id": "pinn",
          "name": "PINN (folded into REG)",
          "short": "PINN",
          "status": "todo",
          "target": null,
          "best_value": null,
          "history": []
        }
      ]
    }
  ],
  "manifold": [
    {
      "key": "biology_auc",
      "metric": "manifold biology AUC",
      "status": "fail",
      "value": 0.201,
      "target": {
        "metric": "manifold biology AUC",
        "good": 0.7,
        "kill": 0.5,
        "baseline": 0.85,
        "cite": "Voxara Delta_M",
        "higher_better": true,
        "unit": ""
      },
      "history": [
        {
          "metric": "biology AUC",
          "value": 0.201,
          "claim": "BioMedCLIP",
          "note": "5-class ACDC, chance=0.20 -> scanner map not disease map",
          "source": "CLAUDE.md"
        }
      ]
    },
    {
      "key": "dataset_auc",
      "metric": "manifold dataset/scanner AUC",
      "status": "fail",
      "value": 0.984,
      "target": {
        "metric": "manifold dataset/scanner AUC",
        "good": 0.6,
        "kill": 0.9,
        "baseline": 0.55,
        "cite": "Voxara Delta_M",
        "higher_better": false,
        "unit": ""
      },
      "history": [
        {
          "metric": "dataset/scanner AUC",
          "value": 0.984,
          "claim": "BioMedCLIP",
          "note": "manifold separates scanners near-perfectly",
          "source": "CLAUDE.md"
        }
      ]
    }
  ],
  "legend": {
    "pass": "meets/exceeds target",
    "marginal": "between kill and target",
    "fail": "at/below kill condition",
    "todo": "not run yet",
    "info": "logged, no target"
  }
};
