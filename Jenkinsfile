pipeline {
    agent any
    tools {
        nodejs 'pepitoNode'
    }
    environment {
    VERCEL = credentials('vercel')
  }
    stages {
        stage('Dependencies') {
            steps {
                sh 'cd calculator && npm install'
            }
        }
    
        stage('Testing') {
            steps {
                sh 'cd calculator && npm test'
            }
        }

         stage('e2e') {
            steps {
                sh 'cd calculator && npm run e2e '
            }
        }

        stage('Build') {
            steps {
                echo 'building...'
            }
        }


       /* stage('Build and Deploy') {
            steps {
                script {
                    // Instalar dependencias y construir tu aplicación Vite
                    sh 'cd fronted/Calculator && npm install'
                    sh 'cd fronted/Calculator && npm run build'

                    // Implementar en Vercel usando el comando 'vercel' (asegúrate de tener 'vercel-cli' instalado)
                    sh 'cd fronted/Calculator && npx vercel --prod --token $VERCEL --yes'
                }
            }
        }*/
    }
}
