pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('Test') {
            steps {
                sh 'echo "Nice Test!"'
            }
        }
    }
    post {
        always {
            echo 'Build has finished!'
        }
    }
}