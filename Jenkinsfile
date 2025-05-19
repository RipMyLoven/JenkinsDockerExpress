pipeline {
    agent any

    stages {
        stage('Build Docker image') {
            steps {
                script {
                    dockerImage = docker.build("movie-express-app:latest")
                }
            }
        }
        stage('Run container') {
            steps {
                script {
                    dockerContainer = docker.run("movie-express-app:latest", "-d -p 3000:3000")
                }
            }
        }
        stage('Test /travel endpoint') {
            steps {
                script {
                    sleep 5 
                    sh 'curl --fail http://localhost:3000/travel | grep "Minu lemmik reisisihtkoht on Jaapan."'
                }
            }
        }
    }
    post {
        always {
            script {
                sh "docker ps -q --filter ancestor=movie-express-app:latest | xargs -r docker stop"
            }
        }
    }
}