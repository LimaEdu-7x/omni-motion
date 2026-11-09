# OmniMotion 🎬⚡

> **Universal Motion Graphics & RMA Video Engine for AI Coding Agents, Modern Web & Content Creators.**  
> 🇧🇷 **Projeto Brasileiro Open-Source** inspirado no **Método RMA (Referência, Motor, Ajuste)** da Core Comunidade (Felipe Tâmbara & Max Carrau) e desenvolvido para o ecossistema de agentes de IA (**Antigravity**, **Claude Code**, **Cursor**, **Windsurf**).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Origin: Brazil](https://img.shields.io/badge/Made%20in-Brazil%20%F0%9F%87%A7%F0%9F%87%B7-green.svg)](#-projeto-brasileiro-open-source)
[![Skill: Antigravity](https://img.shields.io/badge/Skill-Antigravity-orange.svg)](#antigravity--gemini-cli)
[![Compatible: Claude Code](https://img.shields.io/badge/Compatible-Claude%20Code-purple.svg)](#claude-code)
[![Compatible: Cursor](https://img.shields.io/badge/Compatible-Cursor%20%2F%20Windsurf-teal.svg)](#cursor-ide)
[![NPM Version](https://img.shields.io/badge/NPM-v1.0.0-red.svg)](https://www.npmjs.com/package/omni-motion)
[![Zero Paywall](https://img.shields.io/badge/tools-100%25_Free_&_Local-success.svg)](#)

Substitua o After Effects, Premiere e linhas do tempo manuais por **Motion Graphics Programático via IA**. Com o **OmniMotion**, a IA não mexe em agulha de reprodução nem clica em keyframes: ela **escreve cada cena em código web (HTML/CSS/GSAP)** e renderiza diretamente em MP4 a 60 FPS na sua máquina.

---

## ⚡ Como Usar (Resumo em 30 Segundos)

Você pode usar o **OmniMotion** de três formas imediatas:

### 1. No Chat com as IAs (`/motion:wizard` ou `/motion:rma`)
Digite **/motion:wizard** no chat do seu agente (Antigravity, Claude Code, Cursor) para iniciar o **Modo Entrevista**:
```text
/motion:wizard         # Inicia a entrevista de 5 passos onde você só responde
/motion:ref [link]     # Ingestão e extração de quadros de uma referência específica
/motion:doctor         # Diagnostica se seu Motor (Node, FFmpeg, Whisper) está pronto
/motion:adjust [seg]   # Faz correções cirúrgicas em português (ex: "no 0:03, card em mola")
```

### 2. No Terminal (CLI via NPX)
Instale a skill oficial em todos os seus agentes com um comando:
```bash
npx omni-motion install   # Abre menu interativo para Antigravity, Claude Code, Cursor e Windsurf
npx omni-motion doctor    # Verifica a instalação do FFmpeg, Node 22+, Whisper e HyperFrames
npx omni-motion init      # Cria a pasta do estúdio e o arquivo de memória gosto.md
```

### 3. Em Projetos Web & Código
Incorpore o motor diretamente no seu pipeline de renderização programática com HyperFrames, GSAP e Remotion.

---

## 🇧🇷 Projeto Brasileiro Open-Source

O **OmniMotion** nasceu para quebrar a barreira da edição de vídeo tradicional.  
Edição manual em timeline é lenta, custosa e presa a softwares pesados. No **OmniMotion**, o vídeo é tratado como **código e texto**:

- **Texto se edita em português simples:** *"Sobe o card no segundo 2"*, *"tira o fade e coloca corte seco"*, *"aplica a física de mola igual à referência"*.
- **Integração Total com a Tríade Omni:**
  - ✍️ **[OmniCreator](https://github.com/LimaEdu-7x/omni-creator):** Roteiros de alta retenção (`/creator:video`), ganchos e brandkit visual.
  - 🧠 **[OmniRSM](https://github.com/LimaEdu-7x/omni-rsm):** Ingestão de links (YouTube Shorts, Reels, TikTok), extração de quadros e análise de gramática visual.
  - 🎧 **[OmniSFX](https://github.com/LimaEdu-7x/omni-sfx):** Sonoplastia procedural frame-accurate e sincronização de beat-sync.
- **Arsenal Motion Machine (`motion-machine-tools.md`):** Curadoria dos melhores repositórios open-source do mundo (HyperFrames, Genjutsu, RAEA, Remotion, OpenMontage).

---

## 🔁 O Método RMA (Referência, Motor, Ajuste)

Toda peça do OmniMotion passa pelo fluxo RMA:

```
[ R de Referência ]  ──>  [ M de Motor ]  ──>  [ A de Ajuste ]
         ▲                                            │
         └───────────── [ gosto.md ] ◄────────────────┘
                   (Cada ajuste vira regra)
```

### 01 / 🎯 R de Referência
> *"Sem referência, a IA faz o que você pediu (e fica com cara de IA genérica). Com referência, ela faz o que você realmente queria."*

- **O que a IA faz:** Baixa o vídeo de referência e extrai quadros com FFmpeg (`fps=2`). Mapeia curvas de mola, ordem de entrada, tipografia e ritmo no arquivo `referencia.md`.
- **Anti-AI Slop:** Elimina títulos em degradê brega, fades lentos e blocos abstratos fingindo ser interface.

### 02 / ⚡ M de Motor
Todas as ferramentas são **gratuitas, open-source e locais**:
- **Node.js 22+ & HyperFrames:** O estúdio invisível de gravação frame-a-frame.
- **GSAP:** Física de molas e easings ultra-suaves.
- **FFmpeg:** Extração de quadros e muxing de áudio/vídeo em `.mp4`.
- **whisper-cpp (ggml-base):** Transcrição de fala local com timestamps exatos por palavra.

### 03 / ⚖️ A de Ajuste (Auto-Crítica da IA)
- **Camada 1 (Automática):** A IA renderiza uma **Folha de Quadros** (1 quadro por segundo) e atribui notas de 1 a 10 por cena. **Qualquer cena com nota menor que 8 volta para correção autônoma de código antes de chamar você.**
- **Camada 2 (Humana):** Você faz ajustes pontuais em linguagem natural.
- **Memória de Gosto (`gosto.md`):** Todo elogio e correção é gravado para que as próximas criações fiquem cada vez mais alinhadas ao seu estilo.

---

## 🧙‍♂️ A Entrevista Guiada: `/motion:wizard`

Ao executar `/motion:wizard`, você apenas responde 5 etapas simples:

| Etapa | Pergunta | O que o Usuário faz |
| :--- | :--- | :--- |
| **01. Referências** | *"Forneça de 1 a 6 mídias de referência"* | Envia links ou MP4s e diz em 1 linha o que te chamou atenção |
| **02. Formato** | *"Qual o formato e a duração?"* | Escolhe 9:16 (Reels/TikTok/Shorts), 16:9 (YouTube) ou 1:1 |
| **03. Roteiro** | *"Qual é o texto exato ou fala?"* | Cola o roteiro, anexa áudio bruto ou pede para o OmniCreator gerar |
| **04. Estilo** | *"Qual é a vibe visual?"* | Escolhe Dark Minimalist SaaS, Apple Clean ou Brutalist |
| **05. SFX** | *"Como deve ser o áudio?"* | Escolhe sons táteis de mola, beat-sync de impacto ou silencioso |

---

## 🛠️ Arsenal de Repositórios Integrados

| Repositório | Descrição |
| :--- | :--- |
| **[HyperFrames](https://github.com/heygen-com/hyperframes)** | Renderizador web-to-video em código aberto. |
| **[AThevon/genjutsu](https://github.com/AThevon/genjutsu)** | Creative coding & design systems para animação com física. |
| **[shinyobjectz/raea](https://github.com/shinyobjectz/raea)** | Render Anything Engine (Rust + Bevy) em GPU nativa. |
| **[Remotion](https://github.com/remotion-dev/remotion)** | Framework de vídeo programático em React. |
| **[OpenMontage](https://github.com/topics/motion-graphics)** | Lower-thirds, tipografia cinética e data-viz. |

---

## 🤝 Contribuição e Licença

Desenvolvido com 💚 no Brasil por [LimaEdu-7x](https://github.com/LimaEdu-7x).  
Distribuído sob a licença [MIT](LICENSE).
