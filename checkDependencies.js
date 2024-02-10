import { execSync } from 'child_process'

function areDependenciesInstalled() {
  try {
    execSync('npm ls', { stdio: 'ignore' })
    return true
  } catch (error) {
    return false
  }
}

function installDependencies() {
  console.log('Instalando dependencias...')
  execSync('npm install', { stdio: 'inherit' })
}

if (!areDependenciesInstalled()) {
  installDependencies()
}

// Ahora ejecutamos `npm run dev` después de que `npm install` haya terminado
console.log('Ejecutando la tarea "dev" después de instalar las dependencias...')
execSync('npm run dev', { stdio: 'inherit' })
