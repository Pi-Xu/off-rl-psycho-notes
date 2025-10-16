# RL for Psychometrics

A compact project that fuses reinforcement learning with psychometrics to infer interpretable individual ability from interaction trajectories.

---

## Summary

We model human decision making as an MDP with a shared value function \(Q_\theta(s, a)\) and a per-participant inverse temperature \(\beta_j > 0\). Parameters are estimated jointly via a generalized EM procedure that balances behavioral likelihood and value-consistency regularization.

---

## What’s in this project

- **Methodology** — task formulation, probabilistic policy, generalized EM, and regularization (λ_bell, λ_cql, β priors).
- **Experiments** — Peg Solitaire (4×4, 7×7), β recovery, convergence diagnostics, and Q-function evaluation.

---

## Project goals

1. **Interpretability** — connect RL dynamics to psychological constructs via \(\beta_j\).
2. **Identifiability** — separate \(\beta\) and \(Q\) under joint estimation.
3. **Generalization** — learn \(Q\) that transfers across participants and tasks.

---

## Repository

[Github Repository](https://github.com/Pi-Xu/offline-rl-psycho)

---

**Maintainer:** [Wenqian Xu](https://github.com/Pi-Xu)
