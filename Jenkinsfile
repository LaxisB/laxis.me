pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''docker build . -t laxisme:$(git status | grep -i 'on branch'| cut -d ' ' -f3)
'''
      }
    }
  }
}
