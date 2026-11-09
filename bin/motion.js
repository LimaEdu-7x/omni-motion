#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

let prompts;
try {
  prompts = require('prompts');
} catch (e) {
  // Fallback if prompts not installed yet
}

const SKILL_SOURCE = path.resolve(__dirname, '..', 'SKILL.md');

function getHomeDir() {
  return os.homedir();
}

const TARGET_OPTIONS = [
  { title: '🪐 Antigravity / Gemini CLI', value: 'antigravity', selected: true, description: '~/.gemini/config/skills/omni-motion' },
  { title: '🟣 Claude Code', value: 'claude', description: '~/.claude/skills/omni-motion' },
  { title: '⚡ Cursor IDE', value: 'cursor', description: '.cursor/rules/omni-motion.mdc' },
  { title: '🌊 Windsurf', value: 'windsurf', description: '.windsurfrules' },
  { title: '📁 Projeto Local', value: 'local', description: './SKILL.md' }
];

function printBanner() {
  console.log(`
🎬 OmniMotion 🧠⚡ — Universal Motion Graphics & RMA Video Engine
Projeto Brasileiro Open-Source para Antigravity, Claude Code, Cursor e Windsurf.
Autor: LimaEdu-7x
`);
}

function printHelp() {
  printBanner();
  console.log(`Usage:
  npx omni-motion install           Interactive multi-selection menu for AI assistants
  npx omni-motion install <targets> Direct install (e.g. npx omni-motion install antigravity claude)
  npx omni-motion doctor            Audit system tools (Node, FFmpeg, Whisper, HyperFrames)
  npx omni-motion init              Scaffold a local motion studio folder (~/estudio-motion)
  npx omni-motion print             Print the raw SKILL.md to stdout
  npx omni-motion info              Show commands and ecosystem architecture

Available Targets:
  antigravity  Installs to ~/.gemini/config/skills/omni-motion/SKILL.md
  claude       Installs to ~/.claude/skills/omni-motion/SKILL.md
  cursor       Creates .cursor/rules/omni-motion.mdc in current directory
  windsurf     Appends rule to .windsurfrules in current directory
  local        Copies SKILL.md into current directory
  all          Installs into all supported environments
`);
}

function installToTarget(target) {
  if (!fs.existsSync(SKILL_SOURCE)) {
    console.error('Error: SKILL.md source file not found.');
    process.exit(1);
  }

  const skillContent = fs.readFileSync(SKILL_SOURCE, 'utf8');
  let destDir = '';
  let destFile = '';

  const normalized = target.toLowerCase();

  switch (normalized) {
    case 'antigravity':
    case 'gemini':
      destDir = path.join(getHomeDir(), '.gemini', 'config', 'skills', 'omni-motion');
      destFile = path.join(destDir, 'SKILL.md');
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Antigravity] Instalado em: ${destFile}`);
      break;

    case 'claude':
      destDir = path.join(getHomeDir(), '.claude', 'skills', 'omni-motion');
      destFile = path.join(destDir, 'SKILL.md');
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Claude Code] Instalado em: ${destFile}`);
      break;

    case 'cursor':
      destDir = path.join(process.cwd(), '.cursor', 'rules');
      destFile = path.join(destDir, 'omni-motion.mdc');
      fs.mkdirSync(destDir, { recursive: true });
      const mdcHeader = `---
description: OmniMotion RMA Video and Motion Graphics Engine
globs: *.html, *.css, *.js, *.ts, *.tsx, *.json
---

`;
      fs.writeFileSync(destFile, mdcHeader + skillContent, 'utf8');
      console.log(`  ✓ [Cursor] Regra criada em: ${destFile}`);
      break;

    case 'windsurf':
      destFile = path.join(process.cwd(), '.windsurfrules');
      const windsurfContent = `\n\n# OmniMotion RMA Video Engine\n${skillContent}\n`;
      fs.appendFileSync(destFile, windsurfContent, 'utf8');
      console.log(`  ✓ [Windsurf] Regra adicionada em: ${destFile}`);
      break;

    case 'local':
      destFile = path.join(process.cwd(), 'SKILL.md');
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Local] SKILL.md copiado para: ${destFile}`);
      break;

    default:
      console.warn(`  ⚠️ Alvo desconhecido: ${target}`);
  }
}

function runDoctor() {
  printBanner();
  console.log('🩺 Verificando ferramentas do Motor RMA no sistema...\n');

  function checkCommand(cmd, name) {
    try {
      const out = execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
      console.log(`  ✓ ${name}: instalado (${out.split('\n')[0]})`);
      return true;
    } catch (e) {
      console.log(`  ✗ ${name}: NÃO ENCONTRADO`);
      return false;
    }
  }

  checkCommand('node -v', 'Node.js (requer v22+)');
  checkCommand('npm -v', 'NPM');
  checkCommand('git --version', 'Git');
  checkCommand('ffmpeg -version', 'FFmpeg');
  checkCommand('python --version', 'Python 3');
  checkCommand('npx hyperframes --version', 'HyperFrames CLI');

  console.log('\n💡 Dica: Se algo estiver faltando no Windows, rode:');
  console.log('   winget install OpenJS.NodeJS.LTS Gyan.FFmpeg Python.Python.3.12 Git.Git');
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'info';

  if (command === 'help' || command === '--help' || command === '-h') {
    printHelp();
    return;
  }

  if (command === 'doctor') {
    runDoctor();
    return;
  }

  if (command === 'print') {
    if (fs.existsSync(SKILL_SOURCE)) {
      console.log(fs.readFileSync(SKILL_SOURCE, 'utf8'));
    } else {
      console.error('SKILL.md não encontrado.');
    }
    return;
  }

  if (command === 'init') {
    const targetDir = path.join(process.cwd(), 'estudio-motion');
    fs.mkdirSync(targetDir, { recursive: true });
    const gostoPath = path.join(targetDir, 'gosto.md');
    if (!fs.existsSync(gostoPath)) {
      fs.writeFileSync(gostoPath, '# gosto.md — Memória de Gosto do Usuário\n\nNenhuma preferência cadastrada ainda. Ela será preenchida automaticamente ao final de cada peça.\n', 'utf8');
    }
    console.log(`✓ Estúdio Motion criado em: ${targetDir}`);
    console.log(`✓ Arquivo de memória criado: ${gostoPath}`);
    return;
  }

  if (command === 'install') {
    const targets = args.slice(1);
    if (targets.length > 0) {
      if (targets.includes('all')) {
        ['antigravity', 'claude', 'cursor', 'windsurf', 'local'].forEach(installToTarget);
      } else {
        targets.forEach(installToTarget);
      }
      return;
    }

    if (prompts) {
      const response = await prompts({
        type: 'multiselect',
        name: 'targets',
        message: 'Selecione para onde deseja instalar a skill OmniMotion:',
        choices: TARGET_OPTIONS,
        hint: '- Espaço para selecionar. Enter para confirmar.'
      });

      if (response.targets && response.targets.length > 0) {
        console.log('\nInstalando OmniMotion...');
        response.targets.forEach(installToTarget);
        console.log('\n✨ Instalação concluída com sucesso!');
        console.log('Agora você pode invocar /motion:wizard no seu chat de IA.\n');
      } else {
        console.log('Nenhum alvo selecionado.');
      }
    } else {
      ['antigravity', 'claude'].forEach(installToTarget);
    }
    return;
  }

  // default info
  printHelp();
}

main().catch(console.error);
