pipeline{
    agent any

    environment{
        DOCKER_IMAGE = 'anantlaghane/react-portfolio'
        DOCKER_HUB_CREDS= credentials('docker')
    }

    stages {
        stage('clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/anantlaghane/My_Portfolio.git'
            }
        }

        stage('setup Docker Buildx') {
            steps {
                sh 'chmod +x scripts/setup_buildx.sh'
                sh './scripts/setup_buildx.sh'            
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $Docker_IMAGE . "
            }
        }

        stage('Login to DockerHub'){
            steps{
                sh "echo $DOCKER_HUB_CREDS_PSW | docker login -u $DOCKER_HUB_CREDS_USR --password-stdin"
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh "docker push $DOCKER_IMAGE "

            }
        }

    }
}