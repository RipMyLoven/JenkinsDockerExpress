pipeline {
    agent any

    stages {
        stage('Build Docker image') {
            steps {
                sh 'docker build -t movie-express-app:latest .'
            }
        }
        stage('Run tests in Docker') {
            steps {
                sh 'docker run --rm movie-express-app:latest npm test'
            }
        }
        stage('Run container') {
            steps {
                sh 'docker run -d --name movie-express-app-test -p 3000:3000 movie-express-app:latest'
            }
        }
        stage('Test /travel endpoint') {
            steps {
                sleep 5
                sh 'curl --fail http://localhost:3000/travel | grep "Minu lemmik reisisihtkoht on Jaapan."'
            }
        }
    }
    post {
        always {
            sh 'docker rm -f movie-express-app-test || true'
        }
    }
}