pipeline {
    agent any
    tools {
        nodejs 'pepitoNode'
    }
    stages {
        stage('Dependencies') {
            steps {
                sh 'cd backend && npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'cd backend && npm start'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
