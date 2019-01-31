pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'echo "Fail!"'
            }
        }
    }
    post {
        always {
            echo 'This will always run'
        }
    }
}