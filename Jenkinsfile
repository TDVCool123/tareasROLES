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
                sh 'cd calculator && npm run build'
            }
        }


       stage('Deploy') {
            steps {
                script {

                    // Implementar en Vercel usando el comando 'vercel' (asegúrate de tener 'vercel-cli' instalado)
                    sh 'npx vercel --prod --token $VERCEL --yes'
                }
            }
        }*/
    }
}
