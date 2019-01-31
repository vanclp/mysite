pipeline {
    agent { docker { image 'node:6.3' } }
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